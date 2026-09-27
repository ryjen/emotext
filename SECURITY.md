[Reading 20 lines from start (total: 20 lines, 0 remaining)]

# Security

Do not commit production credentials, signing keys, access tokens, or private user data.

## Configuration

Production secrets are supplied at runtime through environment variables. See `.env.example` for variable names only.

OAuth credentials previously present in repository history have been rotated. Historical values must be considered permanently public and must never be reused.

## Reporting

For security-sensitive defects, avoid publishing credentials, exploit data, or user information in an issue. Report the minimum reproduction needed to identify the affected boundary.

## Security invariants

- Authentication is derived from verified server-side session/token state.
- Authorization must not trust caller-provided user identifiers by themselves.
- Administrative functionality must fail closed in production.
- CI/build environments must not depend on mutable runner-installed project dependencies.
