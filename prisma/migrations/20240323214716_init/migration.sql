/*
  Warnings:

  - You are about to drop the column `archiveAt` on the `ClaimResource` table. All the data in the column will be lost.
  - You are about to drop the column `archiveId` on the `ClaimResource` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Claim" ADD COLUMN     "archiveAt" TIMESTAMP(3),
ADD COLUMN     "archiveId" TEXT;

-- AlterTable
ALTER TABLE "ClaimResource" DROP COLUMN "archiveAt",
DROP COLUMN "archiveId";
