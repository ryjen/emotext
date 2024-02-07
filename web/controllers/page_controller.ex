defmodule Emotext.PageController do
  use Emotext.Web, :controller
  require Logger
  alias Emotext.SessionController
  #alias Emotext.Action
  alias Emotext.ActionQuery
  #alias Emotext.Paginator
  alias Emotext.AliasQuery
  #alias Prelude.Map

  plug PlugRedirectHttps

  plug Guardian.Plug.EnsureAuthenticated, %{ on_failure: { SessionController, :guest } } when action not in [:help]

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

end
