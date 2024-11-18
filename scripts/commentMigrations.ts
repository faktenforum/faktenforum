import { MatrixClient } from "matrix-js-sdk";
import { createClient } from "matrix-js-sdk";
import * as fs from "fs";
import { createObjectCsvWriter } from "csv-writer";

interface CustomMessage {
  id: string;
  content: string;
  sender: string;
  timestamp: number;
  roomId?: string;
}

interface MigrationConfig {
  matrixHomeserver: string;
  username: string;
  password: string;
  batchSize: number;
}

interface MigrationLog {
  oldMessageId: string;
  roomId: string;
  newEventId: string;
  status: string;
}

async function migrateMessagesToMatrix(messages: CustomMessage[], config: MigrationConfig): Promise<void> {
  const csvWriter = createObjectCsvWriter({
    path: "migration_log.csv",
    header: [
      { id: "oldMessageId", title: "Original Message ID" },
      { id: "roomId", title: "Matrix Room ID" },
      { id: "newEventId", title: "Matrix Event ID" },
      { id: "status", title: "Status" }
    ]
  });

  // Initialize Matrix client and login
  const matrixClient = createClient({
    baseUrl: config.matrixHomeserver
  });

  try {
    const loginResponse = await matrixClient.login("m.login.password", {
      user: config.username,
      password: config.password
    });
    matrixClient.startClient(); // Start the client after successful login
  } catch (error) {
    console.error("Failed to login to Matrix:", error);
    throw error;
  }

  // Process messages in batches to avoid overwhelming the server
  for (let i = 0; i < messages.length; i += config.batchSize) {
    const batch = messages.slice(i, i + config.batchSize);
    const migrationLogs: MigrationLog[] = [];

    for (const message of batch) {
      try {
        // Get room ID from alias
        const roomId = await matrixClient.getRoomIdForAlias(message.roomId);
        if (!roomId) {
          throw new Error(`Room not found for alias: ${message.roomId}`);
        }

        // Send message and get the event ID
        const response = await matrixClient.sendMessage(roomId.room_id, {
          msgtype: "m.text",
          body: message.content,
          origin_server_ts: message.timestamp,
          sender: message.sender
        });

        migrationLogs.push({
          oldMessageId: message.id,
          roomId: roomId.room_id,
          newEventId: response.event_id,
          status: "success"
        });

        console.log(`Migrated message ${message.id} successfully`);
      } catch (error) {
        migrationLogs.push({
          oldMessageId: message.id,
          roomId: message.roomId || "unknown",
          newEventId: "failed",
          status: `error: ${error.message}`
        });
        console.error(`Failed to migrate message ${message.id}:`, error);
      }
    }

    // Write batch results to CSV
    await csvWriter.writeRecords(migrationLogs);

    // Add a small delay between batches to prevent rate limiting
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

// Example usage
async function main() {
  const config: MigrationConfig = {
    matrixHomeserver: "https://matrix.org",
    username: "your_username",
    password: "your_password",
    batchSize: 50
  };

  // Fetch your custom messages (implement this based on your storage)
  const customMessages: CustomMessage[] = await fetchCustomMessages();

  await migrateMessagesToMatrix(customMessages, config);
  console.log("Migration completed");
}

async function fetchCustomMessages(): Promise<CustomMessage[]> {
  // Implement this function to fetch messages from your custom chat system
  // This could be from a database, API, or file
  throw new Error("Not implemented");
}

// Run the migration
main().catch(console.error);
