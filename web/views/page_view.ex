defmodule Emotext.PageView do
  use Emotext.Web, :view

  def current_user(conn) do
      Guardian.Plug.current_resource(conn)
  end
end
