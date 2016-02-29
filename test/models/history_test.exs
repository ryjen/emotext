defmodule Emotext.HistoryTest do
  use Emotext.ModelCase

  alias Emotext.History

  @valid_attrs %{text: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = History.changeset(%History{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = History.changeset(%History{}, @invalid_attrs)
    refute changeset.valid?
  end
end
