SET check_function_bodies = false;
CREATE EXTENSION IF NOT EXISTS temporal_tables WITH SCHEMA public;
COMMENT ON EXTENSION temporal_tables IS 'temporal tables';
CREATE TYPE public."ClaimLabel" AS ENUM (
    'FALSE',
    'MISSLEADING',
    'TRUE'
);
CREATE TYPE public."ClaimStatus" AS ENUM (
    'SUBMITTED',
    'READYT_TO_CHECK',
    'IN_PROGRESS',
    'ARCHIVED',
    'SPAM',
    'CLOSED',
    'CHECKED',
    'PUBLISHED'
);
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
CREATE FUNCTION public."set_current_timestamp_updatedAt"() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updatedAt" = NOW();
  RETURN _new;
END;
$$;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public."Claim" (
    id uuid NOT NULL,
    title text,
    description text,
    tags text[] DEFAULT ARRAY[]::text[],
    label public."ClaimLabel",
    status public."ClaimStatus" DEFAULT 'SUBMITTED'::public."ClaimStatus" NOT NULL,
    "archiveId" uuid,
    "archiveAt" timestamp(3) without time zone,
    "createdBy" uuid NOT NULL,
    "updatedBy" uuid,
    "createdAt" timestamp with time zone DEFAULT now(),
    "updatedAt" timestamp with time zone DEFAULT now(),
    sys_period tstzrange NOT NULL 
);
CREATE TABLE public."ClaimFact" (
    id uuid NOT NULL,
    "claimId" uuid NOT NULL,
    "factId" uuid NOT NULL,
    "createdBy" uuid NOT NULL,
    "updatedBy" uuid,
    "createdAt" timestamp with time zone DEFAULT now(),
    "updatedAt" timestamp with time zone DEFAULT now(),
    sys_period tstzrange NOT NULL 
);
CREATE TABLE public."ClaimResource" (
    id uuid NOT NULL,
    "originalUrl" text,
    description text,
    "fileId" uuid,
    "claimId" uuid NOT NULL,
    "createdBy" uuid NOT NULL,
    "updatedBy" uuid,
    "createdAt" timestamp with time zone DEFAULT now(),
    "updatedAt" timestamp with time zone DEFAULT now(),
    sys_period tstzrange NOT NULL 
);
CREATE TABLE public."ClaimSubmissionToken" (
    id uuid NOT NULL,
    token text NOT NULL,
    "claimId" uuid NOT NULL,
    "expiresAt" timestamp(3) without time zone NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now(),
    "updatedAt" timestamp with time zone DEFAULT now(),
    sys_period tstzrange NOT NULL 
);
CREATE TABLE public."Comment" (
    id uuid NOT NULL,
    "claimId" uuid NOT NULL,
    content text NOT NULL,
    "createdBy" uuid NOT NULL,
    "updatedBy" uuid,
    "createdAt" timestamp with time zone DEFAULT now(),
    "updatedAt" timestamp with time zone DEFAULT now(),
    sys_period tstzrange NOT NULL 
);
CREATE TABLE public."Fact" (
    id uuid NOT NULL,
    title text,
    description text,
    "createdBy" uuid NOT NULL,
    "updatedBy" uuid,
    "createdAt" timestamp with time zone DEFAULT now(),
    "updatedAt" timestamp with time zone DEFAULT now(),
    sys_period tstzrange NOT NULL 
);
CREATE TABLE public."FactResource" (
    id uuid NOT NULL,
    "originalUrl" text,
    description text,
    "fileId" uuid,
    "factId" uuid NOT NULL,
    "createdBy" uuid NOT NULL,
    "updatedBy" uuid,
    "createdAt" timestamp with time zone DEFAULT now(),
    "updatedAt" timestamp with time zone DEFAULT now(),
    sys_period tstzrange NOT NULL 
);
CREATE TABLE public."File" (
    id uuid NOT NULL,
    key text NOT NULL,
    name text NOT NULL,
    "mimeType" text NOT NULL,
    md5 text NOT NULL,
    size integer NOT NULL,
    transcription text,
    "createdBy" uuid NOT NULL,
    "updatedBy" uuid,
    "createdAt" timestamp with time zone DEFAULT now(),
    "updatedAt" timestamp with time zone DEFAULT now(),
    sys_period tstzrange NOT NULL 
);
CREATE TABLE public."User" (
    id uuid NOT NULL,
    email text NOT NULL,
    username text NOT NULL,
    "firstName" text,
    "lastName" text,
    pronouns text,
    "profileImage" text,
    bio text,
    "mobileNumber" text,
    "createdAt" timestamp with time zone DEFAULT now(),
    "updatedAt" timestamp with time zone DEFAULT now(),
    sys_period tstzrange NOT NULL 
);
CREATE TABLE public."Virality" (
    id uuid NOT NULL,
    "claimId" uuid NOT NULL,
    "facebookLikes" integer,
    "facebookShares" integer,
    "youtubeViews" integer,
    "youtubeLikes" integer,
    "youtubeDislikes" integer,
    "instagramLikes" integer,
    "instagramShares" integer,
    "createdAt" timestamp with time zone DEFAULT now(),
    "updatedAt" timestamp with time zone DEFAULT now(),
    sys_period tstzrange NOT NULL 
);
ALTER TABLE ONLY public."ClaimFact"
    ADD CONSTRAINT "ClaimFact_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."ClaimResource"
    ADD CONSTRAINT "ClaimResource_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."ClaimSubmissionToken"
    ADD CONSTRAINT "ClaimSubmissionToken_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Claim"
    ADD CONSTRAINT "Claim_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Comment"
    ADD CONSTRAINT "Comment_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."FactResource"
    ADD CONSTRAINT "FactResource_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Fact"
    ADD CONSTRAINT "Fact_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."File"
    ADD CONSTRAINT "File_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Virality"
    ADD CONSTRAINT "Virality_pkey" PRIMARY KEY (id);
