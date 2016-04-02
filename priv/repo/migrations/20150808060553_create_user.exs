defmodule Emotext.Repo.Migrations.CreateUser do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :username, :string
      add :email, :string
      add :encrypted_password, :string
  	  add :gender, :integer
      timestamps
    end

  end
end
