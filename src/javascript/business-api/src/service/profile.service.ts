import { User } from "@/model/user.model";
import { UserDetailsDto, UserSummaryDto, UserUpdateDto } from "@/dto/user.dto";
import { AuthSignupRequestDto } from "@/dto/auth.dto";
import { UserRepository } from "@/repository/user.repository";
import { BaseService } from "@/service/base.service";
import { UserMapper } from "@/mapper/user.mapper";

export class ProfileService extends BaseService<
  User,
  UserDetailsDto,
  UserSummaryDto,
  AuthSignupRequestDto,
  UserUpdateDto
> {
  constructor() {
    super(new UserRepository(), new UserMapper());
  }
}
