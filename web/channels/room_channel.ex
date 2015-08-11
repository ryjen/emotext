defmodule Emotext.RoomChannel do
  use Phoenix.Channel
  use Guardian.Channel

  alias Emotext.ActionQuery
  alias Emotext.Repo

  intercept ["self_action", "others_action", "new_msg"]

  def join("rooms:lobby", auth_msg, socket) do
    {:ok, socket}
  end
  def join("rooms:" <> _private_room_id, _auth_msg, socket) do
    {:error, %{reason: "unauthorized"}}
  end

  def handle_in("new_msg", %{"body" => body}, socket) do
    user = Guardian.Channel.current_resource(socket)
  	if String.at(body, 0) == "/" do

        if body == "/?" do
        else
        parts = String.split(body, ~r{\s});
        command = Enum.at(parts, 0);
        command = String.slice(command, 1, String.length(command))
        IO.inspect command
        action = Repo.one(ActionQuery.by_name(command))
        IO.inspect action
        cond do
          action == nil ->
            broadcast! socket, "self_action", %{action: "No such command.", user: user.id}
          Enum.count(parts) == 1 ->
            broadcast! socket, "self_action", %{ action: action.self_no_arg, user: user.id }
            broadcast! socket, "others_action", %{ action: action.others_no_arg, user: user.id }
          true ->
            vict = User.from_username(parts[1])
            cond do
              vict != nil ->
                cond do
                  vict == user ->
                    broadcast! socket, "self_action", %{action: action.self_auto, user: user.id}
                    broadcast! socket, "others_action", %{action: action.others_auto, user: user.id }
                  true ->
                    broadcast! socket, "self_action", %{action: action.self_vict_found, user: user.id, vict: vict.id}
                    broadcast! socket, "others_action", %{action: action.others_vict_found, user: user.id, vict: vict.id}
                    broadcast! socket, "self_action", %{action: action.vict_found, user: vict.id}
                end
              true ->
                broadcast! socket, "self_action", %{action: action.vict_not_found}
            end
          end
        end
    else
        if user == nil do
          broadcast! socket, "new_msg", %{body: body }
        else
          broadcast! socket, "new_msg", %{body: body, user: user.id}
        end
    end
    {:noreply, socket}
  end

  def handle_out("others_action", msg, socket) do
    user = Guardian.Channel.current_resource(socket)
    if user == nil or msg.user != user.id and (msg.vict == nil or user.id != msg.vict) do
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
    if user != nil do
      if msg.user == user.id do
          push socket, "self_msg", msg
      else
          push socket, "new_msg", msg
      end
    else
      IO.puts "No current user for socket"
    end
    {:noreply, socket}
  end
end