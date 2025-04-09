// src/utils/synapseRoomApi.ts

import axios, { AxiosInstance, AxiosResponse } from "axios";
import type {
  GetRoomsQueryParams,
  GetRoomsResponse,
  RoomDetails,
  GetRoomsOptions,
  GetRoomMessagesQueryParams,
  GetRoomMessagesResponse,
  RoomTimestampToEventQueryParams,
  RoomTimestampToEventResponse,
  BlockRoomResponse,
  GetBlockStatusResponse,
  DeleteRoomRequest,
  DeleteRoomResponse,
  MakeRoomAdminRequest,
  UserAccountResponse,
  ModifyUserRequest,
  UserRoomMembershipsResponse,
  GetRoomStateResponse,
  OverrideRatelimitRequest,
  OverrideRatelimitResponse
} from "./matrix-admin-api-types";

class MatrixAdminClient {
  private client: AxiosInstance;

  constructor(baseURL: string, accessToken: string) {
    this.client = axios.create({
      baseURL,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      }
    });
  }

  // Fetch rooms with optional query parameters
  async getRooms(
    queryParams?: GetRoomsQueryParams,
    options: GetRoomsOptions = {}
  ): Promise<GetRoomsResponse> {
    try {
      let fetch_all = options.fetch_all ?? false;
      let allRooms: RoomDetails[] = [];
      let nextBatch: string | undefined = undefined;
      let offset: number | undefined = undefined;
      let total_rooms: number | undefined = undefined;
      let prev_batch: string | undefined = undefined;

      do {
        const response: AxiosResponse<GetRoomsResponse> = await this.client.get<GetRoomsResponse>(
          "/_synapse/admin/v1/rooms",
          {
            params: { ...queryParams, next_batch: nextBatch }
          }
        );

        allRooms = allRooms.concat(response.data.rooms);
        nextBatch = response.data.next_batch;
        offset = response.data.offset;
        total_rooms = response.data.total_rooms;
        prev_batch = response.data.prev_batch;

        if (!fetch_all) {
          return response.data;
        }
      } while (fetch_all && nextBatch);

      return {
        rooms: allRooms,
        next_batch: undefined,
        offset: fetch_all ? 0 : offset,
        total_rooms,
        prev_batch
      };
    } catch (error) {
      console.error("Error fetching rooms:", error);
      throw error;
    }
  }

  // Fetch a specific room by room ID
  async getRoomDetails(roomId: string): Promise<RoomDetails> {
    try {
      const response = await this.client.get<RoomDetails>(`/_synapse/admin/v1/rooms/${roomId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching room details for ${roomId}:`, error);
      throw error;
    }
  }

  // Fetch messages from a specific room
  async getRoomMessages(
    roomId: string,
    queryParams: GetRoomMessagesQueryParams
  ): Promise<GetRoomMessagesResponse> {
    try {
      const response = await this.client.get<GetRoomMessagesResponse>(
        `/_synapse/admin/v1/rooms/${roomId}/messages`,
        {
          params: queryParams
        }
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching messages for room ${roomId}:`, error);
      throw error;
    }
  }

  // Fetch the event ID closest to a given timestamp in a specific room
  async getEventIdByTimestamp(
    roomId: string,
    queryParams: RoomTimestampToEventQueryParams
  ): Promise<RoomTimestampToEventResponse> {
    try {
      const response = await this.client.get<RoomTimestampToEventResponse>(
        `/_synapse/admin/v1/rooms/${roomId}/timestamp_to_event`,
        {
          params: queryParams
        }
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching event ID by timestamp for room ${roomId}:`, error);
      throw error;
    }
  }

  // Block or unblock a room
  async setRoomBlockStatus(roomId: string, block: boolean): Promise<BlockRoomResponse> {
    try {
      const response = await this.client.put<BlockRoomResponse>(`/_synapse/admin/v1/rooms/${roomId}/block`, {
        block
      });
      return response.data;
    } catch (error) {
      console.error(`Error setting block status for room ${roomId}:`, error);
      throw error;
    }
  }

  // Get the block status of a room
  async getRoomBlockStatus(roomId: string): Promise<GetBlockStatusResponse> {
    try {
      const response = await this.client.get<GetBlockStatusResponse>(
        `/_synapse/admin/v1/rooms/${roomId}/block`
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching block status for room ${roomId}:`, error);
      throw error;
    }
  }

  // Delete a room with additional parameters
  async deleteRoom(roomId: string, requestBody: DeleteRoomRequest): Promise<DeleteRoomResponse> {
    try {
      const response = await this.client.delete<DeleteRoomResponse>(`/_synapse/admin/v1/rooms/${roomId}`, {
        data: requestBody
      });
      return response.data;
    } catch (error) {
      console.error(`Error deleting room ${roomId}:`, error);
      throw error;
    }
  }

  // Grant a user the highest power available in a room
  async makeRoomAdmin(roomIdOrAlias: string, requestBody: MakeRoomAdminRequest): Promise<void> {
    try {
      await this.client.post(`/_synapse/admin/v1/rooms/${roomIdOrAlias}/make_room_admin`, requestBody);
      console.log(`User ${requestBody.user_id} granted admin power in room ${roomIdOrAlias}.`);
    } catch (error) {
      console.error(
        `Error granting admin power in room ${roomIdOrAlias} to user ${requestBody.user_id}:`,
        error
      );
      throw error;
    }
  }

  // Fetch information about a specific user account
  async getUserAccount(userId: string): Promise<UserAccountResponse> {
    try {
      const response = await this.client.get<UserAccountResponse>(`/_synapse/admin/v2/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching user account for ${userId}:`, error);
      throw error;
    }
  }

  // Create or modify a user account
  async createOrModifyUserAccount(userId: string, requestBody: ModifyUserRequest): Promise<void> {
    try {
      const response = await this.client.put(`/_synapse/admin/v2/users/${userId}`, requestBody);
      if (response.status === 201) {
        console.log(`User ${userId} created successfully.`);
      } else if (response.status === 200) {
        console.log(`User ${userId} modified successfully.`);
      }
    } catch (error) {
      console.error(`Error creating or modifying user ${userId}:`, error);
      throw error;
    }
  }

  async getUserRoomMemberships(userId: string): Promise<UserRoomMembershipsResponse> {
    try {
      const response = await this.client.get<UserRoomMembershipsResponse>(
        `/_synapse/admin/v1/users/${userId}/joined_rooms`
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching room memberships for user ${userId}:`, error);
      throw error;
    }
  }

  // Fetch the state of a specific room
  async getRoomState(roomId: string): Promise<GetRoomStateResponse> {
    try {
      const response = await this.client.get<GetRoomStateResponse>(
        `/_synapse/admin/v1/rooms/${roomId}/state`
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching state for room ${roomId}:`, error);
      throw error;
    }
  }

  // Override the ratelimit for a user
  async overrideUserRatelimit(
    username: string,
    requestBody: OverrideRatelimitRequest
  ): Promise<OverrideRatelimitResponse> {
    try {
      const response = await this.client.post<OverrideRatelimitResponse>(
        `/_synapse/admin/v1/users/${username}/override_ratelimit`,
        requestBody
      );
      return response.data;
    } catch (error) {
      console.error(`Error overriding ratelimit for user ${username}:`, error);
      throw error;
    }
  }

  // Delete the ratelimit override for a user
  async deleteUserRatelimit(username: string): Promise<void> {
    try {
      await this.client.delete(`/_synapse/admin/v1/users/${username}/override_ratelimit`);
      console.log(`Ratelimit override deleted for user ${username}.`);
    } catch (error) {
      console.error(`Error deleting ratelimit override for user ${username}:`, error);
      throw error;
    }
  }

  async getUserDevices(username: string) {
    const response = await fetch(
      `${this.client.defaults.baseURL}/_synapse/admin/v2/users/${encodeURIComponent("@" + username + ":" + this.client.defaults.baseURL.split("//")[1])}/devices`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.client.defaults.headers.Authorization}`,
          "Content-Type": "application/json"
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to get user devices: ${response.statusText}`);
    }

    return await response.json();
  }

  async deleteUserDevices(username: string, deviceIds: string[]) {
    const response = await fetch(
      `${this.client.defaults.baseURL}/_synapse/admin/v2/users/${encodeURIComponent("@" + username + ":" + this.client.defaults.baseURL.split("//")[1])}/delete_devices`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.client.defaults.headers.Authorization}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ devices: deviceIds })
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to delete user devices: ${response.statusText}`);
    }

    return await response.json();
  }

  // Assuming this.client is already set up with the base URL, authentication, etc.

  // Deactivates a user account.
  async deactivateUserAccount(userId: string, erase: boolean = false): Promise<void> {
    try {
      const response = await this.client.post(`/_synapse/admin/v1/deactivate/${encodeURIComponent(userId)}`, {
        erase
      });
      console.log(`User ${userId} deactivated successfully.`);

      return response;
    } catch (error) {
      console.error(`Error deactivating user ${userId}:`, error);
      throw error;
    }
  }

  // Reactivates a user account by updating it via the Create or Modify Account API.
  async reactivateUserAccount(userId: string): Promise<void> {
    try {
      await this.client.put(`/_synapse/admin/v2/users/${encodeURIComponent(userId)}`, {
        deactivated: false
      });
      console.log(`User ${userId} reactivated successfully.`);
    } catch (error) {
      console.error(`Error reactivating user ${userId}:`, error);
      throw error;
    }
  }

  // ... other methods ...
}

export default MatrixAdminClient;
