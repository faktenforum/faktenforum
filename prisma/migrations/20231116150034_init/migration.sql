-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "FileType" AS ENUM ('IMAGE', 'VIDEO', 'DOCUMENT', 'OTHER');

-- CreateTable
CREATE TABLE "ClaimFile" (
    "id" TEXT NOT NULL,
    "submitterId" TEXT,
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "mimeType" TEXT NOT NULL,
    "md5" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "transcription" TEXT,
    "claimResourceId" TEXT,

    CONSTRAINT "ClaimFile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClaimResource" (
    "id" TEXT NOT NULL,
    "submitterId" TEXT,
    "originalUrl" TEXT,
    "description" TEXT,
    "claimId" TEXT NOT NULL,

    CONSTRAINT "ClaimResource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Claim" (
    "id" TEXT NOT NULL,
    "submitterId" TEXT,
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT,
    "description" TEXT,
    "tags" TEXT[],

    CONSTRAINT "Claim_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResourceSimilarity" (
    "firstResourceId" TEXT NOT NULL,
    "secondResourceId" TEXT NOT NULL,
    "similarityScore" DOUBLE PRECISION NOT NULL,
    "manuallyConfirmed" BOOLEAN NOT NULL,
    "confirmerId" TEXT,
    "manuallyConfirmedAt" TIMESTAMP(3),

    CONSTRAINT "ResourceSimilarity_pkey" PRIMARY KEY ("firstResourceId","secondResourceId")
);

-- CreateTable
CREATE TABLE "ClaimSubmissionToken" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "claimId" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClaimSubmissionToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "userAgent" TEXT,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "lastLogin" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ClaimFile_key_idx" ON "ClaimFile"("key");

-- CreateIndex
CREATE UNIQUE INDEX "ClaimResource_id_claimId_key" ON "ClaimResource"("id", "claimId");

-- CreateIndex
CREATE UNIQUE INDEX "ClaimSubmissionToken_token_key" ON "ClaimSubmissionToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Session_token_key" ON "Session"("token");

-- AddForeignKey
ALTER TABLE "ClaimFile" ADD CONSTRAINT "ClaimFile_submitterId_fkey" FOREIGN KEY ("submitterId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClaimFile" ADD CONSTRAINT "ClaimFile_claimResourceId_fkey" FOREIGN KEY ("claimResourceId") REFERENCES "ClaimResource"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClaimResource" ADD CONSTRAINT "ClaimResource_submitterId_fkey" FOREIGN KEY ("submitterId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClaimResource" ADD CONSTRAINT "ClaimResource_claimId_fkey" FOREIGN KEY ("claimId") REFERENCES "Claim"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Claim" ADD CONSTRAINT "Claim_submitterId_fkey" FOREIGN KEY ("submitterId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResourceSimilarity" ADD CONSTRAINT "ResourceSimilarity_firstResourceId_fkey" FOREIGN KEY ("firstResourceId") REFERENCES "ClaimResource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResourceSimilarity" ADD CONSTRAINT "ResourceSimilarity_secondResourceId_fkey" FOREIGN KEY ("secondResourceId") REFERENCES "ClaimResource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResourceSimilarity" ADD CONSTRAINT "ResourceSimilarity_confirmerId_fkey" FOREIGN KEY ("confirmerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClaimSubmissionToken" ADD CONSTRAINT "ClaimSubmissionToken_claimId_fkey" FOREIGN KEY ("claimId") REFERENCES "Claim"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
