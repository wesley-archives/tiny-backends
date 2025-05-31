import jwt from "jsonwebtoken";
import { Security } from "@/infra/security.infra";

export class JwtHelper {
  static generateToken(userId: string, email: string): string {
    return jwt.sign({ userId, email }, Security.jwt.secret, {
      expiresIn: Number(Security.jwt.expiresIn) || Security.jwt.expiresIn,
    });
  }

  static verifyToken(token: string): any {
    return jwt.verify(token, Security.jwt.secret);
  }
}
