defmodule Emotext.Repo.Migrations.AddUserIdToActions do
  use Ecto.Migration

  def change do
    alter table(:actions) do
      add :user_id, references(:users, type: :binary_id, on_delete: :nilify_all)
    end

    create index(:actions, [:user_id])
  end
end