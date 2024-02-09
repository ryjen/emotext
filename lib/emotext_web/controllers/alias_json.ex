defmodule Emotext.Web.AliasJSON do

  def index(%{aliases: aliases}) do
    %{data: for(alias <- aliases, do: data(alias))}
  end

  def show(%{alias: alias}) do
    %{data: data(alias)}
  end

  def alias(%{alias: alias}) do
    %{id: alias.id}
  end

  defp data(alias) do
    %{
      id: alias.id,
      name: alias.name,
      action_id: alias.action_id,
      user_id: alias.user_id,
    }
  end
end
