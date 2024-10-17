// src/services/MatrixService.ts
import { Inject, Injectable } from "@tsed/di";
import type { MatrixClient, Preset } from "matrix-js-sdk";
import sdk, { EventType, RoomType, Room, Visibility, JoinRule, RestrictedAllowType } from "matrix-js-sdk";
import { EnvService, HasuraService } from "~/services"; // Import the EnvService
import { $log } from "@tsed/logger";
import { logger as mxLogger } from "matrix-js-sdk/lib/logger";
import { QueryChannelsDocument } from "~/generated/graphql";
import type { QueryChannelsQuery, QueryChannelsQueryVariables } from "~/generated/graphql";
import MatrixAdminClient from "~/utils/matrix-admin-api";
// rewrite matrix logger
mxLogger.info = (...msg) => $log.info(msg);
mxLogger.log = (...msg) => $log.debug(msg);
mxLogger.warn = (...msg) => $log.warn(msg);
mxLogger.error = (...msg) => $log.error(msg);
mxLogger.trace = (...msg) => $log.trace(msg);
mxLogger.debug = (...msg) => $log.debug(msg);

export enum SpaceNames {
  CommunitySubmissions = "ff-space-community_submissions",
  CommunityFactchecks = "ff-space-community_factchecks",
  Community = "ff-space-community",
  InternalSubmissions = "ff-space-internal_submissions",
  InternalFactchecks = "ff-space-internal_factchecks",
  Internal = "ff-space-internal"
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

  private adminClient: MatrixAdminClient | null = null;
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

      this.adminClient = new MatrixAdminClient(this.envService.matrixInternalUrl, loginResponse.access_token);

      $log.info("[MatrixService] Matrix client initialized with URL:", loginResponse);
      await this.initSpaces();
      await this.initChannels();
    } catch (error) {
      $log.error("[MatrixService] Error initializing Matrix client:", error);
      process.exit(1);
    }
    // this.client!.on(sdk.ClientEvent.Sync, async (state) => {
    //   if (state === "PREPARED") {
    //     $log.info("[MatrixService] Matrix client is ready and synced.");
    //     try {
    //     } catch (error) {
    //       $log.error("[MatrixService] Error on init:", error);
    //       process.exit(1);
    //     }
    //   }
    // });
  }

  private async initSpaces() {
    if (!this.client) {
      throw new Error("Matrix client is not initialized");
    }
    const spaces = Object.values(SpaceNames);
    const response = await this.adminClient!.getRooms({ search_term: "ff-space" }, { fetch_all: true });

    const rooms = response.rooms;
    for (const space of spaces) {
      const room = rooms.find((room) => room.name === space);

      if (!room) {
        $log.info(`[MatrixService] Space ${space} does not exist.`);
        try {
          const response = await this.client.createRoom({
            name: space,
            topic: Topics[space],
            preset: sdk.Preset.PrivateChat as Preset,
            room_alias_name: "ff-" + space, // This is the local part of the alias
            creation_content: {
              type: "m.space"
            }
          });
          this.spaceIdMap[space] = response.room_id;
          $log.info(
            `[MatrixService] Private space ${response}:${space}  created with room ID: ${response.room_id} and alias: ${space}`
          );
        } catch (error) {
          $log.error(`[MatrixService] Error creating private space ${space}:`, error);
        }
      } else {
        this.spaceIdMap[space] = room.room_id;
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

      const { channels } = await this.hasuraService.adminRequest<
        QueryChannelsQuery,
        QueryChannelsQueryVariables
      >(QueryChannelsDocument, {});
      const prefixedChannels = channels.map((channel) => ({
        ...channel,
        name: `ff-channel-${channel.name}`
      }));
      for (const channel of prefixedChannels) {
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

  public async createUser(username: string, email: string): Promise<void> {
    await this.adminClient?.createOrModifyUserAccount(`@${username}:${this.envService.matrixDomain}`, {
      id: username,
      password: "password12345!Däsdfsd",
      threepids: [{ medium: "email", address: email }]
    });
  }

  public async deleteUser(username: string): Promise<void> {
    await this.adminClient?.deactivateUserAccount(`@${username}:${this.envService.matrixDomain}`, true);
  }

  public async createRoom(roomName: string, spaceName: SpaceNames, topic?: string): Promise<void> {
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
                  room_id: this.spaceIdMap[spaceName],
                  type: RestrictedAllowType.RoomMembership
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

  async addUserToRoom(userId: string, roomId: string): Promise<void> {
    if (!this.client) {
      throw new Error("Matrix client is not initialized");
    }
    await this.client.invite(roomId, userId);
  }

  // Add more methods as needed for other admin tasks

  public async moveRoomToSpace(roomAlias: string, fromSpace: SpaceNames, toSpace: SpaceNames): Promise<void> {
    if (!this.client) {
      throw new Error("Matrix client is not initialized");
    }

    try {
      // Get the room ID from the alias
      $log.info(
        `[MatrixService] Getting room ID for alias #${roomAlias}:${this.envService.matrixDomain}:8000`
      );
      const response = await this.client.getRoomIdForAlias(
        `#${roomAlias}:${this.envService.matrixDomain}:8000`
      );
      $log.error(response);
      const { room_id } = response;
      if (!room_id) {
        throw new Error(`[MatrixService] Room ${roomAlias} not found`);
      }
      // Remove the room from the current space
      await this.client.sendStateEvent(this.spaceIdMap[fromSpace], EventType.SpaceChild, {}, room_id);

      $log.info(`[MatrixService] Room ${room_id} removed from space ${fromSpace}`);

      // Add the room to the new space
      await this.client.sendStateEvent(
        this.spaceIdMap[toSpace],
        EventType.SpaceChild,
        {
          via: [this.envService.matrixDomain]
        },
        room_id
      );

      await this.client.sendStateEvent(
        room_id,
        EventType.RoomJoinRules,
        {
          join_rule: JoinRule.Restricted,
          allow: [
            {
              room_id: this.spaceIdMap[toSpace],
              type: RestrictedAllowType.RoomMembership
            }
          ]
        },
        ""
      );

      // Remove users who are not members of the new space
      const room = await this.client.getRoom(room_id);
      const members = await room?.getMembers();
      for (const member of members ?? []) {
        if (!(await this.isUserInSpace(member.userId, toSpace))) {
          await this.client.kick(room_id, member.userId, "User is not a member of the new space");
          $log.info(`[MatrixService] User ${member.userId} removed from room ${room_id}`);
        }
      }

      $log.info(`[MatrixService] Room ${room_id} added to space ${toSpace}`);
    } catch (error) {
      $log.error(`[MatrixService] Error moving room ${roomAlias} from ${fromSpace} to ${toSpace}:`, error);
    }
  }
}
