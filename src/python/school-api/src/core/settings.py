from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    PROJECT_NAME: str = "School Management System"
    VERSION: str = "0.1.0"
    ROOT_DIR: str = "/"
    DATABASE_URL: str = "mongodb://localhost:27017"

    model_config = SettingsConfigDict()
