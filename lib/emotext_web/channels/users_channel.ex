defmodule Emotext.Web.UsersChannel do
  use Phoenix.Channel

  @impl true
  def join(_room, %{"guardian_token" => _token}, socket) do
    { :ok, %{ message: "Joined" }, socket }
  end

  @impl true
  def join(_room, _, _socket) do
    { :error,  :authentication_required }
  end

  @impl true
  def handle_in("ping", _payload, socket) do
    user = Guardian.Plug.current_resource(socket)
    broadcast socket, "pong", %{ message: "pong", from: user.email }
    { :noreply, socket }
  end
end
