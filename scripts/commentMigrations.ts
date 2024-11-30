import { createClient } from "matrix-js-sdk";
import { createObjectCsvWriter } from "csv-writer";
import { GraphQLClient } from "graphql-request";
import axios from "axios";

axios.defaults.baseURL = process.env.SYNAPSE_URL || "http://chat.localhost:8000";

export type MatrixMessage = {
  body: string;
  msgtype: string;
  type: string;
  format?: string;
  formatted_body?: string;
  "m.mentions"?: {
    room?: boolean;
    user_ids?: Array<string>;
  };
  "m.relates_to"?: {
    rel_type: "m.thread";
    event_id: string;
    is_falling_back: true;
    "m.in_reply_to": {
      event_id: string;
    };
  };
};

interface MigrationConfig {
  matrixHomeserver: string;
  matrixDomain: string;
  username: string;
  password: string;
  batchSize: number;
  hasuraApiUrl: string;
  hasuraAdminSecret: string;
}

interface MigrationLog {
  oldcommentId: string;
  roomId: string;
  newEventId: string;
  status: string;
}

async function migrateCommentsToMatrix(comments: Comment[], config: MigrationConfig): Promise<void> {
  const csvWriter = createObjectCsvWriter({
    path: "migration_log.csv",
    header: [
      { id: "oldcommentId", title: "Original Comment ID" },
      { id: "roomId", title: "Matrix Room ID" },
      { id: "newEventId", title: "Matrix Event ID" },
      { id: "status", title: "Status" }
    ]
  });

  // Initialize Matrix client and login
  const matrixClient = createClient({
    baseUrl: config.matrixHomeserver
  });

  const accessToken = "faktenforum";

  try {
    const loginResponse = await matrixClient.login("m.login.password", {
      user: config.username,
      password: config.password
    });
    console.log("Login Response", loginResponse);
    await matrixClient.startClient(); // Start the client after successful login
  } catch (error) {
    console.error("Failed to login to Matrix:", error);
    throw error;
  }

  async function createMessage(
    matrixMessage: MatrixMessage,
    room_id: string,
    user_id: string,
    ts: number,
    transactionId: string
  ): Promise<string> {
    return (
      await axios.put(
        `/_matrix/client/v3/rooms/${room_id}/send/m.room.message/${transactionId}?user_id=${user_id}&ts=${ts}`,
        matrixMessage,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      )
    ).data.event_id;
  }

  async function joinUserToRoom(roomId: string, userId: string) {
    await axios.post(
      `/_matrix/client/v3/join/${roomId}`,
      {},
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        params: { user_id: userId } // This makes the request as the target user
      }
    );
  }

  // Process comments in batches to avoid overwhelming the server
  for (let i = 0; i < comments.length; i += config.batchSize) {
    const batch = comments.slice(i, i + config.batchSize);
    const migrationLogs: MigrationLog[] = [];
    let currentRoomId;
    for (const comment of batch) {
      currentRoomId = undefined;
      try {
        // Fix the room alias format
        const roomAlias = `#${comment.claim.shortId.replace(/\//g, "-")}:${config.matrixDomain}`;

        // Get room ID from alias

        const response = await matrixClient.getRoomIdForAlias(roomAlias);
        currentRoomId = response.room_id;

        if (!currentRoomId) {
          throw new Error(`Room not found for alias: ${roomAlias}`);
        }
        const userId = `@${comment.createdByUser.username}:${config.matrixDomain}`;
        await joinUserToRoom(currentRoomId, userId);
        let messageResponse;
        if (!comment.threadId) {
          messageResponse = await createMessage(
            {
              type: "m.room.message",
              msgtype: "m.text",
              body: comment.content
            },
            currentRoomId,
            userId,
            new Date(comment.createdAt).getTime(),
            comment.id
          );
          console.log(`Sent message Response`, messageResponse);
        }

        migrationLogs.push({
          oldcommentId: comment.id,
          roomId: currentRoomId,
          newEventId: messageResponse?.event_id || "unknown",
          status: "success"
        });

        console.log(`Migrated comment ${comment.id} successfully`);
      } catch (error) {
        migrationLogs.push({
          oldcommentId: comment.id,
          roomId: currentRoomId || "unknown",
          newEventId: "failed",
          status: `error: ${error.comment}`
        });
        console.error(`Failed to migrate comment ${comment.id}:`, error);
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
    matrixHomeserver: "http://chat.localhost:8000",
    matrixDomain: "chat.localhost:8000",
    username: "system",
    password: "abcd1234!D",
    hasuraApiUrl: "http://localhost:8080/v1/graphql",
    hasuraAdminSecret: "faktenforum",
    batchSize: 100
  };

  // Fetch your custom comments (implement this based on your storage)
  const comments = await fetchCustomcomments(config);
  console.log(`Got ${comments.length} comments to migrate`);

  await migrateCommentsToMatrix(comments, config);
  console.log("Migration completed");
}

type Comment = {
  id: string;
  threadId: string;
  content: string;
  claim: {
    shortId: string;
    status: string;
  };
  createdAt: string;
  createdByUser: {
    id: string;
    username: string;
  };
};
async function fetchCustomcomments(config: MigrationConfig): Promise<Comment[]> {
  const client = new GraphQLClient(config.hasuraApiUrl, {
    headers: {
      "x-hasura-admin-secret": config.hasuraAdminSecret
    }
  });
  const data = await client.request<{ comment: Comment[] }>(`query getAllComments {
  comment(orderBy: { createdAt: ASC }) {
    id
    threadId
    content
    claim {
      shortId
      status
    }
    createdAt
    createdByUser {
      id
      username
    }
  }
}`);
  return data.comment;
}

// Run the migration
main().catch(console.error);
