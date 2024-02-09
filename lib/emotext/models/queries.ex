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

  def by_screen_name(name) do
    if String.starts_with?(name, "guest") do
      by_username("guest")
    else
      by_username(name)
    end
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

  def for_user(user) do
      from a in Action, where: a.user_id == ^user.id, order_by: a.name
  end
end

defmodule Emotext.AliasQuery do
  import Ecto.Query
  alias Emotext.Alias

  def by_name(name) do
    from a in Alias, where: a.name == ^name, preload: [:action]
  end

  def with_action_names() do
    from a in Alias, join: t in assoc(a, :action), order_by: t.name,
    select: %{:alias_name => a.name, :action_name => t.name }
  end

  def sorted() do
    from a in Alias, order_by: a.name, preload: [:action]
  end

  def for_user(user) do
      from a in Alias, where: a.user_id == ^user.id, order_by: a.name, preload: [:action]
  end
end
