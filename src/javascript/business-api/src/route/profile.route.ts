import { FastifyInstance } from "fastify";
import { ProfileController } from "@/controller/profile.controller";
import { BaseRouter } from "@/route/base.route";
import { User } from "@/model/user.model";
import { UserDetailsDto, UserUpdateDto, UserSummaryDto } from "@/dto/user.dto";
import { AuthSignupRequestDto } from "@/dto/auth.dto";
import { AuthMiddleware } from "@/middleware/auth.middleware";

export class ProfileRouter extends BaseRouter<
  User,
  UserDetailsDto,
  UserSummaryDto,
  AuthSignupRequestDto,
  UserUpdateDto
> {
  constructor(server: FastifyInstance, baseUri: string) {
    const controller = new ProfileController();
    super(server, controller, baseUri, "/profile");
  }

  public register(): void {
    this.get();
    this.update();
    this.delete();
  }

  public get() {
    this.server.get(
      `${this.uri}`,
      { preHandler: AuthMiddleware.handle },
      (this.controller as ProfileController).get.bind(this.controller)
    );
  }

  public update() {
    this.server.put<{ Params: { id: string }; Body: UserUpdateDto }>(
      `${this.uri}/:id`,
      { preHandler: AuthMiddleware.handle },
      this.controller.update.bind(this.controller)
    );
  }

  public delete() {
    this.server.delete<{ Params: { id: string } }>(
      `${this.uri}/:id`,
      { preHandler: AuthMiddleware.handle },
      this.controller.delete.bind(this.controller)
    );
  }
}
