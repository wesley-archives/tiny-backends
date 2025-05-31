import { FastifyReply, FastifyRequest } from "fastify";
import { ProfileService } from "@/service/profile.service";
import { UserDetailsDto, UserSummaryDto, UserUpdateDto } from "@/dto/user.dto";
import { AuthSignupRequestDto } from "@/dto/auth.dto";
import { BaseController } from "@/controller/base.controller";
import { User } from "@/model/user.model";
import { AuthHelper } from "@/helper/auth.helper";

export class ProfileController extends BaseController<
  User,
  UserDetailsDto,
  UserSummaryDto,
  AuthSignupRequestDto,
  UserUpdateDto
> {
  constructor() {
    super(new ProfileService());
  }

  async get(req: FastifyRequest, res: FastifyReply) {
    try {
      const id = AuthHelper.getUserId(req);
      const user = await this.service.getById({ id });
      return res.status(200).send(user as UserDetailsDto);
    } catch (error) {
      throw error;
    }
  }

  async update(
    req: FastifyRequest<{ Body: UserUpdateDto }>,
    res: FastifyReply
  ) {
    try {
      const id = AuthHelper.getUserId(req);
      const user = await this.service.update({ id }, req.body);
      return res.status(200).send(user as UserDetailsDto);
    } catch (error) {
      throw error;
    }
  }

  async delete(req: FastifyRequest, res: FastifyReply) {
    try {
      const id = AuthHelper.getUserId(req);
      await this.service.delete({ id });
      return res.status(204).send();
    } catch (error) {
      throw error;
    }
  }
}
