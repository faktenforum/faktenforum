import { Inject, Service } from "@tsed/di";
import type { Variables, RequestDocument } from "graphql-request";
import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { GraphQLClient } from "graphql-request";
import { EnvService } from "~/services";

@Service()
export class HasuraService {
  @Inject()
  envService: EnvService;

  graphQLClient: GraphQLClient;

  constructor(envService: EnvService) {
    this.graphQLClient = new GraphQLClient(envService.hasuraBaseUrl, {});
  }
  clientRequest<T, V extends Variables = Variables>(
    document: RequestDocument | TypedDocumentNode<T, V>,
    variables: Variables,
    clientHeaders: Record<string, string>
  ): Promise<T> {
    return this.graphQLClient.request(document, variables, clientHeaders);
  }
  adminRequest<T, V extends Variables = Variables>(
    document: RequestDocument | TypedDocumentNode<T, V>,
    variables: Variables
  ): Promise<T> {
    return this.graphQLClient.request(document, variables, {
      "x-hasura-admin-secret": this.envService.apiKeys.hasura
    });
  }
}
