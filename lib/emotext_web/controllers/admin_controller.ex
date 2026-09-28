defmodule Emotext.Web.AdminController do
  use Emotext.Web, :controller

  def import(conn, _params) do
    render(conn, "import.html")
  end

  def import_file(conn, %{"import" => _import}) do\n    put_flash(conn, :info, "Import successful.")
    render(conn, "import.html")
  end
end
