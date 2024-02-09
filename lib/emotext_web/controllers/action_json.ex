defmodule Emotext.Web.ActionJSON do

  def index(%{actions: actions}) do
    %{data: for(action <- actions, do: data(action))}
  end

  def show(%{action: action}) do
    %{data: data(action)}
  end

  defp data(action) do
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
