defmodule Emotext.AliasTest do
  use ExUnit.Case, async: true

  alias Emotext.Alias

  test "requires a name and action id" do
    action_id = Ecto.UUID.generate()
    assert Alias.changeset(%Alias{}, %{name: ":)", action_id: action_id}).valid?
    refute Alias.changeset(%Alias{}, %{name: ":)"}).valid?
  end
end
