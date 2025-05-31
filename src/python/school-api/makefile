.PHONY: run install requirements test precommit docker-up docker-down

run:
	@echo "Starting FastAPI with uvicorn..."
	@uvicorn src.main:app --reload

install:
	@echo "Installing dependencies with Poetry..."
	@pip install -r requirements.txt
	@poetry install --no-root

requirements:
	@echo "Updating requirements.txt..."
	@pip freeze > requirements.txt

test:
	@echo "Running all tests..."
	@poetry run pytest -s -rx -k $(K) --pdb store ./tests/
	@poetry run pytest

precommit:
	@echo "Installing pre-commit hooks..."
	@poetry run pre-commit install

docker-up:
	@echo "Starting Docker containers..."
	@docker compose up -d

docker-down:
	@echo "Stopping Docker containers..."
	@docker compose down
