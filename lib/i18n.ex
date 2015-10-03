defmodule I18n do
  use Linguist.Vocabulary

  locale "en", [
    flash: [
      notice: [
        hello: "hello %{first} %{last}",
        bye: "bye now, %{name}!"
      ]
    ],
    users: [
      title: "Users",
      profiles: [
        title: "Profiles",
      ]
    ]
  ]

  #locale "fr", Path.join([__DIR__, "fr.ex"])

end