import { useDecorators } from "@tsed/core";
import { Forbidden, Unauthorized } from "@tsed/exceptions";
import { UseAuth } from "@tsed/platform-middlewares";
import { Returns } from "@tsed/schema";
import { ApiKeyAccessControlMiddleware } from "~/middlewares";

export interface ApiKeyAccessControlDecoratorOptions extends Record<string, unknown> {
  service: "kratos" | "hasura";
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function ApiKeyAccessControlDecorator(options: ApiKeyAccessControlDecoratorOptions): Function {
  return useDecorators(
    Returns(401, Unauthorized).Description("Unauthorized"),
    Returns(403, Forbidden).Description("Forbidden"),
    UseAuth(ApiKeyAccessControlMiddleware, options)
  );
}
