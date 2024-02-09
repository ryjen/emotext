defmodule Emotext.Repo.Migrations.CreateUser do
  use Ecto.Migration

  def change do
    create_if_not_exists table(:users, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :username, :string
      add :email, :string
      add :encrypted_password, :string
  	  add :gender, :integer
      timestamps()
    end

  end
end
