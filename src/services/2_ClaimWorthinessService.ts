import { Inject, Service } from "@tsed/di";
import { Logger } from "@tsed/common";
import { HasuraService } from "./1_HasuraService";

import axios from "axios";
import { EnvService } from "~/services";
import {
  GetClaimSubmitterNotesDocument,
  InsertCheckworthinessDocument,
  GetClaimsWithoutCheckworthinessDocument
} from "~/generated/graphql";
import type {
  GetClaimSubmitterNotesQuery,
  GetClaimSubmitterNotesQueryVariables,
  GetClaimsWithoutCheckworthinessQuery,
  GetClaimsWithoutCheckworthinessQueryVariables,
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

  async inferClaimWorthiness(claimId: string): Promise<void> {
    try {
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

  async inferAllnewClaims(): Promise<void> {
    const BATCH_SIZE = 10;
    let offset = 0;
    let hasMore = true;

    while (hasMore) {
      try {
        // Fetch batch of claims
        this.logger.info("Fetching claims offset " + offset);
        const response = await this.hasuraService.adminRequest<
          GetClaimsWithoutCheckworthinessQuery,
          GetClaimsWithoutCheckworthinessQueryVariables
        >(GetClaimsWithoutCheckworthinessDocument, {
          limit: BATCH_SIZE,
          offset: offset
        });

        const claims = response.data;

        // Stop if no more claims found
        if (claims.length === 0) {
          this.logger.info("No more claims found");
          hasMore = false;
          break;
        }

        // Process claims sequentially with increasing backoff
        for (let i = 0; i < claims.length; i++) {
          this.logger.info("Analyze " + claims[i].id);
          await this.inferClaimWorthiness(claims[i].id);
        }
      } catch (error) {
        this.logger.error("Error processing claims batch:", error);
        hasMore = false;
      }
    }

    this.logger.info(`Finished processing all claims without checkworthiness`);
  }
}
