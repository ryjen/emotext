defmodule Emotext.Web.ActionController do
  use Emotext.Web, :controller

  alias Emotext.Action

  plug Guardian.Permissions, ensure: %{default: [:write_profile], user_actions: [:new, :edit, :update, :delete]}

  plug :scrub_params, "action" when action in [:create, :update]

  plug :authorize_user_action

  require Logger

  def index(conn, _params) do
    actions = Repo.all(Action)
    render(conn, actions: actions)
  end

  def new(conn, _params) do
    changeset = Action.changeset(%Action{})
    render(conn, changeset: changeset)
  end

  def create(conn, %{"action" => action_params}) do
    changeset = Action.changeset(%Action{}, action_params)
    case Repo.insert(changeset) do
      {:ok, _action} ->
        conn
        |> put_flash(:info, "Action created successfully.")
        |> redirect(to: user_path(conn, :show, current_user(conn)))
      {:error, changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def create(conn, %{"action" => action_params, "format" => "json" } ) do
    changeset = Action.changeset(%Action{}, action_params)
    case Repo.insert(changeset) do
      {:ok, action} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", user_path(conn, :show, current_user(conn)))
        |> render(:show, action: action)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> put_view(Emotext.ChangesetView)
        |> render(:error, changeset: changeset)
    end

  end

  def show(conn, %{"id" => id}) do
    action = Repo.get!(Action, id)
    render(conn, action: action)
  end

  def edit(conn, %{"id" => id}) do
    action = Repo.get!(Action, id)
    changeset = Action.changeset(action)
    render(conn, action: action, changeset: changeset)
  end

  def update(conn, %{"id" => id, "action" => action_params}) do
    action = Repo.get!(Action, id)
    changeset = Action.changeset(action, action_params)

    case Repo.update(changeset) do
      {:ok, _action} ->
        conn
        |> put_flash(:info, "Action updated successfully.")
        |> redirect(to: user_path(conn, :show, current_user(conn)))
      {:error, changeset} ->
        render(conn, "edit.html", action: action, changeset: changeset)
    end
  end

  def update(conn, %{"id" => id, "action" => action_params, "format" => "json"}) do
    action = Repo.get!(Action, id)
    changeset = Action.changeset(action, action_params)

    case Repo.update(changeset) do
      {:ok, action} ->
        conn
        |> put_status(:updated)
        |> put_resp_header("location", user_path(conn, :show, current_user(conn)))
        |> render(:show, action: action)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> put_view(Emotext.ChangesetView)
        |> render(:error, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    action = Repo.get!(Action, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(action)

    conn
    |> put_flash(:info, "Action deleted successfully.")
    |> redirect(to: user_path(conn, :show, current_user(conn)))
  end

  #defp put_format_param(conn, _) do
  #  put_in conn.params["_format"], Phoenix.Controller.get_format(conn)
  #end

   defp current_user(conn) do
       Guardian.Plug.current_resource(conn)
   end

  defp authorize_user_action(conn, _) do
   Logger.info conn.params["user_id"]
   if conn.params["user_id"] && conn.params["user_id"] == Guardian.Plug.current_resource(conn).id do
     conn
   else
     conn |> put_flash(:info, "You can't access that action") |> redirect(to: "/") |> halt
   end
 end

end
