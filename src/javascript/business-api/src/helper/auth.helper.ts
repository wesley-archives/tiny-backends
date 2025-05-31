import { UserDetailsDto } from "@/dto/user.dto";
import { EntityNotFoundException } from "@/error/custom.error";
import { UserMapper } from "@/mapper/user.mapper";
import { FastifyRequest } from "fastify";

export class AuthHelper {
  private static userMapper = new UserMapper();

  static getUser(req: FastifyRequest): UserDetailsDto {
    const user = (req as any).user;
    const userDetails = this.userMapper.toDetailsDTO(user);

    if (!userDetails) {
      throw new EntityNotFoundException("User not found");
    }

    return userDetails;
  }

  static getUserId(req: FastifyRequest): string {
    const userId = (req as any).user?.userId;

    if (!userId) {
      throw new Error("No User id");
    }

    return userId;
  }

  static getToken(authHeader?: string): string | null {
    if (!authHeader) return null;

    const parts = authHeader.split(" ");
    if (parts.length === 2 && parts[0] === "Bearer") {
      return parts[1];
    }

    return null;
  }
}
