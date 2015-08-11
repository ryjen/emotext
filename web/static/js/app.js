import {Socket} from "phoenix"

class App {

  static init() {
    let chatInput         = $("#chat-input")
	let messagesContainer = $("#messages")
	let chatUser		  = $("#chat-user")

	let socket = new Socket("/socket")
	socket.connect()

	let guardianToken = jQuery('meta[name="guardian_token"]').attr('content');
	let chan = socket.chan("rooms:lobby", {guardian_token: guardianToken})

	let curTime = new Date().format("d/m/y h:i:s")

	chatInput.on("keypress", event => {
	  if(event.keyCode === 13){
	    chan.push("new_msg", {body: chatInput.val(), user_id: chatUser.val() })
	    chatInput.val("")
	  }
	})

	chan.on("self_msg", payload => {
	  messagesContainer.append(`[${curTime}] You say: ${payload.body}\n`)
	})

	chan.on("new_msg", payload => {
		messagesContainer.append(`[${curTime}] ${payload.username} says: ${payload.body}\n`)
	});

	chan.on("new_action", payload => {
		messagesContainer.append(`[${curTime}] ${payload.action}\n`)
	})

	chan.join().receive("ok", chan => {
		messagesContainer.append(`Welcome to emotext! Type '/?' for a list of commands\n`)
	})
  }
}

$( () => App.init() )

export default App