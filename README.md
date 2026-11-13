# Emotext

Emotext is an Elixir/Phoenix chat application inspired by IRC and 1990s Multi-User Dungeons (MUDs). It began as an experiment in moving from Rails-style object-oriented application development toward functional programming and the BEAM concurrency model.

## Status

**Modernization in progress.** This source targets a supported BEAM/Phoenix release, but production readiness remains gated by independent security review, immutable image publication, and deployment qualification. Legacy runtime and browser behavior are characterized by the repository CI.

The intended core remains:

- room-based real-time chat over Phoenix Channels;
- MUD-style actions such as `/smile` and `/laugh`;
- user-defined aliases for actions;
- persisted chat/action history;
- authenticated user accounts and guest sessions.

Features should be considered demonstrated only when covered by the repository validation pipeline.

## Development environment

The repository owns its build/test environment through Nix. The runner or developer host should not need project-specific language dependencies installed globally.

```bash
nix develop
mise run setup
mise run check
```

The upgrade candidate pins Elixir 1.20.4, Erlang/OTP 29.1.1, and Phoenix 1.8, with the reproducible Nix environment and OCI builder kept aligned. Preserve exact-head test and dependency-audit evidence before accepting a release.

PostgreSQL is required for the test suite. The CI workflow provisions PostgreSQL 16.

## Useful tasks

```bash
mise run setup     # Hex/Rebar + Mix dependencies
mise run format    # formatting gate
mise run compile   # warnings-as-errors compile
mise run test      # ExUnit
mise run assets    # Tailwind/esbuild asset build
mise run check     # canonical validation
mise run release   # production release build
```

## Runtime configuration

Production secrets are runtime inputs and must not be committed.

Required production variables include:

```text
DATABASE_URL
SECRET_KEY_BASE or SECRET_KEY_BASE_FILE
GUARDIAN_SECRET_KEY
GITHUB_CLIENT_ID
GITHUB_CLIENT_SECRET
FACEBOOK_CLIENT_ID
FACEBOOK_CLIENT_SECRET
```

Optional OAuth callback overrides:

```text
GITHUB_REDIRECT_URI
FACEBOOK_REDIRECT_URI
```

Generate `SECRET_KEY_BASE` with `mix phx.gen.secret`.

When `SECRET_KEY_BASE_FILE` is configured it takes precedence over `SECRET_KEY_BASE`. The file is read directly by the application with a 64 KiB limit; missing, unreadable, empty, or oversized files fail startup without falling back to the environment value.

## Security model

- Browser sessions are verified with Guardian.
- API routes require an authenticated Guardian bearer token.
- API user resources are scoped beneath `/api/v1/users/:user_id` and must match the authenticated principal.
- Historical admin import functionality is available only through development routes and requires authentication.
- OAuth provider credentials are read from runtime environment variables.

Security-sensitive changes should include tests for anonymous access, cross-user access, malformed credentials, and expired/invalid sessions.

## Architecture

```text
HTTP / Phoenix Channels
          |
          v
controllers / channel protocol
          |
          v
domain + authorization rules
          |
          v
Ecto / PostgreSQL
          |
          v
Phoenix PubSub / connected clients
```

The current code predates this target separation in places. Modernization should preserve observable behavior while moving authorization and domain rules out of transport-specific controllers/channels.

## Docker

The historical Docker Compose file is **development-only**, not a production deployment manifest: it currently uses an unpinned PostgreSQL image, default development database credentials, and no durable database volume. Do not treat the following invocation as a qualified public deployment:

```bash
SECRET_KEY_BASE="$(mix phx.gen.secret)" GUARDIAN_SECRET_KEY="$(mix phx.gen.secret)" docker compose up --build
```

Use independent, non-default secrets for any actual deployment. Production containers require PostgreSQL, a persistent/restore-qualified data service, and an authorized ingress/secret configuration.

## OCI publication and Hyperion

The source-owned [manual release workflow](.github/workflows/publish-oci.yml) runs only when explicitly dispatched for an accepted `main` revision. It requires successful exact-main CI, the browser injection regression, a production OCI build, PostgreSQL migrations, unprivileged HTTP startup with a read-only mounted `SECRET_KEY_BASE_FILE`, and authenticated Phoenix WebSocket/history persistence across container replacement **before** publishing to GHCR. It records a source-bound image digest; no mutable `latest` tag is a deployment identity.

Image publication is separate from deployment. Hyperion's historical Emotext manifest still references a mutable GitLab image and SQLite configuration, while the modernized application uses PostgreSQL and Guardian. **Do not swap image tags in that manifest.** Require a reviewed PostgreSQL persistence/migration and backup plan, compatible runtime identity and file-secret projection, explicit registry pull trust, digest-pinned overlay, and staged rollback/restart proof. See [Emotext #15](https://github.com/ryjen/emotext/issues/15) and [Hyperion #91](https://github.com/hackelia-micrantha/hyperion/issues/91). Oracle ARM64 remains a separate portability qualification.

## Roadmap

Near-term priorities:

1. qualify the combined BEAM/Phoenix/client candidate with exact-head CI and independent review;
2. merge only with authorized release gates and preserve the supported-runtime and security-invariant tests;
3. publish one immutable, source-bound OCI digest under explicit GHCR release authorization;
4. qualify PostgreSQL, secret delivery, image pull trust, migration, rollback, and one staged Hyperion deployment;
5. finish repository static/security analysis before public exposure;
6. then consider additional bots, actions, integrations, i18n, and client features.

See GitHub Issues for executable work rather than treating this README as a feature-completeness claim.

## License

The project is intended to be distributed under GPL-3.0. A canonical license file should be present before the next tagged release.
