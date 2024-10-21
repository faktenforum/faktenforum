import { Inject, Service } from "@tsed/di";
import type { Variables, RequestDocument } from "graphql-request";
import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { ClientError, GraphQLClient } from "graphql-request";
import { EnvService } from "~/services";
import { BadRequest, Forbidden, InternalServerError, NotFound, Unauthorized } from "@tsed/exceptions";
import { Logger } from "@tsed/common";

@Service()
export class HasuraService {
  @Inject()
  envService: EnvService;

  @Inject()
  logger: Logger;

  graphQLClient: GraphQLClient;

  constructor(envService: EnvService, logger: Logger) {
    this.envService = envService;
    this.logger = logger;
    this.logger.info("[HasuraService] Hasura API URL: ", this.envService.hasuraApiUrl);
    this.graphQLClient = new GraphQLClient(this.envService.hasuraApiUrl, {});
  }
  async clientRequest<T, V extends Variables = Variables>(
    document: RequestDocument | TypedDocumentNode<T, V>,
    variables: Variables,
    clientHeaders: Headers
  ): Promise<T> {
    try {
      return await this.graphQLClient.request(document, variables, clientHeaders);
    } catch (error) {
      this.handleError(error);
    }
  }
  async adminRequest<T, V extends Variables = Variables>(
    document: RequestDocument | TypedDocumentNode<T, V>,
    variables: Variables
  ): Promise<T> {
    try {
      return await this.graphQLClient.request(document, variables, {
        "x-hasura-admin-secret": this.envService.hasuraAdminSecret
      });
    } catch (error) {
      this.handleError(error);
    }
  }

  private handleError(error: unknown): never {
    if (error instanceof ClientError) {
      const clientError: ClientError = error as ClientError;

      // Assuming ClientError provides a statusCode property
      const errorMessage = (clientError.response.error as { reason: string })?.reason || clientError.message;
      switch (error.response.status) {
        case 400:
          throw new BadRequest(errorMessage);
        case 401:
          throw new Unauthorized(errorMessage);
        case 403:
          throw new Forbidden(errorMessage);
        case 404:
          throw new NotFound(errorMessage);
        default:
          // Default to InternalServerError for other 4xx and 5xx errors not specifically handled
          throw new InternalServerError(errorMessage);
      }
    }

    // For non-ClientError types or other unexpected errors
    this.logger.error(error);
    throw new InternalServerError(error as string);
  }
}
