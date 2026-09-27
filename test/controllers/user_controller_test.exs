defmodule Emotext.UserControllerTest do
  use Emotext.ConnCase

  alias Emotext.{Repo, User}

  test "anonymous account mutation redirects to login", %{conn: conn} do
    conn = get(conn, "/users/#{Ecto.UUID.generate()}/edit")
    assert redirected_to(conn) == "/login"
  end

  test "an authenticated user cannot edit another account", %{conn: conn} do
    owner = insert_user!("account-owner")
    other = insert_user!("account-other")
    conn = authenticate_browser(conn, owner)

    assert_raise Ecto.NoResultsError, fn ->
      get(conn, "/users/#{other.id}/edit")
    end
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

[executed on device: 76a4bdf5fc1b (a7fd9f41-8002-4c03-ac43-498109dd9775)]