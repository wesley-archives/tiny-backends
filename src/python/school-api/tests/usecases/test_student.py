"""Student usecases test module."""

from src.usecases.student import StudentUsecase
from src.schemas.student import StudentOut, StudentUpdate

student_usecase = StudentUsecase()


async def test_usecase_create(student_in):
    """Test create student usecase."""

    student = await student_usecase.create(body=student_in)
    assert isinstance(student, StudentOut)


async def test_usecase_list():
    """Test list students usecase."""

    students = await student_usecase.list()
    assert isinstance(students, list)
    assert all(isinstance(student, StudentOut) for student in students)


async def test_usecase_get(student_in):
    """Test get student usecase."""

    created_student = await student_usecase.create(body=student_in)
    get_student = await student_usecase.get(created_student.id)
    assert isinstance(get_student, StudentOut)


async def test_usecase_update(student_in):
    """Test update student usecase."""

    created_student = await student_usecase.create(body=student_in)
    updated_student = await student_usecase.update(created_student.id, StudentUpdate())
    assert isinstance(updated_student, StudentOut)


async def test_usecase_delete(student_in):
    """Test delete student usecase."""

    created_student = await student_usecase.create(body=student_in)
    deleted_student = await student_usecase.delete(created_student.id)
    assert isinstance(deleted_student, bool)
