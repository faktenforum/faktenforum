import { Generics, CollectionOf, Property, Required } from "@tsed/schema";

@Generics("T")
export class Pagination<T> {
  @Property()
  @Required()
  @CollectionOf("T")
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
