import { FastifyReply, FastifyRequest } from "fastify";
import { AuthService } from "@/service/auth.service";
import { AuthSignupRequestDto, AuthSigninRequestDto } from "@/dto/auth.dto";
import { JwtHelper } from "@/helper/jwt.helper";

export class AuthController {
  protected service: AuthService;

  constructor() {
    this.service = new AuthService();
  }

  async signup(
    req: FastifyRequest<{ Body: AuthSignupRequestDto }>,
    res: FastifyReply
  ) {
    try {
      const authSignupRequestDto = req.body;
      const user = await this.service.signup(authSignupRequestDto);

      if (!user.id) {
        throw new Error("User not created");
      }

      const token = JwtHelper.generateToken(user.id.toString(), user.email);
      return res.status(201).send({ profile: user, token });
    } catch (error) {
      throw error;
    }
  }

  async signin(
    req: FastifyRequest<{ Body: AuthSigninRequestDto }>,
    res: FastifyReply
  ) {
    try {
      const authSigninRequestDto = req.body;
      const user = await this.service.signin(authSigninRequestDto);

      if (!user.id) {
        throw new Error("User not created");
      }

      const token = JwtHelper.generateToken(user.id.toString(), user.email);
      return res.status(200).send({ profile: user, token });
    } catch (error) {
      throw error;
    }
  }
}
