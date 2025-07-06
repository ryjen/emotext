defmodule Emotext.Web.PageHTML do
  use Emotext.Web, :html
  
  embed_templates "page_html/*"

  def current_user(conn) do
      Guardian.Plug.current_resource(conn)
  end
end
