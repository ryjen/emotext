defmodule Emotext.Web.AuthController do
  use Emotext.Web, :controller

  alias Emotext.{Repo, User, UserQuery}

  def github(conn, _params), do: begin_oauth(conn, &GitHub.authorize_url!/1)
  def facebook(conn, _params), do: begin_oauth(conn, &Facebook.authorize_url!/1)

  def callback(conn, %{"provider" => provider, "code" => code, "state" => state}) do
    with :ok <- verify_oauth_state(conn, state) do
      conn = delete_session(conn, :oauth_state)

      case provider do
        "github" -> github_callback(conn, code)
        "facebook" -> facebook_callback(conn, code)
        _ -> send_resp(conn, :bad_request, "Unsupported OAuth provider")
      end
    else
      _ -> send_resp(conn, :bad_request, "Invalid OAuth state")
    end
  end

  def callback(conn, _params), do: send_resp(conn, :bad_request, "Invalid OAuth callback")

  def github_callback(conn, code) do
    token = GitHub.get_token!(code: code)
    userinfo = OAuth2.Client.get!(token, "/user").body
    login(conn, userinfo)
  end

  def facebook_callback(conn, code) do
    token = Facebook.get_token!(code: code)
    userinfo = OAuth2.Client.get!(token, "/me?fields=id,name,email").body
    login(conn, userinfo)
  end

  def login(conn, %{"email" => email}) when is_binary(email) and email != "" do
    case Repo.one(UserQuery.by_email(email)) do
      %User{} = user ->
        user = User.maybe_update_screen_name(user)

        conn
        |> put_flash(:info, "Logged in.")
        |> Guardian.Plug.sign_in(user)
        |> redirect(to: user_path(conn, :index))

      nil ->
        conn
        |> put_flash(:error, "No local account is linked to that verified email.")
        |> redirect(to: "/users/new")
    end
  end

  def login(conn, _userinfo) do
    conn
    |> put_flash(:error, "The OAuth provider did not return a usable email address.")
    |> redirect(to: "/users/new")
  end

  defp begin_oauth(conn, authorize_url) do
    state =
      32
      |> :crypto.strong_rand_bytes()
      |> Base.url_encode64(padding: false)

    conn
    |> put_session(:oauth_state, state)
    |> redirect(external: authorize_url.(state: state))
  end

  defp verify_oauth_state(conn, state) when is_binary(state) do
    case get_session(conn, :oauth_state) do
      expected when is_binary(expected) and byte_size(expected) == byte_size(state) ->
        if Plug.Crypto.secure_compare(expected, state), do: :ok, else: :error

      _ ->
        :error
    end
  end
end
