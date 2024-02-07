defmodule Emotext.Guardian do
  use Guardian, otp_app: :emotext,
  permissions: %{
    user_actions: %{
      new: 0b1,
      edit: 0b100,
      update: 0b1000,
      delete: 0b10000
    }
  }

  use Guardian.Permissions, encoding: Guardian.Permissions.BitwiseEncoding

  def build_claims(claims, _resource, opts) do
    claims =
      claims
      |> encode_permissions_into_claims!(Keyword.get(opts, :permissions))
    {:ok, claims}
  end

  def subject_for_token(%{id: id}, _claims) do
    sub = to_string(id)
    {:ok, sub}
  end
  def subject_for_token(_, _) do
    {:error, :reason_for_error}
  end

  def resource_from_claims(%{"sub" => id}) do
    resource = Emotext.get_resource_by_id(id)
    {:ok,  resource}
  end
  def resource_from_claims(_claims) do
    {:error, :reason_for_error}
  end
  def before_mint(resource, type, claims) do
    IO.puts("GOING TO MINT: #{inspect(resource)} WITH TYPE #{inspect(type)} AND CLAIMS #{inspect(claims)}")
    { :ok, { resource, type, claims } }
  end

  def after_sign_in(conn, location) do
    user = Guardian.Plug.current_resource(conn, location)
    IO.puts("SIGNED INTO LOCATION WITH: #{user.email}")
    conn
  end

  def before_sign_out(conn, nil), do: before_sign_out(conn, :default)

  def before_sign_out(conn, :all) do
    IO.puts("SIGNING OUT ALL THE PEOPLE")
    conn
  end

  def before_sign_out(conn, location) do
    user = Guardian.Plug.current_resource(conn, location)
    IO.puts("SIGNING OUT: #{user.email}")
    conn
  end
end
