defmodule Emotext.Web.AdminController do
  use Emotext.Web, :controller

  def import(conn, _params) do
    render(conn, "import.html")
  end

  # The historical upload handler only printed uploaded content to logs.
  # Refuse uploads until the admin import workflow is deliberately implemented.
  def import_file(conn, %{"import" => _import}) do
    send_resp(conn, :not_implemented, "Legacy admin import is unavailable")
  end
end
