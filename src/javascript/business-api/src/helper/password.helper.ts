import { Security } from "@/infra/security.infra";
import bcrypt from "bcryptjs";

export class PasswordHelper {
  static hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, Security.password.saltRounds);
  }

  static verifyPassword(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }
}
