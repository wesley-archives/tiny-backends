from typing import List
from fastapi import APIRouter, Depends, status
from src.schemas.student import StudentIn, StudentOut
from src.usecases.student import StudentUsecase

router = APIRouter(tags=["students"])

def get_usecase() -> StudentUsecase:
    return StudentUsecase()

@router.get("/", response_model=List[StudentOut])
async def list_students(usecase: StudentUsecase = Depends(get_usecase)):
    return await usecase.list()

@router.get("/{student_id}", response_model=StudentOut)
async def get_student(student_id: str, usecase: StudentUsecase = Depends(get_usecase)):
    return await usecase.get(student_id)

@router.post("/", response_model=StudentOut, status_code=status.HTTP_201_CREATED)
async def create_student(body: StudentIn, usecase: StudentUsecase = Depends(get_usecase)):
    return await usecase.create(body)

@router.put("/{student_id}", response_model=StudentOut)
async def update_student(student_id: str, body: StudentIn, usecase: StudentUsecase = Depends(get_usecase)):
    return await usecase.update(student_id, body)

@router.delete("/{student_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_student(student_id: str, usecase: StudentUsecase = Depends(get_usecase)):
    await usecase.delete(student_id)
    return
