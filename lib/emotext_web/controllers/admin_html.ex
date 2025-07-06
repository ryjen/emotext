defmodule Emotext.Web.AdminHTML do
  use Emotext.Web, :html

  import Phoenix.HTML.Form

  import Phoenix.Naming, only: [humanize: 1]

  embed_templates "admin_html/*"

  def current_user(conn) do
    Guardian.Plug.current_resource(conn)
  end
end
