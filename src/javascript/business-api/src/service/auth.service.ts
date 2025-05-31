import { UserRepository } from "@/repository/user.repository";
import { PasswordHelper } from "@/helper/password.helper";
import { UserDetailsDto } from "@/dto/user.dto";
import { UserMapper } from "@/mapper/user.mapper";
import { AuthSignupRequestDto, AuthSigninRequestDto } from "@/dto/auth.dto";
import {
  BadRequestException,
  EntityAlreadyExistsException,
  UnauthorizedException,
} from "@/error/custom.error";

export class AuthService {
  private repository: UserRepository;
  private mapper: UserMapper;

  constructor() {
    this.repository = new UserRepository();
    this.mapper = new UserMapper();
  }

  async signup(data: AuthSignupRequestDto): Promise<UserDetailsDto> {
    const existingUser = await this.repository.findByEmail(data.email);

    if (existingUser) {
      throw new EntityAlreadyExistsException("Email already in use");
    }

    const password = await PasswordHelper.hashPassword(data.password);

    const result = await this.repository.create({
      ...data,
      password,
    });

    let user = this.mapper.toDetailsDTO(result);
    if (user == undefined) throw new BadRequestException();
    return user;
  }

  async signin(data: AuthSigninRequestDto): Promise<UserDetailsDto> {
    const result = await this.repository.findByEmail(data.email);

    if (
      !result ||
      !(await PasswordHelper.verifyPassword(data.password, result.password))
    ) {
      throw new UnauthorizedException("Invalid email or password");
    }

    let user = this.mapper.toDetailsDTO(result);
    if (user == undefined) throw new BadRequestException();
    return user;
  }
}
