import dotenv from "dotenv";
import { GraphQLClient, gql } from "graphql-request";
import fs from "fs/promises";
import path from "path";
import { InsertFileDocument, InsertFileMutation, InsertFileMutationVariables } from "~/generated/graphql";
import { createAvatar } from "@dicebear/core";
// Load environment variables
dotenv.config();

class HasuraClient {
  private graphQLClient: GraphQLClient;
  private hasuraAdminSecret: string;

  constructor() {
    const hasuraEndpoint = process.env.HASURA_API_URL;
    this.hasuraAdminSecret = process.env.HASURA_ADMIN_SECRET as string;

    if (!hasuraEndpoint || !this.hasuraAdminSecret) {
      throw new Error("HASURA_ENDPOINT or HASURA_ADMIN_SECRET not found in .env file");
    }

    this.graphQLClient = new GraphQLClient(hasuraEndpoint);
  }

  async adminRequest<T, V extends Record<string, any> = Record<string, any>>(
    document: string | gql,
    variables: V
  ): Promise<T> {
    try {
      return await this.graphQLClient.request(document, variables, {
        "x-hasura-admin-secret": this.hasuraAdminSecret
      });
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  private handleError(error: unknown): void {
    console.error("GraphQL request failed:", error);
  }

  async getAllUsersProfileImages() {
    const query = gql`
      query GetAllUsersProfileImages {
        user {
          id
          profileImage
          username
        }
      }
    `;

    const response = await this.adminRequest<{
      user: { id: string; profileImage: string | null; username: string }[];
    }>(query, {});
    return response.user;
  }

  async checkFileExists(fileId: string): Promise<boolean> {
    const query = gql`
      query getFileByPk($id: uuid = "") {
        fileByPk(id: $id) {
          id
        }
      }
    `;

    const response = await this.adminRequest<{ fileByPk: { id: string } | null }>(query, { id: fileId });
    return !!response.fileByPk;
  }
}
async function main() {
  const client = new HasuraClient();
  const users = await client.getAllUsersProfileImages();

  console.log(`Found ${users.length} users`);

  for (const user of users) {
    const fileExists = await client.checkFileExists(user.id);
    if (fileExists) {
      console.log(`User ${user.id} has a valid profile image (File ID: ${user.id})`);
    } else {
      console.log(`User ${user.id} has an no Profile Iamge creating one`);
      const avatar = createAvatar(glass, {
        seed: user.username
      });
      const result = await this.fileService.saveFile(body.id, avatar.toString(), undefined, {
        name: `avatar-${body.traits.username}.svg`,
        "Content-Type": "image/svg+xml"
      });
      await client.adminRequest<InsertFileMutation, InsertFileMutationVariables>(InsertFileDocument, {
        id: body.id,
        mimeType: "image/svg+xml",
        eTag: result.etag,
        name: `avatar-${body.traits.username}.svg`,
        size: avatar.toString().length * 8
      });
    }
  }
}

main().catch(console.error);
