import { Property } from "@tsed/schema";

export class PassportUser {
  @Property()
  id: string;

  @Property()
  email: string;

  @Property()
  role: string;
}
