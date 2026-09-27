defmodule Emotext.AuthControllerTest do
  use Emotext.ConnCase

  test "rejects OAuth callbacks without matching state", %{conn: conn} do
    conn =
      conn
      |> init_test_session(%{oauth_state: "expected"})
      |> get("/auth/callback/github", %{"code" => "unused", "state" => "wrong"})

    assert response(conn, 400) == "Invalid OAuth state"
  end

  test "rejects incomplete OAuth callbacks", %{conn: conn} do
    conn = get(conn, "/auth/callback/github")
    assert response(conn, 400) == "Invalid OAuth callback"
  end
end
