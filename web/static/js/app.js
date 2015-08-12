import {Socket} from "deps/phoenix/web/static/js/phoenix"
import "deps/phoenix_html/web/static/js/phoenix_html"

class App {

  static init() {
    let chatInput         = $("#chat-input")
	let messagesContainer = $("#messages")
	let chatUser		  = $("#chat-user")

	let socket = new Socket("/socket")
	socket.connect()

	let guardianToken = $('meta[name="guardian_token"]').attr('content');
	let chan = socket.channel("rooms:lobby", {guardian_token: guardianToken})

	let curTime = new Date().format("d/m/y h:i:s")

	chatInput.on("keypress", event => {
	  if(event.keyCode === 13){
	    chan.push("new_msg", {body: chatInput.val(), user_id: chatUser.val() })
	    chatInput.val("")
	  }
	})

	var appendMessage = function(x) {

  		var str = messagesContainer.html();

  		var lines = str.split("\n")

  		if (lines.length > 500) {
  			lines.shift()
  		}

  		lines.push(x);

	  	messagesContainer.html(lines.join("\n"))

	  	var height = messagesContainer[0].scrollHeight;

  		messagesContainer.scrollTop(height);

	}

	chan.on("self_msg", payload => {
	  appendMessage(`[${curTime}] You say: ${payload.body}`)
	})

	chan.on("new_msg", payload => {
		appendMessage(`[${curTime}] ${payload.username} says: ${payload.body}`)
	});

	chan.on("new_action", payload => {
		appendMessage(`[${curTime}] ${payload.action}`)
	})

	chan.on("sys_msg", payload => {
		appendMessage(`${payload.body}`);
	})

	chan.join().receive("ok", chan => {
		appendMessage(`Welcome to emotext! Type '/?' for a list of commands.`)
	})
  }
}

$( () => App.init() )

export default App