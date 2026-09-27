defmodule Emotext.ConnCase do
  use ExUnit.CaseTemplate

  using do
    quote do
      @endpoint Emotext.Web.Endpoint

      import Plug.Conn
      import Phoenix.ConnTest

      alias Emotext.Repo
      import Ecto.Query
      import Emotext.Web.Router.Helpers
    end
  end

  setup tags do
    owner =
      Ecto.Adapters.SQL.Sandbox.start_owner!(
        Emotext.Repo,
        shared: not tags[:async]
      )

    on_exit(fn -> Ecto.Adapters.SQL.Sandbox.stop_owner(owner) end)
    {:ok, conn: Phoenix.ConnTest.build_conn()}
  end
end
