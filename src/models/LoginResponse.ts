import { Property } from "@tsed/schema";

export class LoginResponse {
  @Property()
  token: string = "";
}
