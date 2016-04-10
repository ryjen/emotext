defmodule Emotext.Repo.Migrations.CreateAction do
  use Ecto.Migration

  def change do
    create_if_not_exists table(:actions) do
      add :name, :string
      add :self_no_arg, :string
      add :others_no_arg, :string
      add :self_found, :string
      add :others_found, :string
      add :vict_found, :string
      add :self_not_found, :string
      add :self_auto, :string
      add :others_auto, :string

      timestamps
    end

    create unique_index(:actions, [:name])

  end
end
