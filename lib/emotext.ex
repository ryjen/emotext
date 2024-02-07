defmodule Emotext do
  @moduledoc """
  Tmp keeps the contexts that define your domain
  and business logic.

  Contexts are also responsible for managing your data, regardless
  if it comes from the database, an external API or others.
  """
  def model do
    quote do
      use Ecto.Schema
      import Ecto
      import Ecto.Changeset
      import Ecto.Query, only: [from: 1, from: 2]

      @primary_key {:id, :binary_id, autogenerate: true}
      @foreign_key_attribute :binary_id
    end
  end
end