CREATE UNIQUE INDEX "ClaimSubmissionToken_token_key" ON public."ClaimSubmissionToken" USING btree (token);
CREATE INDEX "File_key_idx" ON public."File" USING btree (key);
CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);
CREATE UNIQUE INDEX "User_username_key" ON public."User" USING btree (username);
CREATE TRIGGER "set_public_ClaimFact_updatedAt" BEFORE UPDATE ON public."ClaimFact" FOR EACH ROW EXECUTE FUNCTION public."set_current_timestamp_updatedAt"();
COMMENT ON TRIGGER "set_public_ClaimFact_updatedAt" ON public."ClaimFact" IS 'trigger to set value of column "updatedAt" to current timestamp on row update';
CREATE TRIGGER "set_public_ClaimResource_updatedAt" BEFORE UPDATE ON public."ClaimResource" FOR EACH ROW EXECUTE FUNCTION public."set_current_timestamp_updatedAt"();
COMMENT ON TRIGGER "set_public_ClaimResource_updatedAt" ON public."ClaimResource" IS 'trigger to set value of column "updatedAt" to current timestamp on row update';
CREATE TRIGGER "set_public_ClaimSubmissionToken_updatedAt" BEFORE UPDATE ON public."ClaimSubmissionToken" FOR EACH ROW EXECUTE FUNCTION public."set_current_timestamp_updatedAt"();
COMMENT ON TRIGGER "set_public_ClaimSubmissionToken_updatedAt" ON public."ClaimSubmissionToken" IS 'trigger to set value of column "updatedAt" to current timestamp on row update';
CREATE TRIGGER "set_public_Claim_updatedAt" BEFORE UPDATE ON public."Claim" FOR EACH ROW EXECUTE FUNCTION public."set_current_timestamp_updatedAt"();
COMMENT ON TRIGGER "set_public_Claim_updatedAt" ON public."Claim" IS 'trigger to set value of column "updatedAt" to current timestamp on row update';
CREATE TRIGGER "set_public_Claim_updated_at" BEFORE UPDATE ON public."Claim" FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER "set_public_Claim_updated_at" ON public."Claim" IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER "set_public_Comment_updatedAt" BEFORE UPDATE ON public."Comment" FOR EACH ROW EXECUTE FUNCTION public."set_current_timestamp_updatedAt"();
COMMENT ON TRIGGER "set_public_Comment_updatedAt" ON public."Comment" IS 'trigger to set value of column "updatedAt" to current timestamp on row update';
CREATE TRIGGER "set_public_FactResource_updatedAt" BEFORE UPDATE ON public."FactResource" FOR EACH ROW EXECUTE FUNCTION public."set_current_timestamp_updatedAt"();
COMMENT ON TRIGGER "set_public_FactResource_updatedAt" ON public."FactResource" IS 'trigger to set value of column "updatedAt" to current timestamp on row update';
CREATE TRIGGER "set_public_Fact_updatedAt" BEFORE UPDATE ON public."Fact" FOR EACH ROW EXECUTE FUNCTION public."set_current_timestamp_updatedAt"();
COMMENT ON TRIGGER "set_public_Fact_updatedAt" ON public."Fact" IS 'trigger to set value of column "updatedAt" to current timestamp on row update';
CREATE TRIGGER "set_public_File_updatedAt" BEFORE UPDATE ON public."File" FOR EACH ROW EXECUTE FUNCTION public."set_current_timestamp_updatedAt"();
COMMENT ON TRIGGER "set_public_File_updatedAt" ON public."File" IS 'trigger to set value of column "updatedAt" to current timestamp on row update';
CREATE TRIGGER "set_public_User_updatedAt" BEFORE UPDATE ON public."User" FOR EACH ROW EXECUTE FUNCTION public."set_current_timestamp_updatedAt"();
COMMENT ON TRIGGER "set_public_User_updatedAt" ON public."User" IS 'trigger to set value of column "updatedAt" to current timestamp on row update';
CREATE TRIGGER "set_public_Virality_updatedAt" BEFORE UPDATE ON public."Virality" FOR EACH ROW EXECUTE FUNCTION public."set_current_timestamp_updatedAt"();
COMMENT ON TRIGGER "set_public_Virality_updatedAt" ON public."Virality" IS 'trigger to set value of column "updatedAt" to current timestamp on row update';
ALTER TABLE ONLY public."ClaimFact"
    ADD CONSTRAINT "ClaimFact_claimId_fkey" FOREIGN KEY ("claimId") REFERENCES public."Claim"(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public."ClaimFact"
    ADD CONSTRAINT "ClaimFact_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."ClaimFact"
    ADD CONSTRAINT "ClaimFact_factId_fkey" FOREIGN KEY ("factId") REFERENCES public."Fact"(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public."ClaimFact"
    ADD CONSTRAINT "ClaimFact_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."ClaimResource"
    ADD CONSTRAINT "ClaimResource_claimId_fkey" FOREIGN KEY ("claimId") REFERENCES public."Claim"(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public."ClaimResource"
    ADD CONSTRAINT "ClaimResource_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."ClaimResource"
    ADD CONSTRAINT "ClaimResource_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES public."File"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."ClaimResource"
    ADD CONSTRAINT "ClaimResource_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."ClaimSubmissionToken"
    ADD CONSTRAINT "ClaimSubmissionToken_claimId_fkey" FOREIGN KEY ("claimId") REFERENCES public."Claim"(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public."Claim"
    ADD CONSTRAINT "Claim_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."Claim"
    ADD CONSTRAINT "Claim_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."Comment"
    ADD CONSTRAINT "Comment_claimId_fkey" FOREIGN KEY ("claimId") REFERENCES public."Claim"(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public."Comment"
    ADD CONSTRAINT "Comment_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."Comment"
    ADD CONSTRAINT "Comment_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."FactResource"
    ADD CONSTRAINT "FactResource_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."FactResource"
    ADD CONSTRAINT "FactResource_factId_fkey" FOREIGN KEY ("factId") REFERENCES public."Fact"(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public."FactResource"
    ADD CONSTRAINT "FactResource_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES public."File"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."FactResource"
    ADD CONSTRAINT "FactResource_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."Fact"
    ADD CONSTRAINT "Fact_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."Fact"
    ADD CONSTRAINT "Fact_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."File"
    ADD CONSTRAINT "File_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."File"
    ADD CONSTRAINT "File_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."Virality"
    ADD CONSTRAINT "Virality_claimId_fkey" FOREIGN KEY ("claimId") REFERENCES public."Claim"(id) ON UPDATE CASCADE ON DELETE CASCADE;


