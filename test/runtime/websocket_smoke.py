#!/usr/bin/env python3
"""Dependency-free Phoenix v2 WebSocket smoke against a disposable OCI runtime.

WS_TOKEN is an ephemeral Guardian token created in the same disposable database.
No production identity or credentials are used.
"""
import base64
import hashlib
import json
import os
import secrets
import socket
import struct
import time
from urllib.parse import quote

HOST = "127.0.0.1"
PORT = 14000
TOKEN = os.environ["WS_TOKEN"]
PATH = "/socket/websocket"
MAGIC = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11"


class HandshakeRejected(Exception):
    pass


class WebSocket:
    def __init__(self, token):
        self.conn = socket.create_connection((HOST, PORT), timeout=5)
        self.conn.settimeout(8)
        key = base64.b64encode(secrets.token_bytes(16)).decode()
        request = (
            f"GET {PATH}?guardian_token={quote(token, safe='')}&vsn=2.0.0 HTTP/1.1\r\n"
            f"Host: localhost:{PORT}\r\n"
            "Upgrade: websocket\r\n"
            "Connection: Upgrade\r\n"
            f"Sec-WebSocket-Key: {key}\r\n"
            "Sec-WebSocket-Version: 13\r\n\r\n"
        )
        self.conn.sendall(request.encode("ascii"))
        header = bytearray()
        while b"\r\n\r\n" not in header:
            part = self.conn.recv(1)
            if not part:
                raise HandshakeRejected("connection closed before upgrade")
            header.extend(part)
            if len(header) > 16_384:
                raise HandshakeRejected("overlong WebSocket response header")
        head = header.decode("iso-8859-1")
        if not head.startswith("HTTP/1.1 101 "):
            raise HandshakeRejected("WebSocket upgrade rejected")
        headers = {}
        for line in head.split("\r\n")[1:]:
            if ":" in line:
                name, value = line.split(":", 1)
                headers[name.lower()] = value.strip()
        expected = base64.b64encode(hashlib.sha1((key + MAGIC).encode()).digest()).decode()
        if headers.get("sec-websocket-accept") != expected:
            raise AssertionError("invalid WebSocket accept challenge")

    def read_exact(self, size):
        data = bytearray()
        while len(data) < size:
            chunk = self.conn.recv(size - len(data))
            if not chunk:
                raise ConnectionError("WebSocket closed")
            data.extend(chunk)
        return bytes(data)

    def send_frame(self, code, payload):
        if len(payload) > 65535:
            raise ValueError("smoke frames are intentionally bounded")
        mask = secrets.token_bytes(4)
        size = len(payload)
        header = bytes([0x80 | code, 0x80 | (size if size < 126 else 126)])
        if size >= 126:
            header += struct.pack("!H", size)
        masked = bytes(byte ^ mask[i % 4] for i, byte in enumerate(payload))
        self.conn.sendall(header + mask + masked)

    def send(self, join_ref, ref, topic, event, payload):
        wire = json.dumps([join_ref, ref, topic, event, payload]).encode("utf-8")
        self.send_frame(0x1, wire)

    def receive(self):
        while True:
            first, second = self.read_exact(2)
            length = second & 0x7F
            if length == 126:
                length = struct.unpack("!H", self.read_exact(2))[0]
            elif length == 127:
                raise AssertionError("unexpected oversized server frame")
            if length > 65535:
                raise AssertionError("unexpected oversized payload")
            mask = self.read_exact(4) if second & 0x80 else None
            data = self.read_exact(length)
            if mask:
                data = bytes(byte ^ mask[i % 4] for i, byte in enumerate(data))
            opcode = first & 0x0F
            if opcode == 0x9:
                self.send_frame(0xA, data)
                continue
            if opcode == 0x8:
                raise ConnectionError("server closed WebSocket")
            if opcode != 0x1:
                raise AssertionError(f"unexpected WebSocket opcode {opcode}")
            return json.loads(data.decode("utf-8"))

    def expect(self, label, predicate):
        until = time.monotonic() + 12
        while time.monotonic() < until:
            message = self.receive()
            if not isinstance(message, list) or len(message) != 5:
                raise AssertionError("invalid Phoenix v2 message shape")
            if predicate(message):
                return message
        raise AssertionError(f"timed out waiting for {label}")

    def close(self):
        try:
            self.send_frame(0x8, b"")
        except (OSError, ValueError):
            pass
        self.conn.close()


def main():
    first = WebSocket(TOKEN)
    try:
        first.send("1", "1", "rooms:lobby", "phx_join", {})
        first.expect("lobby join", lambda m: m[1] == "1" and
                     m[3] == "phx_reply" and m[4].get("status") == "ok")

        first.send("1", "2", "rooms:lobby", "msg:input",
                   {"body": "runtime-ws-persistence-proof"})
        first.expect("message echo", lambda m: m[3] == "msg:self" and
                     m[4].get("body") == "runtime-ws-persistence-proof")

        first.send("3", "3", "rooms:private", "phx_join", {})
        first.expect("private room denied", lambda m: m[1] == "3" and
                     m[3] == "phx_reply" and m[4].get("status") == "error" and
                     m[4].get("response", {}).get("reason") == "unauthorized")
    finally:
        first.close()

    second = WebSocket(TOKEN)
    try:
        second.send("4", "4", "rooms:lobby", "phx_join", {})
        second.expect("second lobby join", lambda m: m[1] == "4" and
                      m[3] == "phx_reply" and m[4].get("status") == "ok")
        second.send("4", "5", "rooms:lobby", "info:ping", {})
        second.expect("history replay", lambda m: m[3] == "msg:self" and
                      m[4].get("body") == "runtime-ws-persistence-proof")
    finally:
        second.close()

    try:
        bad = WebSocket("invalid-test-token")
    except (HandshakeRejected, ConnectionError, OSError):
        pass  # Invalid authentication must reject the socket upgrade.
    else:
        bad.close()
        raise AssertionError("invalid Guardian token was accepted")

    print("AUTHENTICATED_WEBSOCKET_SMOKE=PASS")


def verify_replay_after_container_restart():
    """Require the first container's message to survive a fresh BEAM process."""
    replay = WebSocket(TOKEN)
    try:
        replay.send("9", "9", "rooms:lobby", "phx_join", {})
        replay.expect("post-restart lobby join", lambda m: m[1] == "9" and
                      m[3] == "phx_reply" and m[4].get("status") == "ok")
        replay.send("9", "10", "rooms:lobby", "info:ping", {})
        replay.expect("post-restart persisted message", lambda m: m[3] == "msg:self" and
                      m[4].get("body") == "runtime-ws-persistence-proof")
    finally:
        replay.close()
    print("CONTAINER_RESTART_HISTORY_SMOKE=PASS")


if __name__ == "__main__":
    mode = os.environ.get("WS_SMOKE_MODE", "full")
    if mode == "full":
        main()
    elif mode == "restart-replay":
        verify_replay_after_container_restart()
    else:
        raise ValueError("unknown WS_SMOKE_MODE")
