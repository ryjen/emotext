defmodule Emotext.Repo.Migrations.CreateAlias do
  use Ecto.Migration

  def change do
    create_if_not_exists table(:aliases, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :name, :string
      add :action_id, references(:actions, type: :binary_id)

      timestamps()
    end

    create unique_index(:aliases, [:name])

  end
end
