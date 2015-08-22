defmodule Emotext.Repo.Migrations.CreateAlias do
  use Ecto.Migration

  def change do
    create table(:aliases) do
      add :name, :string
      add :action_id, :integer

      timestamps
    end

  end
end
