defmodule Emotext.Web.ActionController do
  use Emotext.Web, :controller

  alias Emotext.{Action, ActionQuery, Repo}

  plug Guardian.Plug.EnsureAuthenticated, module: Emotext.Guardian
  plug :authorize_user_scope

  def index(conn, _params) do
    actions = Repo.all(ActionQuery.for_user(current_user(conn)))
    render(conn, :index, actions: actions)
  end

  def new(conn, _params) do
    render(conn, :new, changeset: Action.changeset(%Action{}))
  end

  def create(conn, %{"action" => params}) do
    params = Map.put(params, "user_id", current_user(conn).id)

    case Repo.insert(Action.changeset(%Action{}, params)) do
      {:ok, action} -> created(conn, action)
      {:error, changeset} -> validation_error(conn, :new, changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    render(conn, :show, action: owned_action!(conn, id))
  end

  def edit(conn, %{"id" => id}) do
    action = owned_action!(conn, id)
    render(conn, :edit, action: action, changeset: Action.changeset(action))
  end

  def update(conn, %{"id" => id, "action" => params}) do
    action = owned_action!(conn, id)
    params = Map.put(params, "user_id", current_user(conn).id)

    case Repo.update(Action.changeset(action, params)) do
      {:ok, action} -> updated(conn, action)
      {:error, changeset} -> validation_error(conn, :edit, changeset, action: action)
    end
  end

  def delete(conn, %{"id" => id}) do
    action = owned_action!(conn, id)
    Repo.delete!(action)

    if get_format(conn) == "json" do
      send_resp(conn, :no_content, "")
    else
      conn
      |> put_flash(:info, "Action deleted successfully.")
      |> redirect(to: user_path(conn, :show, current_user(conn)))
    end
  end

  defp created(conn, action) do
    if get_format(conn) == "json" do
      conn |> put_status(:created) |> render(:show, action: action)
    else
      conn
      |> put_flash(:info, "Action created successfully.")
      |> redirect(to: user_path(conn, :show, current_user(conn)))
    end
  end

  defp updated(conn, action) do
    if get_format(conn) == "json" do
      render(conn, :show, action: action)
    else
      conn
      |> put_flash(:info, "Action updated successfully.")
      |> redirect(to: user_path(conn, :show, current_user(conn)))
    end
  end

  defp validation_error(conn, template, changeset, assigns \\ []) do
    if get_format(conn) == "json" do
      conn |> put_status(:unprocessable_entity) |> json(%{errors: errors(changeset)})
    else
      render(conn, template, Keyword.merge(assigns, changeset: changeset))
    end
  end

  defp errors(changeset) do
    Ecto.Changeset.traverse_errors(changeset, fn {message, opts} ->
      Enum.reduce(opts, message, fn {key, value}, acc ->
        String.replace(acc, "%{#{key}}", to_string(value))
      end)
    end)
  end

  defp current_user(conn), do: Guardian.Plug.current_resource(conn)

  defp owned_action!(conn, id) do
    Repo.get_by!(Action, id: id, user_id: current_user(conn).id)
  end

  defp authorize_user_scope(conn, _) do
    case current_user(conn) do
      %{id: id} when id == conn.params["user_id"] -> conn
      _ -> conn |> send_resp(:forbidden, "Forbidden") |> halt()
    end
  end
end
