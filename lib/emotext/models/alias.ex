defmodule Emotext.Alias do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id

  schema "aliases" do
    field :name, :string

    belongs_to :action, Emotext.Action
    belongs_to :user, Emotext.User

    timestamps(type: :utc_datetime)
  end

  @required_fields [:name, :action_id]
  @optional_fields [:user_id]

  def changeset(model, params \\ %{}) do
    model
    |> cast(params, @required_fields ++ @optional_fields)
    |> validate_required(@required_fields)
    |> foreign_key_constraint(:action_id)
    |> foreign_key_constraint(:user_id)
  end
end
