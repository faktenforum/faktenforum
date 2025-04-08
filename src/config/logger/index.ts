import { $log } from "@tsed/common";

import { isProduction } from "../envs/index";

if (isProduction) {
  $log.appenders.set("stdout", {
    type: "stdout",
    levels: ["info", "debug"],
    layout: {
      type: "json"
    }
  });

  $log.appenders.set("stderr", {
    levels: ["trace", "fatal", "error", "warn"],
    type: "stderr",
    layout: {
      type: "json"
    }
  });

  $log.level = "info";
} else {
  $log.appenders.set("stdout", {
    type: "stdout",
    levels: ["info", "debug"],
    layout: {
      type: "colored"
    }
  });

  $log.level = "debug";
}

export default {
  disableRoutesSummary: isProduction, // remove table with routes summary
  disableRequestLog: true, // Disable request logging
  logLevel: isProduction ? "debug" : "debug"
};
