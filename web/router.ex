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

    get "/help", PageController, :help

    get "/api", PageController, :api

    get "/login", SessionController, :new, as: :login
    get "/guest", SessionController, :guest
    post "/login", SessionController, :create, as: :login
    delete "/logout", SessionController, :delete, as: :logout
    get "/logout", SessionController, :delete, as: :logout

    resources "/users", UserController

    get "/admin/import", AdminController, :import, as: :import
    post "/admin/import", AdminController, :import_file, as: :import
    
    resources "/actions", ActionController

  end

  scope "/auth", alias: Emotext do
    pipe_through :browser
    get "/github", AuthController, :github
    get "/facebook", AuthController, :facebook
    get "/callback/:provider", AuthController, :callback
  end

  scope "/api", Emotext do
    pipe_through :api
    scope "/v1", as: :v1 do
      resources "/actions", ActionController, except: [:new, :edit]
      resources "/aliases", AliasController, except: [:new, :edit]
    end
  end
end
