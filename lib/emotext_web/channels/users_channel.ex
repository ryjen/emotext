defmodule Emotext.Web.UsersChannel do
  use Phoenix.Channel

  def join(_room, %{"guardian_token" => _token}, socket) do
    { :ok, %{ message: "Joined" }, socket }
  end

  def join(_room, _, _socket) do
    { :error,  :authentication_required }
  end

  def handle_in("ping", _payload, socket) do
    user = Guardian.Channel.current_resource(socket)
    broadcast socket, "pong", %{ message: "pong", from: user.email }
    { :noreply, socket }
  end
end
