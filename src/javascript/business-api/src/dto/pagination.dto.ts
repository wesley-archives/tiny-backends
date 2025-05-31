export interface PaginationParamsDto {
  page?: number;
  size?: number;
  sort?: "asc" | "desc";
  order?: string;
  query?: string;
}

export interface PaginationMetaDto {
  sort: "asc" | "desc";
  order: string;
  page: number;
  size: number;
  totalPages: number;
  totalItems: number;
}

export interface PaginationResultDto<T> {
  data: T[];
  pagination: PaginationMetaDto;
}
