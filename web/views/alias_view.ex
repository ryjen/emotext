defmodule Emotext.AliasView do
  use Emotext.Web, :view

  def render("index.json", %{aliases: aliases}) do
    %{data: render_many(aliases, Emotext.AliasView, "alias.json")}
  end

  def render("show.json", %{alias: alias}) do
    %{data: render_one(alias, Emotext.AliasView, "alias.json")}
  end

  def render("alias.json", %{alias: alias}) do
    %{id: alias.id}
  end
end
