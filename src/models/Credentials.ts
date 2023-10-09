import { Format, Property } from "@tsed/schema";

export class Credentials {
  @Property()
  @Format("email")
  email: string;

  @Property()
  password: string;
}
