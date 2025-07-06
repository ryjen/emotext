ARG ELIXIR_VERSION=1.16.0
ARG OTP_VERSION=26.2.1
ARG DEBIAN_VERSION=bullseye-20231009-slim

ARG BUILDER_IMAGE="hexpm/elixir:${ELIXIR_VERSION}-erlang-${OTP_VERSION}-debian-${DEBIAN_VERSION}"
ARG RUNNER_IMAGE="debian:${DEBIAN_VERSION}"

FROM ${BUILDER_IMAGE} AS builder

# Install build dependencies
RUN apt-get update -y && apt-get install -y build-essential git && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install hex + rebar
RUN mix local.hex --force && \
    mix local.rebar --force

# Set build ENV
ENV MIX_ENV=prod

# Copy only mix files first for dependency caching
COPY mix.exs mix.lock ./
RUN mkdir config

# Copy only config files needed for deps compilation
COPY config/config.exs config/prod.exs config/
RUN mix deps.get --only prod
RUN mix deps.compile

# Copy the rest of the app
COPY priv priv
COPY lib lib
COPY assets assets

# Compile assets and the app
RUN mix assets.deploy
RUN mix compile

# Copy runtime config
COPY config/runtime.exs config/

# Build the release
RUN mix release

# ---

FROM ${RUNNER_IMAGE}

RUN apt-get update -y && \
  apt-get install -y libstdc++6 openssl libncurses5 locales ca-certificates && \
  apt-get clean && rm -rf /var/lib/apt/lists/*

# Set the locale
RUN sed -i '/en_US.UTF-8/s/^# //g' /etc/locale.gen && locale-gen

ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

WORKDIR /app
RUN chown nobody /app

ENV MIX_ENV=prod
ENV HOME=/app

# Copy release from builder
COPY --from=builder --chown=nobody:root /app/_build/prod/rel/emotext ./

USER nobody

# Healthcheck (optional, adjust port if needed)
HEALTHCHECK --interval=30s --timeout=3s CMD curl -f http://localhost:4000/ || exit 1

CMD ["/app/bin/emotext", "start"]