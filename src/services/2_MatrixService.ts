// src/services/MatrixService.ts
import { Inject, Injectable } from "@tsed/di";
import type { MatrixClient, Preset } from "matrix-js-sdk";
import sdk, { EventType, RoomType, Room, Visibility, JoinRule, RestrictedAllowType } from "matrix-js-sdk";
import { AuthService, EnvService, HasuraService } from "~/services"; // Import the EnvService
import { Logger } from "@tsed/common";
import { logger as mxLogger } from "matrix-js-sdk/lib/logger";
import { QueryChannelsDocument } from "~/generated/graphql";
import type { QueryChannelsQuery, QueryChannelsQueryVariables } from "~/generated/graphql";
import { POWER_LEVELS } from "~/utils/consts";
import MatrixAdminClient from "~/utils/matrix-admin-api";
import { randomBytes } from "crypto";
import { UserRole, PowerLevel } from "~/models";
import pMap from "p-map";

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

const InternalSpaces = [SpaceNames.Internal, SpaceNames.InternalSubmissions, SpaceNames.InternalFactchecks];
const CommunitySpaces = [
  SpaceNames.Community,
  SpaceNames.CommunitySubmissions,
  SpaceNames.CommunityFactchecks
];

@Injectable()
export class MatrixService {
  @Inject()
  envService: EnvService;
  @Inject()
  hasuraService: HasuraService;
  @Inject()
  authService: AuthService;
  @Inject()
  logger: Logger;

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

