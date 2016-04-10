defmodule Emotext.History do
  use Emotext.Web, :model

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id # For associations

  schema "history_items" do
    belongs_to :user, Emotext.User
    belongs_to :vict, Emotext.User
    belongs_to :action, Emotext.Action
    field :message, :string
    field :user_screen_name, :string
    field :vict_screen_name, :string

    timestamps
  end

  @required_fields ~w(user_id vict_id action_id user_screen_name message)
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
