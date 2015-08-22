defmodule Emotext.AliasController do
  use Emotext.Web, :controller

  alias Emotext.Alias

  plug :scrub_params, "alias" when action in [:create, :update]

  def index(conn, _params) do
    aliases = Repo.all(Alias)
    render(conn, "index.json", aliases: aliases)
  end

  def create(conn, %{"alias" => alias_params}) do
    changeset = Alias.changeset(%Alias{}, alias_params)

    case Repo.insert(changeset) do
      {:ok, alias} ->
        conn
        |> put_status(:created)
        |> render("show.json", alias: alias)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Emotext.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    alias = Repo.get!(Alias, id)
    render conn, "show.json", alias: alias
  end

  def update(conn, %{"id" => id, "alias" => alias_params}) do
    alias = Repo.get!(Alias, id)
    changeset = Alias.changeset(alias, alias_params)

    case Repo.update(changeset) do
      {:ok, alias} ->
        render(conn, "show.json", alias: alias)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Emotext.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    alias = Repo.get!(Alias, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    alias = Repo.delete!(alias)

    send_resp(conn, :no_content, "")
  end
end
