defmodule Emotext.RoomChannel do
  use Phoenix.Channel
  use Guardian.Channel

  alias Emotext.ActionQuery
  alias Emotext.UserQuery
  alias Emotext.Action
  alias Emotext.Repo
  alias Emotext.User

  intercept ["action:user", "action:others", "msg:output", "info:pong"]

  def join("rooms:lobby", auth_msg, socket) do
    {:ok, socket}
  end

  def join("rooms:" <> _private_room_id, _auth_msg, socket) do
    {:error, %{reason: "unauthorized"}}
  end

  def action_str(str, user) do
    if (str != nil) do
      str = String.replace(str, "$n", user.username);
     cond do
        true ->
          str = String.replace(str, "$s", "its");
          str = String.replace(str, "$m", "it");
        user.gender == :male ->
          str = String.replace(str, "$s", "his");
          str = String.replace(str, "$m", "him");
        user.gender == :female ->
          str = String.replace(str, "$s", "her");
          str = String.replace(str, "$m", "her");
      end
    end
  end

  def action_str(str, user, vict) do
    str = action_str(str, user)
    if (str != nil) do
        str = String.replace(str, "$N", vict.username);
      cond do
        true ->
          str = String.replace(str, "$S", "its");
          str = String.replace(str, "$M", "it");
        vict.gender == :male ->
          str = String.replace(str, "$S", "his");
          str = String.replace(str, "$M", "him");
        vict.gender == :female ->
          str = String.replace(str, "$S", "her");
          str = String.replace(str, "$M", "her");
      end
    end
  end

  def get_user(socket) do
    Guardian.Channel.current_resource(socket)
  end

  def sys_msg(socket, msg) do
    if msg do
      push socket, "msg:sys", %{ body: msg, user: get_user(socket).id }
    end
  end

  def action_user(socket, msg, user) do
    if msg do
      broadcast! socket, "action:user", %{action: action_str(msg, user), user: user.id}
    end
  end

  def action_user(socket, msg, user, vict) do
    if msg do
      broadcast! socket, "action:user", %{action: action_str(msg, user, vict), user: user.id, ignore: [vict.id]}
    end
  end

  def action_vict(socket, msg, user, vict) do
    if msg do
      broadcast! socket, "action:user", %{action: action_str(msg, user, vict), user: vict.id, ignore: [user.id]}
    end
  end

  def action_others(socket, msg, user, vict) do
    if msg do
      broadcast! socket, "action:others", %{action: action_str(msg, user, vict), ignore: [user.id, vict.id] }
    end
  end

  def action_others(socket, msg, user) do
    if msg do
      broadcast! socket, "action:others", %{action: action_str(msg, user), ignore: [user.id] }
    end
  end

  def handle_command(socket, body, user) do
    if body == "/?" do
          actions = Repo.all(Action)
          Enum.each(Enum.chunk(actions, 5), fn(a) ->
            sys_msg socket, Enum.reduce(a, "", fn(x, acc) -> 
              acc <> String.ljust(x.name, 15)
            end)
          end)
          sys_msg socket, "\nExample: <b>/smile</b> will issue: <i>#{user.username} smiles happily.</i>"
        else
          parts = String.split(body, ~r{\s+});
          command = Enum.at(parts, 0);
          command = String.slice(command, 1, String.length(command))
          action = Repo.one(ActionQuery.by_name(command))
          cond do
            action == nil ->
              sys_msg socket, "Huh? I don't understand."
            Enum.count(parts) == 1 ->
              action_user socket, action.self_no_arg, user
              action_others socket, action.others_no_arg, user
            true ->
              vict_name = Enum.at(parts, 1)
              vict = Repo.one(UserQuery.by_username(vict_name))
              if vict != nil do
                  if vict.id == user.id do
                      action_user socket, action.self_auto, user
                      action_others socket, action.others_auto, user
                  else
                      action_user socket, action.self_found, user, vict
                      action_vict socket, action.vict_found, user, vict
                      action_others socket, action.others_found, user, vict
                  end
              else if action.self_not_found do
                  sys_msg socket, action_str(action.self_not_found, user)
                else
                  IO.puts("Wierd input #{vict_name}")
                end
              end
            end
        end
  end

  def handle_in("info:ping", %{}, socket) do
    user = get_user(socket)
    broadcast! socket, "info:pong", %{ socket: socket, user: user.id, username: user.username  }
    push socket, "info:room", %{room: String.slice(socket.topic, 6, String.length(socket.topic))}
    {:noreply, socket}
  end

  def handle_in("msg:input", %{"body" => body}, socket) do
    user = get_user(socket)
  	if String.at(body, 0) == "/" do
        handle_command(socket, body, user)
    else
        broadcast! socket, "msg:output", %{body: body, user: user.id, username: user.username }
    end
    {:noreply, socket}
  end

  def handle_out("info:pong", msg, socket) do
    user = get_user(socket)
    push socket, "info:user", %{ username: msg.username, user: msg.user }
    push msg.socket, "info:user", %{ username: user.username, user: user.id }
    {:noreply, socket}
  end

  def handle_out("action:others", msg, socket) do
    user = get_user(socket)
    if !Enum.any?(msg.ignore, fn(x) -> x == user.id end) do
        push socket, "msg:action", msg
    end
    {:noreply, socket}
  end

  def handle_out("action:user", msg, socket) do
    user = get_user(socket) 
    if msg.user == user.id do
        push socket, "msg:action", msg
    end
    {:noreply, socket}
  end

  def handle_out("msg:output", msg, socket) do
    user = get_user(socket)
    if msg.user == user.id do
        push socket, "msg:self", msg
    else
        push socket, "msg:new", msg
    end
    {:noreply, socket}
  end
end