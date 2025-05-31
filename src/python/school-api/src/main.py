from fastapi import FastAPI
from src.core.settings import Settings
from src.routes.student import router as student_router

settings = Settings()

def create_app() -> FastAPI:
    app = FastAPI(
        title=settings.PROJECT_NAME,
        version=settings.VERSION,
        root_path=settings.ROOT_DIR
    )
    app.include_router(student_router, prefix="/students")
    return app

app = create_app()
