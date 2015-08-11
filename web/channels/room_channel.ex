defmodule Emotext.RoomChannel do
  use Phoenix.Channel
  use Guardian.Channel

  alias Emotext.ActionQuery
  alias Emotext.UserQuery
  alias Emotext.Repo

  intercept ["self_action", "others_action", "new_msg"]

  def join("rooms:lobby", auth_msg, socket) do
    {:ok, socket}
  end
  def join("rooms:" <> _private_room_id, _auth_msg, socket) do
    {:error, %{reason: "unauthorized"}}
  end

  def action_str(str, user) do
    str = String.replace(str, "$n", user.username);
  end

  def action_str(str, user, vict) do
    str = action_str(str, user)
    if vict != nil do
      str = String.replace(str, "$N", vict.username);
    end
  end

  def handle_in("new_msg", %{"body" => body}, socket) do
    user = Guardian.Channel.current_resource(socket)
  	if String.at(body, 0) == "/" do

        if body == "/?" do
        else
        parts = String.split(body, ~r{\s});
        command = Enum.at(parts, 0);
        command = String.slice(command, 1, String.length(command))
        action = Repo.one(ActionQuery.by_name(command))
        cond do
          action == nil ->
            broadcast! socket, "self_action", %{action: "No such command.", user: user.id}
          Enum.count(parts) == 1 ->
            broadcast! socket, "self_action", %{ action: action_str(action.self_no_arg, user), user: user.id }
            broadcast! socket, "others_action", %{ action: action_str(action.others_no_arg, user), user: user.id }
          true ->
            vict = Repo.one(UserQuery.by_username(Enum.at(parts, 1)))
            if vict != nil do
                if vict == user do
                    broadcast! socket, "self_action", %{action: action_str(action.self_auto, user), user: user.id}
                    broadcast! socket, "others_action", %{action: action.to_str(:others_auto, user), user: user.id }
                else
                    broadcast! socket, "self_action", %{action: action_str(action.self_found, user, vict), user: user.id, vict: vict.id}
                    broadcast! socket, "others_action", %{action: action_str(action.others_found, user, vict), user: user.id, vict: vict.id}
                    broadcast! socket, "self_action", %{action: action_str(action.vict_found, user, vict), user: vict.id}
                end
            else
                broadcast! socket, "self_action", %{action: action_str(action.self_not_found, user), user: user.id }
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