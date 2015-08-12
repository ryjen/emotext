defmodule Emotext.Router do
  use Emotext.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :browser_session do
    plug Guardian.Plug.VerifySession
    plug Guardian.Plug.LoadResource
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", Emotext do
    pipe_through [:browser, :browser_session] # Use the default browser stack

    get "/", PageController, :index

    get "/login", SessionController, :new, as: :login
    post "/login", SessionController, :create, as: :login
    delete "/logout", SessionController, :delete, as: :logout
    get "/logout", SessionController, :delete, as: :logout

    resources "/users", UserController

    get "/actions/import", ActionController, :import, as: :import
    post "/actions/import", ActionController, :import_file, as: :import_file
    
    resources "/actions", ActionController

  end

  scope "/auth", alias: Emotext do
    pipe_through :browser
    get "/github", AuthController, :github
    get "/facebook", AuthController, :facebook
    get "/callback/:provider", AuthController, :callback
  end

  # Other scopes may use custom stacks.
  # scope "/api", Emotext do
  #   pipe_through :api
  # end
end
