# FastAPI Blog

A RESTful blog API built with **FastAPI** and **React**.

## Features

* User authentication (sign-up and sign-in)
* Customizable user profiles
* Create, manage, and interact with blog posts
* API documentation with Swagger
* PostgreSQL database integration
* Database migrations and seed data using Alembic
* Docker and Docker Compose support
* CI/CD with GitHub Actions (coming soon)
* Monitoring and logging (coming soon)
* Automated testing (coming soon)

## Table of Contents

* [Getting Started](#getting-started)
* [Commands](#commands)
* [Endpoints](#endpoints)
* [License](#license)

For details on the project structure, refer to [structure.md](/docs/structure.md).

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/wesleybertipaglia/fastiapi-blog.git
   ```

2. **Initialize and activate the virtual environment**

   ```bash
   make init
   source venv/bin/activate
   ```

3. **Install dependencies and initialize Alembic**

   ```bash
   make setup
   ```

4. **Run the application**

   ```bash
   make run
   ```

Once the server is running, visit [http://localhost:8000](http://localhost:8000) to access the API.

## Commands

All commands should be executed from the project root directory:

| Command                    | Description                               |
| -------------------------- | ----------------------------------------- |
| `make init`                | Initializes the virtual environment       |
| `source venv/bin/activate` | Activates the virtual environment         |
| `make setup`               | Installs dependencies and sets up Alembic |
| `make freeze`              | Updates the dependency list               |
| `make run`                 | Starts the application                    |
| `make alembic-revision`    | Creates a new Alembic migration           |
| `make alembic-upgrade`     | Applies Alembic migrations                |

Refer to [commands.md](/docs/commands.md) for more details.

## Endpoints

The API includes the following endpoints:

* `/auth`: User authentication (sign-up/sign-in)
* `/profile`: View, update, or delete user profile
* `/users`: Retrieve user information
* `/posts`: Create, read, update, and delete blog posts

More details are available in the [endpoints.md](/docs/endpoints.md) file or through the interactive API documentation at [http://localhost:8000/docs](http://localhost:8000/docs).

## License

This project is licensed under the [MIT License](LICENSE).
