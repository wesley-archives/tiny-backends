from typing import List
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
import pymongo
from src.core.database import MongoClient
from src.schemas.student import StudentIn, StudentOut
from src.core.exceptions import NotFoundException
from bson.objectid import ObjectId

class StudentUsecase:
    def __init__(self) -> None:
        self.client: AsyncIOMotorClient = MongoClient().get()
        self.database: AsyncIOMotorDatabase = self.client.get_database()
        self.collection = self.database.get_collection("students")

    async def create(self, body: StudentIn) -> StudentOut:
        doc = body.model_dump()
        insert_result = await self.collection.insert_one(doc)
        return StudentOut(
            id=str(insert_result.inserted_id),
            created_at=doc["created_at"],
            updated_at=doc["updated_at"],
        )

    async def list(self) -> List[StudentOut]:
        results = []
        async for doc in self.collection.find():
            results.append(
                StudentOut(
                    id=str(doc["_id"]),
                    created_at=doc["created_at"],
                    updated_at=doc["updated_at"]
                )
            )
        return results

    async def get(self, student_id: str) -> StudentOut:
        doc = await self.collection.find_one({"_id": ObjectId(student_id)})
        if not doc:
            raise NotFoundException("Student not found")
        return StudentOut(
            id=str(doc["_id"]),
            created_at=doc["created_at"],
            updated_at=doc["updated_at"]
        )

    async def update(self, student_id: str, body: StudentIn) -> StudentOut:
        update_result = await self.collection.find_one_and_update(
            {"_id": ObjectId(student_id)},
            {"$set": body.model_dump(exclude_none=True)},
            return_document=pymongo.ReturnDocument.AFTER
        )
        if not update_result:
            raise NotFoundException("Student not found")
        return StudentOut(
            id=str(update_result["_id"]),
            created_at=update_result["created_at"],
            updated_at=update_result["updated_at"]
        )

    async def delete(self, student_id: str) -> bool:
        delete_result = await self.collection.delete_one({"_id": ObjectId(student_id)})
        if delete_result.deleted_count == 0:
            raise NotFoundException("Student not found")
        return True
