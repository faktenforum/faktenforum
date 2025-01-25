import { Controller, Inject } from "@tsed/di";

import { Logger } from "@tsed/common";
import { BodyParams } from "@tsed/platform-params";
import { Post, Returns } from "@tsed/schema";
import { ApiKeyAccessControlDecorator } from "~/decorators";
import {
  UpdateUserRoleRequest,
  KratosUserSchema,
  ResendVerificationEmailRequest,
  GetUserRoleRequest
} from "~/models";

import { AuthService, FileService, MatrixService } from "~/services";

const DEFAULT_LANGUAGE = "de";

@Controller("/webhooks")
export class UserAccountActionController {
  @Inject(FileService)
  fileService: FileService;

  @Inject(AuthService)
  authService: AuthService;

  @Inject(MatrixService)
  matrixService: MatrixService;

  @Inject(Logger)
  logger: Logger;

  @Post("/resend-verification-email")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @Returns(200)
  async resendVerificationEmail(@BodyParams() body: ResendVerificationEmailRequest) {
    this.authService.resendVerificationEmail(body.email);
    return;
  }

  @Post("/get-user-role")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, [KratosUserSchema]).ContentType("application/json")) // prettier-ignore
  async getUsersRoles(@BodyParams() body: GetUserRoleRequest) {
    const result = await this.authService.getAllUsers(undefined, undefined, body.ids);
    return result.identities.map((user) => ({
      id: user.id,
      role: user.metadata_public.role,
      verified: !!user.verifiable_addresses?.[0]?.verified
    }));
  }

  @Post("/update-user-role")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, KratosUserSchema).ContentType("application/json")) // prettier-ignore
  async updateUserRole(@BodyParams() body: UpdateUserRoleRequest) {
    this.matrixService.alterSpaceMembershipsByRole(body.userId, body.role);
    const user = await this.authService.updateUserRole(body.userId, body.role);
    return {
      id: user.id,
      email: user.traits.email,
      username: user.traits.username,
      role: user.metadata_public.role,
      lang: user.metadata_public.lang ?? DEFAULT_LANGUAGE
    };
  }
}
