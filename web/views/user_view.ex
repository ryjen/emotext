defmodule Emotext.UserView do
  use Emotext.Web, :view


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
