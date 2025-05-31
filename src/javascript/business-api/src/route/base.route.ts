import { FastifyInstance } from "fastify";
import { BaseController } from "@/controller/base.controller";
import { AuthMiddleware } from "@/middleware/auth.middleware";
import { PaginationParamsDto } from "@/dto/pagination.dto";

export abstract class BaseRouter<
  Entity,
  DetailsDto,
  SummaryDto,
  CreateDto extends Partial<Entity>,
  UpdateDto extends Partial<Entity>
> {
  protected readonly baseUri: string;
  protected readonly resourceUri: string;
  protected readonly uri: string;

  constructor(
    protected readonly server: FastifyInstance,
    protected readonly controller: BaseController<
      Entity,
      DetailsDto,
      SummaryDto,
      CreateDto,
      UpdateDto
    >,
    baseUri: string,
    resourceUri: string
  ) {
    this.baseUri = baseUri;
    this.resourceUri = resourceUri;
    this.uri = `${baseUri}${resourceUri}`;
  }

  public register(): void {
    this.getAll();
    this.getById();
    this.create();
    this.update();
    this.delete();
  }

  public getAll() {
    this.server.get<{ Querystring: PaginationParamsDto }>(
      `${this.uri}`,
      { preHandler: AuthMiddleware.handle },
      this.controller.getAll.bind(this.controller)
    );
  }

  public getById() {
    this.server.get<{ Params: { id: string } }>(
      `${this.uri}/:id`,
      { preHandler: AuthMiddleware.handle },
      this.controller.getById.bind(this.controller)
    );
  }

  public create() {
    this.server.post<{ Body: CreateDto }>(
      `${this.uri}`,
      { preHandler: AuthMiddleware.handle },
      this.controller.create.bind(this.controller)
    );
  }

  public update() {
    this.server.put<{ Params: { id: string }; Body: UpdateDto }>(
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
