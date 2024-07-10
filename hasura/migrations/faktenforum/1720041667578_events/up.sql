-- Step 1: Create the event table
CREATE TABLE public.event (
    id BIGINT NOT NULL,
    claim_id uuid,
    claim_status public.claim_status,
    user_id uuid,
    action text,
    table_name text,
    created_at timestamp with time zone DEFAULT now(),
    entry_id uuid
);
CREATE sequence serial_event;
CREATE FUNCTION add_monotonic_id() RETURNS trigger AS $$
DECLARE nextval bigint;
BEGIN PERFORM pg_advisory_xact_lock(1);
select nextval('serial_event') into nextval;
NEW.id := nextval;
RETURN NEW;
END;
$$ LANGUAGE plpgsql;
-- Set the primary key 
ALTER TABLE ONLY public.event
ADD CONSTRAINT event_pkey PRIMARY KEY (id);
-- Add foreign keys
ALTER TABLE ONLY public.event
ADD CONSTRAINT event_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id) ON UPDATE CASCADE ON DELETE
SET NULL;
ALTER TABLE ONLY public.event
ADD CONSTRAINT event_claim_id_fkey FOREIGN KEY (claim_id) REFERENCES public.claim(id) ON UPDATE CASCADE ON DELETE CASCADE;
-- Add the trigger to generate the monotonic id
CREATE TRIGGER add_monotonic_id_trigger BEFORE
INSERT ON public.event FOR EACH ROW EXECUTE FUNCTION add_monotonic_id();
-- Step 2: Create the logging function with proper handling for different operations and table structures
CREATE FUNCTION public.log_event() RETURNS trigger LANGUAGE plpgsql AS $$
DECLARE v_claim_id uuid;
v_claim_status public.claim_status;
v_user_id uuid;
v_entry_id uuid;
BEGIN -- Default values
v_claim_id := NULL;
v_claim_status := NULL;
v_user_id := NULL;
v_entry_id := NULL;
-- Handle different operations and table structures
IF TG_OP = 'DELETE' THEN IF TG_TABLE_NAME = 'claim' THEN v_claim_id := OLD.id;
v_claim_status := OLD.status;
v_user_id := OLD.updated_by;
v_entry_id := OLD.id;
ELSIF TG_TABLE_NAME = 'source' THEN
SELECT f.claim_id INTO v_claim_id
FROM public.fact f
WHERE f.id = OLD.fact_id;
v_user_id := OLD.updated_by;
v_entry_id := OLD.id;
ELSIF TG_TABLE_NAME = 'origin' THEN v_claim_id := OLD.claim_id;
v_user_id := OLD.updated_by;
v_entry_id := OLD.id;
ELSIF TG_TABLE_NAME = 'file' THEN -- Lookup through source
SELECT f.claim_id INTO v_claim_id
FROM public.fact f
    JOIN public.source s ON s.fact_id = f.id
WHERE s.file_id = OLD.id;
-- Lookup through origin if not found in source
IF v_claim_id IS NULL THEN
SELECT o.claim_id INTO v_claim_id
FROM public.origin o
WHERE o.file_id = OLD.id;
END IF;
v_user_id := OLD.updated_by;
v_entry_id := OLD.id;
ELSE v_claim_id := OLD.claim_id;
v_user_id := OLD.updated_by;
v_entry_id := OLD.id;
END IF;
ELSE IF TG_OP = 'INSERT' THEN IF TG_TABLE_NAME = 'claim' THEN v_claim_id := NEW.id;
v_claim_status := NEW.status;
v_user_id := NEW.created_by;
v_entry_id := NEW.id;
ELSIF TG_TABLE_NAME = 'source' THEN
SELECT f.claim_id INTO v_claim_id
FROM public.fact f
WHERE f.id = NEW.fact_id;
v_user_id := NEW.created_by;
v_entry_id := NEW.id;
ELSIF TG_TABLE_NAME = 'origin' THEN v_claim_id := NEW.claim_id;
v_user_id := NEW.created_by;
v_entry_id := NEW.id;
ELSIF TG_TABLE_NAME = 'file' THEN -- Lookup through source
SELECT f.claim_id INTO v_claim_id
FROM public.fact f
    JOIN public.source s ON s.fact_id = f.id
