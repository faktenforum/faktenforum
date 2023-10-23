import { Format, MinLength, Property, Required } from "@tsed/schema";

export class Credentials {
  @Property()
  @Required()
  @Format("email")
  username: string;

  @Property()
  @Required()
  @MinLength(3)
  password: string;
}
