defmodule Emotext.RoomChannelTest do
  use Emotext.ChannelCase

  alias Emotext.{Repo, User}
  alias Emotext.Web.UserSocket

  setup do
    user =
      Repo.insert!(%User{
        username: "channel-user",
        email: "channel-user@example.com",
        encrypted_password: Bcrypt.hash_pwd_salt("password123"),
        gender: :unknown
      })

    {:ok, token, _claims} = Emotext.Guardian.encode_and_sign(user)

    {:ok, user: user, token: token}
  end

  test "a valid Guardian token connects and joins the lobby", %{token: token, user: user} do
    assert {:ok, socket} = connect(UserSocket, %{"guardian_token" => token})
    assert socket.assigns.current_user.id == user.id

    assert {:ok, _, joined_socket} = subscribe_and_join(socket, "rooms:lobby", %{})
    assert joined_socket.topic == "rooms:lobby"
  end

  test "private rooms fail closed", %{token: token} do
    assert {:ok, socket} = connect(UserSocket, %{"guardian_token" => token})

    assert {:error, %{reason: "unauthorized"}} =
             subscribe_and_join(socket, "rooms:private-room", %{})
  end

  test "an invalid Guardian token cannot connect" do
    assert :error = connect(UserSocket, %{"guardian_token" => "invalid"})
  end

  test "authenticated message input is persisted and echoed to the sender", %{
    token: token,
    user: user
  } do
    socket = join_lobby(token)

    push(socket, "msg:input", %{"body" => "hello lobby"})
    assert_push "msg:self", %{body: "hello lobby", screen_name: "channel-user"}

    assert [%Emotext.History{} = history] = Repo.all(Emotext.History)
    assert history.user_id == user.id
    assert history.user_screen_name == "channel-user"
    assert history.message == "hello lobby"
  end

  test "another user's custom command is not visible" do
    owner = insert_user!("command-owner")
    other = insert_user!("command-other")
    _owned = insert_action!("mine", owner.id)
    _other = insert_action!("theirs", other.id)

    {:ok, owner_token, _claims} = Emotext.Guardian.encode_and_sign(owner)
    socket = join_lobby(owner_token)

    push(socket, "msg:input", %{"body" => "/theirs"})
    assert_push "msg:sys", %{body: "Huh? I don't understand.", user: "command-owner"}
  end

  test "ping replays persisted history with self and other message semantics", %{
    token: token,
    user: user
  } do
    other = insert_user!("history-other")

    Repo.insert!(%Emotext.History{
      user_id: user.id,
      user_screen_name: user.username,
      message: "own history"
    })

    Repo.insert!(%Emotext.History{
      user_id: other.id,
      user_screen_name: other.username,
      message: "other history"
    })

    socket = join_lobby(token)

    push(socket, "info:ping", %{})
    assert_push "info:room", %{room: "lobby"}
    assert_push "msg:self", %{body: "own history", screen_name: "channel-user"}
    assert_push "msg:new", %{body: "other history", screen_name: "history-other"}
  end

  defp join_lobby(token) do
    {:ok, socket} = connect(UserSocket, %{"guardian_token" => token})
    {:ok, _, socket} = subscribe_and_join(socket, "rooms:lobby", %{})
    socket
  end

  defp insert_user!(name) do
    Repo.insert!(%User{
      username: name,
      email: "#{name}@example.com",
      encrypted_password: Bcrypt.hash_pwd_salt("password123"),
      gender: :unknown
    })
  end

  defp insert_action!(name, user_id) do
    Repo.insert!(%Emotext.Action{
      name: name,
      user_id: user_id,
      self_no_arg: "self",
      others_no_arg: "others",
      self_found: "self found",
      others_found: "others found",
      vict_found: "victim",
      self_not_found: "not found",
      self_auto: "self auto",
      others_auto: "others auto"
    })
  end
end
