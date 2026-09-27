defmodule Emotext.Web.AliasController do
  use Emotext.Web, :controller

  alias Emotext.{Action, ActionQuery, Alias, AliasQuery, Repo}

  plug Guardian.Plug.EnsureAuthenticated, module: Emotext.Guardian
  plug :authorize_user_scope

  def index(conn, _params) do
    aliases = Repo.all(AliasQuery.for_user(current_user(conn)))
    render(conn, :index, aliases: aliases)
  end

  def new(conn, _params) do
    render(conn, :new,
      changeset: Alias.changeset(%Alias{}),
      actions: select_actions(current_user(conn))
    )
  end

  def create(conn, %{"alias" => params}) do
    params = owned_alias_params(conn, params)

    case Repo.insert(Alias.changeset(%Alias{}, params)) do
      {:ok, alias_record} -> created(conn, alias_record)
      {:error, changeset} -> validation_error(conn, :new, changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    render(conn, :show, alias: owned_alias!(conn, id))
  end

  def edit(conn, %{"id" => id}) do
    alias_record = owned_alias!(conn, id)

    render(conn, :edit,
      alias: alias_record,
      changeset: Alias.changeset(alias_record),
      actions: select_actions(current_user(conn))
    )
  end

  def update(conn, %{"id" => id, "alias" => params}) do
    alias_record = owned_alias!(conn, id)
    params = owned_alias_params(conn, params)

    case Repo.update(Alias.changeset(alias_record, params)) do
      {:ok, alias_record} -> updated(conn, alias_record)
      {:error, changeset} -> validation_error(conn, :edit, changeset, alias: alias_record)
    end
  end

  def delete(conn, %{"id" => id}) do
    alias_record = owned_alias!(conn, id)
    Repo.delete!(alias_record)

    if get_format(conn) == "json" do
      send_resp(conn, :no_content, "")
    else
      conn
      |> put_flash(:info, "Alias deleted successfully.")
      |> redirect(to: user_path(conn, :show, current_user(conn)))
    end
  end

  defp created(conn, alias_record) do
    if get_format(conn) == "json" do
      conn |> put_status(:created) |> render(:show, alias: alias_record)
    else
      conn
      |> put_flash(:info, "Alias created successfully.")
      |> redirect(to: user_path(conn, :show, current_user(conn)))
    end
  end

  defp updated(conn, alias_record) do
    if get_format(conn) == "json" do
      render(conn, :show, alias: alias_record)
    else
      conn
      |> put_flash(:info, "Alias updated successfully.")
      |> redirect(to: user_path(conn, :show, current_user(conn)))
    end
  end

  defp validation_error(conn, template, changeset, assigns \\ []) do
    if get_format(conn) == "json" do
      conn |> put_status(:unprocessable_entity) |> json(%{errors: errors(changeset)})
    else
      render(
        conn,
        template,
        Keyword.merge(assigns,
          changeset: changeset,
          actions: select_actions(current_user(conn))
        )
      )
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

  defp owned_alias!(conn, id) do
    Repo.get_by!(Alias, id: id, user_id: current_user(conn).id)
  end

  defp owned_alias_params(conn, params) do
    user = current_user(conn)
    action_id = params["action_id"] || params[:action_id]
    action = Repo.get!(Action, action_id)

    if is_nil(action.user_id) or action.user_id == user.id do
      Map.put(params, "user_id", user.id)
    else
      raise Ecto.NoResultsError, queryable: Action
    end
  end

  defp select_actions(user) do
    ActionQuery.available_to_user(user)
    |> Repo.all()
    |> Enum.map(&{&1.name, &1.id})
  end

  defp authorize_user_scope(conn, _) do
    case current_user(conn) do
      %{id: id} when id == conn.params["user_id"] -> conn
      _ -> conn |> send_resp(:forbidden, "Forbidden") |> halt()
    end
  end
end
