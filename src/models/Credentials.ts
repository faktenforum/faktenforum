import { Format, MinLength, Property } from "@tsed/schema";

export class Credentials {
  @Property()
  @Format("email")
  email: string;

  @Property()
  @MinLength(3)
  password: string;
}
