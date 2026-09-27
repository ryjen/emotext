defmodule Emotext.ChannelCase do
  use ExUnit.CaseTemplate

  using do
    quote do
      @endpoint Emotext.Web.Endpoint

      import Phoenix.ChannelTest
      alias Emotext.Repo
      import Ecto.Query
    end
  end

  setup tags do
    owner =
      Ecto.Adapters.SQL.Sandbox.start_owner!(
        Emotext.Repo,
        shared: not tags[:async]
      )

    on_exit(fn -> Ecto.Adapters.SQL.Sandbox.stop_owner(owner) end)
    :ok
  end
end
