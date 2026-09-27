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
end
