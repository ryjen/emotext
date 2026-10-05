defmodule Emotext.RuntimeSecretTest do
  use ExUnit.Case, async: false

  alias Emotext.RuntimeSecret

  @env_key "SECRET_KEY_BASE"
  @file_env_key "SECRET_KEY_BASE_FILE"
  @managed_env [@env_key, @file_env_key, "DATABASE_URL", "GUARDIAN_SECRET_KEY"]

  setup do
    original = Map.new(@managed_env, &{&1, System.get_env(&1)})
    Enum.each(@managed_env, &System.delete_env/1)

    on_exit(fn ->
      Enum.each(original, fn
        {key, nil} -> System.delete_env(key)
        {key, value} -> System.put_env(key, value)
      end)
    end)

    :ok
  end

  test "uses the direct environment value when no file is configured" do
    System.put_env(@env_key, "environment-secret")
    assert RuntimeSecret.fetch!(@env_key, @file_env_key) == "environment-secret"
  end

  test "file value takes precedence over the environment value" do
    path = write_secret!("file-secret\n")
    System.put_env(@env_key, "environment-secret")
    System.put_env(@file_env_key, path)
    assert RuntimeSecret.fetch!(@env_key, @file_env_key) == "file-secret"
  end

  test "production runtime config consumes the file-backed secret" do
    path = write_secret!("runtime-file-secret\n")
    System.put_env(@file_env_key, path)
    System.put_env("DATABASE_URL", "ecto://postgres:postgres@localhost/emotext_test")
    System.put_env("GUARDIAN_SECRET_KEY", "guardian-secret")

    config = Config.Reader.read!("config/runtime.exs", env: :prod)

    endpoint_config =
      config
      |> Keyword.fetch!(:emotext)
      |> Keyword.fetch!(Emotext.Web.Endpoint)

    assert endpoint_config[:secret_key_base] == "runtime-file-secret"
  end

  test "configured unreadable file fails closed instead of falling back" do
    System.put_env(@env_key, "environment-secret")

    System.put_env(
      @file_env_key,
      Path.join(System.tmp_dir!(), "missing-#{System.unique_integer([:positive])}")
    )

    assert_raise RuntimeError, ~r/SECRET_KEY_BASE_FILE/, fn ->
      RuntimeSecret.fetch!(@env_key, @file_env_key)
    end
  end

  test "empty file is rejected" do
    path = write_secret!("\n")
    System.put_env(@file_env_key, path)

    assert_raise RuntimeError, ~r/empty secret file/, fn ->
      RuntimeSecret.fetch!(@env_key, @file_env_key)
    end
  end

  test "oversized file is rejected" do
    path = write_secret!(String.duplicate("x", 64 * 1024 + 1))
    System.put_env(@file_env_key, path)

    assert_raise RuntimeError, ~r/exceeds 65536 bytes/, fn ->
      RuntimeSecret.fetch!(@env_key, @file_env_key)
    end
  end

  defp write_secret!(contents) do
    path = Path.join(System.tmp_dir!(), "emotext-secret-#{System.unique_integer([:positive])}")
    File.write!(path, contents, [:binary])
    on_exit(fn -> File.rm(path) end)
    path
  end
end
