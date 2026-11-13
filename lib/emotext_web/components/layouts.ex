defmodule Emotext.Web.Layouts do
  use Emotext.Web, :html

  embed_templates "layouts/*"

  def current_token(conn) do
    Guardian.Plug.current_token(conn)
  end

  def guest?(user) do
    String.starts_with?(user.username, "guest")
  end

  def current_user(conn) do
    Guardian.Plug.current_resource(conn)
  end
end
