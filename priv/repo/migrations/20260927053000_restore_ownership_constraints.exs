defmodule Emotext.Repo.Migrations.RestoreOwnershipConstraints do
  use Ecto.Migration

  def change do
    create_if_not_exists unique_index(:users, [:username])
    create_if_not_exists unique_index(:users, [:email])

    alter table(:aliases) do
      add_if_not_exists :user_id, references(:users, type: :binary_id, on_delete: :delete_all)
    end

    create_if_not_exists index(:aliases, [:user_id])

    drop_if_exists index(:aliases, [:name])
    create unique_index(:aliases, [:name], where: "user_id IS NULL", name: :aliases_global_name_index)
    create unique_index(:aliases, [:user_id, :name], where: "user_id IS NOT NULL", name: :aliases_user_name_index)

    drop_if_exists index(:actions, [:name])
    create unique_index(:actions, [:name], where: "user_id IS NULL", name: :actions_global_name_index)
    create unique_index(:actions, [:user_id, :name], where: "user_id IS NOT NULL", name: :actions_user_name_index)
  end
end
