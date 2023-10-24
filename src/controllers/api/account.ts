import { BodyParams, Controller, Delete, Get, Inject, Post, Req } from "@tsed/common";
import { Forbidden } from "@tsed/exceptions";
import { In, Returns } from "@tsed/schema";
import { Request } from "express";
import { AccessControlDecorator } from "~/decorators";
import { Email, PassportUser, PasswordUpdate, Session } from "~/models";
import { AuthService, UsersService } from "~/services";

@Controller("/auth/account")
export class AccountController {
  @Inject()
  usersService: UsersService;

  @Inject()
  authService: AuthService;

  @AccessControlDecorator({ role: "ALL" })
  @Returns(200, Array).Of(Session)
  @Get("/sessions")
  async sessions(@Req() request: Request) {
    const { id } = request.user as PassportUser;

    const sessions = await this.usersService.getUserSessions(id);
    return sessions?.map((session) => ({
      id: session.id,
      userAgent: session.userAgent,
      expiresAt: session.expiresAt,
      createdAt: session.createdAt,
      updatedAt: session.updatedAt
    }));
  }

  @AccessControlDecorator({ role: "ALL" })
  @Returns(200)
  @Delete("/sessions/:id")
  async deleteSession(@Req() request: Request) {
    const { id } = request.user as PassportUser;

    await this.usersService.deleteUserSession(id, request.params.id);

    return {};
  }

  @AccessControlDecorator({ role: "ALL" })
  @Returns(200)
  @Post("/email")
  async updateEmail(@Req() request: Request, @BodyParams() body: Email) {
    const { id } = request.user as PassportUser;

    const user = await this.usersService.updateEmail(id, body.email);
    if (!user) throw new Error("User not found");
    return {};
  }

  @AccessControlDecorator({ role: "ALL" })
  @Returns(200)
  @Post("/password")
  async updatePassword(@Req() request: Request, @BodyParams() body: PasswordUpdate) {
    const { id } = request.user as PassportUser;

    await this.authService.updatePassword(id, {
      oldPass: body.oldPassword,
      newPass: body.newPassword
    });

    return {};
  }
}
