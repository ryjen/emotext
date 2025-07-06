# Emotext 🎭

A modern chat application inspired by Multi-User Dungeons (MUDs) from the 90s, built with Elixir and Phoenix Framework.

## 🎯 Project Overview

Emotext is an experimental project that applies Ruby on Rails knowledge to pure functional programming using Elixir on the Phoenix Framework. The application demonstrates the power of the Erlang Virtual Machine (BEAM) for building concurrent, fault-tolerant chat systems.

### Why Elixir and Phoenix?

This project explores the transition from object-oriented programming (Ruby on Rails) to functional programming paradigms:

- **[Functional Programming](https://en.wikipedia.org/wiki/Functional_programming)** - Emphasizes immutability, pure functions, and declarative code
- **[Elixir](https://elixir-lang.org/)** - A dynamic, functional language designed for building maintainable and scalable applications
- **[Phoenix Framework](https://phoenixframework.org/)** - A productive web framework that does not compromise speed or maintainability

### Erlang VM Inspiration

The choice of the Erlang VM is inspired by WhatsApp's legendary scalability achievements. WhatsApp famously handled billions of messages with a small engineering team, largely thanks to the Erlang VM's actor model and fault-tolerance capabilities.

**Learn more:** [How WhatsApp Uses Erlang VM](https://www.erlang.org/blog/20-years-of-open-source-erlang/)

## 🎮 Use Case: MUD-Style Chat

Emotext recreates the nostalgic experience of Multi-User Dungeons from the 1990s, where players used text commands and emojis to:

- **Verbosely explain emotions** - Express complex feelings through descriptive commands
- **Convey humor** - Share jokes and playful interactions
- **Foster communication** - Build communities through rich text-based interaction
- **Create immersive experiences** - Use commands like `/smile`, `/laugh`, `/dance` to bring conversations to life

## ✨ Features

- **Real-time Communication** - Built on Phoenix Channels and WebSockets
- **Room-based Architecture** - Multiple chat rooms with isolated conversations
- **Command System** - MUD-style commands for expressive communication
- **Emoji Integration** - Rich emoji support for enhanced expression
- **User Authentication** - Secure user management with Guardian
- **Profanity Filtering** - Built-in content moderation
- **Responsive Design** - Modern UI with TailwindCSS

## 🚀 Quick Start

### Prerequisites

- Elixir 1.14+ and Erlang/OTP 26+
- PostgreSQL 12+
- Node.js 16+ (for asset compilation)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ryjen/emotext.git
   cd emotext
   ```

2. **Install dependencies**
   ```bash
   mix setup
   ```

3. **Configure your database**
   ```bash
   # Update config/dev.exs with your PostgreSQL credentials
   mix ecto.create
   mix ecto.migrate
   ```

4. **Start the Phoenix server**
   ```bash
   mix phx.server
   ```

5. **Visit the application**
   Open [http://localhost:4000](http://localhost:4000) in your browser

## 🐳 Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up --build

# Or build the Docker image manually
docker build -t emotext .
docker run -p 4000:4000 emotext
```

## 🎯 Usage Examples

### Basic Commands

```
/say Hello everyone!           # Send a message to the room
/smile                        # Express happiness
/laugh                        # Show amusement
/dance                        # Celebrate with movement
/whisper @username message    # Private message
```

### Emoji Aliases

```
:)    # Converts to /smile
<3    # Converts to /love
:D    # Converts to /grin
```

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Phoenix       │    │   LiveView      │    │   Channels      │
│   Controllers   │◄──►│   Components    │◄──►│   (WebSockets)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Ecto          │    │   GenServer     │    │   PubSub        │
│   (Database)    │    │   (State)       │    │   (Messaging)   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🧪 Testing

```bash
# Run the test suite
mix test

# Run tests with coverage
mix test --cover

# Run specific test files
mix test test/emotext_web/channels/room_channel_test.exs
```

## 📚 API Documentation

Generate documentation with ExDoc:

```bash
mix docs
open doc/index.html
```

## 🌍 Internationalization

**Note:** i18n is not currently supported but is planned for future releases. The application currently supports English only.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow Elixir style conventions
- Write tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## 📋 Roadmap

- [ ] Channel bots and automation
- [ ] Custom user commands
- [ ] Integration with IRC networks
- [ ] Internationalization (i18n)
- [ ] User preferences and themes
- [ ] Mobile application
- [ ] Voice chat integration

## 🛠️ Built With

- **[Elixir](https://elixir-lang.org/)** - Functional programming language
- **[Phoenix Framework](https://phoenixframework.org/)** - Web framework
- **[Phoenix LiveView](https://hexdocs.pm/phoenix_live_view/)** - Real-time user experiences
- **[Ecto](https://hexdocs.pm/ecto/)** - Database wrapper and query generator
- **[PostgreSQL](https://www.postgresql.org/)** - Database
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Guardian](https://hexdocs.pm/guardian/)** - Authentication library

## 📄 License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **ryjen** - *Initial work* - [ryjen](https://github.com/ryjen)

## 🙏 Acknowledgments

- Inspired by the classic MUD games of the 1990s
- WhatsApp's innovative use of the Erlang VM for massive scale
- The Elixir and Phoenix communities for excellent documentation and support
- The functional programming community for pushing the boundaries of software design

## 📞 Support

- Create an [issue](https://github.com/ryjen/emotext/issues) for bug reports
- Start a [discussion](https://github.com/ryjen/emotext/discussions) for questions
- Check the [documentation](https://hexdocs.pm/emotext/) for detailed guides

---

*Built with ❤️ and functional programming*