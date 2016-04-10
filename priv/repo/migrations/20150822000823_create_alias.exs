defmodule Emotext.Repo.Migrations.CreateAlias do
  use Ecto.Migration

  def change do
    create_if_not_exists table(:aliases) do
      add :name, :string
      add :action_id, references(:actions)

      timestamps
    end

    create unique_index(:aliases, [:name])

  end
end
