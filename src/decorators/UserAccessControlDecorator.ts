import { useDecorators } from "@tsed/core";
import { Forbidden, Unauthorized } from "@tsed/exceptions";
import { UseAuth } from "@tsed/platform-middlewares";
import { Returns } from "@tsed/schema";
import { UserAccessControlMiddleware } from "~/middlewares";
import { UserRole } from "~/models";

export interface AccessControlDecoratorOptions extends Record<string, unknown> {
  role?: UserRole | "All";
}

// eslint-disable-next-line
export function UserAccessControlDecorator(options: AccessControlDecoratorOptions = {}): Function {
  return useDecorators(
    // Order of Decorators is essential  Authenticate -> Secu
    Returns(401, Unauthorized).Description("Unauthorized"),
    Returns(403, Forbidden).Description("Forbidden"),
    UseAuth(UserAccessControlMiddleware, options)
  );
}
