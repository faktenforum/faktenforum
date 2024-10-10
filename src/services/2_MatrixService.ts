// src/services/MatrixService.ts
import { Inject, Injectable } from "@tsed/di";
import type { MatrixClient, Preset } from "matrix-js-sdk";
import sdk from "matrix-js-sdk";
import { EventType, RoomType, Room } from "matrix-js-sdk";
import { EnvService, HasuraService } from "~/services"; // Import the EnvService
import { $log } from "@tsed/logger";
import { logger as mxLogger } from "matrix-js-sdk/lib/logger";
import { QueryChannelsDocument } from "~/generated/graphql";
import type { QueryChannelsQuery, QueryChannelsQueryVariables } from "~/generated/graphql";
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
  @Inject()
  hasuraService: HasuraService;
  private client: MatrixClient | null = null;
  private spaceIdMap: Record<SpaceNames, string> = {
    [SpaceNames.CommunitySubmissions]: "",
    [SpaceNames.CommunityFactchecks]: "",
    [SpaceNames.Community]: "",
    [SpaceNames.InternalSubmissions]: "",
    [SpaceNames.InternalFactchecks]: "",
    [SpaceNames.Internal]: ""
  };

  constructor(envService: EnvService) {
    this.envService = envService;
    mxLogger.setLevel(envService.env === "development" ? mxLogger.levels.DEBUG : mxLogger.levels.INFO);
    this.client = sdk.createClient({
      baseUrl: envService.matrixUrl,
      logger: mxLogger
    });

    this.initialize();
  }
  private async initialize() {
    try {
      const loginResponse = await this.client!.login("m.login.password", {
        user: this.envService.matrixAccount,
        password: this.envService.matrixPassword
      });
      $log.info("[MatrixService] Matrix client initialized with URL:", loginResponse);
      this.client!.startClient({ initialSyncLimit: 10 });
    } catch (error) {
      $log.error("[MatrixService] Error initializing Matrix client:", error);
      process.exit(1);
    }
    this.client!.on(sdk.ClientEvent.Sync, async (state) => {
      if (state === "PREPARED") {
        $log.info("[MatrixService] Matrix client is ready and synced.");
        try {
          await this.initSpaces();
          await this.initChannels();
        } catch (error) {
          $log.error("[MatrixService] Error on init:", error);
          process.exit(1);
        }
      }
    });
  }

  private async initSpaces() {
    if (!this.client) {
      throw new Error("Matrix client is not initialized");
    }
    const spaces = Object.values(SpaceNames);
    const rooms = await this.client.getRooms();

    for (const space of spaces) {
      const room = rooms.find((room) => room.name === space);

      if (!room) {
        $log.warn(`[MatrixService] Space ${space} does not exist.`);
        try {
          const alias = `#${space}:${this.envService.matrixDomain}`; // Create a nice alias
          const response = await this.client.createRoom({
            name: space,
            preset: sdk.Preset.PrivateChat as Preset,
            room_alias_name: space, // This is the local part of the alias
            creation_content: {
              [EventType.RoomMessage]: RoomType.Space
            }
          });
          this.spaceIdMap[space] = response.room_id;
          $log.info(
            `[MatrixService] Private space ${space} created with room ID: ${response.room_id} and alias: ${alias}`
          );
        } catch (error) {
          $log.error(`[MatrixService] Error creating private space ${space}:`, error);
        }
      } else {
        this.spaceIdMap[space] = room.roomId;
        $log.info(`[MatrixService] Space ${space} exists.`);
      }
    }
  }

  public async initChannels() {
    if (!this.client) {
      throw new Error("Matrix client is not initialized");
    }
    try {
      const publicSpaceRooms = (await this.client.getRoomHierarchy(this.spaceIdMap[SpaceNames.Community]))
        .rooms;
      const internalSpaceRooms = (await this.client.getRoomHierarchy(this.spaceIdMap[SpaceNames.Internal]))
        .rooms;

      $log.info(`[MatrixService] Rooms in public space:`, publicSpaceRooms);
      $log.info(`[MatrixService] Rooms in internal space:`, internalSpaceRooms);

      const channels = await this.hasuraService.adminRequest<QueryChannelsQuery, QueryChannelsQueryVariables>(
        QueryChannelsDocument,
        {}
      );
      $log.info(`[MatrixService] Channels:`, channels);
      for (const channel of channels.channel) {
        if (channel.internal && !internalSpaceRooms.some((room) => room.name === channel.name)) {
          $log.info("Creating room in internal space", channel.name);
        } else if (!channel.internal && !publicSpaceRooms.some((room) => room.name === channel.name)) {
          $log.info("Creating room in public space", channel.name);
        }
      }
    } catch (error) {
      $log.error(`[MatrixService] Error during initChannels ${error}`);
      throw error;
    }

    // get rooms in space Community and Internal
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
