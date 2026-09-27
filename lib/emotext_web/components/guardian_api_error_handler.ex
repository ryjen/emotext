defmodule Emotext.Web.GuardianAPIErrorHandler do
  @behaviour Guardian.Plug.ErrorHandler

  @impl Guardian.Plug.ErrorHandler
  def auth_error(conn, {type, _reason}, _opts) do
    status =
      if type in [:unauthenticated, :invalid_token, :no_resource_found],
        do: :unauthorized,
        else: :forbidden

    conn
    |> Plug.Conn.put_status(status)
    |> Phoenix.Controller.json(%{error: Atom.to_string(type)})
  end
end
