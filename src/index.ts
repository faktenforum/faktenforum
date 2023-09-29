import { PrismaClient } from "@prisma/client";
import { $log } from "@tsed/common";
import { PlatformExpress } from "@tsed/platform-express";

import { Server } from "./Server";
import { ensureEnvironmentVariables } from "./config";

async function bootstrap() {
  try {
    ensureEnvironmentVariables();
    const platform = await PlatformExpress.bootstrap(Server);
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
