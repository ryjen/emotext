defmodule Emotext.Repo.Migrations.UserGender do
  use Ecto.Migration

  def change do
  	alter table(:users) do
  		add :gender, :integer
  	end
  end
end
