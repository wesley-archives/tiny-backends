import { ObjectId } from "mongodb";

export interface UserDetailsDto {
  id: string | ObjectId | undefined;
  name: string;
  email: string;
}

export interface UserSummaryDto {
  id: string | ObjectId | undefined;
  name: string;
}

export interface UserUpdateDto {
  name?: string;
  email?: string;
}
