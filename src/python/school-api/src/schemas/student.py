from typing import Optional
from datetime import datetime
from pydantic import Field
from src.schemas.base import BaseSchema

class StudentIn(BaseSchema):
    name: str = Field(..., description="Name.", min_length=1, max_length=255)
    email: str = Field(..., description="E-mail.", min_length=1, max_length=255)
    phone: str = Field(..., description="Phone number.", min_length=1, max_length=255)
    address: str = Field(..., description="Address.", min_length=1, max_length=255)
    birthdate: datetime = Field(..., description="Birthdate.")
    gender: str = Field(..., description="Gender (M/F).", min_length=1, max_length=1)

class StudentOut(BaseSchema):
    id: str = Field(..., description="Student ID.", min_length=1, max_length=255)
    created_at: datetime = Field(..., description="Creation date.")
    updated_at: datetime = Field(..., description="Update date.")

class StudentUpdate(BaseSchema):
    name: Optional[str] = Field(None, description="Name.", min_length=1, max_length=255)
    email: Optional[str] = Field(
        None, description="E-mail.", min_length=1, max_length=255
    )
    phone: Optional[str] = Field(
        None, description="Phone number.", min_length=1, max_length=255
    )
    address: Optional[str] = Field(
        None, description="Address.", min_length=1, max_length=255
    )
    birthdate: Optional[datetime] = Field(None, description="Birthdate.")
    gender: Optional[str] = Field(
        None, description="Gender.", min_length=1, max_length=1
    )

class StudentDelete(BaseSchema):
    id: str = Field(..., description="Student ID.", min_length=1, max_length=255)
