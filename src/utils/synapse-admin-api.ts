// src/utils/synapseRoomApi.ts

import axios, { AxiosInstance } from "axios";
import type {
  GetRoomsQueryParams,
  GetRoomsResponse,
  RoomDetails,
  GetRoomMessagesQueryParams,
  GetRoomMessagesResponse,
  RoomTimestampToEventQueryParams,
  RoomTimestampToEventResponse,
  BlockRoomResponse,
  GetBlockStatusResponse,
  DeleteRoomRequest,
  DeleteRoomResponse,
  MakeRoomAdminRequest
} from "./matrix-api-types";

class SynapseRoomApi {
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
  async getRooms(queryParams?: GetRoomsQueryParams): Promise<GetRoomsResponse> {
    try {
      const response = await this.client.get<GetRoomsResponse>("/_synapse/admin/v1/rooms", {
        params: queryParams
      });
      return response.data;
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

export default SynapseRoomApi;
