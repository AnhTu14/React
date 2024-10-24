export interface PaginationParams {
  _limit: number;
  _page: number;
  _totalRows: number;
}

export interface ListReponsive<T> {
  data: T[];
  pagination: PaginationParams;
}

export interface ListParams {
  _page?: number;
  _limit?: number;
  _sort?: string;
  _order?: "asc" | "desc";

  [key: string]: unknown;
}
