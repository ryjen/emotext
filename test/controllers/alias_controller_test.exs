defmodule Emotext.AliasControllerTest do
  use Emotext.ConnCase

  alias Emotext.{Action, Alias, Repo, User}

  setup %{conn: conn} do
    owner = insert_user!("alias-owner")
    other = insert_user!("alias-other")
    owner_action = insert_action!("owner-wave", owner.id)
    other_action = insert_action!("other-wave", other.id)

    {:ok,
     conn: put_req_header(conn, "accept", "application/json"),
     owner: owner,
     other: other,
     owner_action: owner_action,
     other_action: other_action}
  end

  test "rejects cross-user alias access", %{conn: conn, owner: owner, other: other} do
    alias_record =
      Repo.insert!(%Alias{name: ":wave", action_id: owner_action_id(owner), user_id: owner.id})

    conn =
      conn
      |> authenticate(other)
      |> get("/api/v1/users/#{owner.id}/aliases/#{alias_record.id}")

    assert response(conn, 403)
  end

  test "rejects aliases pointing at another user's action", %{
    conn: conn,
    owner: owner,
    other_action: other_action
  } do
    assert_error_sent 404, fn ->
      conn
      |> authenticate(owner)
      |> post("/api/v1/users/#{owner.id}/aliases", %{
        "alias" => %{"name" => ":steal", "action_id" => other_action.id}
      })
    end
  end

  test "forces alias ownership to the authenticated user", %{
    conn: conn,
    owner: owner,
    other: other,
    owner_action: owner_action
  } do
    conn =
      conn
      |> authenticate(owner)
      |> post("/api/v1/users/#{owner.id}/aliases", %{
        "alias" => %{"name" => ":wave", "action_id" => owner_action.id, "user_id" => other.id}
      })

    assert %{"data" => %{"id" => id}} = json_response(conn, 201)
    assert Repo.get!(Alias, id).user_id == owner.id
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

  defp insert_action!(name, user_id) do
    Repo.insert!(%Action{
      name: name,
      user_id: user_id,
      self_no_arg: "self",
      others_no_arg: "others",
      self_found: "self found",
      others_found: "others found",
      vict_found: "victim",
      self_not_found: "not found",
      self_auto: "self auto",
      others_auto: "others auto"
    })
  end

  defp owner_action_id(owner) do
    Repo.one!(from a in Action, where: a.user_id == ^owner.id, select: a.id)
  end
end
