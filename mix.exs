defmodule Emotext.MixProject do
  use Mix.Project

  def project do
    [
      app: :emotext,
      version: "0.0.1",
      elixir: "~> 1.5",
      elixirc_paths: elixirc_paths(Mix.env),
      build_embedded: Mix.env == :prod,
      start_permanent: Mix.env == :prod,
      deps: deps(),
      releases: [
        emotext: [
          include_executables_for: [:unix]
        ]
      ]
    ]
  end

  # Configuration for the OTP application
  #
  # Type `mix help compile.app` for more information
  def application do
    [mod: {Emotext, []},
     applications: [:phoenix, :phoenix_html, :cowboy, :logger, :guardian,
       :phoenix_ecto, :comeonin, :oauth2, :gettext, :ecto_hooks,
       :ecto_enum, :expletive]]
  end

  # Specifies which paths to compile per environment
  defp elixirc_paths(:test), do: ["lib", "web", "test/support"]
  defp elixirc_paths(_),     do: ["lib", "web"]

  # Specifies your project dependencies
  #
  # Type `mix help deps` for examples and options
  defp deps do
    [{:gettext, "~> 0.24"},
     {:phoenix, "~> 1.7"},
     {:phoenix_ecto, "~> 3.4"},
     {:phoenix_html, "~> 2.9"},
     {:phoenix_view, "~> 2.0"},
     {:phoenix_live_reload, "~> 1.2", only: :dev},
     {:postgrex, ">= 0.0.0"},
     {:poison, "~> 3.0"},
     {:guardian, "~> 2.3"},
     {:cowboy, "~> 2.11"},
     {:distillery, "~> 2.1"},
     {:oauth2, "~> 2.1"},
     {:ecto_enum, "~> 1.3"},
     {:comeonin, "~> 5.4"},
     {:bcrypt_elixir, "~> 1.0"},
     {:ecto_hooks, "~> 1.1"},
     {:expletive, "~> 0.1.0"}]
  end
end
