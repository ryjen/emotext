defmodule Emotext.SessionView do
  use Emotext.Web, :view

  def render("new.json", assigns) do
    Poison.encode!(assigns.users)
  end
end