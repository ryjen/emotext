defmodule Emotext.ErrorHTMLTest do
  use ExUnit.Case, async: true

  test "renders standard status messages" do
    assert Emotext.Web.ErrorHTML.render("404.html", %{}) == "Not Found"
    assert Emotext.Web.ErrorHTML.render("500.html", %{}) == "Internal Server Error"
  end
end
