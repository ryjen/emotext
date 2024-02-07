defmodule Emotext.Repo do
  use Ecto.Repo,
    otp_app: :emotext,
    adapter: Ecto.Adapters.Postgres
end
