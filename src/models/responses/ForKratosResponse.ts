import { Property, Required } from "@tsed/schema";

class ValidationMessage {
  @Property()
  @Required()
  id: number;

  @Property()
  @Required()
  text: string;

  @Property()
  @Required()
  type: "error" | "info" | "success";

  @Property()
  context?: Object;
}

class ValidationInstance {
  @Property()
  @Required()
  instance_ptr: string;

  @Property()
  @Required()
  messages: ValidationMessage[];
}

export class ForKratosResponse {
  @Property()
  @Required()
  messages: ValidationInstance[];
}
