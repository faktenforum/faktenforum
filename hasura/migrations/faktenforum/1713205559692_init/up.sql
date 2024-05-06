SET check_function_bodies = false;
CREATE EXTENSION IF NOT EXISTS temporal_tables WITH SCHEMA public;
COMMENT ON EXTENSION temporal_tables IS 'temporal tables';
CREATE TYPE public.claim_label AS ENUM ('false', 'miss_leading', 'true');
CREATE TYPE public.claim_status AS ENUM (
    'submitted',
    'ready_to_check',
    'in_progress',
    'archived',
    'spam',
    'closed',
    'checked',
    'published'
);
CREATE TYPE public.user_role AS ENUM (
    'admin',
    'moderator',
    'senior',
    'intermediate',
    'junior'
);
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger LANGUAGE plpgsql AS $$
DECLARE _new record;
BEGIN _new := NEW;
_new.updated_at = NOW();
RETURN _new;
END;
$$;
CREATE TABLE public.claim (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    title text,
    description text,
    tags text [] DEFAULT ARRAY []::text [],
    label public.claim_label,
    status public.claim_status DEFAULT 'submitted'::public.claim_status NOT NULL,
    archive_id uuid,
    archive_at timestamp(3) without time zone,
    created_by uuid,
    updated_by uuid,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    sys_period tstzrange
);
CREATE TABLE public.claim_fact (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    claim_id uuid NOT NULL,
    fact_id uuid NOT NULL,
    created_by uuid,
    updated_by uuid,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    sys_period tstzrange
);
CREATE TABLE public.claim_resource (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    original_url text,
    description text,
    file_id uuid,
    claim_id uuid NOT NULL,
    created_by uuid,
    updated_by uuid,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    sys_period tstzrange
);
CREATE TABLE public.claim_submission_token (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    token text NOT NULL,
    claim_id uuid NOT NULL,
    expires_at timestamp(3) without time zone NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    sys_period tstzrange
);
CREATE TABLE public.comment (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    claim_id uuid NOT NULL,
    content text NOT NULL,
    created_by uuid NOT NULL,
    updated_by uuid,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    sys_period tstzrange
);
CREATE TABLE public.fact (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    title text,
    description text,
    created_by uuid,
    updated_by uuid,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    sys_period tstzrange
);
CREATE TABLE public.fact_resource (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    original_url text,
    description text,
    file_id uuid,
    fact_id uuid NOT NULL,
    created_by uuid,
    updated_by uuid,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    sys_period tstzrange
);
CREATE TABLE public.file (
    id uuid NOT NULL,
    name text NOT NULL,
    mime_type text NOT NULL,
    e_tag text NOT NULL,
    size integer NOT NULL,
    transcription text,
    created_by uuid,
    updated_by uuid,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    sys_period tstzrange
);
CREATE TABLE public.user (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    email text NOT NULL,
    username text NOT NULL,
    first_name text,
    last_name text,
    pronouns text,
    profile_image text,
    bio text,
    mobile_number text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    sys_period tstzrange
);
CREATE TABLE public.virality (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    claim_id uuid NOT NULL,
    facebook_likes integer,
    facebook_shares integer,
    youtube_views integer,
    youtube_likes integer,
    youtube_dislikes integer,
    instagram_likes integer,
    instagram_shares integer,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    sys_period tstzrange
);
ALTER TABLE ONLY public.claim_fact
ADD CONSTRAINT claim_fact_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.claim_resource
ADD CONSTRAINT claim_resource_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.claim_submission_token
ADD CONSTRAINT claim_submission_token_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.claim
ADD CONSTRAINT claim_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.comment
ADD CONSTRAINT comment_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.fact_resource
ADD CONSTRAINT fact_resource_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.fact
ADD CONSTRAINT fact_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.file
ADD CONSTRAINT file_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.user
ADD CONSTRAINT user_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.virality
ADD CONSTRAINT virality_pkey PRIMARY KEY (id);
CREATE UNIQUE INDEX claim_submission_token_token_key ON public.claim_submission_token USING btree (token);
CREATE UNIQUE INDEX user_email_key ON public.user USING btree (email);
CREATE UNIQUE INDEX user_username_key ON public.user USING btree (username);
CREATE TRIGGER set_public_claim_fact_updated_at BEFORE
UPDATE ON public.claim_fact FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_claim_fact_updated_at ON public.claim_fact IS 'trigger to set value of column updated_at to current timestamp on row update';
CREATE TRIGGER set_public_claim_resource_updated_at BEFORE
UPDATE ON public.claim_resource FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_claim_resource_updated_at ON public.claim_resource IS 'trigger to set value of column updated_at to current timestamp on row update';
CREATE TRIGGER set_public_claim_submission_token_updated_at BEFORE
UPDATE ON public.claim_submission_token FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_claim_submission_token_updated_at ON public.claim_submission_token IS 'trigger to set value of column updated_at to current timestamp on row update';
CREATE TRIGGER set_public_claim_updated_at BEFORE
UPDATE ON public.claim FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_claim_updated_at ON public.claim IS 'trigger to set value of column updated_at to current timestamp on row update';
CREATE TRIGGER set_public_comment_updated_at BEFORE
UPDATE ON public.comment FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_comment_updated_at ON public.comment IS 'trigger to set value of column updated_at to current timestamp on row update';
CREATE TRIGGER set_public_fact_resource_updated_at BEFORE
UPDATE ON public.fact_resource FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_fact_resource_updated_at ON public.fact_resource IS 'trigger to set value of column updated_at to current timestamp on row update';
CREATE TRIGGER set_public_fact_updated_at BEFORE
UPDATE ON public.fact FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_fact_updated_at ON public.fact IS 'trigger to set value of column updated_at to current timestamp on row update';
CREATE TRIGGER set_public_file_updated_at BEFORE
UPDATE ON public.file FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_file_updated_at ON public.file IS 'trigger to set value of column updated_at to current timestamp on row update';
CREATE TRIGGER set_public_user_updated_at BEFORE
UPDATE ON public.user FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_user_updated_at ON public.user IS 'trigger to set value of column updated_at to current timestamp on row update';
CREATE TRIGGER set_public_virality_updated_at BEFORE
UPDATE ON public.virality FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_virality_updated_at ON public.virality IS 'trigger to set value of column updated_at to current timestamp on row update';
ALTER TABLE ONLY public.claim_fact
ADD CONSTRAINT claim_fact_claim_id_fkey FOREIGN KEY (claim_id) REFERENCES public.claim(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.claim_fact
ADD CONSTRAINT claim_fact_created_by_fkey FOREIGN KEY (created_by) REFERENCES public.user(id) ON UPDATE CASCADE ON DELETE
SET NULL;
ALTER TABLE ONLY public.claim_fact
ADD CONSTRAINT claim_fact_fact_id_fkey FOREIGN KEY (fact_id) REFERENCES public.fact(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.claim_fact
ADD CONSTRAINT claim_fact_updated_by_fkey FOREIGN KEY (updated_by) REFERENCES public.user(id) ON UPDATE CASCADE ON DELETE
SET NULL;
ALTER TABLE ONLY public.claim_resource
ADD CONSTRAINT claim_resource_claim_id_fkey FOREIGN KEY (claim_id) REFERENCES public.claim(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.claim_resource
ADD CONSTRAINT claim_resource_created_by_fkey FOREIGN KEY (created_by) REFERENCES public.user(id) ON UPDATE CASCADE ON DELETE
SET NULL;
ALTER TABLE ONLY public.claim_resource
ADD CONSTRAINT claim_resource_file_id_fkey FOREIGN KEY (file_id) REFERENCES public.file(id) ON UPDATE CASCADE ON DELETE
SET NULL;
ALTER TABLE ONLY public.claim_resource
ADD CONSTRAINT claim_resource_updated_by_fkey FOREIGN KEY (updated_by) REFERENCES public.user(id) ON UPDATE CASCADE ON DELETE
SET NULL;
ALTER TABLE ONLY public.claim_submission_token
ADD CONSTRAINT claim_submission_token_claim_id_fkey FOREIGN KEY (claim_id) REFERENCES public.claim(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.claim
ADD CONSTRAINT claim_created_by_fkey FOREIGN KEY (created_by) REFERENCES public.user(id) ON UPDATE CASCADE ON DELETE
SET NULL;
ALTER TABLE ONLY public.claim
ADD CONSTRAINT claim_updated_by_fkey FOREIGN KEY (updated_by) REFERENCES public.user(id) ON UPDATE CASCADE ON DELETE
SET NULL;
ALTER TABLE ONLY public.comment
ADD CONSTRAINT comment_claim_id_fkey FOREIGN KEY (claim_id) REFERENCES public.claim(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.comment
ADD CONSTRAINT comment_created_by_fkey FOREIGN KEY (created_by) REFERENCES public.user(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.comment
ADD CONSTRAINT comment_updated_by_fkey FOREIGN KEY (updated_by) REFERENCES public.user(id) ON UPDATE CASCADE ON DELETE
SET NULL;
ALTER TABLE ONLY public.fact_resource
ADD CONSTRAINT fact_resource_created_by_fkey FOREIGN KEY (created_by) REFERENCES public.user(id) ON UPDATE CASCADE ON DELETE
SET NULL;
ALTER TABLE ONLY public.fact_resource
ADD CONSTRAINT fact_resource_fact_id_fkey FOREIGN KEY (fact_id) REFERENCES public.fact(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.fact_resource
ADD CONSTRAINT fact_resource_file_id_fkey FOREIGN KEY (file_id) REFERENCES public.file(id) ON UPDATE CASCADE ON DELETE
SET NULL;
ALTER TABLE ONLY public.fact_resource
ADD CONSTRAINT fact_resource_updated_by_fkey FOREIGN KEY (updated_by) REFERENCES public.user(id) ON UPDATE CASCADE ON DELETE
SET NULL;
ALTER TABLE ONLY public.fact
ADD CONSTRAINT fact_created_by_fkey FOREIGN KEY (created_by) REFERENCES public.user(id) ON UPDATE CASCADE ON DELETE
SET NULL;
ALTER TABLE ONLY public.fact
ADD CONSTRAINT fact_updated_by_fkey FOREIGN KEY (updated_by) REFERENCES public.user(id) ON UPDATE CASCADE ON DELETE
SET NULL;
ALTER TABLE ONLY public.file
ADD CONSTRAINT file_created_by_fkey FOREIGN KEY (created_by) REFERENCES public.user(id) ON UPDATE CASCADE ON DELETE
SET NULL;
ALTER TABLE ONLY public.file
ADD CONSTRAINT file_updated_by_fkey FOREIGN KEY (updated_by) REFERENCES public.user(id) ON UPDATE CASCADE ON DELETE
SET NULL;
ALTER TABLE ONLY public.virality
ADD CONSTRAINT virality_claim_id_fkey FOREIGN KEY (claim_id) REFERENCES public.claim(id) ON UPDATE CASCADE ON DELETE CASCADE;