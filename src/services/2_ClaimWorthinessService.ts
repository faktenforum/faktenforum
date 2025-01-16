import { Inject, Service } from "@tsed/di";
import { Logger } from "@tsed/common";
import { HasuraService } from "./1_HasuraService";

import axios from "axios";
import { EnvService } from "~/services";
import { GetClaimSubmitterNotesDocument, InsertCheckworthinessDocument } from "~/generated/graphql";
import type {
  GetClaimSubmitterNotesQuery,
  GetClaimSubmitterNotesQueryVariables,
  InsertCheckworthinessMutation,
  InsertCheckworthinessMutationVariables
} from "~/generated/graphql";
import { ClaimWorthinessResponse, ClaimWorthinessRequest } from "~/models";
@Service()
export class ClaimWorthinessService {
  @Inject()
  private hasuraService: HasuraService;

  @Inject()
  private envService: EnvService;

  @Inject()
  private logger: Logger;

  async inferClaimWorthiness(claimId: string, options: { backoffTime: number }): Promise<void> {
    try {
      // 1. Fetch claim data
      const backoffTime = options?.backoffTime || 0;
      await new Promise((resolve) => setTimeout(resolve, backoffTime));

      const queryResponse = await this.hasuraService.adminRequest<
        GetClaimSubmitterNotesQuery,
        GetClaimSubmitterNotesQueryVariables
      >(GetClaimSubmitterNotesDocument, { id: claimId });
      const claimData = queryResponse.data;

      if (!claimData) {
        throw new Error(`Claim not found ${claimId}`);
      }

      // 2. Call external service
      if (!claimData.submitterNotes) {
        await this.hasuraService.adminRequest<
          InsertCheckworthinessMutation,
          InsertCheckworthinessMutationVariables
        >(InsertCheckworthinessDocument, {
          confidence: 1.0,
          claimId: claimId,
          category: "uncheckable"
        });
        return;
      }

      const externalServiceResponse = await axios.post<ClaimWorthinessResponse>(
        this.envService.checkWorthinessBaseUrl + "/inference",
        {
          text: claimData.submitterNotes
        }
      );

      await this.hasuraService.adminRequest<
        InsertCheckworthinessMutation,
        InsertCheckworthinessMutationVariables
      >(InsertCheckworthinessDocument, {
        confidence: externalServiceResponse.data.confidence,
        category: externalServiceResponse.data.category,
        claimId: claimId
      });
    } catch (error) {
      this.logger.error(`Error evaluating claim worthiness for claim ${claimId}:`, error);
    }
  }
}
