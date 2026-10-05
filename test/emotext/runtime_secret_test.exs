defmodule Emotext.RuntimeSecretTest do
  use ExUnit.Case, async: false

  alias Emotext.RuntimeSecret

  @env_key "SECRET_KEY_BASE"
  @file_env_key "SECRET_KEY_BASE_FILE"

  setup do
    original = %{
      @env_key => System.get_env(@env_key),
      @file_env_key => System.get_env(@file_env_key)
    }

    System.delete_env(@env_key)
    System.delete_env(@file_env_key)

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
