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
  MakeRoomAdminRequest
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

  // Add more methods as needed for other room-related API calls
}

export default MatrixAdminClient;
