# Emotext

Emotext is an Elixir/Phoenix chat application inspired by IRC and 1990s Multi-User Dungeons (MUDs). It began as an experiment in moving from Rails-style object-oriented application development toward functional programming and the BEAM concurrency model.

## Status

**Modernization in progress.** The repository contains a working historical application and a partial Phoenix 1.7 migration. Current work is focused on restoring a reproducible, security-qualified baseline before adding features.

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

The pinned application baseline is Elixir 1.16 on Erlang/OTP 26. OTP 26 is EOL, so upgrading the BEAM runtime is part of the modernization backlog rather than an implicit runner dependency.

PostgreSQL is required for the test suite. The CI workflow provisions PostgreSQL 16.

## Useful tasks

```bash
mise run setup     # Hex/Rebar + Mix dependencies
mise run format    # formatting gate
mise run compile   # warnings-as-errors compile
mise run test       # ExUnit
mise run lint       # Credo
mise run security   # Gitleaks + Sobelow + dependency audits
mise run assets     # Tailwind/esbuild asset build
mise run check      # canonical validation
mise run release   # production release build
```

## Runtime configuration

Production secrets are runtime inputs and must not be committed.

Required production variables include:

```text
DATABASE_URL
SECRET_KEY_BASE
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

Docker Compose remains available as a convenience deployment path. A production secret must be supplied explicitly:

```bash
SECRET_KEY_BASE="$(mix phx.gen.secret)" GUARDIAN_SECRET_KEY="$(mix phx.gen.secret)" docker compose up --build
```

Do not use committed/default production credentials.

## Roadmap

Near-term priorities:

1. establish a green flake-driven CI baseline;
2. complete Phoenix/Guardian migration compatibility fixes;
3. add authorization and channel characterization tests;
4. upgrade from EOL OTP 26 after the current baseline is characterized;
5. add static/security analysis;
6. then resume bots, custom commands, inter-chat/IRC integration, i18n, preferences, and client work.

See GitHub Issues for executable work rather than treating this README as a feature-completeness claim.

## License

Emotext is distributed under the GNU General Public License v3.0. See LICENSE.
