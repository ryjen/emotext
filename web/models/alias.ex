defmodule Emotext.Alias do
  use Emotext.Web, :model

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id # For associations

  schema "aliases" do
    field :name, :string

    belongs_to :action, Emotext.Action
    belongs_to :user, Emotext.User

    timestamps(type: :utc_datetime)
  end

  @required_fields ~w(name action_id)
  @optional_fields ~w(user_id)

  @doc """
  Creates a changeset based on the `model` and `params`.

  If no params are provided, an invalid changeset is returned
  with no validation performed.
  """
  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
  end
end
