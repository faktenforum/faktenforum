import { EnvironmentService } from "@/services/EnvironmentService";
import { PrismaClient } from "@prisma/client";
import { $log } from "@tsed/common";
import { PlatformExpress } from "@tsed/platform-express";

import { Server } from "./Server";

async function bootstrap() {
  try {
    const platform = await PlatformExpress.bootstrap(Server);
    const environmentService = platform.injector.get<EnvironmentService>(EnvironmentService);
    await platform.listen();

    process.on("SIGINT", () => {
      platform.stop();
    });
  } catch (error) {
    $log.error({ event: "SERVER_BOOTSTRAP_ERROR", message: error.message, stack: error.stack });
  }
}

bootstrap();

const prisma = new PrismaClient();
export default prisma;
