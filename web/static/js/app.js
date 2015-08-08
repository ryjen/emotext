import {Socket} from "phoenix"

class App {

  static init() {
    let chatInput         = $("#chat-input")
	let messagesContainer = $("#messages")
	let chatUser		  = $("#chat-user")

	let socket = new Socket("/socket")
	socket.connect()
	let chan = socket.chan("rooms:lobby", {})

	chatInput.on("keypress", event => {
	  if(event.keyCode === 13){
	    chan.push("new_msg", {body: chatInput.val(), user: chatUser.val() })
	    chatInput.val("")
	  }
	})

	chan.on("new_msg", payload => {
	  var curTime = new Date().format("d/m/y h:i:s")
	  var prefix;
	  console.log(payload);
	  if (payload.user == chatUser.val()) {
	  	prefix = "You say:"
	  } else {
	  	prefix = `${payload.user} says:`
	  }
	  messagesContainer.append(`[${curTime}] ${prefix} ${payload.body}\n`)
	})

	chan.join().receive("ok", chan => {
		messagesContainer.append(`Welcome to emotext! Type '/?' for a list of commands\n`)
	})
  }
}

$( () => App.init() )

export default App