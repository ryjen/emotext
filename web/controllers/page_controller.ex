defmodule Emotext.PageController do
  use Emotext.Web, :controller

  alias Emotext.SessionController

  plug PlugRedirectHttps

  plug Guardian.Plug.EnsureSession, %{ on_failure: { SessionController, :new } } when not action in [:new, :create]
  	
  def index(conn, _params) do
    render(conn, "index.html", current_user: Guardian.Plug.current_resource(conn))
  end

  def import(conn, _params) do
  	render(conn, "import.html")
  end

  def help(conn, _params) do
    render(conn, "help.html")
  end

end
