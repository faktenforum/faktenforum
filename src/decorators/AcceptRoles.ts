import { AcceptRolesMiddleware } from "@/middlewares";
import { StoreSet, useDecorators } from "@tsed/core";
import { UseBefore } from "@tsed/platform-middlewares";

export function AcceptRoles(...roles: string[]) {
  return useDecorators(UseBefore(AcceptRolesMiddleware), StoreSet(AcceptRolesMiddleware, roles));
}
