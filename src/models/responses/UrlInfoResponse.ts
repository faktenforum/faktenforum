import { Property } from "@tsed/schema";

export class UrlInfoResponse {
  @Property()
  description: string;

  @Property()
  icon: string;

  @Property()
  image: string;

  @Property()
  language: string;

  @Property()
  provider: string;

  @Property()
  title: string;

  @Property()
  twitter: string;

  @Property()
  url: string;
}
