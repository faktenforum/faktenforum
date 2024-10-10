// src/services/MatrixService.ts
import { Inject, Injectable } from "@tsed/di";
import type { MatrixClient, Preset } from "matrix-js-sdk";
import sdk from "matrix-js-sdk";
import { EventType, RoomType } from "matrix-js-sdk";
import { EnvService } from "~/services"; // Import the EnvService
import { $log } from "@tsed/logger";
import { logger as mxLogger } from "matrix-js-sdk/lib/logger";

// rewrite matrix logger
mxLogger.info = (...msg) => $log.info(msg);
mxLogger.log = (...msg) => $log.debug(msg);
mxLogger.warn = (...msg) => $log.warn(msg);
mxLogger.error = (...msg) => $log.error(msg);
mxLogger.trace = (...msg) => $log.trace(msg);
mxLogger.debug = (...msg) => $log.debug(msg);

enum SpaceNames {
  CommunitySubmissions = "community_submissions",
  CommunityFactchecks = "community_factchecks",
  Community = "community",
  InternalSubmissions = "internal_submissions",
  InternalFactchecks = "internal_factchecks",
  Internal = "internal"
}

@Injectable()
export class MatrixService {
  @Inject()
  envService: EnvService;
  private client: MatrixClient | null = null;

  constructor(envService: EnvService) {
    this.envService = envService;
    mxLogger.setLevel(envService.env === "development" ? mxLogger.levels.DEBUG : mxLogger.levels.INFO);
    this.client = sdk.createClient({
      baseUrl: envService.matrixUrl,
      logger: mxLogger
    });

    this.initializeClient();
  }
  private async initializeClient() {
    try {
      const loginResponse = await this.client!.login("m.login.password", {
        user: this.envService.matrixAccount,
        password: this.envService.matrixPassword
      });
      $log.info("[MatrixService] Matrix client initialized with URL:", loginResponse);
    } catch (error) {
      $log.error("[MatrixService] Error initializing Matrix client:", error);

      process.exit(1);
    }
    this.client!.startClient({ initialSyncLimit: 10 });
    this.client!.on(sdk.ClientEvent.Sync, (state) => {
      if (state === "PREPARED") {
        $log.info("[MatrixService] Matrix client is ready and synced.");
        this.initSpaces();
      }
    });
  }

  private async initSpaces() {
    const spaces = Object.values(SpaceNames);

    for (const space of spaces) {
      const exists = await this.doesSpaceExist(space);
      if (!exists) {
        $log.warn(`[MatrixService] Space ${space} does not exist.`);
        await this.createSpace(space);
      } else {
        $log.info(`[MatrixService] Space ${space} exists.`);
      }
    }
  }

  private async createSpace(spaceName: string): Promise<void> {
    if (!this.client) {
      throw new Error("Matrix client is not initialized");
    }

    try {
      const alias = `#${spaceName}:${this.envService.matrixDomain}`; // Create a nice alias
      const response = await this.client.createRoom({
        name: spaceName,
        preset: sdk.Preset.PrivateChat as Preset,
        room_alias_name: spaceName, // This is the local part of the alias
        creation_content: {
          [EventType.RoomMessage]: RoomType.Space
        }
      });
      $log.info(
        `[MatrixService] Private space ${spaceName} created with room ID: ${response.room_id} and alias: ${alias}`
      );
    } catch (error) {
      $log.error(`[MatrixService] Error creating private space ${spaceName}:`, error);
    }
  }

  private async doesSpaceExist(spaceName: string): Promise<boolean> {
    if (!this.client) {
      $log.error("[MatrixService] Matrix client is not initialized");
      process.exit(1);
    }

    try {
      const rooms = await this.client.getRooms();
      const spaceExists = rooms.some((room) => room.name === spaceName);
      return spaceExists;
    } catch (error) {
      $log.error("[MatrixService] Error checking if space exists:", error);
      return false;
    }
  }
  async createPulicRoom(roomName: string): Promise<string> {
    if (!this.client) {
      throw new Error("Matrix client is not initialized");
    }
    const response = await this.client.createRoom({
      name: roomName,
      preset: sdk.Preset.PublicChat as Preset
    });

    return response.room_id;
  }

  async addUserToRoom(userId: string, roomId: string): Promise<void> {
    if (!this.client) {
      throw new Error("Matrix client is not initialized");
    }
    await this.client.invite(roomId, userId);
  }

  // Add more methods as needed for other admin tasks
}
