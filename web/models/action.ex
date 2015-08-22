defmodule Emotext.Action do
  use Emotext.Web, :model

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

    timestamps
  end

  def create_changeset(model, params \\ :empty) do
    model
    |> cast(params, ~w(:name, :self_no_arg, :others_no_arg, :self_found, :others_found, :vict_found, :self_not_found, :self_auto, :others_auto))
  end

  def order_by_name(query) do
    from a in query,
    order_by: [asc: a.name]
  end

  @required_fields ~w(name self_no_arg others_no_arg self_found others_found vict_found self_not_found self_auto others_auto)
  @optional_fields ~w()

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
