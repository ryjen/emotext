import {Socket} from "phoenix"
import "phoenix_html"

class App {

  static init() {
    let chatInput   = $("#chat-input")
  	let messages 		= $("#messages")
  	let chatUsers		= $("#chat-users")
    let chatMenu    = $("#chat-menu")
    let output      = $("#chat-window .output")

    let guardianToken = $('meta[name="guardian_token"]').attr('content');

  	let socket = new Socket("/socket", {
      params: {guardian_token: guardianToken}
    })

  	socket.connect()

  	let chan = socket.channel("rooms:lobby")

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
        $('#action-modal').modal('toggle');
  	})

  	$('body').on('click', "[data-input-user]", function() {
  		var data = chatInput.val()
  		if (data) {
  			chatInput.val(data.trim() + " " + $(this).text())
  		} else {
  			chatInput.val($(this).text())
  		}
  	})

    $(window).resize(function() {
        if ($(window).width() >= 990) {
            if (chatUsers.hasClass('open')) {
                output.css('margin-right', '195px')
            } else {
                output.css('margin-right', 'auto')
            }
        } else {
            output.css('margin-right', 'auto')
        }
    })

    $('.users-collapser').click(function() {
        if (chatUsers.hasClass('open')) {
            chatUsers.removeClass('open')
            chatUsers.addClass('hidden')
            chatMenu.removeClass('hidden')
            chatMenu.addClass('open')
            output.css('margin-right', 'auto')
        } else {
            chatUsers.removeClass('hidden')
            chatUsers.addClass('open')
            chatMenu.removeClass('open')
            chatMenu.addClass('hidden')
            if ($(window).width() >= 990) {
                output.css('margin-right', '195px')
            }
        }
    })


    // TODO: put in settings
    let buffer = []

  	var appendMessage = function(x) {

        if (buffer.length > 500) {
          buffer.shift();
        }

    	buffer.push(x);

  	  	messages.html(buffer.join("\n"))

        if (messages && messages[0]) {
  	  	    var height = messages[0].scrollHeight;

    		messages.scrollTop(height);
        }
  	}

  	chan.on("msg:self", payload => {
  	  appendMessage(`You say: ${payload.body}`)
  	})

  	chan.on("msg:new", payload => {
  		appendMessage(`${payload.screen_name} says: ${payload.body}`)
  	});

  	chan.on("msg:action", payload => {
  		appendMessage(`${payload.action}`)
  	})

  	chan.on("msg:sys", payload => {
  		appendMessage(`${payload.body}`);
  	})

  	chan.on("info:user", payload => {
  		if ($("#" + payload.screen_name).length) {
  			return;
  		}
  		chatUsers.children("ul").append($("<li id=\"" + payload.screen_name + "\" data-input-user=\"" + payload.user + "\">" + payload.screen_name + "</li>"))
  	})

  	chan.on("info:room", payload => {
  		$('#chat-room').html(payload.room)
  	})

  	chan.join().receive("ok", resp => {
      // if(typeof(Storage) !== "undefined") {
      //       history = JSON.parse(localStorage.getItem("history")) || [];
      // }
      // if (history.length == 0) {
  		  appendMessage(`Welcome to <a href="/help">emotext</a>!`)
      // } else {
      //   messages.html(history.join("\n"));
      //  messages.scrollTop(messages[0].scrollHeight);
      // }
  		chan.push("info:ping" )
  	})
  }
}

$( () => App.init() )

export default App
