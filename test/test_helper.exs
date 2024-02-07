ExUnit.start()

Ecto.Adapters.SQL.Sandbox.mode(Emotext.Repo, :manual)

#Mix.Task.run "ecto.create", ["--quiet"]
#Mix.Task.run "ecto.migrate", ["--quiet"]
#Ecto.Adapters.SQL.begin_test_transaction(Emotext.Repo)
