defmodule Emotext.PageController do
  use Emotext.Web, :controller

  alias Emotext.SessionController
  alias Emotext.Action
  alias Emotext.ActionQuery

  plug PlugRedirectHttps

  plug Guardian.Plug.EnsureSession, %{ on_failure: { SessionController, :new } } when not action in [:new, :create]
  	
  def index(conn, _params) do
    actions = Repo.all(ActionQuery.sorted())
    render(conn, "index.html", current_user: Guardian.Plug.current_resource(conn), actions: actions)
  end

  def import(conn, _params) do
  	render(conn, "import.html")
  end

  def help(conn, _params) do
    render(conn, "help.html")
  end

end
