defmodule Emotext.ActionControllerTest do
  use Emotext.ConnCase

  alias Emotext.{Action, Repo, User}

  @action_attrs %{
    "name" => "wave",
    "self_no_arg" => "You wave.",
    "others_no_arg" => "$n waves.",
    "self_found" => "You wave at $N.",
    "others_found" => "$n waves at $N.",
    "vict_found" => "$n waves at you.",
    "self_not_found" => "They are not here.",
    "self_auto" => "You wave at yourself.",
    "others_auto" => "$n waves at themself."
  }

  setup %{conn: conn} do
    owner = insert_user!("owner")
    other = insert_user!("other")

    {:ok, conn: put_req_header(conn, "accept", "application/json"), owner: owner, other: other}
  end

  test "rejects anonymous API access", %{conn: conn, owner: owner} do
    conn = get(conn, "/api/v1/users/#{owner.id}/actions")
    assert json_response(conn, 401)["error"]
  end

  test "rejects a valid token scoped to another user", %{conn: conn, owner: owner, other: other} do
    conn = conn |> authenticate(other) |> get("/api/v1/users/#{owner.id}/actions")
    assert response(conn, 403)
  end

  test "forces created actions to the authenticated owner", %{
    conn: conn,
    owner: owner,
    other: other
  } do
    params = Map.put(@action_attrs, "user_id", other.id)

    conn =
      conn
      |> authenticate(owner)
      |> post("/api/v1/users/#{owner.id}/actions", %{"action" => params})

    assert %{"data" => %{"id" => id}} = json_response(conn, 201)
    assert Repo.get!(Action, id).user_id == owner.id
  end

  defp authenticate(conn, user) do
    {:ok, token, _claims} = Emotext.Guardian.encode_and_sign(user)
    put_req_header(conn, "authorization", "Bearer #{token}")
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
