defmodule Emotext.Web.Router do
  use Emotext.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_live_flash
    plug :put_root_layout, html: {Emotext.Web.Layouts, :root}
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

    resources "/users", UserController do
        resources "/actions", ActionController
        resources "/aliases", AliasController
    end


    get "/admin/import", AdminController, :import, as: :import
    post "/admin/import", AdminController, :import_file, as: :import

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

  if Application.compile_env(:tmp, :dev_routes) do
    # If you want to use the LiveDashboard in production, you should put
    # it behind authentication and allow only admins to access it.
    # If your application does not have an admins-only section yet,
    # you can use Plug.BasicAuth to set up some basic authentication
    # as long as you are also using SSL (which you should anyway).
    import Phoenix.LiveDashboard.Router

    scope "/dev" do
      pipe_through :browser

      live_dashboard "/dashboard", metrics: TmpWeb.Telemetry
      forward "/mailbox", Plug.Swoosh.MailboxPreview
    end
  end
end
