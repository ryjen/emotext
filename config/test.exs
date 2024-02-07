import Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :emotext, Emotext.Endpoint,
  http: [port: 4001],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :emotext, Emotext.Repo,
  username: "emotext",
  password: "emotext",
  database: "emotext_test",
  pool: Ecto.Adapters.SQL.Sandbox
