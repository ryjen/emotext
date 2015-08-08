defmodule Emotext.UserQuery do
  import Ecto.Query
  alias Emotext.User

  def by_email(email) do
    from u in User, where: u.email == ^email
  end
end