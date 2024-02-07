defmodule Emotext.RoomChannel do
  use Phoenix.Channel

  require Logger

  alias Emotext.ActionQuery
  alias Emotext.AliasQuery
  alias Emotext.UserQuery
  alias Emotext.History
  alias Emotext.Action
  alias Emotext.Repo
  import Ecto.Query, only: [from: 2]

  intercept ["action:user", "action:others", "msg:output", "info:pong"]

  @config Expletive.configure(blacklist: Expletive.Blacklist.english)

  def join("rooms:lobby", auth_msg, socket) do
    {:ok, socket}
  end

  def join("rooms:" <> _private_room_id, _auth_msg, socket) do
    {:error, %{reason: "unauthorized"}}
  end

  def gender_str(str, user) do
      if Map.get(str, "all") do
          Map.get(str, "all")
      else
          cond do
             true -> Map.get(str, "neutral")
             user.gender == :male -> Map.get(str, "male")
             user.gender == :female -> Map.get(str, "female")
         end
      end
  end
  def action_str(str, user) do
    if (str != nil) do
      str = gender_str(str, user)
      str = String.replace(str, "$n", user.screen_name);
    end
  end

  def action_str(str, user, vict) do
      if (str != nil) do
        str = gender_str(str, vict)
        str = action_str(str, user)
        str = String.replace(str, "$N", vict.screen_name);
    #   cond do
    #     true ->
    #       str = String.replace(str, "$S", "its");
    #       str = String.replace(str, "$M", "it");
    #       str = String.replace(str, "$E", "it");
    #     vict.gender == :male ->
    #       str = String.replace(str, "$S", "his");
    #       str = String.replace(str, "$M", "him");
    #       str = String.replace(str, "$E", "he");
    #     vict.gender == :female ->
    #       str = String.replace(str, "$S", "her");
    #       str = String.replace(str, "$M", "her");
    #       str = String.replace(str, "$E", "she");
    #   end
    end
  end

  def get_user(socket) do
    Guardian.Phoenix.Socket.current_resource(socket)
  end

  def handle_invalid_action(socket, user) do
    push socket, "msg:sys", %{ body: "I don't know how to do that.", user: user.screen_name }
  end

  def sys_msg(socket, user, msg) do
    if msg do
      push socket, "msg:sys", %{ body: msg, user: user.screen_name }
      true
    else
      handle_invalid_action(socket, user)
      false
    end
  end

  def action_user(socket, msg, user) do
    if msg do
      value = action_str(msg, user)
      broadcast! socket, "action:user", %{action: value, screen_name: user.screen_name}
      value
    else
      handle_invalid_action(socket, user)
      nil
    end
  end

  def action_user(socket, msg, user, vict) do
    if msg do
      value = action_str(msg, user, vict)
      broadcast! socket, "action:user", %{action: value, screen_name: user.screen_name, ignore: [vict.screen_name]}
      value
    else
      handle_invalid_action(socket, user)
      nil
    end
  end

  def action_vict(socket, msg, user, vict) do
    if msg do
      value = action_str(msg, user, vict)
      broadcast! socket, "action:user", %{action: value, screen_name: vict.screen_name, ignore: [user.screen_name]}
      value
    else
      nil
    end
  end

  def action_others(socket, msg, user, vict) do
    if msg do
      value = action_str(msg, user, vict)
      broadcast! socket, "action:others", %{action: value, ignore: [user.screen_name, vict.screen_name] }
      value
    else
      nil
    end
  end

  def action_others(socket, msg, user) do
    if msg do
      value = action_str(msg, user)
      broadcast! socket, "action:others", %{action: value, ignore: [user.screen_name] }
      value
    else
      nil
    end
  end

  defp save_action(action, user, vict \\ nil) do

      history = %History{ }
      changeset = Ecto.Changeset.change(history, %{ action_id: action.id, user_id: user.id, user_screen_name: user.screen_name })
      if vict do
        changeset = Ecto.Changeset.change(changeset, %{ vict_id: vict.id, vict_screen_name: vict.screen_name })
      end
      Repo.insert! changeset

  end

  defp save_message(message, user) do
      Logger.debug "Saving message #{message} from #{user.screen_name}"
      history = %History{ message: message, user_screen_name: user.screen_name}

      Repo.insert! Ecto.Changeset.change(history, user_id: user.id)

  end

  def perform_action(socket, user, action, vict_name \\ nil) do
    if vict_name == nil do
        action_user(socket, action.self_no_arg, user)
        action_others(socket, action.others_no_arg, user)
        save_action(action, user)
     else
        vict = Repo.one(UserQuery.by_screen_name(vict_name))
        vict = Emotext.User.change_screen_name(vict, vict_name)
        if vict != nil do
          if vict.screen_name == user.screen_name do
              action_user(socket, action.self_auto, user)
              action_others(socket, action.others_auto, user)
          else
              action_user(socket, action.self_found, user, vict)
              action_vict(socket, action.vict_found, user, vict)
              action_others(socket, action.others_found, user, vict)
          end
          save_action(action, user, vict)
        else if action.self_not_found do
            sys_msg socket, user, action_str(action.self_not_found, user)
          else
            IO.puts("Wierd input #{vict_name}")
          end
        end
      end
  end

  def handle_alias(socket, body, user) do
    parts = String.split(body, ~r{\s+});
    command = Enum.at(parts, 0)
    a = Repo.one(AliasQuery.by_name(command))
    if a != nil do
      if Enum.count(parts) == 1 do
        perform_action(socket, user, a.action)
      else
        perform_action(socket, user, a.action, Enum.at(parts, 1))
      end
      true
    else
      false
    end
  end

  def handle_command(socket, body, user) do
    if body == "/?" do
      actions = Repo.all(Action)
      Enum.each(Enum.chunk_every(actions, 5), fn(a) ->
        sys_msg socket, user, Enum.reduce(a, "", fn(x, acc) ->
          acc <> "<span data-input-action=\"#{x.id}\">" <> String.pad_trailing(x.name, 15) <> "</span>"
        end)
      end)
      sys_msg socket, user, "\nExample: <b>/smile</b> will issue: <i>#{user.screen_name} smiles happily.</i>"
    else
      parts = String.split(body, ~r{\s+});
      command = Enum.at(parts, 0);
      command = String.slice(command, 1, String.length(command))
      action = Repo.one(ActionQuery.by_name(command))

      if action == nil do
          sys_msg socket, user, "Huh? I don't understand."
      else
        if Enum.count(parts) == 1 do
          perform_action(socket, user, action)
        else
          perform_action(socket, user, action, Enum.at(parts, 1))
        end
      end
    end
  end

  defp send_action(socket, user, action, action_user) do
    value = action_str(action, action_user)
    push socket, "msg:action", %{ action: value, screen_name: user.screen_name }
  end

  defp send_action(socket, user, action, action_user, action_vict) do
    value = action_str(action, action_user, action_vict)
    push socket, "msg:action", %{ action: value, screen_name: user.screen_name }
  end

  defp send_history_item(socket, history) do
    user = get_user(socket)
    if history.action do
     history_user = Emotext.User.change_screen_name(history.user, history.user_screen_name)
     if history.vict == nil do
        if history.user_screen_name == user.screen_name do
          send_action(socket, user, history.action.self_no_arg, history_user)
        else
          send_action(socket, user, history.action.others_no_arg, history_user)
        end
     else
          if history.vict_screen_name == history.user_screen_name do
            if user.screen_name == history.user_screen_name do
              send_action(socket, user, history.action.self_auto, history_user)
            else
              send_action(socket, user, history.action.others_auto, history_user)
            end
          else
            vict = Emotext.User.change_screen_name(history.vict, history.vict_screen_name)
            if user.screen_name == history.user_screen_name do
                send_action(socket, user, history.action.self_found, history_user, vict)
              else
                if user.screen_name == history.vict_screen_name do
                  send_action(socket, user, history.action.vict_found, history_user, vict)
              else
                send_action(socket, user, history.action.others_found, history_user, vict)
              end
            end
          end
      end
    else
      if history.user_id && history.message do
        Logger.info "Restoring history message from #{history.user_screen_name}"
        user = get_user(socket)
        body = if history.message != nil && Expletive.profane?(history.message, @config), do: Expletive.sanitize(history.message, @config), else: history.message
        msg = %{body: body, screen_name: history.user_screen_name }
        if msg.screen_name == user.screen_name do
            push socket, "msg:self", msg
        else
            push socket, "msg:new", msg
        end
      else
        Logger.error "No user loaded for history item #{history.id}"
      end
    end
  end

  defp send_history(socket) do

    history = Repo.all from h in Emotext.History, order_by: [asc: h.inserted_at], preload: [:action, :user, :vict]

    Enum.all?(history, fn(x) -> send_history_item(socket, x) end)

  end

  def handle_in("info:ping", %{}, socket) do
    user = get_user(socket)
    broadcast! socket, "info:pong", %{ socket: socket, screen_name: user.screen_name  }
    push socket, "info:room", %{room: String.slice(socket.topic, 6, String.length(socket.topic))}
    send_history socket
    {:noreply, socket}
  end

  def handle_in("msg:input", %{"body" => body}, socket) do
    user = get_user(socket)
  	if String.at(body, 0) == "/" do
        handle_command(socket, body, user)
    else
      if not handle_alias(socket, body, user) do
        save_message(body, user)
        body = if body && Expletive.profane?(body, @config), do: Expletive.sanitize(body, @config), else: body
        broadcast! socket, "msg:output", %{body: body, screen_name: user.screen_name }
      end
    end
    {:noreply, socket}
  end

  def handle_out("info:pong", msg, socket) do
    user = get_user(socket)
    push socket, "info:user", %{ screen_name: msg.screen_name }
    push msg.socket, "info:user", %{ screen_name: user.screen_name }
    {:noreply, socket}
  end

  def handle_out("action:others", msg, socket) do
    user = get_user(socket)
    if !Enum.any?(msg.ignore, fn(x) -> x == user.screen_name end) do
        push socket, "msg:action", msg
    end
    {:noreply, socket}
  end

  def handle_out("action:user", msg, socket) do
    user = get_user(socket)
    if msg.screen_name == user.screen_name do
        push socket, "msg:action", msg
    end
    {:noreply, socket}
  end

  def handle_out("msg:output", msg, socket) do
    user = get_user(socket)
    if msg.screen_name == user.screen_name do
        push socket, "msg:self", msg
    else
        push socket, "msg:new", msg
    end
    {:noreply, socket}
  end
end
