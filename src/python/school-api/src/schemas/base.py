from datetime import datetime
from uuid import uuid4
from pydantic import UUID4, BaseModel, Field

class BaseSchema(BaseModel):
    id: UUID4 = Field(default_factory=uuid4)
    created_at: datetime = Field(default_factory=datetime.now)
    updated_at: datetime = Field(default_factory=datetime.now)
