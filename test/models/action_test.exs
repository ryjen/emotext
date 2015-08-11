defmodule Emotext.ActionTest do
  use Emotext.ModelCase

  alias Emotext.Action

  @valid_attrs %{name: "some content", others_auto: "some content", others_found: "some content", others_no_arg: "some content", self_auto: "some content", self_found: "some content", self_no_arg: "some content", self_not_found: "some content", vict_found: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Action.changeset(%Action{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Action.changeset(%Action{}, @invalid_attrs)
    refute changeset.valid?
  end
end
