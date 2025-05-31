import { FastifyReply, FastifyRequest } from "fastify";
import { BaseService } from "@/service/base.service";

export abstract class BaseController<
  Entity,
  DetailsDto,
  SummaryDto,
  CreateDto extends Partial<Entity>,
  UpdateDto extends Partial<Entity>
> {
  constructor(
    protected readonly service: BaseService<
      Entity,
      DetailsDto,
      SummaryDto,
      CreateDto,
      UpdateDto
    >
  ) {}

  async getById(
    req: FastifyRequest<{ Params: { id: string } }>,
    res: FastifyReply
  ) {
    try {
      const { id } = req.params;
      const result = await this.service.getById({ id });
      return res.status(200).send(result);
    } catch (error) {
      throw error;
    }
  }

  async getAll(req: FastifyRequest, res: FastifyReply) {
    try {
      const result = await this.service.getAll();
      return res.status(200).send(result);
    } catch (error) {
      throw error;
    }
  }

  async create(req: FastifyRequest<{ Body: CreateDto }>, res: FastifyReply) {
    try {
      const result = await this.service.create(req.body as CreateDto);
      return res.status(201).send(result);
    } catch (error) {
      throw error;
    }
  }

  async update(
    req: FastifyRequest<{ Params: { id: string }; Body: UpdateDto }>,
    res: FastifyReply
  ) {
    try {
      const result = await this.service.update(
        req.params,
        req.body as UpdateDto
      );
      return res.status(200).send(result);
    } catch (error) {
      throw error;
    }
  }

  async delete(
    req: FastifyRequest<{ Params: { id: string } }>,
    res: FastifyReply
  ) {
    try {
      const { id } = req.params;
      await this.service.delete({ id });
      return res.status(204).send();
    } catch (error) {
      throw error;
    }
  }
}
