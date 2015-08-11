defmodule Emotext.AuthController do
  use Emotext.Web, :controller

  alias Emotext.User
  alias Emotext.UserQuery

  @doc """
  This action is reached via `/auth` and redirects to the OAuth2 provider
  based on the chosen strategy.
  """
  def github(conn, _params) do
    redirect conn, external: GitHub.authorize_url!
  end

  def facebook(conn, _params) do
    redirect conn, external: Facebook.authorize_url!
  end

  @doc """
  This action is reached via `/auth/callback` is the the callback URL that
  the OAuth2 provider will redirect the user back to with a `code` that will
  be used to request an access token. The access token will then be used to
  access protected resources on behalf of the user.
  """
  def callback(conn, %{"provider" => provider, "code" => code}) do
    apply(__MODULE__, String.to_atom("#{provider}_callback"), [conn, code])
  end

  def github_callback(conn, code) do
    # Exchange an auth code for an access token
    token = GitHub.get_token!(code: code)

    # Request the user's data with the access token
    userinfo = OAuth2.AccessToken.get!(token, "/user")

    conn
    |> put_session(:access_token, token.access_token)

    apply(__MODULE__, :login, [conn, userinfo])

  end

  def login(conn, userinfo) do
    IO.puts Poison.Encoder.encode(userinfo, [])
    user = Repo.one(UserQuery.by_login_or_email(userinfo["email"] || userinfo["login"] || ""))
    if user do
      changeset = User.login_changeset(user, userinfo)
      if changeset.valid? do
        conn
        |> put_flash(:info, "Logged in.")
        |> Guardian.Plug.sign_in(user, :token, perms: %{ default: Guardian.Permissions.max })
        |> redirect(to: user_path(conn, :index))
      else
        redirect(conn, to: "/users/new", changeset: changeset)
      end
    else
      changeset = User.login_changeset(%User{}) |> Ecto.Changeset.add_error(:login, "not found")
      redirect(conn, to: "/users/new", changeset: changeset)
    end

  end

  def facebook_callback(conn, code) do
    token = Facebook.get_token!(code: code)

    userinfo = OAuth2.AccessToken.get!(token, "/user")

    conn
    |> put_session(:access_token, token.access_token)

    apply(__MODULE__, :login, [conn, userinfo])
  end
end
