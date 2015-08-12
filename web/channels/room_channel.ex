defmodule Emotext.RoomChannel do
  use Phoenix.Channel
  use Guardian.Channel

  alias Emotext.ActionQuery
  alias Emotext.UserQuery
  alias Emotext.Action
  alias Emotext.Repo

  intercept ["self_action", "others_action", "new_msg"]

  def join("rooms:lobby", auth_msg, socket) do
    {:ok, socket}
  end

  def join("rooms:" <> _private_room_id, _auth_msg, socket) do
    {:error, %{reason: "unauthorized"}}
  end

  def action_gender(str, user) do
    cond do
      user.gender == :unknown ->
        str = String.replace(str, "$s", "its");
        str = String.replace(str, "$m", "it");
      user.gender == :male ->
        str = String.replace(str, "$s", "his");
        str = String.replace(str, "$m", "him");
      user.gender == :female ->
        str = String.replace(str, "$s", "her");
        str = String.replace(str, "$m", "her");
    end
    str
  end

  def action_str(str, user) do
    str = String.replace(str, "$n", user.username);
    str = action_gender(str, user)
    str
  end

  def action_str(str, user, vict) do
    str = action_str(str, user)
    str = String.replace(str, "$N", vict.username);
    str = action_gender(str, vict)
    str
  end

  def sys_msg(socket, msg) do
    user = Guardian.Channel.current_resource(socket)
    push socket, "sys_msg", %{ body: msg, user: user.id }
  end

  def action_msg(socket, type, msg) do
    user = Guardian.Channel.current_resource(socket)
    broadcast! socket, type, %{ action: action_str(msg, user), user: user.id }
  end

  def action_msg(socket, type, msg, vict) do
    user = Guardian.Channel.current_resource(socket)
    broadcast! socket, type, %{action: action_str(msg, user, vict), user: user.id, vict: vict.id}
  end

  def handle_in("new_msg", %{"body" => body}, socket) do
    user = Guardian.Channel.current_resource(socket)
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
              action_msg socket, "self_action", action.self_no_arg
              action_msg socket, "others_action", action.others_no_arg
            true ->
              vict = Repo.one(UserQuery.by_username(Enum.at(parts, 1)))
              if vict != nil do
                  if vict == user do
                      action_msg socket, "self_action", action.self_auto
                      action_msg socket, "others_action", action.others_auto
                  else
                      action_msg socket, "self_action", action.self_found, vict
                      action_msg socket, "others_action", action.others_found, vict
                      action_msg socket, "self_action", action.vict_found, vict
                  end
              else
                  sys_msg socket, action_str(action.self_not_found, user)
              end
            end
        end
    else
        broadcast! socket, "new_msg", %{body: body, user: user.id, username: user.username}
    end
    {:noreply, socket}
  end

  def handle_out("others_action", msg, socket) do
    user = Guardian.Channel.current_resource(socket)
    if user == nil or msg.user != user.id and (!Map.has_key?(msg, :vict) or user.id != msg.vict) do
        push socket, "new_action", msg
    end
    {:noreply, socket}
  end

  def handle_out("self_action", msg, socket) do
    user = Guardian.Channel.current_resource(socket)
    if user != nil and msg.user == user.id do
        push socket, "new_action", msg
    end
    {:noreply, socket}
  end

  def handle_out("new_msg", msg, socket) do
    user = Guardian.Channel.current_resource(socket)
    if msg.user == user.id do
        push socket, "self_msg", msg
    else
        push socket, "new_msg", msg
    end
    {:noreply, socket}
  end
end