import {Socket} from "deps/phoenix/web/static/js/phoenix"
import "deps/phoenix_html/web/static/js/phoenix_html"

class App {

  static init() {
    let chatInput       = $("#chat-input")
	let messages 		= $("#messages")
	let chatUsers		= $("#chat-users")
	let chatActions		= $("#chat-actions")

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
		var data = chatInput.val().trim()
		if (data.length) {
			chan.push("msg:input", { body: data })
			chatInput.val("")
		}
	})

	$('#chat-window').resizable({
		handles: {
			"se": '#segrip'
		}
	});

	$('body').on('click', "div[data-input-action]", function() {
		chatInput.val("/" + $(this).text() + " ")
	})

	$('body').on('click', "li[data-input-user]", function() {
		var data = chatInput.val()
		if (data) {
			chatInput.val(data + " " + $(this).text())
		} else {
			chatInput.val($(this).text())
		} 
	})

	var collapser = function(a, b, c) {
		a.click(function(){
			a.text() == "⇥" ? a.text("⇤") : a.text("⇥")
		    if(b.hasClass('open'))	
		    {
		    	b.parent().switchClass('col-md-2', 'col-md-1', 300)
		        a.addClass(b == chatUsers ? "blue-well" : "orange-well", 300)
		        b.switchClass('open', 'hidden', 300)
		        if (c.hasClass('open')) {
		        	messages.parent().switchClass('col-md-8', 'col-md-9', 300)
		    	} else {
		    		messages.parent().switchClass('col-md-9', 'col-md-10', 300)
		    	}
		    }
		    else
		    {
		        if (c.hasClass('open')) {
		        	messages.parent().switchClass('col-md-9', 'col-md-8', 300)
		   		} else {
		   			messages.parent().switchClass('col-md-10', 'col-md-9', 300)
		   		}

		        b.switchClass('hidden', 'open', 300)
		        b.parent().switchClass('col-md-1', 'col-md-2', 300)
		    	a.removeClass(b == chatUsers ? "blue-well" : "orange-well", 300)
		    }
		})
	}
	
	collapser($('#action-collapser'), chatActions, chatUsers)

	collapser($('#users-collapser'), chatUsers, chatActions)

	var appendMessage = function(x) {

  		var str = messages.html();

  		var lines = str.split("\n")

  		if (lines.length > 500) {
  			lines.shift()
  		}

  		lines.push(x);

	  	messages.html(lines.join("\n"))

	  	var height = messages[0].scrollHeight;

  		messages.scrollTop(height);

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
		$('#chat-room').html(payload.room)
	})

	chan.join().receive("ok", channel => {
		appendMessage(`Welcome to <a href="/help">emotext</a>!`)
		chan.push("info:ping" )
	})
  }
}

$( () => App.init() )

export default App