defmodule Emotext.Repo.Migrations.HistoryItems do
  use Ecto.Migration

  def change do
  	create table(:history_items, options: [capped: true, size: 4096, max: 500]) do
  		add :user_id, references(:users)
  		add :vict_id, references(:users)
  		add :action_id, references(:actions)
  		add :message, :string
  		add :user_screen_name, :string
      add :vict_screen_name, :string
  	end
  end
end
