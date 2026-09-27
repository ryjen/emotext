defmodule Emotext.QueryTest do
  use Emotext.ModelCase

  alias Emotext.{Action, ActionQuery, Repo, User}

  test "available actions include global and own actions but exclude other users' actions" do
    owner = insert_user!("query-owner")
    other = insert_user!("query-other")

    global = insert_action!("global", nil)
    own = insert_action!("own", owner.id)
    _other = insert_action!("other", other.id)

    ids = ActionQuery.available_to_user(owner) |> Repo.all() |> Enum.map(& &1.id)

    assert global.id in ids
    assert own.id in ids
    assert length(ids) == 2
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
end
