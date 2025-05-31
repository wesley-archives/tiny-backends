from motor.motor_asyncio import AsyncIOMotorClient
from src.core.settings import Settings

settings = Settings()


class MongoClient:
    def __init__(self):
        self.client = AsyncIOMotorClient(settings.DATABASE_URL)

    def get(self) -> AsyncIOMotorClient:
        return self.client

    def close(self):
        self.client.close()
