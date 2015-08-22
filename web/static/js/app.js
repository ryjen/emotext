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

	$('body').on('click', "[data-input-action]", function() {
		chatInput.val("/" + $(this).text().trim() + " ")
	})

	$('body').on('click', "[data-input-user]", function() {
		var data = chatInput.val()
		if (data) {
			chatInput.val(data.trim() + " " + $(this).text())
		} else {
			chatInput.val($(this).text())
		} 
	})

	var collapser = function(a, b, c, d) {
		var f = function(){
		    if(b.hasClass('open'))	
		    {
		    	b.parent().switchClass('col-md-2', 'col-sidebar', 300)
		    	d.switchClass('hidden', 'open', 300)
		        b.switchClass('open', 'hidden', 300)
		        if (c.hasClass('open')) {
		        	messages.parent().switchClass('col-md-8', 'col-fill-one', 300)
		    	} else {
		    		messages.parent().switchClass('col-fill-one', 'col-fill', 300)
		    	}
		    }
		    else
		    {
		        if (c.hasClass('open')) {
		        	messages.parent().switchClass('col-fill-one', 'col-md-8', 300)
		   		} else {
		   			messages.parent().switchClass('col-fill', 'col-fill-one', 300)
		   		}

		        b.switchClass('hidden', 'open', 300)
		        d.switchClass('open', 'hidden', 300)
		        b.parent().switchClass('col-sidebar', 'col-md-2', 300)
		    }
		}
		a.click(f)
		d.click(f)
	}
	
	collapser($('.action-collapser'), chatActions, chatUsers, $('#action-bar'))

	collapser($('.users-collapser'), chatUsers, chatActions, $('#user-bar'))

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