import {Socket} from "phoenix"

// The page supplies the DOM; this module owns only the lobby interaction.
// Never interpret channel-provided content as HTML.
export class ChatApp {
  static init() {
    const input = document.getElementById("chat-input")
    const messages = document.getElementById("messages")
    const users = document.querySelector("#chat-users ul")
    const room = document.getElementById("chat-room")
    const token = document.querySelector('meta[name="guardian_token"]')?.content

    if (!input || !messages || !users || !token) return

    const socket = new Socket("/socket", {params: {guardian_token: token}})
    socket.connect()
    const channel = socket.channel("rooms:lobby")
    const buffer = []

    const appendMessage = (text) => {
      if (buffer.length >= 500) buffer.shift()
      buffer.push(text)
      messages.textContent = buffer.join("\n")
      messages.scrollTop = messages.scrollHeight
    }

    const sendInput = () => {
      const body = input.value.trim()
      if (!body) return
      channel.push("msg:input", {body})
      input.value = ""
    }

    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault()
        sendInput()
      }
    })
    document.getElementById("enter-addon")?.addEventListener("click", sendInput)

    document.body.addEventListener("click", (event) => {
      const target = event.target instanceof Element ? event.target : null
      const action = target?.closest("[data-input-action]")
      const participant = target?.closest("[data-input-user]")

      if (action) {
        input.value = "/" + action.textContent.trim() + " "
        input.focus()
      } else if (participant) {
        input.value = [input.value.trim(), participant.textContent.trim()]
          .filter(Boolean).join(" ")
        input.focus()
      }
    })

    const chatUsers = document.getElementById("chat-users")
    const chatMenu = document.getElementById("chat-menu")
    const output = document.querySelector("#chat-window .output")

    const adjustOutput = () => {
      if (output) {
        output.style.marginRight = window.innerWidth >= 990 &&
          chatUsers?.classList.contains("open") ? "195px" : "auto"
      }
    }
    window.addEventListener("resize", adjustOutput)

    document.querySelectorAll(".users-collapser").forEach((element) => {
      element.addEventListener("click", () => {
        const open = chatUsers?.classList.toggle("open")
        chatUsers?.classList.toggle("hidden", !open)
        chatMenu?.classList.toggle("hidden", !!open)
        chatMenu?.classList.toggle("open", !open)
        adjustOutput()
      })
    })

    channel.on("msg:self", ({body}) => appendMessage("You say: " + body))
    channel.on("msg:new", ({screen_name, body}) =>
      appendMessage(screen_name + " says: " + body))
    channel.on("msg:action", ({action}) => appendMessage(action))
    channel.on("msg:sys", ({body}) => appendMessage(body))

    channel.on("info:user", ({screen_name}) => {
      const name = String(screen_name ?? "")
      if (!name) return
      if (Array.from(users.children).some((el) => el.textContent.trim() === name)) return
      const li = document.createElement("li")
      li.dataset.inputUser = name
      li.textContent = name
      users.appendChild(li)
    })

    channel.on("info:room", ({room: name}) => {
      if (room) room.textContent = name
    })

    channel.join().receive("ok", () => {
      appendMessage("Welcome to emotext! Visit /help for commands.")
      channel.push("info:ping", {})
    })
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => ChatApp.init(), {once: true})
} else {
  ChatApp.init()
}
