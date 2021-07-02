FROM erlang:18.3-slim as builder

ENV LANG=C.UTF-8

RUN echo "deb http://deb.debian.org/debian stretch-backports main contrib non-free" >> /etc/apt/sources.list

# get required tools
RUN apt-get update -yq && apt-get install -yq build-essential wget unzip git && apt-get -t stretch-backports install -yq npm

# prepare build dir
WORKDIR /src

# install elixir 1.2.3
RUN wget https://github.com/elixir-lang/elixir/releases/download/v1.2.3/Precompiled.zip
RUN unzip Precompiled.zip -d /opt/elixir

ENV PATH=${PATH}:/opt/elixir/bin

WORKDIR /app

# install elixir tools
RUN mix local.hex --force
RUN mix local.rebar --force

# set build environment
ENV MIX_ENV=prod

# install dependencies
COPY mix.exs mix.lock ./
COPY config config
RUN mix do deps.get, deps.compile

# build web assets
COPY package.json bower.json brunch-config.js ./
RUN npm i --progress=false --no-audit --loglevel=error
RUN npx bower --allow-root install
RUN npx brunch build --production

COPY priv priv
COPY web web
RUN mix phoenix.digest

# compile and build release
COPY lib lib
RUN mix compile

RUN mix release

# prepare release image
FROM debian:stretch-slim

ENV LANG=C.UTF-8

RUN apt-get update -yq && apt-get -yq install openssl libncurses5 libssl1.0.2

WORKDIR /app

COPY --from=builder /app/rel/emotext/ /app/

ARG db_url=mongodb://mongo/emotext

ENV PORT=$port

ENV DATABASE_URL=$db_url

CMD ["/app/bin/emotext", "foreground"]

