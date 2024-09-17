import { useDecorators } from "@tsed/core";
import { Forbidden, Unauthorized } from "@tsed/exceptions";
import { UseAuth } from "@tsed/platform-middlewares";
import { Returns } from "@tsed/schema";
import { AccessControlMiddleware } from "~/middlewares";

export interface AccessControlDecoratorOptions extends Record<string, unknown> {
  role?: string;
}

// eslint-disable-next-line
export function AccessControlDecorator(options: AccessControlDecoratorOptions = {}): Function {
  return useDecorators(
    // Order of Decorators is essential  Authenticate -> Secu
    Returns(401, Unauthorized).Description("Unauthorized"),
    Returns(403, Forbidden).Description("Forbidden"),
    UseAuth(AccessControlMiddleware, options)
  );
}
