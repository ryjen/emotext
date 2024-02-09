defmodule Emotext.Web.SessionHTML do
  use Emotext.Web, :html

  def render("new.json", assigns) do
    Poison.encode!(assigns.users)
  end
end
