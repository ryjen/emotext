defmodule Emotext.Web.AliasController do
  use Emotext.Web, :controller

  alias Emotext.Alias
  alias Emotext.ActionQuery

  plug Guardian.Plug.EnsureAuthenticated, module: Emotext.Guardian
  plug Guardian.Permissions, ensure: %{default: [:write_profile], user_actions: [:new, :edit, :update, :delete]}

  plug :authorize_user_alias

  require Logger

  plug :scrub_params, "alias" when action in [:create, :update]

  def index(conn, _params) do
    aliases = Repo.all(Alias)
    render(conn, aliases: aliases)
  end
  def new(conn, _params) do
    changeset = Alias.changeset(%Alias{})
    actions = select_actions(current_user(conn))
    render(conn, changeset: changeset, actions: actions)
  end
  def create(conn, %{"alias" => alias_params}) do
    changeset = Alias.changeset(%Alias{}, owned_params(conn, alias_params))

    case Repo.insert(changeset) do
      {:ok, _alias} ->
        conn
        |> put_flash(:info, "Alias created successfully.")
        |> redirect(to: user_path(conn, :show, current_user(conn)))
      {:error, changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def create(conn, %{"alias" => alias_params, "format" => "json" } ) do
    changeset = Alias.changeset(%Alias{}, owned_params(conn, alias_params))
    case Repo.insert(changeset) do
      {:ok, alias} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", user_path(conn, :show))
        |> render(:show, alias: alias)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> put_view(Emotext.ChangesetView)
        |> render(:error, changeset: changeset)
    end

  end
  def show(conn, %{"id" => id}) do
    alias = owned_alias!(conn, id)
    render conn, "show.json", alias: alias
  end

    def edit(conn, %{"id" => id}) do
      alias = owned_alias!(conn, id)
      changeset = Alias.changeset(alias)
      actions = select_actions(current_user(conn))
      render(conn, alias: alias, actions: actions, changeset: changeset)
    end

  def update(conn, %{"id" => id, "alias" => alias_params}) do
    alias = owned_alias!(conn, id)
    changeset = Alias.changeset(alias, owned_params(conn, alias_params))

    case Repo.update(changeset) do
      {:ok, ^alias} ->
          conn
          |> put_flash(:info, "Alias updated successfully.")
          |> redirect(to: user_path(conn, :show, current_user(conn)))
      {:error, changeset} ->
        render(conn, "edit.html", alias: alias, changeset: changeset)
    end
  end

  def update(conn, %{"id" => id, "alias" => alias_params, "format" => "json"}) do
      alias = owned_alias!(conn, id)
      changeset = Alias.changeset(alias, owned_params(conn, alias_params))

    case Repo.update(changeset) do
      {:ok, alias} ->
        conn
        |> put_status(:updated)
        |> put_resp_header("location", user_path(conn, :show))
        |> render(:show, alias: alias)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> put_view(Emotext.ChangesetView)
        |> render(:error, changeset: changeset)
    end
  end


  def delete(conn, %{"id" => id}) do
    alias = owned_alias!(conn, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(alias)

    conn
    |> put_flash(:info, "Alias deleted successfully.")
    |> redirect(to: user_path(conn, :show, current_user(conn)))
  end

  defp authorize_user_alias(conn, _) do
   Logger.info conn.params["user_id"]
   if conn.params["user_id"] && conn.params["user_id"] == Guardian.Plug.current_resource(conn).id do
     conn
   else
     conn |> put_flash(:info, "You can't access that alias") |> redirect(to: "/") |> halt
   end
 end

 defp current_user(conn) do
     Guardian.Plug.current_resource(conn)
 end

 defp owned_alias!(conn, id) do
   Repo.get_by!(Alias, id: id, user_id: current_user(conn).id)
 end

 defp owned_params(conn, params) do
   Map.put(params, "user_id", current_user(conn).id)
 end

 defp select_actions(user) do
   Repo.all(ActionQuery.available_to_user(user)) |> Enum.map(&{&1.name, &1.id})
 end

end
