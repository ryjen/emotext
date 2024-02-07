defmodule Emotext.Action do
  use Emotext.Web, :model

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id # For associations

  schema "actions" do
    field :name, :string
    field :self_no_arg, :map
    field :others_no_arg, :map
    field :self_found, :map
    field :others_found, :map
    field :vict_found, :map
    field :self_not_found, :map
    field :self_auto, :map
    field :others_auto, :map

    has_many :aliases, Emotext.Alias

    belongs_to :user, Emotext.User

    timestamps(type: :utc_datetime)
  end

  def create_changeset(model, params \\ :empty) do
    model
    |> cast(params, ~w(:name, :self_no_arg, :others_no_arg, :self_found, :others_found, :vict_found, :self_not_found, :self_auto, :others_auto, :user_id))
  end

  def order_by_name(query) do
    from a in query,
    order_by: [asc: a.name]
  end

  @required_fields ~w(name self_no_arg others_no_arg self_found others_found vict_found self_not_found self_auto others_auto)
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
