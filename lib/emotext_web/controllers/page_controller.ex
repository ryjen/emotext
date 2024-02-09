defmodule Emotext.Web.PageController do
  use Emotext.Web, :controller
  require Logger
  alias Emotext.ActionQuery
  alias Emotext.AliasQuery

  @behaviour Guardian.Plug.ErrorHandler
  plug Guardian.Plug.Pipeline, error_handler: __MODULE__
  plug Guardian.Plug.EnsureAuthenticated  when action not in [:help]

  def index(conn, _params) do

    render conn, :index,
          actions: Repo.all(ActionQuery.sorted())
  end

  def help(conn, _params) do
    aliases = Repo.all(AliasQuery.sorted())
      |> Enum.group_by(fn(x) -> x.action.name end)

    render(conn, "help.html", aliases: aliases)
  end

  def api(conn, _params) do
      render(conn, "api.html")
  end

  @impl Guardian.Plug.ErrorHandler
  def auth_error(conn, {type, reason}, _opts) do
    Logger.info "authorization #{type} #{reason}, logging as guest"
    conn
    |> redirect(to: session_path(conn, :guest))
  end
end
