defmodule Emotext.PageController do
  use Emotext.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
