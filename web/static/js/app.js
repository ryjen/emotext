import {Socket} from "deps/phoenix/web/static/js/phoenix"
import "deps/phoenix_html/web/static/js/phoenix_html"

class App {

  static init() {
    let chatInput         = $("#chat-input")
	let messagesContainer = $("#messages")
	let chatUsers		  = $("#chat-users")
	let chatRoom		  = $("#chat-room")

	let socket = new Socket("/socket")
	socket.connect()

	let guardianToken = $('meta[name="guardian_token"]').attr('content');
	let chan = socket.channel("rooms:lobby", {guardian_token: guardianToken})

	let curTime = new Date().format("d/m/y h:i:s")

	chatInput.on("keypress", event => {
	  if(event.keyCode === 13){
	    chan.push("msg:input", { body: chatInput.val() })
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

	chan.on("msg:self", payload => {
	  appendMessage(`[${curTime}] You say: ${payload.body}`)
	})

	chan.on("msg:new", payload => {
		appendMessage(`[${curTime}] ${payload.username} says: ${payload.body}`)
	});

	chan.on("msg:action", payload => {
		appendMessage(`[${curTime}] ${payload.action}`)
	})

	chan.on("msg:sys", payload => {
		appendMessage(`${payload.body}`);
	})

	chan.on("info:user", payload => {
		if ($("#" + payload.username).length) {
			return;
		}
		chatUsers.children("ul").append($("<li id=\"" + payload.username + "\">" + payload.username + "</li>"))
		chatRoom.html(payload.room)
	})

	chan.join().receive("ok", channel => {
		appendMessage(`Welcome to emotext! Type '/?' for a list of commands.`)
		chan.push("info:ping" )
	})
  }
}

$( () => App.init() )

export default App