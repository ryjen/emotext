defmodule Emotext.LayoutView do
  use Emotext.Web, :view

  def is_guest?(user) do
      String.starts_with?(user.username, "guest")
  end
  
end
