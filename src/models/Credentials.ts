import { Format, MinLength, Property, Required } from "@tsed/schema";
import { PasswordFormatDecorator } from "~/decorators";

export class Credentials {
  @Property()
  @Required()
  @Format("email")
  username: string;

  @Property()
  @Required()
  @PasswordFormatDecorator()
  password: string;
}
