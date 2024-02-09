defmodule Emotext.Web.AliasHTML do
  use Emotext.Web, :html

  def current_user(conn) do
      Guardian.Plug.current_resource(conn)
  end
end
