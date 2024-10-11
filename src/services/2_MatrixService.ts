// src/services/MatrixService.ts
import { Inject, Injectable } from "@tsed/di";
import type { MatrixClient, Preset } from "matrix-js-sdk";
import sdk from "matrix-js-sdk";
import { EventType, RoomType, Room, Visibility, JoinRule } from "matrix-js-sdk";
import { EnvService, HasuraService } from "~/services"; // Import the EnvService
import { $log } from "@tsed/logger";
import { logger as mxLogger } from "matrix-js-sdk/lib/logger";
import { QueryChannelsDocument } from "~/generated/graphql";
import type { QueryChannelsQuery, QueryChannelsQueryVariables } from "~/generated/graphql";
import { MessageEvent } from "node:http";
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
const Topics = {
  [SpaceNames.Community]: "A space for community channels",
  [SpaceNames.CommunitySubmissions]: "A space for community submissions",
  [SpaceNames.CommunityFactchecks]: "A space for community factchecks",
  [SpaceNames.Internal]: "A space for internal channels",
  [SpaceNames.InternalSubmissions]: "A space for internal submissions",
  [SpaceNames.InternalFactchecks]: "A space for internal factchecks"
};

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
          const response = await this.client.createRoom({
            name: space,
            topic: "A space for collaboration",
            preset: sdk.Preset.PrivateChat as Preset,
            //room_alias_name: space, // This is the local part of the alias
            creation_content: {
              type: "m.space"
            }
          });
          this.spaceIdMap[space] = response.room_id;
          $log.info(
            `[MatrixService] Private space ${response}:${space}  created with room ID: ${response.room_id} and alias: ${alias}`
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
    $log.info("[MatrixService] Initializing channels");
    if (!this.client) {
      throw new Error("Matrix client is not initialized");
    }
    try {
      const publicSpaceRooms = (await this.client.getRoomHierarchy(this.spaceIdMap[SpaceNames.Community]))
        .rooms;
      const internalSpaceRooms = (await this.client.getRoomHierarchy(this.spaceIdMap[SpaceNames.Internal]))
        .rooms;

      $log.debug(`[MatrixService] Rooms in public space:`, publicSpaceRooms);
      $log.debug(`[MatrixService] Rooms in internal space:`, internalSpaceRooms);

      const channels = await this.hasuraService.adminRequest<QueryChannelsQuery, QueryChannelsQueryVariables>(
        QueryChannelsDocument,
        {}
      );
      for (const channel of channels.channel) {
        if (channel.internal && !internalSpaceRooms.some((room) => room.name === channel.name)) {
          $log.info("Creating room in internal space", channel.name);
          await this.createRoom(channel.name, SpaceNames.Internal);
        } else if (!channel.internal && !publicSpaceRooms.some((room) => room.name === channel.name)) {
          $log.info("Creating room in public space", channel.name);
          await this.createRoom(channel.name, SpaceNames.Community, channel.descriptionEn);
        }
      }
    } catch (error) {
      $log.error(`[MatrixService] Error during initChannels ${error}`);
      throw error;
    }
  }

  private async createRoom(roomName: string, spaceName: SpaceNames, topic?: string): Promise<void> {
    try {
      const response = await this.client!.createRoom({
        name: roomName,
        preset: sdk.Preset.PublicChat, // Use a preset that allows trusted access
        room_alias_name: roomName,
        topic: topic,
        initial_state: [
          {
            type: EventType.RoomJoinRules,
            state_key: "",
            content: {
              join_rule: JoinRule.Restricted,
              allow: [
                {
                  type: "m.room_membership",
                  room_id: this.spaceIdMap[spaceName]
                }
              ]
            }
          },
          {
            type: EventType.RoomHistoryVisibility,
            state_key: "",
            content: {
              history_visibility: "shared" // Allow members to see the room history
            }
          }
        ],
        visibility: Visibility.Private // Ensure the room is private but accessible to space members
      });

      // Add the room to the space hierarchy
      await this.client!.sendStateEvent(
        this.spaceIdMap[spaceName],
        EventType.SpaceChild,
        {
          via: [this.envService.matrixDomain]
        },
        response.room_id
      );

      $log.info(`[MatrixService] Room ${roomName} created with room ID: ${response.room_id}`);
    } catch (error) {
      $log.error(`[MatrixService] Error creating room ${roomName}:`, error);
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
