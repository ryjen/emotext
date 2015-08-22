defmodule Emotext.ActionController do
  use Emotext.Web, :controller

  alias Emotext.Action

  plug :scrub_params, "action" when action in [:create, :update]

  def index(conn, _params) do
    actions = Repo.all(Action)
    render(conn, "index.html", actions: actions)
  end

  def new(conn, _params) do
    changeset = Action.changeset(%Action{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"action" => action_params}) do
    changeset = Action.changeset(%Action{}, action_params)

    case Repo.insert(changeset) do
      {:ok, _action} ->
        conn
        |> put_flash(:info, "Action created successfully.")
        |> redirect(to: action_path(conn, :index))
      {:error, changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    action = Repo.get!(Action, id)
    render(conn, "show.html", action: action)
  end

  def edit(conn, %{"id" => id}) do
    action = Repo.get!(Action, id)
    changeset = Action.changeset(action)
    render(conn, "edit.html", action: action, changeset: changeset)
  end

  def update(conn, %{"id" => id, "action" => action_params}) do
    action = Repo.get!(Action, id)
    changeset = Action.changeset(action, action_params)

    case Repo.update(changeset) do
      {:ok, action} ->
        conn
        |> put_flash(:info, "Action updated successfully.")
        |> redirect(to: action_path(conn, :show, action))
      {:error, changeset} ->
        render(conn, "edit.html", action: action, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    action = Repo.get!(Action, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(action)

    conn
    |> put_flash(:info, "Action deleted successfully.")
    |> redirect(to: action_path(conn, :index))
  end
end
