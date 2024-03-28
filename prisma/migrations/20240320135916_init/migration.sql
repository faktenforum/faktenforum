-- DropForeignKey
ALTER TABLE "ClaimResource" DROP CONSTRAINT "ClaimResource_createdBy_fkey";

-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_createdBy_fkey";

-- AlterTable
ALTER TABLE "ClaimResource" ALTER COLUMN "createdBy" DROP NOT NULL;

-- AlterTable
ALTER TABLE "File" ALTER COLUMN "createdBy" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ClaimResource" ADD CONSTRAINT "ClaimResource_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
