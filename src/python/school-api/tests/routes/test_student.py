"""Student routes test module."""

from fastapi import status
from tests.factories.student import StudentFactory
from src.schemas.student import StudentOut

student_factory = StudentFactory()


def test_route_create(client):
    """Test create student route."""

    student_in = student_factory.factory_in()
    response = client.post("/students/", json=student_in.model_dump())
    content = response.json()

    assert response.status_code == status.HTTP_201_CREATED
    assert content == {
        "id": content["id"],
        "created_at": content["created_at"],
        "updated_at": content["updated_at"],
    }


def test_route_list(client):
    """Test list students route."""

    response = client.get("/students/")

    assert response.status_code == status.HTTP_200_OK
    assert isinstance(response.json(), list)
    assert all(isinstance(student, StudentOut) for student in response.json())


def test_route_get(client):
    """Test get student route."""

    student_in = student_factory.factory_in()
    response = client.post("/students/", json=student_in.model_dump())
    student_id = response.json()["id"]

    response = client.get(f"/students/{student_id}")
    content = response.json()

    assert response.status_code == status.HTTP_200_OK
    assert content == {
        "id": content["id"],
        "created_at": content["created_at"],
        "updated_at": content["updated_at"],
    }


def test_route_update(client):
    """Test update student route."""

    student_in = student_factory.factory_in()
    response = client.post("/students/", json=student_in.model_dump())
    student_id = response.json()["id"]

    student_update = student_factory.factory_update()
    response = client.put(f"/students/{student_id}", json=student_update.model_dump())
    content = response.json()

    assert response.status_code == status.HTTP_200_OK
    assert content == {
        "id": content["id"],
        "created_at": content["created_at"],
        "updated_at": content["updated_at"],
    }


def test_route_delete(client):
    """Test delete student route."""

    student_in = student_factory.factory_in()
    response = client.post("/students/", json=student_in.model_dump())
    student_id = response.json()["id"]

    response = client.delete(f"/students/{student_id}")
    content = response.json()

    assert response.status_code == status.HTTP_200_OK
    assert content == {
        "id": content["id"],
        "created_at": content["created_at"],
        "updated_at": content["updated_at"],
    }
