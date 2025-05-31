export abstract class BaseMapper<Entity, DetailsDto, SummaryDto> {
  abstract toEntity(document: any): Entity;

  abstract toDetailsDTO(entity: Entity): DetailsDto | undefined;

  toDetailsDtoList(entities: Entity[]): DetailsDto[] {
    return entities
      .map((entity) => this.toDetailsDTO(entity))
      .filter((dto): dto is DetailsDto => dto !== null);
  }

  abstract toSummaryDTO(entity: Entity): SummaryDto | undefined;

  toSummaryDtoList(entities: Entity[]): SummaryDto[] {
    return entities
      .map((entity) => this.toSummaryDTO(entity))
      .filter((dto): dto is SummaryDto => dto !== null);
  }
}
