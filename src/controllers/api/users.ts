import { Controller, Get, Inject, PathParams } from "@tsed/common";
import { AccessControlDecorator } from "~/decorators";
import { UsersService } from "~/services/UsersService";

// Import the generated type

@Controller("/users")
export class UserController {
  @Inject()
  usersService: UsersService;

  @AccessControlDecorator({ role: "ADMIN" })
  @Get("/")
  async getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @AccessControlDecorator({ role: "ADMIN" })
  @Get("/:id")
  async getUserById(@PathParams("id") id: string) {
    return this.usersService.getUserById(id);
  }

  // ... other methods ...
}
