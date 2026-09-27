defmodule Emotext.PageControllerTest do
  use Emotext.ConnCase

  test "help remains publicly reachable", %{conn: conn} do
    conn = get(conn, "/help")
    assert html_response(conn, 200)
  end

  test "chat root requires a session and redirects through guest policy", %{conn: conn} do
    conn = get(conn, "/")
    assert redirected_to(conn) == "/guest"
  end
end
