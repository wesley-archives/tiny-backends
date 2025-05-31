from fastapi import HTTPException, status

class BaseException(Exception):
    def __init__(self, message: str = "Internal Server Error") -> None:
        if message:
            self.message = message

class NotFoundException(HTTPException):
    def __init__(self, message: str = "Resource not found"):
        super().__init__(status_code=status.HTTP_404_NOT_FOUND, detail=message)
