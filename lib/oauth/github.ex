defmodule GitHub do
  @moduledoc "OAuth2 strategy for GitHub."
  use OAuth2.Strategy
  alias OAuth2.Strategy.AuthCode
  def new do
    OAuth2.Client.new(strategy: __MODULE__, client_id: System.fetch_env!("GITHUB_CLIENT_ID"), client_secret: System.fetch_env!("GITHUB_CLIENT_SECRET"), redirect_uri: System.get_env("GITHUB_REDIRECT_URI", "http://localhost:4000/auth/callback/github"), site: "https://api.github.com", authorize_url: "https://github.com/login/oauth/authorize", token_url: "https://github.com/login/oauth/access_token")
  end
  def authorize_url!(params \\ []), do: new() |> put_param(:scope, "user:email") |> OAuth2.Client.authorize_url!(params)
  def get_token!(params \\ [], _headers \\ []), do: OAuth2.Client.get_token!(new(), params)
  @impl true
  def authorize_url(client, params), do: AuthCode.authorize_url(client, params)
  @impl true
  def get_token(client, params, headers), do: client |> put_header("Accept", "application/json") |> AuthCode.get_token(params, headers)
end