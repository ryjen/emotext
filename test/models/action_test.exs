defmodule Emotext.ActionTest do
  use ExUnit.Case, async: true

  alias Emotext.Action

  @valid_attrs %{
    name: "smile",
    self_no_arg: "You smile.",
    others_no_arg: "$n smiles.",
    self_found: "You smile at $N.",
    others_found: "$n smiles at $N.",
    vict_found: "$n smiles at you.",
    self_not_found: "They are not here.",
    self_auto: "You smile at yourself.",
    others_auto: "$n smiles at themself."
  }

  test "accepts the PostgreSQL-backed string action representation" do
    assert Action.changeset(%Action{}, @valid_attrs).valid?
  end

  test "requires the complete action contract" do
    refute Action.changeset(%Action{}, %{name: "smile"}).valid?
  end
end
