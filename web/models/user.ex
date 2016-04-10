defmodule Emotext.User do
  use Emotext.Web, :model

  use Ecto.Model.Callbacks

  alias Emotext.Repo

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id # For associations
  
  schema "users" do
    field :username, :string
    field :email, :string
    field :encrypted_password, :string
    field :password, :string, virtual: true
    field :password_confirmation, :string, virtual: true
    field :screen_name, :string, virtual: true
    field :gender, GenderEnum
    
    timestamps
  end

  before_insert :maybe_update_password
  before_update :maybe_update_password
  after_load :maybe_update_screen_name

  @required_fields ~w(username email password password_confirmation gender)
  @optional_fields ~w()

  def from_email(nil), do: { :error, :not_found }
  def from_email(email) do
    Repo.one(Emotext.User, email: email)
  end

  def from_username(nil), do: { :error, :not_found }
  def from_username(username) do
    Repo.one(Emotext.User, username: username)
  end

  def deserialize(nil), do: { :error, :not_found }
  def deserialize(data) do
    info = :erlang.binary_to_term(Base.url_decode64!(data))
    user = Repo.get(Emotext.User, info.id)
    if user do
      change_screen_name(user, info.screen_name)
    else
      changeset = change(%Emotext.User{}, %{ id: info.id, screen_name: info.screen_name})
      apply_changes(changeset)
    end
  end

  def serialize(nil), do: { :error, :not_found }
  def serialize(user) do
    info = %{id: user.id, screen_name: user.screen_name}
    Base.url_encode64(:erlang.term_to_binary(info))
  end

  def change_screen_name(user, screen_name) do
    changeset = change(user, %{screen_name: screen_name})
    apply_changes(changeset)
  end

  def create_changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
    |> unique_constraint(:username, on: Repo, downcase: true)
    |> unique_constraint(:email, on: Repo, downcase: true)
    |> validate_format(:email, ~r/@/)
    |> validate_length(:password, min: 6)
    |> validate_length(:password_confirmation, min: 6)
    |> validate_confirmation(:password)
    |> validate_username
  end

  def update_changeset(model, params \\ :empty) do
    model
    |> cast(params, ~w(), @required_fields)
    |> unique_constraint(:username, on: Repo, downcase: true)
    |> unique_constraint(:email, on: Repo, downcase: true)
    |> validate_format(:email, ~r/@/)
    |> validate_length(:password, min: 6)
    |> validate_length(:password_confirmation, min: 6)
    |> validate_confirmation(:password)
    |> validate_username
  end

  def login_changeset(model), do: model |> cast(%{}, ~w(), ~w(email username password))

  def login_changeset(model, params) do
    model
    |> cast(params, ~w(email username password), ~w())
    |> validate_password
  end

  def valid_password?(nil, _), do: false
  def valid_password?(_, nil), do: false
  def valid_password?(password, crypted), do: Comeonin.Bcrypt.checkpw(password, crypted)

  defp maybe_update_password(changeset) do
    case Ecto.Changeset.fetch_change(changeset, :password) do
      { :ok, password } ->
        changeset
        |> Ecto.Changeset.put_change(:encrypted_password, Comeonin.Bcrypt.hashpwsalt(password))
      :error -> changeset
    end
  end

  defp maybe_update_screen_name(user) do
    if !user.screen_name do
      changeset = change(user, %{screen_name: user.username})
      apply_changes(changeset)
    else
      user
    end
  end

  defp validate_password(changeset) do
    case Ecto.Changeset.get_field(changeset, :encrypted_password) do
      nil -> password_incorrect_error(changeset)
      crypted -> validate_password(changeset, crypted)
    end
  end

  defp validate_username(changeset) do
    uname = get_change(changeset, :username)
    if String.starts_with?(uname, "guest") do
      add_error(changeset, :username, "Cannot start with the word guest")
    end
    changeset
  end

  defp validate_password(changeset, crypted) do
    password = Ecto.Changeset.get_change(changeset, :password)
    if valid_password?(password, crypted), do: changeset, else: password_incorrect_error(changeset)
  end

  defp password_incorrect_error(changeset), do: Ecto.Changeset.add_error(changeset, :password, "is incorrect")
end