  constructor(envService: EnvService, logger: Logger) {
    // rewrite matrix logger

    this.envService = envService;
    mxLogger.info = (...msg) => logger.info(msg);
    mxLogger.log = (...msg) => logger.debug(msg);
    mxLogger.warn = (...msg) => logger.warn(msg);
    mxLogger.error = (...msg) => logger.error(msg);
    mxLogger.trace = (...msg) => logger.trace(msg);
    mxLogger.debug = (...msg) => logger.debug(msg);

    mxLogger.setLevel(envService.env === "development" ? mxLogger.levels.DEBUG : mxLogger.levels.INFO);
    this.client = sdk.createClient({
      baseUrl: envService.matrixUrl,
      logger: mxLogger
    });

    this.initialize(logger);
  }
  private async initialize(logger: Logger) {
    try {
      const loginResponse = await this.client!.login("m.login.password", {
        user: this.envService.matrixAccount,
        password: this.envService.matrixPassword
      });

      this.adminClient = new MatrixAdminClient(this.envService.matrixInternalUrl, loginResponse.access_token);

      logger.info("[MatrixService] Matrix client initialized with URL:", loginResponse);
      await this.initSpaces();
      await this.initChannels();
    } catch (error) {
      logger.error("[MatrixService] Error initializing Matrix client:", error);
      process.exit(1);
    }
    // this.client!.on(sdk.ClientEvent.Sync, async (state) => {
    //   if (state === "PREPARED") {
    //     this.logger.info("[MatrixService] Matrix client is ready and synced.");
    //     try {
    //     } catch (error) {
    //       this.logger.error("[MatrixService] Error on init:", error);
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
        this.logger.info(`[MatrixService] Space ${space} does not exist.`);
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
          this.logger.info(
            `[MatrixService] Private space ${response}:${space}  created with room ID: ${response.room_id} and alias: ${space}`
          );
        } catch (error) {
          this.logger.error(`[MatrixService] Error creating private space ${space}:`, error);
        }
      } else {
        this.spaceIdMap[space] = room.room_id;
        this.logger.info(`[MatrixService] Space ${space} exists.`);
      }
    }
  }

  public async initChannels() {
    this.logger.info("[MatrixService] Initializing channels");
    if (!this.client) {
      throw new Error("Matrix client is not initialized");
    }
    try {
      const publicSpaceRooms = (await this.client.getRoomHierarchy(this.spaceIdMap[SpaceNames.Community]))
        .rooms;
      const internalSpaceRooms = (await this.client.getRoomHierarchy(this.spaceIdMap[SpaceNames.Internal]))
        .rooms;

      this.logger.debug(`[MatrixService] Rooms in public space:`, publicSpaceRooms);
      this.logger.debug(`[MatrixService] Rooms in internal space:`, internalSpaceRooms);

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
          this.logger.info("Creating room in internal space", channel.name);
          await this.createRoom(channel.name, SpaceNames.Internal);
        } else if (!channel.internal && !publicSpaceRooms.some((room) => room.name === channel.name)) {
          this.logger.info("Creating room in public space", channel.name);
          await this.createRoom(channel.name, SpaceNames.Community, channel.descriptionEn);
        }
      }
    } catch (error) {
      this.logger.error(`[MatrixService] Error during initChannels ${error}`);
      throw error;
    }
  }

  public async createUser(username: string, email: string): Promise<void> {
    await this.adminClient?.createOrModifyUserAccount(this.usernameToMatrixUser(username), {
      // id: username,
      password:
        this.envService.env === "development"
          ? "abcd1234!D"
          : randomBytes(24).toString("base64").slice(0, 24),
      threepids: [{ medium: "email", address: email }]
    });
  }

  public async deleteUser(username: string): Promise<void> {
    await this.adminClient?.deactivateUserAccount(this.usernameToMatrixUser(username), true);
  }

  public async alterSpaceMembershipsByRole(userId: string, role: UserRole) {
    this.logger.info(`Change user ${userId} membership to new role ${role}`);
    const identity = await this.authService.getUserIdentity(userId);
    const username = identity.traits.username;
    const oldRole = identity.metadata_public.role as UserRole;
    const oldPowerLevel = POWER_LEVELS[oldRole];
    const newPowerLevel = POWER_LEVELS[role];
    this.logger.info(
      `[MatrixService] User ${username} has old power level ${oldPowerLevel} and new power level ${newPowerLevel}`
    );
    if (oldPowerLevel === PowerLevel.Aspirant && newPowerLevel > PowerLevel.Aspirant) {
      this.logger.info(`User ${username} gets access to community spaces`);
      await this.addUserToRoom(username, this.spaceIdMap[SpaceNames.Community]);
      await this.addUserToRoom(username, this.spaceIdMap[SpaceNames.CommunitySubmissions]);
      await this.addUserToRoom(username, this.spaceIdMap[SpaceNames.CommunityFactchecks]);
    } else if (newPowerLevel === PowerLevel.Aspirant) {
      this.logger.info(`User ${username} loses access to community spaces`);
      await this.removeUserFromRoom(username, this.spaceIdMap[SpaceNames.Community]);
      await this.removeUserFromRoom(username, this.spaceIdMap[SpaceNames.CommunitySubmissions]);
      await this.removeUserFromRoom(username, this.spaceIdMap[SpaceNames.CommunityFactchecks]);
      // get all rooms where the user is a member and remove him from  them
      const response = await this.adminClient?.getUserRoomMemberships(username);
      const joinedRooms = response?.joined_rooms ?? [];
      await pMap(joinedRooms, (room) => this.removeUserFromRoom(username, room), { concurrency: 5 });
    }
    if (oldPowerLevel < PowerLevel.Editor && newPowerLevel >= PowerLevel.Editor) {
      this.logger.info(`User ${username} gets access to internal space`);
      await this.addUserToRoom(username, this.spaceIdMap[SpaceNames.Internal]);
      await this.addUserToRoom(username, this.spaceIdMap[SpaceNames.InternalSubmissions]);
      await this.addUserToRoom(username, this.spaceIdMap[SpaceNames.InternalFactchecks]);
    } else if (oldPowerLevel >= PowerLevel.Editor && newPowerLevel < PowerLevel.Editor) {
      this.logger.info(`User ${username} loses access to internal space`);
      await this.removeUserFromRoom(username, this.spaceIdMap[SpaceNames.Internal]);
      await this.removeUserFromRoom(username, this.spaceIdMap[SpaceNames.InternalSubmissions]);
      await this.removeUserFromRoom(username, this.spaceIdMap[SpaceNames.InternalFactchecks]);
      // get all rooms where the user is a member and remove him from  them
      const response = await this.adminClient?.getUserRoomMemberships(username);
      const joinedRooms = response?.joined_rooms ?? [];

      await pMap(
        joinedRooms,
        async (room) => {
          const iInSpace = await this.isRoomInSpace(room, SpaceNames.Internal);
          if (iInSpace) {
            await this.removeUserFromRoom(username, room);
          }
        },
        { concurrency: 5 }
      );
    } else {
      this.logger.info(`User ${username} has no changes in community or internal spaces access`);
    }
  }
  public async isRoomInSpace(roomId: string, spaceName: SpaceNames): Promise<boolean> {
    const roomEvents = await this.adminClient?.getRoomState(this.spaceIdMap[spaceName]);
    this.logger.debug(`[MatrixService] Room events in space ${spaceName}:`, roomEvents);
    return false;
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

      this.logger.info(`[MatrixService] Room ${roomName} created with room ID: ${response.room_id}`);
    } catch (error) {
      this.logger.error(`[MatrixService] Error creating room ${roomName}:`, error);
    }
  }

  async addUserToRoom(username: string, roomId: string): Promise<void> {
    this.logger.info(`[MatrixService] Adding user ${username} to room ${roomId}`);
    if (!this.client) {
      throw new Error("Matrix client is not initialized");
    }
    await this.client.invite(roomId, this.usernameToMatrixUser(username));
  }

  async removeUserFromRoom(username: string, roomId: string): Promise<void> {
    if (!this.client) {
      throw new Error("Matrix client is not initialized");
    }
    await this.client.kick(roomId, this.usernameToMatrixUser(username));
  }

  // Add more methods as needed for other admin tasks

  public async moveRoomToSpace(roomAlias: string, fromSpace: SpaceNames, toSpace: SpaceNames): Promise<void> {
    if (!this.client) {
      throw new Error("Matrix client is not initialized");
    }

    try {
      // Get the room ID from the alias
      this.logger.info(
        `[MatrixService] Getting room ID for alias #${roomAlias}:${this.envService.matrixDomain}:8000`
      );
      const response = await this.client.getRoomIdForAlias(
        `#${roomAlias}:${this.envService.matrixDomain}:8000`
      );
      this.logger.error(response);
      const { room_id } = response;
      if (!room_id) {
        throw new Error(`[MatrixService] Room ${roomAlias} not found`);
      }
      // Remove the room from the current space
      await this.client.sendStateEvent(this.spaceIdMap[fromSpace], EventType.SpaceChild, {}, room_id);

      this.logger.info(`[MatrixService] Room ${room_id} removed from space ${fromSpace}`);

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
        // if (!(await this.isUserInSpace(member.userId, toSpace))) {
        //   await this.client.kick(room_id, member.userId, "User is not a member of the new space");
        //   this.logger.info(`[MatrixService] User ${member.userId} removed from room ${room_id}`);
        // }
      }

      this.logger.info(`[MatrixService] Room ${room_id} added to space ${toSpace}`);
    } catch (error) {
      this.logger.error(
        `[MatrixService] Error moving room ${roomAlias} from ${fromSpace} to ${toSpace}:`,
        error
      );
    }
  }

  private usernameToMatrixUser(username: string): string {
    return `@${username}:${this.envService.matrixDomain}`;
  }
}
