defmodule Emotext.UserControllerTest do
  use Emotext.ConnCase

  alias Emotext.{Repo, User}

  test "anonymous account mutation redirects to login", %{conn: conn} do
    conn = get(conn, "/users/#{Ecto.UUID.generate()}/edit")
    assert redirected_to(conn) == "/login"
  end

  test "the registration page remains available to anonymous visitors", %{conn: conn} do
    assert html_response(get(conn, "/users/new"), 200) =~ "New Account"
  end

  test "an authenticated user cannot edit another account", %{conn: conn} do
    owner = insert_user!("account-owner")
    other = insert_user!("account-other")
    conn = authenticate_browser(conn, owner)

    assert_raise Ecto.NoResultsError, fn ->
      get(conn, "/users/#{other.id}/edit")
    end
  end

  test "independently signed-in guest sessions cannot browse or mutate shared account resources" do
    guest_session_a = get(build_conn(), "/guest")
    guest_session_b = get(build_conn(), "/guest")
    assert redirected_to(guest_session_a) == "/"
    assert redirected_to(guest_session_b) == "/"

    guest = User.from_username("guest")
    assert User.shared_guest?(guest)

    for session <- [guest_session_a, guest_session_b] do
      assert response(get(recycle(session), "/users"), 403)
      assert response(get(recycle(session), "/users/#{guest.id}"), 403)
      assert response(get(recycle(session), "/users/#{guest.id}/edit"), 403)

      assert response(
               put(recycle(session), "/users/#{guest.id}", %{
                 "user" => %{"username" => "stolen", "email" => "stolen@example.test"}
               }),
               403
             )

      assert response(delete(recycle(session), "/users/#{guest.id}"), 403)
    end

    assert Repo.get!(User, guest.id).username == "guest"
  end

  test "the directory omits emails and profiles show email only to their owner", %{conn: conn} do
    owner = insert_user!("privacy-owner")
    other = insert_user!("privacy-other")
    conn = authenticate_browser(conn, owner)

    directory = html_response(get(conn, "/users"), 200)
    assert directory =~ owner.username
    assert directory =~ other.username
    refute directory =~ owner.email
    refute directory =~ other.email

    other_profile = html_response(get(conn, "/users/#{other.id}"), 200)
    refute other_profile =~ other.email
    refute other_profile =~ owner.email

    own_profile = html_response(get(conn, "/users/#{owner.id}"), 200)
    assert own_profile =~ owner.email

    own_edit = html_response(get(conn, "/users/#{owner.id}/edit"), 200)
    assert own_edit =~ "Your Account"
  end

  defp authenticate_browser(conn, user) do
    pipeline =
      Guardian.Plug.Pipeline.init(
        module: Emotext.Guardian,
        error_handler: Emotext.Web.GuardianErrorHandler
      )

    conn
    |> init_test_session(%{})
    |> Guardian.Plug.Pipeline.call(pipeline)
    |> Emotext.Guardian.Plug.sign_in(user)
  end

  defp insert_user!(name) do
    Repo.insert!(%User{
      username: name,
      email: "#{name}@example.com",
      encrypted_password: Bcrypt.hash_pwd_salt("password123"),
      gender: :unknown
    })
  end
end