WHERE s.file_id = NEW.id;
-- Lookup through origin if not found in source
IF v_claim_id IS NULL THEN
SELECT o.claim_id INTO v_claim_id
FROM public.origin o
WHERE o.file_id = NEW.id;
END IF;
v_user_id := NEW.created_by;
v_entry_id := NEW.id;
ELSE v_claim_id := NEW.claim_id;
v_user_id := NEW.created_by;
v_entry_id := NEW.id;
END IF;
ELSE IF TG_TABLE_NAME = 'claim' THEN v_claim_id := NEW.id;
v_claim_status := NEW.status;
v_user_id := NEW.updated_by;
v_entry_id := NEW.id;
ELSIF TG_TABLE_NAME = 'source' THEN
SELECT f.claim_id INTO v_claim_id
FROM public.fact f
WHERE f.id = NEW.fact_id;
v_user_id := NEW.updated_by;
v_entry_id := NEW.id;
ELSIF TG_TABLE_NAME = 'origin' THEN v_claim_id := NEW.claim_id;
v_user_id := NEW.updated_by;
v_entry_id := NEW.id;
ELSIF TG_TABLE_NAME = 'file' THEN -- Lookup through source
SELECT f.claim_id INTO v_claim_id
FROM public.fact f
    JOIN public.source s ON s.fact_id = f.id
WHERE s.file_id = NEW.id;
-- Lookup through origin if not found in source
IF v_claim_id IS NULL THEN
SELECT o.claim_id INTO v_claim_id
FROM public.origin o
WHERE o.file_id = NEW.id;
END IF;
v_user_id := NEW.updated_by;
v_entry_id := NEW.id;
ELSE v_claim_id := NEW.claim_id;
v_user_id := NEW.updated_by;
v_entry_id := NEW.id;
END IF;
END IF;
END IF;
-- Get claim status for non-claim tables
IF v_claim_status IS NULL
AND v_claim_id IS NOT NULL THEN
SELECT status INTO v_claim_status
FROM public.claim
WHERE id = v_claim_id;
END IF;
INSERT INTO public.event (
        claim_id,
        claim_status,
        user_id,
        action,
        table_name,
        created_at,
        entry_id
    )
VALUES (
        v_claim_id,
        v_claim_status,
        v_user_id,
        TG_OP,
        TG_TABLE_NAME,
        NOW(),
        v_entry_id
    );
IF TG_OP = 'DELETE' THEN RETURN OLD;
ELSE RETURN NEW;
END IF;
END;
$$;
-- Step 3: Add triggers for each table
-- claim table
CREATE TRIGGER log_claim_event
AFTER
INSERT
    OR
UPDATE
    OR DELETE ON public.claim FOR EACH ROW EXECUTE FUNCTION public.log_event();
-- claim_category table
CREATE TRIGGER log_claim_category_event
AFTER
INSERT
    OR
UPDATE
    OR DELETE ON public.claim_category FOR EACH ROW EXECUTE FUNCTION public.log_event();
-- origin table
CREATE TRIGGER log_origin_event
AFTER
INSERT
    OR
UPDATE
    OR DELETE ON public.origin FOR EACH ROW EXECUTE FUNCTION public.log_event();
-- comment table
CREATE TRIGGER log_comment_event
AFTER
INSERT
    OR
UPDATE
    OR DELETE ON public.comment FOR EACH ROW EXECUTE FUNCTION public.log_event();
-- fact table
CREATE TRIGGER log_fact_event
AFTER
INSERT
    OR
UPDATE
    OR DELETE ON public.fact FOR EACH ROW EXECUTE FUNCTION public.log_event();
-- source table
CREATE TRIGGER log_source_event
AFTER
INSERT
    OR
UPDATE
    OR DELETE ON public.source FOR EACH ROW EXECUTE FUNCTION public.log_event();
-- file table
CREATE TRIGGER log_file_event
AFTER
INSERT
    OR
UPDATE
    OR DELETE ON public.file FOR EACH ROW EXECUTE FUNCTION public.log_event();