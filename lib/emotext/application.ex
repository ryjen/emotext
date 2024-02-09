defmodule Emotext.Application do
  use Application

  @impl true
  def start(_type, _args) do
    children = [
      Emotext.Web.Telemetry,
      Emotext.Repo,
      {DNSCluster, query: Application.get_env(:tmp, :dns_cluster_query) || :ignore},
      {Phoenix.PubSub, name: Emotext.Web.PubSub},
      # Start the Finch HTTP client for sending emails
      {Finch, name: Emotext.Finch},
      # Start a worker by calling: Emotext.Worker.start_link(arg)
      # {Emotext.Worker, arg},
      # Start to serve requests, typically the last entry
      Emotext.Web.Endpoint
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Emotext.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    Emotext.Web.Endpoint.config_change(changed, removed)
    :ok
  end

  def get_resource_by_id(id) do
    Emotext.Repo.get(User, id)
  end
end
