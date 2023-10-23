import { Property, Required } from "@tsed/schema";

export class LoginResponse {
  @Property()
  @Required()
  token!: string;
}
