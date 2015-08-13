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

 	$(document).keydown(function(event){
        if(event.keyCode == 13){  
        	var data = chatInput.val().trim()
        	if (data.length) {
		    	chan.push("msg:input", { body: data })
		    	chatInput.val("")
	    	}
        }
    })

	$("#enter-addon").click(function() {
		chan.push("msg:input", { body: chatInput.val() })
		chatInput.val("")
	})

	$("div[data-input-action]").click(function() {
		chatInput.val("/" + $(this).text() + " ")
	})

	$("li[data-input-user]").click(function() {
		var data = chatInput.val()
		chatInput.val(data + " " + $(this).text())
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
	  appendMessage(`You say: ${payload.body}`)
	})

	chan.on("msg:new", payload => {
		appendMessage(`${payload.username} says: ${payload.body}`)
	});

	chan.on("msg:action", payload => {
		appendMessage(`${payload.action}`)
	})

	chan.on("msg:sys", payload => {
		appendMessage(`${payload.body}`);
	})

	chan.on("info:user", payload => {
		if ($("#" + payload.username).length) {
			return;
		}
		chatUsers.children("ul").append($("<li id=\"" + payload.username + "\" data-input-user=\"" + payload.user + "\">" + payload.username + "</li>"))
	})

	chan.on("info:room", payload => {
		chatRoom.html(payload.room)
	})

	chan.join().receive("ok", channel => {
		appendMessage(`Welcome to <a href="/help">emotext</a>!`)
		chan.push("info:ping" )
	})
  }
}

$( () => App.init() )

export default App