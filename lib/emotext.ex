defmodule Emotext do
  use Application

  {Phoenix.PubSub, [name: Emotext.PubSub, adapter: Phoenix.PubSub.PG2]}
  # See http://elixir-lang.org/docs/stable/elixir/Application.html
  # for more information on OTP Applications
  def start(_type, _args) do
    import Supervisor.Spec, warn: false

    children = [
      # Start the endpoint when the application starts
      Emotext.Endpoint,
      # Start the Ecto repository
      %{
        id: Emotext.Repo,
        start: {Emotext.Repo, :start_link, []}
      }
      # Here you could define other workers and supervisors as children
      # worker(Emotext.Worker, [arg1, arg2, arg3]),
    ]

    # See http://elixir-lang.org/docs/stable/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Emotext.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    Emotext.Endpoint.config_change(changed, removed)
    :ok
  end

  def get_resource_by_id(id) do
    Emotext.Repo.get(User, id)
  end
end
