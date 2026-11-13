defmodule Emotext.PageControllerTest do
  use Emotext.ConnCase

  test "help remains publicly reachable", %{conn: conn} do
    conn = get(conn, "/help")
    assert html_response(conn, 200)
  end

  test "browser responses set a restrictive CSP", %{conn: conn} do
    response = get(conn, "/help")
    [policy] = get_resp_header(response, "content-security-policy")

    assert policy =~ "default-src 'self'"
    assert policy =~ "script-src 'self'"
    assert policy =~ "object-src 'none'"
    assert policy =~ "frame-ancestors 'none'"
    refute policy =~ "'unsafe-eval'"
  end

  test "chat root requires a session and redirects through guest policy", %{conn: conn} do
    conn = get(conn, "/")
    assert redirected_to(conn) == "/guest"
  end
end
