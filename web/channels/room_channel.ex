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

  def action_str(str, socket, vict) do
    str = action_str(str, socket)
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

  def get_user(socket) do
    Guardian.Channel.current_resource(socket)
  end

  def sys_msg(socket, msg) do
    push socket, "msg:sys", %{ body: msg, user: get_user(socket).id }
  end

  def action_user(socket, msg, user) do
    broadcast! socket, "action:user", %{action: action_str(msg, user), user: user.id}
  end

  def action_user(socket, msg, user, vict) do
    broadcast! socket, "action:user", %{action: action_str(msg, user, vict), user: user.id, ignore: [vict.id]}
  end

  def action_vict(socket, msg, user, vict) do
    broadcast! socket, "action:user", %{action: action_str(msg, user, vict), user: vict.id, ignore: [user.id]}
  end

  def action_others(socket, msg, user, vict) do
    broadcast! socket, "action:others", %{action: action_str(msg, user, vict), ignore: [user.id, vict.id] }
  end

  def action_others(socket, msg, user) do
    broadcast! socket, "action:others", %{action: action_str(msg, user), ignore: [user.id] }
  end

  def handle_in("info:ping", %{}, socket) do
    broadcast! socket, "info:pong", %{ user: get_user(socket).id, room: String.slice(socket.topic, 6, String.length(socket.topic)) }
    {:noreply, socket}
  end

  def handle_in("msg:input", %{"body" => body}, socket) do
    user = get_user(socket)
  	if String.at(body, 0) == "/" do
        if body == "/?" do
          actions = Repo.all(Action)
          Enum.each(Enum.chunk(actions, 5), fn(a) ->
            sys_msg socket, Enum.reduce(a, "", fn(x, acc) -> 
              acc <> String.ljust(x.name, 15)
            end)
          end)
          sys_msg socket, "\nExample: <b>/smile</b> will issue: <i>#{user.username} smiles happily.</i>"
        else
          parts = String.split(body, ~r{\s});
          command = Enum.at(parts, 0);
          command = String.slice(command, 1, String.length(command))
          action = Repo.one(ActionQuery.by_name(command))
          cond do
            action == nil ->
              sys_msg socket, "No such command."
            Enum.count(parts) == 1 ->
              action_user socket, action.self_no_arg, user
              action_others socket, action.others_no_arg, user
            true ->
              vict = Repo.one(UserQuery.by_username(Enum.at(parts, 1)))
              if vict != nil do
                  if vict.id == user.id do
                      action_user socket, action.self_auto, user
                      action_others socket, "action:others", action.others_auto, user
                  else
                      action_user socket, action.self_found, user, vict
                      action_vict socket, action.vict_found, user, vict
                      action_others socket, action.others_found, user, vict
                  end
              else
                  sys_msg socket, action_str(action.self_not_found, socket)
              end
            end
        end
    else
        broadcast! socket, "msg:output", %{body: body, user: user.id, username: user.username }
    end
    {:noreply, socket}
  end

  def handle_out("info:pong", msg, socket) do
    user = Repo.get(User, msg.user)
    push socket, "info:user", %{ username: user.username, room: msg.room }
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