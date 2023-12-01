import { CollectionOf, Format, Optional, Property, Required } from "@tsed/schema";

export class ListResponse<T> {
  @Property()
  @Required()
  data: T[];

  @Property()
  @Required()
  totalItems: number;

  @Property()
  @Required()
  totalPages: number;

  @Property()
  @Required()
  currentPage: number;
}
