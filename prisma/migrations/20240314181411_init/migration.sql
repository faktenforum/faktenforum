-- CreateTable
CREATE TABLE "ClaimFact" (
    "id" TEXT NOT NULL,
    "claimId" TEXT NOT NULL,
    "factId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" TEXT NOT NULL,

    CONSTRAINT "ClaimFact_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ClaimFact" ADD CONSTRAINT "ClaimFact_claimId_fkey" FOREIGN KEY ("claimId") REFERENCES "Claim"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClaimFact" ADD CONSTRAINT "ClaimFact_factId_fkey" FOREIGN KEY ("factId") REFERENCES "Fact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClaimFact" ADD CONSTRAINT "ClaimFact_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
