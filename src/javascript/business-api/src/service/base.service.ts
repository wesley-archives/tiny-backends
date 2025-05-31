import { BaseRepository } from "@/repository/base.repository";
import { BaseMapper } from "@/mapper/base.mapper";
import {
  EntityNotFoundException,
  InternalServerException,
} from "@/error/custom.error";

export class BaseService<
  Entity,
  DetailsDto,
  SummaryDto,
  CreateDto extends Partial<Entity>,
  UpdateDto extends Partial<Entity>
> {
  constructor(
    protected readonly repository: BaseRepository<Entity>,
    protected readonly mapper: BaseMapper<Entity, DetailsDto, SummaryDto>
  ) {
    if (repository == null || mapper == null)
      throw new InternalServerException(
        "One or more attributes are not initialized"
      );
  }

  async getById(params: { id: string }): Promise<DetailsDto | undefined> {
    const entity = await this.repository.findById(params.id);

    if (!entity) {
      throw new EntityNotFoundException("Not found");
    }

    return this.mapper ? this.mapper.toDetailsDTO(entity) : (entity as any);
  }

  async getAll(): Promise<SummaryDto[]> {
    const entities = await this.repository.findAll();
    return this.mapper.toSummaryDtoList(entities);
  }

  async create(data: CreateDto): Promise<DetailsDto | undefined> {
    const entity = await this.repository.create(data);
    return entity ? this.mapper.toDetailsDTO(entity) : undefined;
  }

  async update(
    params: { id: string },
    data: UpdateDto
  ): Promise<DetailsDto | undefined> {
    await this.getById(params);
    const result = await this.repository.update(params.id, data);
    return result ? this.mapper.toDetailsDTO(result) : undefined;
  }

  async delete(params: { id: string }): Promise<void> {
    await this.getById(params);
    await this.repository.delete(params.id);
  }
}
