defmodule Emotext.RoomChannel do
  use Phoenix.Channel

  def join("rooms:lobby", auth_msg, socket) do
    {:ok, socket}
  end
  def join("rooms:" <> _private_room_id, _auth_msg, socket) do
    {:error, %{reason: "unauthorized"}}
  end

  def handle_in("new_msg", %{"body" => body, "user" => user}, socket) do
  	#Todo: lookup commands
    cond do
      body.at(0) == '/' ->
      parts = String.split(body, ~r{\s});
      action = Action.from_name(parts[0].substr(1, String.length(parts[0])))
      cond do
      action == nil ->
        broadcast! socket, "self_msg", %{body: "No such command.", user: user}
      length parts == 1 ->
        broadcast! socket, "self_msg", %{ body: action.self_no_arg, user: user }
        broadcast! socket, "others_msg", %{ body: action.others_no_arg, user: user }
      true ->
        vict = User.from_username(parts[1])

        cond do
        vict != nil ->
          cond do
          vict == user ->
            broadcast! socket, "self_msg", %{body: action.self_auto, user: user}
            broadcast! socket, "others_msg", %{body: action.others_auto, user: user }
          true ->
            broadcast! socket, "self_msg", %{body: action.self_vict_found, user: user, vict: vict}
            broadcast! socket, "others_msg", %{body: action.others_vict_found, user: user, vict: vict}
            broadcast! socket, "self_msg", %{body: action.vict_found, user: vict }
          end
        true ->
          broadcast! socket, "self_msg", %{body: action.vict_not_found, user: user}
        end
      end
    true ->
      broadcast! socket, "new_msg", %{body: body, user: user}
    end
    {:noreply, socket}
  end

  def handle_out("new_msg", payload, socket) do
    push socket, "new_msg", payload
    {:noreply, socket}
  end
end