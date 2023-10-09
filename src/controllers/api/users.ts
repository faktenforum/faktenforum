import { AccessControlMiddleware } from "@/middlewares";
import { UsersService } from "@/services/UsersService";
import { Controller, Get, PathParams } from "@tsed/common";
import { Forbidden, Unauthorized } from "@tsed/exceptions";
import { Authenticate } from "@tsed/passport";
import { UseAuth } from "@tsed/platform-middlewares";
import { In, Returns, Security } from "@tsed/schema";

// Import the generated type

@Controller("/users")
export class UserController {
  constructor(private usersService: UsersService) {}
  @Authenticate("jwt", { session: false })
  @Security("jwt")
  @UseAuth(AccessControlMiddleware, { role: "ADMIN" }) // or for specific endpoints
  @Returns(401, Unauthorized).Description("Unauthorized")
  @Returns(403, Forbidden).Description("Forbidden")
  @Get("/")
  async getAllUsers() {
    return this.usersService.getAllUsers();
  }
  @Authenticate("jwt", { session: false })
  @Security("jwt")
  @Returns(401, Unauthorized).Description("Unauthorized")
  @Returns(403, Forbidden).Description("Forbidden")
  @Get("/:id")
  async getUserById(@PathParams("id") id: string) {
    return this.usersService.getUserById(id);
  }

  // ... other methods ...
}
