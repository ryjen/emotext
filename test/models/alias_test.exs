defmodule Emotext.AliasTest do
  use Emotext.ModelCase

  alias Emotext.Alias

  @valid_attrs %{action_id: 42, name: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Alias.changeset(%Alias{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Alias.changeset(%Alias{}, @invalid_attrs)
    refute changeset.valid?
  end
end
