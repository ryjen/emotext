defmodule Emotext.Web.UserHMTL do
  use Emotext.Web, :html
  import Phoenix.HTML.Form
  import Phoenix.Naming, only: [humanize: 1]

  embed_templates "user_html/*"

  def render(template, assigns) do
    Phoenix.View.render(__MODULE__, template, assigns)
  end

  def gender_name(model) do
    cond do
      model.gender == :male ->
        "Male"

      model.gender == :female ->
        "Female"

      true ->
        "Unknown"
    end
  end
end
