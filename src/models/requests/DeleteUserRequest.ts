import { Property, Required } from "@tsed/schema";
import { IsUUID } from "class-validator";

export class DeleteUserRequest {
  @Required()
  @Property()
  @IsUUID()
  userId: string;
}
