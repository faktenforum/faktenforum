SET check_function_bodies = false;
CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;
COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';
CREATE TYPE public."FileType" AS ENUM (
    'IMAGE',
    'VIDEO',
    'DOCUMENT',
    'OTHER'
);
CREATE TYPE public."UserRole" AS ENUM (
    'ADMIN',
    'USER'
);
CREATE TABLE public."Claim" (
    id text NOT NULL,
    "submitterId" text,
    "submittedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    title text,
    description text,
    tags text[]
);
CREATE TABLE public."ClaimFile" (
    id text NOT NULL,
    "submitterId" text,
    "submittedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    key text NOT NULL,
    name text NOT NULL,
    "mimeType" text NOT NULL,
    md5 text NOT NULL,
    size integer NOT NULL,
    transcription text,
    "claimResourceId" text
);
CREATE TABLE public."ClaimResource" (
    id text NOT NULL,
    "submitterId" text,
    "originalUrl" text,
    description text,
    "claimId" text NOT NULL
);
CREATE TABLE public."ClaimSubmissionToken" (
    id text NOT NULL,
    token text NOT NULL,
    "claimId" text NOT NULL,
    "expiresAt" timestamp(3) without time zone NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);
CREATE TABLE public."ResourceSimilarity" (
    "firstResourceId" text NOT NULL,
    "secondResourceId" text NOT NULL,
    "similarityScore" double precision NOT NULL,
    "manuallyConfirmed" boolean NOT NULL,
    "confirmerId" text,
    "manuallyConfirmedAt" timestamp(3) without time zone
);
CREATE TABLE public."Session" (
    id text NOT NULL,
    token text NOT NULL,
    "userId" text NOT NULL,
    "userAgent" text,
    "expiresAt" timestamp(3) without time zone NOT NULL,
    "lastLogin" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
CREATE TABLE public."User" (
    id text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    role public."UserRole" DEFAULT 'USER'::public."UserRole" NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);
CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);
ALTER TABLE ONLY public."ClaimFile"
    ADD CONSTRAINT "ClaimFile_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."ClaimResource"
    ADD CONSTRAINT "ClaimResource_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."ClaimSubmissionToken"
    ADD CONSTRAINT "ClaimSubmissionToken_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Claim"
    ADD CONSTRAINT "Claim_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."ResourceSimilarity"
    ADD CONSTRAINT "ResourceSimilarity_pkey" PRIMARY KEY ("firstResourceId", "secondResourceId");
ALTER TABLE ONLY public."Session"
    ADD CONSTRAINT "Session_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
CREATE INDEX "ClaimFile_key_idx" ON public."ClaimFile" USING btree (key);
CREATE UNIQUE INDEX "ClaimResource_id_claimId_key" ON public."ClaimResource" USING btree (id, "claimId");
CREATE UNIQUE INDEX "ClaimSubmissionToken_token_key" ON public."ClaimSubmissionToken" USING btree (token);
CREATE UNIQUE INDEX "Session_token_key" ON public."Session" USING btree (token);
CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);
ALTER TABLE ONLY public."ClaimFile"
    ADD CONSTRAINT "ClaimFile_claimResourceId_fkey" FOREIGN KEY ("claimResourceId") REFERENCES public."ClaimResource"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."ClaimFile"
    ADD CONSTRAINT "ClaimFile_submitterId_fkey" FOREIGN KEY ("submitterId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."ClaimResource"
    ADD CONSTRAINT "ClaimResource_claimId_fkey" FOREIGN KEY ("claimId") REFERENCES public."Claim"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."ClaimResource"
    ADD CONSTRAINT "ClaimResource_submitterId_fkey" FOREIGN KEY ("submitterId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."ClaimSubmissionToken"
    ADD CONSTRAINT "ClaimSubmissionToken_claimId_fkey" FOREIGN KEY ("claimId") REFERENCES public."Claim"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."Claim"
    ADD CONSTRAINT "Claim_submitterId_fkey" FOREIGN KEY ("submitterId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."ResourceSimilarity"
    ADD CONSTRAINT "ResourceSimilarity_confirmerId_fkey" FOREIGN KEY ("confirmerId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."ResourceSimilarity"
    ADD CONSTRAINT "ResourceSimilarity_firstResourceId_fkey" FOREIGN KEY ("firstResourceId") REFERENCES public."ClaimResource"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."ResourceSimilarity"
    ADD CONSTRAINT "ResourceSimilarity_secondResourceId_fkey" FOREIGN KEY ("secondResourceId") REFERENCES public."ClaimResource"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."Session"
    ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
