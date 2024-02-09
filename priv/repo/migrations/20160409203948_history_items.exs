defmodule Emotext.Repo.Migrations.HistoryItems do
  use Ecto.Migration

  def change do
      create table(:history_items, primary_key: false) do
        add :id, :binary_id, primary_key: true
        add :user_id, references(:users, type: :binary_id)
        add :vict_id, references(:users, type: :binary_id)
        add :action_id, references(:actions, type: :binary_id)
        add :message, :string
        add :user_screen_name, :string
        add :vict_screen_name, :string
        timestamps()
      end

      execute "CREATE OR REPLACE FUNCTION prune_history_items() RETURNS TRIGGER AS $prune$ BEGIN DELETE FROM history_items WHERE id NOT IN (SELECT id FROM history_items ORDER BY inserted_at DESC LIMIT 500); RETURN NEW; END; $prune$ LANGUAGE plpgsql;"

      execute """
        CREATE TRIGGER history_items_prune_trigger
        BEFORE INSERT ON history_items
        EXECUTE FUNCTION prune_history_items();
      """
  end
end
