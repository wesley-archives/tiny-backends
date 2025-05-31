import { UserDetailsDto } from "@/dto/user.dto";

export interface AuthSignupRequestDto {
  name: string;
  email: string;
  password: string;
  image?: string;
}

export interface AuthSigninRequestDto {
  email: string;
  password: string;
}

export interface AuthResponseDto {
  token: string;
  user: UserDetailsDto;
}
