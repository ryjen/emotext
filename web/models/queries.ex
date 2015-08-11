defmodule Emotext.UserQuery do
  import Ecto.Query
  alias Emotext.User

  def by_email(email) do
    from u in User, where: u.email == ^email
  end

  def by_login_or_email(info) do
  	from u in User, where: (u.email == ^info or u.username == ^info)
  end

end

defmodule Emotext.ActionQuery do
  import Ecto.Query
  alias Emotext.Action

  def by_name(name) do
    from a in Action, where: a.name == ^name
  end

end