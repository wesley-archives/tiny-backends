# School Management System

A school management system built using FastAPI, MongoDB, Docker, and employing Test-Driven Development (TDD) with Pytest for comprehensive testing.

## Features

- Manage students with create, read, update, and delete (CRUD) operations
- Async MongoDB integration with Motor
- Clear separation of models, schemas, use cases, and routes
- Dockerized MongoDB for easy local development
- Designed for testability with Pytest

## Requirements

- Python 3.10+
- MongoDB (running locally or via Docker)
- Docker (optional, for running MongoDB)

## Setup

1. Clone the repository:

```bash
git clone https://github.com/wesleybertipaglia/fastapi-school.git
cd fastapi-school
````

2. Create and activate a virtual environment:

```bash
python3 -m venv venv
source venv/bin/activate
```

3. Install dependencies:

```bash
make install
```

4. Ensure MongoDB is running locally on `mongodb://localhost:27017`. You can start MongoDB with Docker:

```bash
make docker-up
```

5. Run the FastAPI app:

```bash
make run
```

6. Access the API docs at [http://localhost:8000/docs](http://localhost:8000/docs)

## Running Tests

Run all tests with Pytest:

```bash
make test
```

## API Endpoints

* `GET /students/` - List all students
* `POST /students/` - Create a new student
* `GET /students/{id}` - Retrieve a student by ID
* `PUT /students/{id}` - Update a student by ID
* `DELETE /students/{id}` - Delete a student by ID

## License

This project is licensed under the [MIT License](LICENSE).