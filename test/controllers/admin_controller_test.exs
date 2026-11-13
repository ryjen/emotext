defmodule Emotext.AdminControllerTest do
  use Emotext.ConnCase, async: true

  test "deprecated admin import refuses uploads rather than reporting success", %{conn: conn} do
    result =
      Emotext.Web.AdminController.import_file(conn, %{
        "import" => %{"file" => "untrusted-content"}
      })

    assert response(result, 501) == "Legacy admin import is unavailable"
  end
end
