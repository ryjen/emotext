defmodule Emotext.Web.UserHMTL do
  use Emotext.Web, :html


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
