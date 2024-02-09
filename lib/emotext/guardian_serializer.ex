defmodule Emotext.GuardianSerializer do
  #@behaviour Guardian.Serializer

  alias Emotext.User

  def for_token(user = %User{}), do: { :ok, "User: #{User.serialize(user)}" }
  def for_token(_), do: { :error, "Unknown resource type" }

  def from_token("User: " <> data), do: { :ok, User.deserialize(data) }
  def from_token(_), do: { :error, "Unknown resource type" }
end
