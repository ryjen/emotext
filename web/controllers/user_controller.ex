defmodule Emotext.UserController do
  use Emotext.Web, :controller

  alias Emotext.User
  alias Emotext.SessionController
  alias Emotext.UserQuery
  alias Emotext.ActionQuery
  alias Emotext.AliasQuery

  require Logger

  plug PlugRedirectHttps

  plug Guardian.Plug.EnsureAuthenticated, %{ on_failure: { SessionController, :new } } when not action in [:new, :create]

  #plug Guardian.Plug.EnsurePermissions, %{ on_failure: { __MODULE__, :forbidden }, default: [:write_profile] } when action in [:edit, :update, :delete]
  plug Guardian.Permissions, ensure: %{default: [:write_profile], user_actions: [:edit, :update, :delete]}

  plug :scrub_params, "user" when action in [:create, :update]

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
              Logger.debug "Created user #{user.screen_name}"
              conn
              |> put_flash(:info, "User created successfully.")
              |> Guardian.Plug.sign_in(user, :token, perms: %{ default: Guardian.Permissions.max })
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
    user = Repo.get(User, id)
    changeset = User.update_changeset(user)
    render(conn, "edit.html", user: user, changeset: changeset)
  end

  def update(conn, %{"id" => id, "user" => user_params}) do
    user = Repo.get(User, id)
    changeset = User.update_changeset(user, user_params)

    if changeset.valid? do
      Repo.update(changeset)
      user = User.change_screen_name(user, user.username)
      conn
      |> put_flash(:info, "User updated successfully.")
      |> redirect(to: user_path(conn, :show, user))
    else
      render(conn, "edit.html", user: user, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    user = Repo.get(User, id)
    Repo.delete(user)

    Guardian.Plug.sign_out(conn)
    |> put_flash(:info, "User deleted successfully.")
    |> redirect(to: "/")
  end

  def forbidden(conn, _) do
    conn
    |> put_flash(:error, "Forbidden")
    |> redirect(to: "/")
  end
end
