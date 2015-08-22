defmodule Emotext.PageController do
  use Emotext.Web, :controller

  alias Emotext.SessionController
  alias Emotext.Action
  alias Emotext.ActionQuery
  alias Emotext.Paginator
  alias Emotext.AliasQuery
  alias Prelude.Map

  plug PlugRedirectHttps

  plug Guardian.Plug.EnsureSession, %{ on_failure: { SessionController, :new } } when not action in [:help]

  def index(conn, _params) do
    # _params = Dict.put(_params, "page_size", 14)
    #  paginator = Action
    #  |> Action.order_by_name
    #  |> Paginator.new(_params)

    #  render conn, :index, 
    #     current_user: Guardian.Plug.current_resource(conn),
    #     actions: paginator.entries,
    #     page_number: paginator.page_number,
    #     page_size: paginator.page_size,
    #     total_pages: paginator.total_pages

    render conn, :index, current_user: Guardian.Plug.current_resource(conn),
          actions: Repo.all(ActionQuery.sorted())
  end

  def help(conn, _params) do
    aliases = Repo.all(AliasQuery.with_action_names())
      |> Enum.group_by(fn(x) -> x.action_name end)

    render(conn, "help.html", aliases: aliases)
  end

end
