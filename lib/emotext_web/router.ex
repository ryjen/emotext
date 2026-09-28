defmodule Emotext.Web.Router do
  use Emotext.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_live_flash
    plug :put_root_layout, {Emotext.Web.Layouts, :root}
    plug :put_layout, html: {Emotext.Web.Layouts, :app}
    plug :protect_from_forgery

    plug :put_secure_browser_headers, %{
      "content-security-policy" =>
        "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'self'; form-action 'self'; img-src 'self' data:; font-src 'self' https://fonts.gstatic.com; style-src 'self' https://fonts.googleapis.com; script-src 'self'; connect-src 'self' ws: wss:"
    }
  end

  pipeline :browser_session do
    plug Guardian.Plug.Pipeline,
      module: Emotext.Guardian,
      error_handler: Emotext.Web.GuardianErrorHandler

    plug Guardian.Plug.VerifySession
    plug Guardian.Plug.LoadResource, allow_blank: true
  end

  pipeline :ensure_auth do
    plug Guardian.Plug.EnsureAuthenticated
  end

  pipeline :api do
    plug :accepts, ["json"]

    plug Guardian.Plug.Pipeline,
      module: Emotext.Guardian,
      error_handler: Emotext.Web.GuardianAPIErrorHandler

    plug Guardian.Plug.VerifyHeader
    plug Guardian.Plug.LoadResource
    plug Guardian.Plug.EnsureAuthenticated
  end

  scope "/", Emotext.Web do
    pipe_through [:browser, :browser_session]

    get "/", PageController, :index

    get "/help", PageController, :help

    get "/api", PageController, :api

    get "/login", SessionController, :new, as: :login
    get "/guest", SessionController, :guest
    post "/login", SessionController, :create, as: :login
    delete "/logout", SessionController, :delete, as: :logout

    resources "/users", UserController do
      resources "/actions", ActionController
      resources "/aliases", AliasController
    end
  end

  scope "/auth", alias: Emotext.Web do
    pipe_through :browser
    get "/github", AuthController, :github
    get "/facebook", AuthController, :facebook
    get "/callback/:provider", AuthController, :callback
  end

  scope "/api", Emotext.Web do
    pipe_through :api

    scope "/v1", as: :v1 do
      scope "/users/:user_id" do
        resources "/actions", ActionController, except: [:new, :edit]
        resources "/aliases", AliasController, except: [:new, :edit]
      end
    end
  end

  if Application.compile_env(:emotext, :dev_routes) do
    # If you want to use the LiveDashboard in production, you should put
    # it behind authentication and allow only admins to access it.
    # If your application does not have an admins-only section yet,
    # you can use Plug.BasicAuth to set up some basic authentication
    # as long as you are also using SSL (which you should anyway).
    import Phoenix.LiveDashboard.Router

    scope "/dev" do
      pipe_through [:browser, :browser_session, :ensure_auth]

      live_dashboard "/dashboard", metrics: Emotext.Web.Telemetry
      forward "/mailbox", Plug.Swoosh.MailboxPreview
    end

    scope "/dev", Emotext.Web do
      pipe_through [:browser, :browser_session, :ensure_auth]

      get "/admin/import", AdminController, :import, as: :import
      post "/admin/import", AdminController, :import_file, as: :import
    end
  end
end
