defmodule Emotext.Web.SessionHTML do
  use Emotext.Web, :html
  import Phoenix.HTML.Form
  import Phoenix.Naming, only: [humanize: 1]

  embed_templates "session_html/*"

  def render(template, assigns) do
    Phoenix.View.render(__MODULE__, template, assigns)
  end

  def render("new.json", assigns) do
    %{data: assigns.users}
    |> Jason.encode!()
  end
end
