import {
  PaginationMetaDto,
  PaginationParamsDto,
  PaginationResultDto,
} from "@/dto/pagination.dto";

const DEFAULT_PAGE = 1;
const DEFAULT_SIZE = 10;
const DEFAULT_SORT = "desc";
const DEFAULT_ORDER = "createdAt";

export class Pagination<T extends object> {
  private page: number;
  private size: number;
  private sort: "asc" | "desc";
  private order: string;
  private query?: string;
  public skip: number;
  public take: number;

  constructor({
    page = DEFAULT_PAGE,
    size = DEFAULT_SIZE,
    sort = DEFAULT_SORT,
    order = DEFAULT_ORDER,
    query,
  }: PaginationParamsDto) {
    if (page < 1 || size < 1) throw new Error("Invalid pagination parameters");

    this.page = page;
    this.size = size;
    this.sort = sort;
    this.order = order;
    this.query = query;
    this.skip = this.calculateSkip();
    this.take = size;
  }

  public getPaginationMeta(totalItems: number): PaginationMetaDto {
    const totalPages = this.calculateTotalPages(totalItems);
    return {
      sort: this.sort,
      order: this.order,
      page: this.page,
      size: this.size,
      totalPages,
      totalItems,
    };
  }

  public getPaginationParams(): PaginationParamsDto {
    return {
      page: this.page,
      size: this.size,
      sort: this.sort,
      order: this.order,
      query: this.query,
    };
  }

  public async paginate(
    dataQuery: () => Promise<T[]>,
    countQuery: () => Promise<number>
  ): Promise<PaginationResultDto<T>> {
    const [data, totalItems] = await Promise.all([dataQuery(), countQuery()]);
    return {
      data,
      pagination: this.getPaginationMeta(totalItems),
    };
  }

  private calculateSkip() {
    return (this.page - 1) * this.size;
  }

  private calculateTotalPages(totalItems: number) {
    return Math.ceil(totalItems / this.size);
  }
}
