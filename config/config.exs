# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
import Config

# Configures the endpoint
config :emotext, Emotext.Endpoint,
  url: [host: "localhost"],
  root: Path.dirname(__DIR__),
  secret_key_base: "OsiFH81B7fpw7o/Q94ye6S4NqfdeZLmAS1OEyyWXGoeWpIzlrgyUXplv6HcOuEBP",
  render_errors: [accepts: ~w(html json)]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

config :guardian, Guardian,
      issuer: "Emotext",
      ttl: { 100_000, :days },
      verify_issuer: true,
      secret_key: "EPROIUELKJSDOIUEWORIJWLEKJFSODIojwoeirjsldkfjwoerijowkjflsef",
      serializer: Emotext.GuardianSerializer,
      hooks: Emotext.GuardianHooks,
      permissions: %{
        default: [:read_profile, :write_profile]
      }

config :comeonin, :bcrypt_phoenix_ecto,
  log_rounds: 12

config :phoenix, :generators,
  migration: false,
  binary_id: true

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
