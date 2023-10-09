import { Format, Property } from "@tsed/schema";

export class PassportCustomUserInfoModel {
  @Property()
  id: string;

  @Property()
  token: string;

  @Property()
  roles: string[];
}
