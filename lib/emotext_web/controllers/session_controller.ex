defmodule Emotext.Web.SessionController do
  use Emotext.Web, :controller
  require Logger
  alias Emotext.User
  alias Emotext.UserQuery
  alias Emotext.Guardian

  plug(:scrub_params, "user" when action in [:create])

  def new(conn, _params) do
    changeset = User.login_changeset(%User{})
    conn
    |> put_view(Emotext.SessionView)
    |> render("new.html", changeset: changeset)
  end

  def guest(conn, _params) do
    user = User.from_username("guest")

    if !user do
      ^user = Repo.insert!(%User{username: "guest", email: "guest@email.com", gender: :unknown})
    end

    guest_name = "guest-#{Randomize.random(9999)}"
    user = User.change_screen_name(user, guest_name)
    Logger.info("Guest #{user.id} #{user.screen_name}")

    conn
    |> Guardian.Plug.sign_in(user)
    |> put_flash(:info, "Using guest account, create an account to have your own username.")
    |> redirect(to: "/")
  end

  def create(conn, params = %{}) do
    user = Repo.one(UserQuery.by_login_or_email(params["user"]["email"] || ""))

    if user do
      changeset = User.login_changeset(user, params["user"])
      Logger.info("Created #{user.screen_name}")

      if changeset.valid? do
        conn
        |> Guardian.Plug.sign_in(user)
        |> redirect(to: "/")
      else
        render(conn, "new.html", changeset: changeset)
      end
    else
      changeset = User.login_changeset(%User{}) |> Ecto.Changeset.add_error(:login, "not found")
      render(conn, "new.html", changeset: changeset)
    end
  end

  def delete(conn, _params) do
    Guardian.Plug.sign_out(conn)
    |> put_flash(:info, "Logged out successfully.")
    |> redirect(to: "/")
  end

  def unauthenticated_api(conn, _params) do
    the_conn = put_status(conn, 401)

    case Guardian.Plug.current_claims(conn) do
      {:error, :no_session} -> json(the_conn, %{error: "Login required"})
      {:error, reason} -> json(the_conn, %{error: reason})
      _ -> json(the_conn, %{error: "Login required"})
    end
  end

  def forbidden_api(conn, _) do
    conn
    |> put_status(403)
    |> json(%{error: :forbidden})
  end
end
