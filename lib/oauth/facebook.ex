defmodule Facebook do
  @moduledoc """
  An OAuth2 strategy for Facebook.
  """
  use OAuth2.Strategy

  alias OAuth2.Strategy.AuthCode

  # Public API
  
  def new do
    OAuth2.new([
      strategy: __MODULE__,
      client_id: "866873576728881",
      client_secret: "a5c899f51ed2bdac4ca2c91b11467349",
      redirect_uri: "http://emotext.com/auth/callback/facebook",
      site: "https://graph.facebook.com",
      authorize_url: "https://www.facebook.com/dialog/oauth",
      token_url: "https://graph.facebook.com/v2.3/oauth/access_token"
    ])
  end

  def authorize_url!(params \\ []) do
    new()
    |> put_param(:scope, "email")
    |> OAuth2.Client.authorize_url!(params)
  end

  def get_token!(params \\ [], headers \\ []) do
    OAuth2.Client.get_token!(new(), params)
  end

  # Strategy Callbacks

  def authorize_url(client, params) do
    AuthCode.authorize_url(client, params)
  end

  def get_token(client, params, headers) do
    client
    |> put_header("Accept", "application/json")
    |> AuthCode.get_token(params, headers)
  end
end