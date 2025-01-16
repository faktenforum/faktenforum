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
@Service()
export class ClaimWorthinessService {
  @Inject()
  private hasuraService: HasuraService;

  @Inject()
  private envService: EnvService;

  @Inject()
  private logger: Logger;

  async evaluateClaimWorthiness(claimId: string): Promise<void> {
    try {
      // 1. Fetch claim data

      const queryResponse = await this.hasuraService.adminRequest<
        GetClaimSubmitterNotesQuery,
        GetClaimSubmitterNotesQueryVariables
      >(GetClaimSubmitterNotesDocument, { id: claimId });
      const claimData = queryResponse.data;

      if (!claimData) {
        throw new Error(`Claim not found ${claimId}`);
      }

      // 2. Call external service
      //   const externalServiceResponse = await axios.post<(
      //     this.envService.worthinessServiceUrl,
      //     {
      //       claimId,
      //       description: claimData.claims_by_pk.description,
      //       amount: claimData.claims_by_pk.amount,
      //       incidentDate: claimData.claims_by_pk.incident_date
      //     }
      //   );

      // 3. Update claim with worthiness score

      await this.hasuraService.adminRequest<
        InsertCheckworthinessMutation,
        InsertCheckworthinessMutationVariables
      >(InsertCheckworthinessDocument, {
        confidence: 0.0,
        claimId: claimId
      });
    } catch (error) {
      this.logger.error(`Error evaluating claim worthiness for claim ${claimId}:`, error);
      throw error;
    }
  }
}
