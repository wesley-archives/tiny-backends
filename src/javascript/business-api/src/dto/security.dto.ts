import { Secret, SignOptions } from "jsonwebtoken";

export interface JwtDto extends Pick<SignOptions, "expiresIn"> {
  secret: Secret;
}

export interface PasswordDto {
  saltRounds: number;
}
