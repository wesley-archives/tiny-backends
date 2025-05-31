export abstract class CustomError extends Error {
  public statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.name = "CustomError";
  }
}

export class EntityAlreadyExistsException extends CustomError {
  constructor(message = "Entity already exists") {
    super(message, 409);
  }
}

export class EntityNotFoundException extends CustomError {
  constructor(message = "Entity not found") {
    super(message, 404);
  }
}

export class UnauthorizedException extends CustomError {
  constructor(message = "Unauthorized") {
    super(message, 401);
  }
}

export class BadRequestException extends CustomError {
  constructor(message = "Bad Request") {
    super(message, 400);
  }
}

export class ValidationException extends CustomError {
  constructor(message = "Validation error") {
    super(message, 422);
  }
}

export class InternalServerException extends CustomError {
  constructor(message = "Internal Server Error") {
    super(message, 500);
  }
}

export class NotImplementedServerException extends CustomError {
  constructor(message = "Not Implemented") {
    super(message, 500);
  }
}

export class EnvironmentException extends CustomError {
  constructor(message = "Environment variable not set") {
    super(message, 500);
  }
}
