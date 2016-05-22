defmodule Emotext.LayoutView do
  use Emotext.Web, :view

  def is_guest?(user) do
      String.starts_with?(user.username, "guest")
  end

  def current_user(conn) do
      Guardian.Plug.current_resource(conn)
  end
end
