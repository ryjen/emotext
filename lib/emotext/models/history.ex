defmodule Emotext.History do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id

  schema "history_items" do
    belongs_to :user, Emotext.User
    belongs_to :vict, Emotext.User
    belongs_to :action, Emotext.Action
    field :message, :string
    field :user_screen_name, :string
    field :vict_screen_name, :string

    timestamps(type: :utc_datetime)
  end

  @fields [:user_id, :vict_id, :action_id, :message, :user_screen_name, :vict_screen_name]

  def changeset(model, params \\ %{}) do
    cast(model, params, @fields)
  end
end
