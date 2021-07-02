defmodule Emotext.Mixfile do
  use Mix.Project

  def project do
    [app: :emotext,
     version: "0.0.1",
     elixir: "~> 1.2.3",
     elixirc_paths: elixirc_paths(Mix.env),
     compilers: [:phoenix] ++ Mix.compilers,
     build_embedded: Mix.env == :prod,
     start_permanent: Mix.env == :prod,
     deps: deps,
     releases: [
      emotext: [
        include_executables_for: [:unix]
      ]]]
  end

  # Configuration for the OTP application
  #
  # Type `mix help compile.app` for more information
  def application do
    [mod: {Emotext, []},
     applications: [:phoenix, :phoenix_html, :cowboy, :logger, :guardian,
       :phoenix_ecto, :mongodb_ecto, :comeonin, :oauth2,
       :ecto_enum, :expletive]]
  end

  # Specifies which paths to compile per environment
  defp elixirc_paths(:test), do: ["lib", "web", "test/support"]
  defp elixirc_paths(_),     do: ["lib", "web"]

  # Specifies your project dependencies
  #
  # Type `mix help deps` for examples and options
  defp deps do
    [{:gettext, "~> 0.12.2"},
     {:phoenix, "~> 1.1.4"},
     {:phoenix_ecto, "~> 2.0"},
     {:phoenix_html, "~> 2.4"},
     {:phoenix_live_reload, "~> 1.0", only: :dev},
     {:mongodb_ecto, "~> 0.1"},
     {:guardian, "~> 0.10.1"},
     {:cowboy, "~> 1.0"},
     {:exrm, "~> 0.19.0"},
     {:oauth2, "~> 0.5.0"},
     {:ecto_enum, "~> 0.3.0"},
     {:comeonin, "~> 2.1.1"},
     {:expletive, "~> 0.1.0"}]
  end
end
