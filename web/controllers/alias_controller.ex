defmodule Emotext.AliasController do
  use Emotext.Web, :controller

  alias Emotext.Alias
  alias Emotext.ActionQuery

  plug PlugRedirectHttps

  plug Guardian.Plug.EnsureAuthenticated, %{ on_failure: { SessionController, :new } }

  plug Guardian.Plug.EnsurePermissions, %{ on_failure: { __MODULE__, :forbidden }, default: [:write_profile] } when action in [:new, :edit, :update, :delete]

  plug :authorize_user_alias

  require Logger

  plug :scrub_params, "alias" when action in [:create, :update]

  def index(conn, _params) do
    aliases = Repo.all(Alias)
    render(conn, aliases: aliases)
  end
  def new(conn, _params) do
    changeset = Alias.changeset(%Alias{})
    actions = select_actions()
    render(conn, changeset: changeset, actions: actions)
  end
  def create(conn, %{"alias" => alias_params}) do
    changeset = Alias.changeset(%Alias{}, alias_params)

    case Repo.insert(changeset) do
      {:ok, alias} ->
        conn
        |> put_status(:created)
        |> redirect(to: user_path(conn, :show, current_user(conn)))
      {:error, changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def create(conn, %{"alias" => alias_params, "format" => "json" } ) do
    changeset = Alias.changeset(%Alias{}, alias_params)
    case Repo.insert(changeset) do
      {:ok, alias} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", user_path(conn, :show))
        |> render(:show, alias: alias)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Emotext.ChangesetView, :error, changeset: changeset)
    end

  end
  def show(conn, %{"id" => id}) do
    alias = Repo.get!(Alias, id)
    render conn, "show.json", alias: alias
  end

    def edit(conn, %{"id" => id}) do
      alias = Repo.get!(Alias, id)
      changeset = Alias.changeset(alias)
      actions = select_actions()
      render(conn, alias: alias, actions: actions, changeset: changeset)
    end

  def update(conn, %{"id" => id, "alias" => alias_params}) do
    alias = Repo.get!(Alias, id)
    changeset = Alias.changeset(alias, alias_params)

    case Repo.update(changeset) do
      {:ok, alias} ->
          conn
          |> put_flash(:info, "Alias updated successfully.")
          |> redirect(to: user_path(conn, :show, current_user(conn)))
      {:error, changeset} ->
        render(conn, "edit.html", alias: alias, changeset: changeset)
    end
  end

  def update(conn, %{"id" => id, "alias" => alias_params, "format" => "json"}) do
      alias = Repo.get!(Alias, id)
      changeset = Alias.changeset(alias, alias_params)

    case Repo.update(changeset) do
      {:ok, alias} ->
        conn
        |> put_status(:updated)
        |> put_resp_header("location", user_path(conn, :show))
        |> render(:show, alias: alias)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Emotext.ChangesetView, :error, changeset: changeset)
    end
  end


  def delete(conn, %{"id" => id}) do
    alias = Repo.get!(Alias, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    alias = Repo.delete!(alias)

    conn
    |> put_flash(:info, "Alias deleted successfully.")
    |> redirect(to: user_path(conn, :show, current_user(conn)))
  end

    defp put_format_param(conn, _) do
      put_in conn.params["_format"], Phoenix.Controller.get_format(conn)
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

 defp select_actions() do
     Repo.all(ActionQuery.sorted()) |> Enum.map(&{&1.name, &1.id})
 end
end
