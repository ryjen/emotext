# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
import Config

config :emotext,
  ecto_repos: [Emotext.Repo],
  generators: [timestamp_type: :utc_datetime, binary_id: true]

# Configures the endpoint
config :emotext, Emotext.Web.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "OsiFH81B7fpw7o/Q94ye6S4NqfdeZLmAS1OEyyWXGoeWpIzlrgyUXplv6HcOuEBP",
  adapter: Bandit.PhoenixAdapter,
  version: Mix.Project.config[:version],
  render_errors: [
    formats: [html: Emotext.Web.ErrorHTML, json: Emotext.Web.ErrorJSON],
    layout: false
  ],
  pubsub_server: Emotext.Web.PubSub,
  live_view: [signing_salt: "jCufD5N/"]

config :emotext, Emotext.Mailer, adapter: Swoosh.Adapters.Local

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Configure esbuild (the version is required)
config :esbuild,
  version: "0.17.11",
  tmp: [
    args:
      ~w(js/app.js --bundle --target=es2017 --outdir=../priv/static/assets --external:/fonts/* --external:/images/*),
    cd: Path.expand("../assets", __DIR__),
    env: %{"NODE_PATH" => Path.expand("../deps", __DIR__)}
  ]

# Configure tailwind (the version is required)
config :tailwind,
  version: "3.4.0",
  tmp: [
    args: ~w(
      --config=tailwind.config.js
      --input=css/app.css
      --output=../priv/static/assets/app.css
    ),
    cd: Path.expand("../assets", __DIR__)
  ]

config :guardian, Guardian,
      issuer: "emotext",
      ttl: { 100_000, :days },
      verify_issuer: true,
      error_handler: Emotext.Web.GuardianErrorHandler,
      secret_key: "EPROIUELKJSDOIUEWORIJWLEKJFSODIojwoeirjsldkfjwoerijowkjflsef",
      serializer: Emotext.GuardianSerializer,
      hooks: Emotext.GuardianHooks,
      permissions: %{
        default: [:read_profile, :write_profile]
      }

config :comeonin, :bcrypt_phoenix_ecto,
  log_rounds: 12

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

config :sass,
  version: "1.55.0",
  tmp: [
    args: ~w(css/emotext.scss --no-source-map --output-style compressed --output-file ../priv/static/assets/emotext.css),
    cd: Path.expand("../assets", __DIR__)
  ]


# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
