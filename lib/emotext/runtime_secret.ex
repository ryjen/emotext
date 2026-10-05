defmodule Emotext.RuntimeSecret do
  @moduledoc """
  Reads runtime secrets from an explicitly configured file or environment value.
  """

  @max_bytes 64 * 1024

  @spec fetch!(String.t(), String.t()) :: String.t()
  def fetch!(env_key, file_env_key) do
    case System.fetch_env(file_env_key) do
      {:ok, path} -> read_file!(file_env_key, path)
      :error -> fetch_env!(env_key)
    end
  end

  defp fetch_env!(env_key) do
    case System.fetch_env(env_key) do
      {:ok, value} when value != "" -> value
      _ -> raise "environment variable #{env_key} is missing or empty"
    end
  end

  defp read_file!(file_env_key, path) do
    path = String.trim(path)

    if path == "" do
      raise "#{file_env_key} is configured with an empty path"
    end

    case File.open(path, [:read, :binary]) do
      {:ok, file} ->
        try do
          case IO.binread(file, @max_bytes + 1) do
            {:error, reason} ->
              raise "unable to read #{file_env_key}: #{inspect(reason)}"

            :eof ->
              raise "#{file_env_key} points to an empty secret file"

            data when byte_size(data) > @max_bytes ->
              raise "#{file_env_key} secret file exceeds #{@max_bytes} bytes"

            data ->
              value = String.trim_trailing(data)

              if value == "" do
                raise "#{file_env_key} points to an empty secret file"
              end

              value
          end
        after
          File.close(file)
        end

      {:error, reason} ->
        raise "unable to open #{file_env_key}: #{inspect(reason)}"
    end
  end
end
