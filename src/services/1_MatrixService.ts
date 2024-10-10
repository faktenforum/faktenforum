// src/services/MatrixService.ts
import { Injectable } from "@tsed/di";
import type { MatrixClient, Preset } from "matrix-js-sdk";

@Injectable()
export class MatrixService {
  private client: MatrixClient | null = null;
  private sdk: any;

  constructor() {
    this.initializeClient();
  }

  private async initializeClient() {
    const sdk = await import("matrix-js-sdk");
    this.sdk = sdk;
    this.client = sdk.createClient({
      baseUrl: "https://your-matrix-server.com",
      accessToken: "YOUR_ACCESS_TOKEN",
      userId: "@admin:your-matrix-server.com"
    });
  }

  async createPulicRoom(roomName: string): Promise<string> {
    if (!this.client) {
      throw new Error("Matrix client is not initialized");
    }
    const response = await this.client.createRoom({
      name: roomName,
      preset: this.sdk.Preset.PublicChat as Preset
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
