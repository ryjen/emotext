FROM elixir:1.2.3 as builder

ENV MIX_ENV=prod

WORKDIR /src

RUN apt-get update -yq && apt-get install -yq build-essential

RUN mix local.hex --force

RUN mix local.rebar --force

RUN mix archive.install https://github.com/phoenixframework/archives/raw/master/phoenix_new.ez --force

COPY . .

RUN mix deps.get --force

RUN mix phoenix.digest

RUN mix compile

ARG port=80

ARG db_url=mongo://mongo/emotext

ENV PORT=$port

ENV DATABASE_URL=$db_url

CMD ["elixir", "-S", "mix", "phoenix.server"]

#FROM elixir:1.2.3

#COPY --from=builder /src/rel/emotext/ /app/

#CMD ["/app/bin/emotext", "foreground"]
