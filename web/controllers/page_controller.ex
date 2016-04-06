defmodule Emotext.PageController do
  use Emotext.Web, :controller
  require Logger
  alias Emotext.SessionController
  alias Emotext.Action
  alias Emotext.ActionQuery
  alias Emotext.Paginator
  alias Emotext.AliasQuery
  alias Prelude.Map

  plug PlugRedirectHttps

  plug Guardian.Plug.EnsureAuthenticated, %{ on_failure: { SessionController, :guest } } when not action in [:help]

  def index(conn, _params) do
    user = Guardian.Plug.current_resource(conn)
    
    render conn, :index, current_user: user, 
          actions: Repo.all(ActionQuery.sorted())
  end

  def help(conn, _params) do
    aliases = Repo.all(AliasQuery.with_action_names())
      |> Enum.group_by(fn(x) -> x.action_name end)

    render(conn, "help.html", aliases: aliases)
  end

end
