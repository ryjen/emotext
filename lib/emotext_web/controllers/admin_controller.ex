defmodule Emotext.Web.AdminController do
  use Emotext.Web, :controller

  alias Emotext.SessionController
  #alias Emotext.Action

  plug PlugRedirectHttps

  plug Guardian.Plug.EnsureAuthenticated, %{ on_failure: { SessionController, :new } }

  def import(conn, _params) do
  	render(conn, "import.html")
  end

  def import_file(conn, %{"import" => import}) do
    File.stream!(import["file"].path)
    |> Enum.chunk_by(fn(x) -> x == "\n" end )
    |> Enum.each(fn(x) -> IO.inspect Enum.zip(
        [:name, :self_no_arg, :others_no_arg, :self_found,
        :others_found, :vict_found, :self_not_found,
        :self_auto, :others_auto], x)
       end)
    put_flash(conn, :info, "Import successful.")
    render(conn, "import.html")
  end
end
