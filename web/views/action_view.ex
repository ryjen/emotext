defmodule Emotext.ActionView do
  use Emotext.Web, :view

  def render("index.json", %{actions: actions}) do
    %{data: render_many(actions, Emotext.ActionView, "action.json")}
  end
  
  def render("show.json", %{action: action}) do
    %{data: render_one(action, Emotext.ActionView, "action.json")}
  end

  def render("action.json", %{action: action}) do
    %{id: action.id, name: action.name,
    self_no_arg: action.self_no_arg,
    others_no_arg: action.others_no_arg,
    self_found: action.self_found,
    others_found: action.others_found,
    vict_found: action.vict_found,
    self_not_found: action.self_not_found,
    self_auto: action.self_auto,
    others_auto: action.others_auto}
  end

end
