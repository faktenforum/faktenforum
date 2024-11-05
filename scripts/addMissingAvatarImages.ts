import { Configuration, Inject } from "@tsed/di";
import { PlatformExpress } from "@tsed/platform-express";
import { Server } from "../server"; // Adjust the import path as needed
import { UserService } from "../services/UserService"; // Adjust the import path as needed
import { FileService } from "../services/FileService"; // Adjust the import path as needed

@Configuration({
  rootDir: __dirname,
  mount: {
    "/": [`${__dirname}/../controllers/**/*.ts`]
  },
  imports: [
    // Your server configuration imports
  ]
})
class ScriptServer extends Server {}

async function bootstrap() {
  try {
    const platform = await PlatformExpress.bootstrap(ScriptServer);
    const userService = platform.injector.get<UserService>(UserService);
    const fileService = platform.injector.get<FileService>(FileService);

    const users = await userService.getAllUsers();
    console.log(`Found ${users.length} users`);

    for (const user of users) {
      if (user.profile_image_id) {
        const fileExists = await fileService.checkFileExists(user.profile_image_id);
        if (fileExists) {
          console.log(`User ${user.id} has a valid profile image (File ID: ${user.profile_image_id})`);
        } else {
          console.log(`User ${user.id} has an invalid profile image ID: ${user.profile_image_id}`);
        }
      } else {
        console.log(`User ${user.id} is missing a profile image`);
      }
    }

    await platform.stop();
  } catch (error) {
    console.error(error);
  }
}

bootstrap();
