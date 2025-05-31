import { FastifyInstance } from "fastify";
import { AuthController } from "@/controller/auth.controller";
import { AuthSigninRequestDto, AuthSignupRequestDto } from "@/dto/auth.dto";

export class AuthRouter {
  protected readonly prefix: string;
  protected readonly controller: AuthController;

  constructor(
    protected readonly server: FastifyInstance,
    protected readonly basePrefix: string
  ) {
    this.controller = new AuthController();
    this.prefix = "/auth";
  }

  public register(): void {
    this.signUp();
    this.signIn();
  }

  public signUp() {
    this.server.post<{ Body: AuthSignupRequestDto }>(
      `${this.basePrefix}${this.prefix}/signup`,
      this.controller.signup.bind(this.controller)
    );
  }

  public signIn() {
    this.server.post<{ Body: AuthSigninRequestDto }>(
      `${this.basePrefix}${this.prefix}/signin`,
      this.controller.signin.bind(this.controller)
    );
  }
}
