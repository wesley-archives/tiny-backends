import { FastifyReply, FastifyRequest, FastifyError } from "fastify";
import { CustomError } from "@/error/custom.error";

export class ErrorMiddleware {
  static handle(error: FastifyError, req: FastifyRequest, res: FastifyReply) {
    console.error(
      `Error occurred during request ${req.method} ${req.url}:`,
      error
    );

    if (error instanceof CustomError) {
      return res.status(error.statusCode).send({
        message: error.message,
      });
    }

    if (error.validation) {
      return res.status(400).send({
        message: "Validation failed",
        errors: error.validation,
      });
    }

    return res.status(500).send({
      message: "Internal server error",
    });
  }
}
