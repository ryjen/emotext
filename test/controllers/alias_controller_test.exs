defmodule Emotext.AliasControllerTest do
  use Emotext.ConnCase

  alias Emotext.Alias
  @valid_attrs %{action_id: 42, name: "some content"}
  @invalid_attrs %{}

  setup do
    conn = conn() |> put_req_header("accept", "application/json")
    {:ok, conn: conn}
  end

  test "lists all entries on index", %{conn: conn} do
    conn = get conn, alias_path(conn, :index)
    assert json_response(conn, 200)["data"] == []
  end

  test "shows chosen resource", %{conn: conn} do
    alias = Repo.insert! %Alias{}
    conn = get conn, alias_path(conn, :show, alias)
    assert json_response(conn, 200)["data"] == %{
      "id" => alias.id
    }
  end

  test "does not show resource and instead throw error when id is nonexistent", %{conn: conn} do
    assert_raise Ecto.NoResultsError, fn ->
      get conn, alias_path(conn, :show, -1)
    end
  end

  test "creates and renders resource when data is valid", %{conn: conn} do
    conn = post conn, alias_path(conn, :create), alias: @valid_attrs
    assert json_response(conn, 201)["data"]["id"]
    assert Repo.get_by(Alias, @valid_attrs)
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    conn = post conn, alias_path(conn, :create), alias: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "updates and renders chosen resource when data is valid", %{conn: conn} do
    alias = Repo.insert! %Alias{}
    conn = put conn, alias_path(conn, :update, alias), alias: @valid_attrs
    assert json_response(conn, 200)["data"]["id"]
    assert Repo.get_by(Alias, @valid_attrs)
  end

  test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
    alias = Repo.insert! %Alias{}
    conn = put conn, alias_path(conn, :update, alias), alias: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "deletes chosen resource", %{conn: conn} do
    alias = Repo.insert! %Alias{}
    conn = delete conn, alias_path(conn, :delete, alias)
    assert response(conn, 204)
    refute Repo.get(Alias, alias.id)
  end
end
