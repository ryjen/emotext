defmodule Emotext.Web.UserController do
  use Emotext.Web, :controller

  alias Emotext.User
  alias Emotext.UserQuery
  alias Emotext.ActionQuery
  alias Emotext.AliasQuery

  require Logger

  plug Guardian.Plug.EnsureAuthenticated when action not in [:new, :create]

  def index(conn, _params) do
    users = Repo.all(User)
    render(conn, "index.html", users: users)
  end

  def new(conn, _params) do
    changeset = User.create_changeset(%User{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"user" => user_params}) do
    changeset = User.create_changeset(%User{}, user_params)

    if changeset.valid? do
      user = Repo.one(UserQuery.by_email(user_params["email"]))

      if user do
        conn
        |> put_flash(:error, "User already exists.")
        |> render("new.html", changeset: changeset)
      else
        case Repo.insert(changeset) do
          {:ok, user} ->
            user = User.maybe_update_screen_name(user)
            Logger.debug("Created user #{user.screen_name}")

            conn
            |> put_flash(:info, "User created successfully.")
            |> Emotext.Guardian.Plug.sign_in(user)
            |> redirect(to: "/")

          {:error, changeset} ->
            conn
            |> put_flash(:error, "unable to create user.")
            |> render("new.html", changeset: changeset)
        end
      end
    else
      render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    user = Repo.get(User, id)
    actions = Repo.all(ActionQuery.for_user(user))
    aliases = Repo.all(AliasQuery.for_user(user))
    render(conn, "show.html", user: user, actions: actions, aliases: aliases)
  end

  def edit(conn, %{"id" => id}) do
    user = owned_user!(conn, id)
    changeset = User.update_changeset(user)
    render(conn, "edit.html", user: user, changeset: changeset)
  end

  def update(conn, %{"id" => id, "user" => user_params}) do
    user = owned_user!(conn, id)
    changeset = User.update_changeset(user, user_params)

    case Repo.update(changeset) do
      {:ok, updated_user} ->
        updated_user = User.maybe_update_screen_name(updated_user)

        conn
        |> put_flash(:info, "User updated successfully.")
        |> redirect(to: user_path(conn, :show, updated_user))

      {:error, changeset} ->
        render(conn, "edit.html", user: user, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    user = owned_user!(conn, id)
    Repo.delete!(user)

    conn
    |> Emotext.Guardian.Plug.sign_out()
    |> put_flash(:info, "User deleted successfully.")
    |> redirect(to: "/")
  end

  defp owned_user!(conn, id) do
    current_user = Guardian.Plug.current_resource(conn)

    if id == current_user.id do
      Repo.get!(User, id)
    else
      raise Ecto.NoResultsError, queryable: User
    end
  end

  def forbidden(conn, _) do
    conn
    |> put_flash(:error, "Forbidden")
    |> redirect(to: "/")
  end
end

[executed on device: 76a4bdf5fc1b (a7fd9f41-8002-4c03-ac43-498109dd9775)]