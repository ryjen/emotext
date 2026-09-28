defmodule Emotext.User do
  use Ecto.Schema
  import Ecto.Changeset
  import Ecto.Query

  alias Emotext.Repo

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id

  schema "users" do
    field :username, :string
    field :email, :string
    field :encrypted_password, :string
    field :password, :string, virtual: true
    field :password_confirmation, :string, virtual: true
    field :screen_name, :string, virtual: true
    field :gender, GenderEnum

    timestamps(type: :utc_datetime)
  end

  @account_fields [:username, :email, :gender]
  @password_fields [:password, :password_confirmation]

  def from_email(nil), do: nil
  def from_email(email), do: Repo.one(from(u in __MODULE__, where: u.email == ^email))

  def from_username(nil), do: nil
  def from_username(username), do: Repo.one(from(u in __MODULE__, where: u.username == ^username))

  def change_screen_name(nil, _screen_name), do: nil

  def change_screen_name(user, screen_name) do
    user
    |> change(%{screen_name: screen_name})
    |> apply_changes()
  end

  def create_changeset(model, params \\ %{}) do
    model
    |> cast(params, @account_fields ++ @password_fields)
    |> validate_required(@account_fields ++ @password_fields)
    |> validate_account_fields()
    |> validate_confirmation(:password)
    |> maybe_hash_password()
  end

  def update_changeset(model, params \\ %{}) do
    model
    |> cast(params, @account_fields ++ @password_fields)
    |> validate_required(@account_fields)
    |> validate_account_fields()
    |> validate_confirmation(:password)
    |> maybe_hash_password()
  end

  def login_changeset(model), do: cast(model, %{}, [:email, :username, :password])

  def login_changeset(model, params) do
    model
    |> cast(params, [:email, :username, :password])
    |> validate_password()
  end

  def valid_password?(nil, _), do: false
  def valid_password?(_, nil), do: false
  def valid_password?(password, crypted), do: Bcrypt.verify_pass(password, crypted)

  def maybe_update_screen_name(user) do
    if user.screen_name, do: user, else: change_screen_name(user, user.username)
  end

  defp validate_account_fields(changeset) do
    changeset
    |> unique_constraint(:username)
    |> unique_constraint(:email)
    |> validate_format(:email, ~r/^[^\s]+@[^\s]+$/)
    |> validate_length(:password, min: 8)
    |> validate_username()
  end

  defp validate_username(changeset) do
    case get_field(changeset, :username) do
      username when is_binary(username) ->
        if String.starts_with?(String.downcase(username), "guest") do
          add_error(changeset, :username, "cannot start with the word guest")
        else
          changeset
        end

      _ ->
        changeset
    end
  end

  defp maybe_hash_password(changeset) do
    case get_change(changeset, :password) do
      password when is_binary(password) and password != "" ->
        put_change(changeset, :encrypted_password, Bcrypt.hash_pwd_salt(password))

      _ ->
        changeset
    end
  end

  defp validate_password(changeset) do
    password = get_change(changeset, :password)
    crypted = get_field(changeset, :encrypted_password)

    if valid_password?(password, crypted) do
      changeset
    else
      add_error(changeset, :password, "is incorrect")
    end
  end
end
