defmodule Emotext.Action do
  use Ecto.Schema
  import Ecto.Changeset
  import Ecto.Query, only: [from: 2]

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id

  schema "actions" do
    field :name, :string
    field :self_no_arg, :string
    field :others_no_arg, :string
    field :self_found, :string
    field :others_found, :string
    field :vict_found, :string
    field :self_not_found, :string
    field :self_auto, :string
    field :others_auto, :string

    has_many :aliases, Emotext.Alias
    belongs_to :user, Emotext.User

    timestamps(type: :utc_datetime)
  end

  @required_fields [
    :name,
    :self_no_arg,
    :others_no_arg,
    :self_found,
    :others_found,
    :vict_found,
    :self_not_found,
    :self_auto,
    :others_auto
  ]
  @optional_fields [:user_id]

  def create_changeset(model, params \\ %{}), do: changeset(model, params)

  def changeset(model, params \\ %{}) do
    model
    |> cast(params, @required_fields ++ @optional_fields)
    |> validate_required(@required_fields)
  end

  def order_by_name(query), do: from(a in query, order_by: [asc: a.name])
end
