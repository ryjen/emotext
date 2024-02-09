defmodule Emotext.Web.GuardianErrorHandler do
  import Emotext.Web.Router.Helpers
  require Logger

  @behaviour Guardian.Plug.ErrorHandler

  @impl Guardian.Plug.ErrorHandler
  def auth_error(conn, {type, reason}, _opts) do
    Logger.info "authorization #{type} #{reason}"
    conn
    |> Phoenix.Controller.redirect(to: login_path(conn, :new))
  end
end
