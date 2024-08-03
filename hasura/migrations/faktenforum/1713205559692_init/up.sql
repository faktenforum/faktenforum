SET check_function_bodies = false;
CREATE EXTENSION IF NOT EXISTS temporal_tables WITH SCHEMA public;
COMMENT ON EXTENSION temporal_tables IS 'temporal tables';
CREATE TYPE public.claim_status AS ENUM (
    'submitted',
    'accepted',
    'observed',
    'stale',
    'spam',
    'rejected',
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
    short_id text,
    process_id BIGINT,
    submitter_notes text,
    status public.claim_status DEFAULT 'submitted'::public.claim_status NOT NULL,
    synopsis text,
    rating_statement text,
    rating_summary text,
    rating_label_name text,
    created_by uuid,
    updated_by uuid,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    sys_period tstzrange
);
CREATE TABLE public.category (
    name text NOT NULL,
    label_de text NOT NULL,
    label_en text NOT NULL
);
CREATE TABLE public.rating_label (
    name text NOT NULL,
    label_de text NOT NULL,
    label_en text NOT NULL
);
CREATE TABLE public.claim_category (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    claim_id uuid NOT NULL,
    category_name text NOT NULL,
    created_by uuid,
    updated_by uuid,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    sys_period tstzrange
);
CREATE TABLE public.origin (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    claim_id uuid NOT NULL,
    index integer,
    url text,
    excerpt text,
    archive_url text,
    file_id uuid,
    created_by uuid,
    updated_by uuid,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    sys_period tstzrange
);
CREATE TABLE public.comment (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    claim_id uuid NOT NULL,
    thread_id uuid,
    content text NOT NULL,
    created_by uuid NOT NULL,
    updated_by uuid,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    sys_period tstzrange
);
CREATE TABLE public.fact (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    claim_id uuid NOT NULL,
    index integer,
    text text,
    created_by uuid,
    updated_by uuid,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    sys_period tstzrange
);
CREATE TABLE public.source (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    fact_id uuid NOT NULL,
    index integer,
    url text,
    archive_url text,
    excerpt text,
    file_id uuid,
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
ALTER TABLE ONLY public.category
ADD CONSTRAINT category_pkey PRIMARY KEY (name);
ALTER TABLE ONLY public.rating_label
ADD CONSTRAINT rating_label_pkey PRIMARY KEY (name);
ALTER TABLE ONLY public.claim_category
ADD CONSTRAINT claim_category_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.origin
ADD CONSTRAINT origin_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.claim
ADD CONSTRAINT claim_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.comment
ADD CONSTRAINT comment_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.source
ADD CONSTRAINT source_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.fact
ADD CONSTRAINT fact_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.file
ADD CONSTRAINT file_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.user
ADD CONSTRAINT user_pkey PRIMARY KEY (id);
CREATE UNIQUE INDEX user_email_key ON public.user USING btree (email);
CREATE UNIQUE INDEX user_username_key ON public.user USING btree (username);
CREATE UNIQUE INDEX claim_short_id_key ON public.claim USING btree (short_id);
CREATE UNIQUE INDEX claim_process_id ON public.claim USING btree (process_id);
CREATE TRIGGER set_claim_category_updated_at BEFORE
UPDATE ON public.claim_category FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_claim_category_updated_at ON public.claim_category IS 'trigger to set value of column updated_at to current timestamp on row update';
CREATE TRIGGER set_public_origin_updated_at BEFORE
UPDATE ON public.origin FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_origin_updated_at ON public.origin IS 'trigger to set value of column updated_at to current timestamp on row update';
CREATE TRIGGER set_public_claim_updated_at BEFORE
UPDATE ON public.claim FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_claim_updated_at ON public.claim IS 'trigger to set value of column updated_at to current timestamp on row update';
CREATE TRIGGER set_public_comment_updated_at BEFORE
UPDATE ON public.comment FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_comment_updated_at ON public.comment IS 'trigger to set value of column updated_at to current timestamp on row update';
CREATE TRIGGER set_public_source_updated_at BEFORE
UPDATE ON public.source FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_source_updated_at ON public.source IS 'trigger to set value of column updated_at to current timestamp on row update';
CREATE TRIGGER set_public_fact_updated_at BEFORE
UPDATE ON public.fact FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_fact_updated_at ON public.fact IS 'trigger to set value of column updated_at to current timestamp on row update';
CREATE TRIGGER set_public_file_updated_at BEFORE
UPDATE ON public.file FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_file_updated_at ON public.file IS 'trigger to set value of column updated_at to current timestamp on row update';
CREATE TRIGGER set_public_user_updated_at BEFORE
UPDATE ON public.user FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_user_updated_at ON public.user IS 'trigger to set value of column updated_at to current timestamp on row update';
ALTER TABLE ONLY public.fact
ADD CONSTRAINT fact_claim_id_fkey FOREIGN KEY (claim_id) REFERENCES public.claim(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.origin
ADD CONSTRAINT origin_claim_id_fkey FOREIGN KEY (claim_id) REFERENCES public.claim(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.origin
ADD CONSTRAINT origin_created_by_fkey FOREIGN KEY (created_by) REFERENCES public.user(id) ON UPDATE CASCADE ON DELETE
SET NULL;
ALTER TABLE ONLY public.origin
ADD CONSTRAINT origin_file_id_fkey FOREIGN KEY (file_id) REFERENCES public.file(id) ON UPDATE CASCADE ON DELETE
SET NULL;
ALTER TABLE ONLY public.origin
ADD CONSTRAINT origin_updated_by_fkey FOREIGN KEY (updated_by) REFERENCES public.user(id) ON UPDATE CASCADE ON DELETE
SET NULL;
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
ALTER TABLE ONLY public.source
ADD CONSTRAINT source_created_by_fkey FOREIGN KEY (created_by) REFERENCES public.user(id) ON UPDATE CASCADE ON DELETE
SET NULL;
ALTER TABLE ONLY public.source
ADD CONSTRAINT source_fact_id_fkey FOREIGN KEY (fact_id) REFERENCES public.fact(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.source
ADD CONSTRAINT source_file_id_fkey FOREIGN KEY (file_id) REFERENCES public.file(id) ON UPDATE CASCADE ON DELETE
SET NULL;
ALTER TABLE ONLY public.source
ADD CONSTRAINT source_updated_by_fkey FOREIGN KEY (updated_by) REFERENCES public.user(id) ON UPDATE CASCADE ON DELETE
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
ALTER TABLE ONLY public.claim_category
ADD CONSTRAINT claim_category_created_by_fkey FOREIGN KEY (created_by) REFERENCES public.user(id) ON UPDATE CASCADE ON DELETE
SET NULL;
ALTER TABLE ONLY public.claim_category
ADD CONSTRAINT claim_category_updated_by_fkey FOREIGN KEY (updated_by) REFERENCES public.user(id) ON UPDATE CASCADE ON DELETE
SET NULL;
ALTER TABLE ONLY public.claim_category
ADD CONSTRAINT claim_category_claim_id_fkey FOREIGN KEY (claim_id) REFERENCES public.claim(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.claim_category
ADD CONSTRAINT claim_category_category_id_fkey FOREIGN KEY (category_name) REFERENCES public.category(name) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.claim
ADD CONSTRAINT claim_rating_label_rating_label_name_fkey FOREIGN KEY (rating_label_name) REFERENCES public.rating_label(name) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.comment
ADD CONSTRAINT comment_comment_thread_id_fkey FOREIGN KEY (thread_id) REFERENCES public.comment(id) ON UPDATE CASCADE ON DELETE CASCADE;