[
  mappings: [
    "guardian.Elixir.Guardian.issuer": [
      doc: "Provide documentation for guardian.Elixir.Guardian.issuer here.",
      to: "guardian.Elixir.Guardian.issuer",
      datatype: :binary,
      default: "Emotext"
    ],
    "guardian.Elixir.Guardian.ttl": [
      doc: "Provide documentation for guardian.Elixir.Guardian.ttl here.",
      to: "guardian.Elixir.Guardian.ttl",
      datatype: :binary,
      default: nil
    ],
    "guardian.Elixir.Guardian.verify_issuer": [
      doc: "Provide documentation for guardian.Elixir.Guardian.verify_issuer here.",
      to: "guardian.Elixir.Guardian.verify_issuer",
      datatype: :atom,
      default: true
    ],
    "guardian.Elixir.Guardian.secret_key": [
      doc: "Provide documentation for guardian.Elixir.Guardian.secret_key here.",
      to: "guardian.Elixir.Guardian.secret_key",
      datatype: :binary,
      default: "EPROIUELKJSDOIUEWORIJWLEKJFSODIojwoeirjsldkfjwoerijowkjflsef"
    ],
    "guardian.Elixir.Guardian.serializer": [
      doc: "Provide documentation for guardian.Elixir.Guardian.serializer here.",
      to: "guardian.Elixir.Guardian.serializer",
      datatype: :atom,
      default: Emotext.GuardianSerializer
    ],
    "guardian.Elixir.Guardian.hooks": [
      doc: "Provide documentation for guardian.Elixir.Guardian.hooks here.",
      to: "guardian.Elixir.Guardian.hooks",
      datatype: :atom,
      default: Emotext.GuardianHooks
    ],
    "guardian.Elixir.Guardian.permissions": [
      doc: "Provide documentation for guardian.Elixir.Guardian.permissions here.",
      to: "guardian.Elixir.Guardian.permissions",
      datatype: :binary,
      default: nil
    ],
    "logger.console.format": [
      doc: "Provide documentation for logger.console.format here.",
      to: "logger.console.format",
      datatype: :binary,
      default: """
      $time $metadata[$level] $message
      """
    ],
    "logger.console.metadata": [
      doc: "Provide documentation for logger.console.metadata here.",
      to: "logger.console.metadata",
      datatype: [
        list: :atom
      ],
      default: [
        :request_id
      ]
    ],
    "logger.level": [
      doc: "Provide documentation for logger.level here.",
      to: "logger.level",
      datatype: :atom,
      default: :info
    ],
    "phoenix.generators.migration": [
      doc: "Provide documentation for phoenix.generators.migration here.",
      to: "phoenix.generators.migration",
      datatype: :atom,
      default: false
    ],
    "phoenix.generators.binary_id": [
      doc: "Provide documentation for phoenix.generators.binary_id here.",
      to: "phoenix.generators.binary_id",
      datatype: :atom,
      default: true
    ],
    "phoenix.serve_endpoints": [
      doc: "Provide documentation for phoenix.serve_endpoints here.",
      to: "phoenix.serve_endpoints",
      datatype: :atom,
      default: true
    ],
    "emotext.Elixir.Emotext.Endpoint.render_errors.accepts": [
      doc: "Provide documentation for emotext.Elixir.Emotext.Endpoint.render_errors.accepts here.",
      to: "emotext.Elixir.Emotext.Endpoint.render_errors.accepts",
      datatype: [
        list: :binary
      ],
      default: [
        "html",
        "json"
      ]
    ],
    "emotext.Elixir.Emotext.Endpoint.pubsub.name": [
      doc: "Provide documentation for emotext.Elixir.Emotext.Endpoint.pubsub.name here.",
      to: "emotext.Elixir.Emotext.Endpoint.pubsub.name",
      datatype: :atom,
      default: Emotext.PubSub
    ],
    "emotext.Elixir.Emotext.Endpoint.pubsub.adapter": [
      doc: "Provide documentation for emotext.Elixir.Emotext.Endpoint.pubsub.adapter here.",
      to: "emotext.Elixir.Emotext.Endpoint.pubsub.adapter",
      datatype: :atom,
      default: Phoenix.PubSub.PG2
    ],
    "emotext.Elixir.Emotext.Endpoint.http.port": [
      doc: "Provide documentation for emotext.Elixir.Emotext.Endpoint.http.port here.",
      to: "emotext.Elixir.Emotext.Endpoint.http.port",
      datatype: :binary,
      default: "80"
    ],
    "emotext.Elixir.Emotext.Endpoint.url.host": [
      doc: "Provide documentation for emotext.Elixir.Emotext.Endpoint.url.host here.",
      to: "emotext.Elixir.Emotext.Endpoint.url.host",
      datatype: :atom,
      default: nil
    ],
    "emotext.Elixir.Emotext.Endpoint.url.port": [
      doc: "Provide documentation for emotext.Elixir.Emotext.Endpoint.url.port here.",
      to: "emotext.Elixir.Emotext.Endpoint.url.port",
      datatype: :integer,
      default: 80
    ],
    "emotext.Elixir.Emotext.Endpoint.server": [
      doc: "Provide documentation for emotext.Elixir.Emotext.Endpoint.server here.",
      to: "emotext.Elixir.Emotext.Endpoint.server",
      datatype: :atom,
      default: true
    ],
    "emotext.Elixir.Emotext.Endpoint.root": [
      doc: "Provide documentation for emotext.Elixir.Emotext.Endpoint.root here.",
      to: "emotext.Elixir.Emotext.Endpoint.root",
      datatype: :binary,
      default: "."
    ],
    "emotext.Elixir.Emotext.Endpoint.version": [
      doc: "Provide documentation for emotext.Elixir.Emotext.Endpoint.version here.",
      to: "emotext.Elixir.Emotext.Endpoint.version",
      datatype: :binary,
      default: "0.0.1"
    ],
    "emotext.Elixir.Emotext.Endpoint.secret_key_base": [
      doc: "Provide documentation for emotext.Elixir.Emotext.Endpoint.secret_key_base here.",
      to: "emotext.Elixir.Emotext.Endpoint.secret_key_base",
      datatype: :binary,
      default: nil
    ],
    "emotext.Elixir.Emotext.Endpoint.cache_static_manifest": [
      doc: "Provide documentation for emotext.Elixir.Emotext.Endpoint.cache_static_manifest here.",
      to: "emotext.Elixir.Emotext.Endpoint.cache_static_manifest",
      datatype: :binary,
      default: "priv/static/manifest.json"
    ],
    "emotext.Elixir.Emotext.Repo.adapter": [
      doc: "Provide documentation for emotext.Elixir.Emotext.Repo.adapter here.",
      to: "emotext.Elixir.Emotext.Repo.adapter",
      datatype: :atom,
      default: Mongo.Ecto
    ],
    "emotext.Elixir.Emotext.Repo.url": [
      doc: "Provide documentation for emotext.Elixir.Emotext.Repo.url here.",
      to: "emotext.Elixir.Emotext.Repo.url",
      datatype: :binary,
      default: "mongodb://mongo/emotext"
    ],
    "emotext.Elixir.Emotext.Repo.pool_size": [
      doc: "Provide documentation for emotext.Elixir.Emotext.Repo.pool_size here.",
      to: "emotext.Elixir.Emotext.Repo.pool_size",
      datatype: :integer,
      default: 20
    ]
  ],
  translations: [
  ]
]