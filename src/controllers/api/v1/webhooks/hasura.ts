import { Controller, Inject } from "@tsed/di";
import { BodyParams } from "@tsed/platform-params";
import { Delete, Post, Returns } from "@tsed/schema";
import { ApiKeyAccessControlDecorator } from "~/decorators";
import { UpdateUserRoleRequest } from "~/models/requests/UpdateUserRoleRequest";
import { KratosUserSchema } from "~/models/responses/KratosUserSchema";
import { AuthService, FileService, HasuraService, KratosUser, ImageService } from "~/services";

const DEFAULT_LANGUAGE = "de";

@Controller("/webhooks")
export class HasuraWebHookController {
  @Inject(FileService)
  fileService: FileService;

  @Inject(ImageService)
  imageService: ImageService;

  @Inject(HasuraService)
  hasuraService: HasuraService;

  @Inject(AuthService)
  authService: AuthService;

  @Delete("/delete-file")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, Object).Description("Successfully deleted the file").ContentType("application/json")) // prettier-ignore
  async deleteFile(@BodyParams() body: { id: string; mimeType: string }) {
    console.log("body.mimeType", body.mimeType);
    this.fileService.deleteFile(body.id);
    if (body.mimeType.startsWith("image/")) {
      this.imageService.deleteImageVersions(body.id);
    }
    return {}; // Returning an empty object with a 200 status code
  }

  transformKratosUser(user: KratosUser) {
    return {
      id: user.id,
      email: user.traits.email,
      username: user.traits.username,
      role: user.metadata_public.role,
      lang: user.metadata_public.lang ?? DEFAULT_LANGUAGE
    };
  }

  @Post("/all-users-with-roles")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, [KratosUserSchema]).ContentType("application/json")) // prettier-ignore
  async allUsersWithRoles() {
    const kratosUsers = await this.authService.getAllUsers();
    return kratosUsers.map(this.transformKratosUser);
  }

  @Post("/update-user-role")
  @ApiKeyAccessControlDecorator({ service: "hasura" })
  @(Returns(200, KratosUserSchema).ContentType("application/json")) // prettier-ignore
  async updateUserRole(@BodyParams() body: UpdateUserRoleRequest) {
    const kratosUser = await this.authService.updateUserRole(body.userId, body.role);
    return this.transformKratosUser(kratosUser);
  }
}
