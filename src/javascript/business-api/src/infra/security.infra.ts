import { Secret } from "jsonwebtoken";
import { JwtDto, PasswordDto } from "@/dto/security.dto";
import dotenv from "dotenv";
dotenv.config();

export class Security {
  public static jwt: JwtDto = {
    secret: process.env.JWT_SECRET as Secret,
    expiresIn: (process.env.JWT_EXPIRES_IN || "24h") as any,
  };

  public static password: PasswordDto = {
    saltRounds: parseInt(process.env.SALT_ROUNDS || "10", 10),
  };
}
