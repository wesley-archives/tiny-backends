import { FastifyReply, FastifyRequest } from "fastify";
import { UnauthorizedException } from "@/error/custom.error";
import { JwtHelper } from "@/helper/jwt.helper";
import { AuthHelper } from "@/helper/auth.helper";

export class AuthMiddleware {
  static async handle(req: FastifyRequest, res: FastifyReply) {
    const token = AuthHelper.getToken(req.headers.authorization);

    if (!token) {
      throw new UnauthorizedException("Authorization token missing or invalid");
    }

    try {
      const decoded = JwtHelper.verifyToken(token);
      (req as any).user = decoded;
    } catch (error) {
      throw new UnauthorizedException("Invalid token");
    }
  }
}
