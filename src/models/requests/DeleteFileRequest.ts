import { Property, Required } from "@tsed/schema";
import { IsUUID } from "class-validator";

export class DeleteFileRequest {
  @Property()
  @Required()
  @IsUUID()
  id: string;

  @Property()
  @Required()
  mimeType: string;
}
