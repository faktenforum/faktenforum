import { createClient } from "matrix-js-sdk";
import { createObjectCsvWriter } from "csv-writer";
import { GraphQLClient } from "graphql-request";
import axios, { AxiosInstance } from "axios";

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
  asToken: string;
  batchSize: number;
  hasuraApiUrl: string;
  hasuraAdminSecret: string;
}

interface MigrationLog {
  type: "comment" | "reaction";
  oldcommentId: string;
  roomId: string;
  newEventId: string;
  status: string;
}

export class MatrixApiClient {
  private client: AxiosInstance;

  constructor(baseURL: string, accessToken: string) {
    this.client = axios.create({
      baseURL,
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
  }

  async createMessage(
    content: string,
    roomId: string,
    userId: string,
    ts: number,
    transactionId: string,
    parentEventId?: string
  ): Promise<string> {
    const matrixMessage: MatrixMessage = {
      type: "m.room.message",
      msgtype: "m.text",
      body: content
    };

    if (parentEventId) {
      matrixMessage["m.relates_to"] = {
        rel_type: "m.thread",
        event_id: parentEventId,
        is_falling_back: true,
        "m.in_reply_to": {
          event_id: parentEventId
        }
      };
    }

    const { data } = await this.client.put(
      `/_matrix/client/v3/rooms/${roomId}/send/m.room.message/${transactionId}`,
      matrixMessage,
      {
        params: { user_id: userId, ts }
      }
    );
    return data.event_id;
  }

  async joinUserToRoom(roomId: string, userId: string): Promise<void> {
    await this.client.post(
      `/_matrix/client/v3/join/${roomId}`,
      {},
      {
        params: { user_id: userId }
      }
    );
  }

  async getRoomIdFromAlias(roomAlias: string): Promise<string> {
    const { data } = await this.client.get(
      `/_matrix/client/v3/directory/room/${encodeURIComponent(roomAlias)}`
    );
    return data.room_id;
  }

  async addReaction(
    roomId: string,
    messageId: string,
    reactionEmoji: string,
    userId: string,
    transactionId: string
  ): Promise<void> {
    try {
      await this.client.put(
        `/_matrix/client/v3/rooms/${roomId}/send/m.reaction/${transactionId}`,
        {
          "m.relates_to": {
            rel_type: "m.annotation",
            event_id: messageId,
            key: reactionEmoji
          }
        },
        {
          params: { user_id: userId }
        }
      );
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data?.errcode === "M_DUPLICATE_ANNOTATION") {
        console.debug(
          `Duplicate reaction to message ${messageId} with symbol ${reactionEmoji} for user ${userId}, skipping.`
        );
        return;
      }
      throw error;
    }
  }
}

async function migrateCommentsToMatrix(comments: Comment[], config: MigrationConfig): Promise<void> {
  const csvWriter = createObjectCsvWriter({
    path: "migration_log.csv",
    header: [
      { id: "type", title: "Type" },
      { id: "oldcommentId", title: "Original Comment ID" },
      { id: "roomId", title: "Matrix Room ID" },
      { id: "newEventId", title: "Matrix Event ID" },
      { id: "status", title: "Status" }
    ]
  });

  const matrixApiClient = new MatrixApiClient(config.matrixHomeserver, config.asToken);

  // Add message ID mapping
  const commentToEventIdMap = new Map<string, string>();

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
        currentRoomId = await matrixApiClient.getRoomIdFromAlias(roomAlias);

        if (!currentRoomId) {
          throw new Error(`Room not found for alias: ${roomAlias}`);
        }
        const userId = `@${comment.createdByUser.username}:${config.matrixDomain}`;
        await matrixApiClient.joinUserToRoom(currentRoomId, userId);

        const parentEventId = commentToEventIdMap.get(comment.threadId);
        const messageId = await matrixApiClient.createMessage(
          comment.content,
          currentRoomId,
          userId,
          new Date(comment.createdAt).getTime(),
          comment.id,
          parentEventId
        );

        // Store the mapping for future thread replies
        if (messageId) {
          commentToEventIdMap.set(comment.id, messageId);
        }

        migrationLogs.push({
          type: "comment",
          oldcommentId: comment.id,
          roomId: currentRoomId,
          newEventId: messageId || "unknown",
          status: "success"
        });

        console.log(`Migrated comment ${comment.id} successfully`);

        // Add reactions
        for (const reaction of comment.userReactions) {
          console.log("Migrate  reaction from " + reaction.user.username, reaction.emoji);
          const userId = `@${reaction.user.username}:${config.matrixDomain}`;
          await matrixApiClient.joinUserToRoom(currentRoomId, userId);
          await matrixApiClient.addReaction(currentRoomId, messageId, reaction.emoji, userId, reaction.id);
          migrationLogs.push({
            type: "reaction",
            oldcommentId: reaction.id,
            roomId: currentRoomId,
            newEventId: "unknown",
            status: "success"
          });
        }
      } catch (error) {
        migrationLogs.push({
          type: "comment",
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
    asToken: "faktenforum",
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
  userReactions: {
    id: string;
    emoji: string;
    user: {
      username: string;
    };
  }[];
};
async function fetchCustomcomments(config: MigrationConfig): Promise<Comment[]> {
  const client = new GraphQLClient(config.hasuraApiUrl, {
    headers: {
      "x-hasura-admin-secret": config.hasuraAdminSecret
    }
  });
  const data = await client.request<{ comment: Comment[] }>(`query getAllComments {
  comment(orderBy: {createdAt: ASC}, where: {blocked: {_eq: false}, deleted: {_eq: false}}) {
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
    userReactions {
    id
      emoji
      user {
        username
      }
    }
  }
}
`);
  return data.comment;
}

// Run the migration
main().catch(console.error);
