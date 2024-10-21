import { $log } from "@tsed/common";
import { PlatformExpress } from "@tsed/platform-express";
import { EnvService } from "~/services";

import { Server } from "./Server";

async function bootstrap() {
  try {
    const platform = await PlatformExpress.bootstrap(Server);
    platform.injector.get<EnvService>(EnvService);
    await platform.listen();

    process.on("SIGINT", () => {
      platform.stop();
    });
  } catch (error) {
    $log.error({ event: "SERVER_BOOTSTRAP_ERROR", message: error.message, stack: error.stack });
  }
}

bootstrap();
