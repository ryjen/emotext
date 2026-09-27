defmodule Emotext.HistoryTest do
  use ExUnit.Case, async: true

  alias Emotext.History

  test "supports message-only and action history shapes" do
    message = History.changeset(%History{}, %{message: "hello", user_screen_name: "tester"})
    action = History.changeset(%History{}, %{action_id: Ecto.UUID.generate(), user_screen_name: "tester"})

    assert message.valid?
    assert action.valid?
  end
end
