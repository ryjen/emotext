export class Socket {
  constructor(path, options) {
    window.__testSocket = {path, options, connected: false}
  }
  connect() {
    window.__testSocket.connected = true
  }
  channel(topic) {
    const handlers = new Map()
    const sent = []
    const channel = {
      topic, sent,
      on(event, callback) { handlers.set(event, callback) },
      emit(event, payload) {
        const listener = handlers.get(event)
        if (!listener) throw new Error("missing channel handler: " + event)
        listener(payload)
      },
      push(event, payload) { sent.push({event, payload}) },
      join() {
        return {receive(kind, callback) {
          if (kind === "ok") callback({})
          return this
        }}
      }
    }
    window.__testChannel = channel
    return channel
  }
}
