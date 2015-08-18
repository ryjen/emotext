defmodule Emotext.PageController do
  use Emotext.Web, :controller

  alias Emotext.SessionController
  alias Emotext.Action
  alias Emotext.ActionQuery
  alias Emotext.Paginator

  plug PlugRedirectHttps

  plug Guardian.Plug.EnsureSession, %{ on_failure: { SessionController, :new } } when not action in [:help]

  def index(conn, _params) do
    # paginator = Action
    # |> Action.order_by_name
    # |> Paginator.new(_params)

    # render conn, :index, 
    #     current_user: Guardian.Plug.current_resource(conn),
    #     actions: paginator.entries,
    #     page_number: paginator.page_number,
    #     page_size: paginator.page_size,
    #     total_pages: paginator.total_pages

    render conn, :index, current_user: Guardian.Plug.current_resource(conn),
          actions: Repo.all(ActionQuery.sorted())
  end

  def import(conn, _params) do
  	render(conn, "import.html")
  end

  def help(conn, _params) do
    render(conn, "help.html")
  end

end
