"""Student Factory Module."""

from faker import Faker
from src.schemas.student import StudentIn, StudentOut, StudentUpdate, StudentDelete

faker = Faker()


class StudentFactory:
    """Factory for schemas to generate random data for testing."""

    @staticmethod
    def factory_in():
        """Generate random data for testing."""

        data = {
            "name": faker.name(),
            "email": faker.email(),
            "phone": faker.phone_number(),
            "address": faker.address(),
            "birthdate": faker.date_of_birth(),
            "gender": faker.random_element(elements=("M", "F")),
        }
        return StudentIn(**data)

    @staticmethod
    def factory_out():
        """Generate random data for testing."""

        data = {
            "id": faker.uuid4(),
            "created_at": faker.date_time_this_month(),
            "updated_at": faker.date_time_this_month(),
        }
        return StudentOut(**data)

    @staticmethod
    def factory_update():
        """Generate random data for testing."""

        data = {
            "name": faker.name(),
            "email": faker.email(),
            "phone": faker.phone_number(),
            "address": faker.address(),
            "birthdate": faker.date_of_birth(),
            "gender": faker.random_element(elements=("M", "F")),
        }
        return StudentUpdate(**data)

    @staticmethod
    def factory_delete():
        """Generate random data for testing."""

        data = {
            "id": faker.uuid4(),
            "created_at": faker.date_time_this_month(),
            "updated_at": faker.date_time_this_month(),
        }
        return StudentDelete(**data)
