defmodule Emotext.UserTest do
  use ExUnit.Case, async: true

  alias Emotext.User

  @valid_attrs %{
    username: "tester",
    email: "tester@example.com",
    password: "correct horse battery staple",
    password_confirmation: "correct horse battery staple",
    gender: :unknown
  }

  test "hashes passwords in the changeset" do
    changeset = User.create_changeset(%User{}, @valid_attrs)
    assert changeset.valid?
    assert Ecto.Changeset.get_change(changeset, :encrypted_password)
  end

  test "rejects reserved guest names" do
    changeset = User.create_changeset(%User{}, %{@valid_attrs | username: "guest-admin"})
    refute changeset.valid?
  end
end
