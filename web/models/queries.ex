defmodule Emotext.UserQuery do
  import Ecto.Query
  alias Emotext.User

  def by_email(email) do
    from u in User, where: u.email == ^email
  end

  def by_login_or_email(info) do
  	from u in User, where: (u.email == ^info or u.username == ^info)
  end

  def by_username(name) do
  	from u in User, where: u.username == ^name
  end

end

defmodule Emotext.ActionQuery do
  import Ecto.Query
  alias Emotext.Action

  def by_name(name) do
    from a in Action, where: a.name == ^name
  end

  def sorted() do
    from a in Action, order_by: a.name
  end

end