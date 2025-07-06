defmodule Emotext.Web.AliasHTML do
  use Emotext.Web, :html
  import Phoenix.HTML.Form
  import Phoenix.Naming, only: [humanize: 1]

  embed_templates "alias_html/*"

  def render(template, assigns) do
    Phoenix.View.render(__MODULE__, template, assigns)
  end

  def current_user(conn) do
    Guardian.Plug.current_resource(conn)
  end
end
