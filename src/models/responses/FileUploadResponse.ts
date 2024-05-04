import { Property, Required } from "@tsed/schema";

export class FileUploadResponse {
  @Property()
  @Required()
  id: string;
}
