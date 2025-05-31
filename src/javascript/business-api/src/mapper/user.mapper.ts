import { UserDetailsDto, UserSummaryDto } from "@/dto/user.dto";
import { BaseMapper } from "@/mapper/base.mapper";
import { User } from "@/model/user.model";

export class UserMapper extends BaseMapper<
  User,
  UserDetailsDto,
  UserSummaryDto
> {
  toEntity(document: any): User {
    return new User(document);
  }

  toDetailsDTO(user: User): UserDetailsDto | undefined {
    if (user == null) return;

    return {
      id: user._id,
      name: user.name,
      email: user.email,
    };
  }

  toSummaryDTO(user: User): UserSummaryDto | undefined {
    if (user == null) return;

    return {
      id: user._id,
      name: user.name,
    };
  }
}
