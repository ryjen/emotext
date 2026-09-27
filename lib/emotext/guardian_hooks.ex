defmodule Emotext.Guardian do
  use Guardian, otp_app: :emotext

  alias Emotext.User

  @impl Guardian
  def subject_for_token(%User{id: id}, _claims), do: {:ok, to_string(id)}
  def subject_for_token(_, _), do: {:error, :invalid_resource}

  @impl Guardian
  def build_claims(claims, %User{} = user, _opts) do
    screen_name = user.screen_name || user.username
    {:ok, Map.put(claims, "screen_name", screen_name)}
  end

  @impl Guardian
  def resource_from_claims(%{"sub" => id} = claims) do
    case Emotext.Application.get_resource_by_id(id) do
      nil ->
        {:error, :not_found}

      user ->
        {:ok, User.change_screen_name(user, claims["screen_name"] || user.username)}
    end
  end

  def resource_from_claims(_claims), do: {:error, :invalid_claims}
end
