-- Step 1: Drop OLD trigger and function
DROP TRIGGER IF EXISTS log_claim_event ON public.claim;
DROP TRIGGER IF EXISTS log_fact_event ON public.fact;
DROP TRIGGER IF EXISTS log_origin_event ON public.origin;
DROP TRIGGER IF EXISTS log_source_event ON public.source;
DROP TRIGGER IF EXISTS log_claim_category_event ON public.claim_category;
DROP TRIGGER IF EXISTS log_user_event ON public.user;

DROP FUNCTION IF EXISTS public.log_generic_event ();
DROP FUNCTION IF EXISTS public.log_claim_event();  
DROP FUNCTION IF EXISTS public.log_fact_event();
DROP FUNCTION IF EXISTS public.log_origin_event();
DROP FUNCTION IF EXISTS public.log_source_event();
DROP FUNCTION IF EXISTS public.log_claim_category_event();
DROP FUNCTION IF EXISTS public.log_user_event();
-- Only dro(p claim-specific function
-- Step 2: Create NEW function
CREATE OR REPLACE FUNCTION public.log_generic_event(
    p_old jsonb,
    p_new jsonb,
    p_claim_id uuid,
    p_operation text,
    p_table_name text,
    p_ignore_keys text[] DEFAULT '{}'::text[]
) RETURNS void AS $$
DECLARE
    v_changes jsonb := '{}'::jsonb;
    v_ignore_keys text[] := '{id,deleted,updated_at,updated_by,created_at,created_by,sys_period}'; -- default ignore keys
    key text;
BEGIN
    -- Compare all fields from both versions
    FOR key IN (
        SELECT DISTINCT k FROM (
            SELECT jsonb_object_keys(p_old) AS k
            UNION
            SELECT jsonb_object_keys(p_new) AS k
        ) AS keys
    ) 
    LOOP
        IF key = ANY(v_ignore_keys || p_ignore_keys) THEN  -- Combine both ignore lists
            CONTINUE;
        END IF;

        IF (p_old ->> key) IS DISTINCT FROM (p_new ->> key) THEN
            v_changes = jsonb_insert(v_changes, ARRAY[key], p_new->key);
        END IF;
    END LOOP;

    INSERT INTO public.event (
        claim_id,
        user_id,
        action,
        table_name,
        created_at,
        entry_id,
        content
    )
    VALUES (
        p_claim_id,
        COALESCE((p_new->>'updated_by')::uuid, (p_new->>'created_by')::uuid, null),
        p_operation,
        p_table_name,
        NOW(),
        (p_new->>'id')::uuid,
        v_changes
    );
END;
$$ LANGUAGE plpgsql;

-- Claim-specific trigger function
CREATE OR REPLACE FUNCTION public.log_claim_event()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'UPDATE' AND NEW.deleted THEN
        DELETE FROM public.claim WHERE id = NEW.id;
    END IF;

    PERFORM public.log_generic_event(
        to_jsonb(OLD),
        to_jsonb(NEW),
        NEW.id,
        CASE WHEN TG_OP = 'UPDATE' AND NEW.deleted THEN 'DELETE' ELSE TG_OP END,
        TG_TABLE_NAME,
        '{submitter_notes,process_id}'::text[]
    );
    RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

-- Fact table example
CREATE OR REPLACE FUNCTION public.log_fact_event()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'UPDATE' AND NEW.deleted THEN
        DELETE FROM public.fact WHERE id = NEW.id;
    END IF;
    PERFORM public.log_generic_event(
        to_jsonb(OLD),
        to_jsonb(NEW),
        NEW.claim_id,
        CASE WHEN TG_OP = 'UPDATE' AND NEW.deleted THEN 'DELETE' ELSE TG_OP END,
        TG_TABLE_NAME,
        '{index}'::text[]
    );
    RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

-- Fix origin event function declaration (typo in schema)
CREATE OR REPLACE FUNCTION public.log_origin_event()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'UPDATE' AND NEW.deleted THEN
        DELETE FROM public.origin WHERE id = NEW.id;
    END IF;


    PERFORM public.log_generic_event(
        to_jsonb(OLD),
        to_jsonb(NEW),
        NEW.claim_id,
        CASE WHEN TG_OP = 'UPDATE' AND NEW.deleted THEN 'DELETE' ELSE TG_OP END,
        TG_TABLE_NAME,
        '{index}'::text[]
    );
    RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION public.log_source_event()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'UPDATE' AND NEW.deleted THEN
        DELETE FROM public.source WHERE id = NEW.id;
    END IF;
    PERFORM public.log_generic_event(
        to_jsonb(OLD),
        to_jsonb(NEW),
        (SELECT claim_id FROM public.fact WHERE id = NEW.fact_id LIMIT 1),  -- Get claim_id via fact
        CASE WHEN TG_OP = 'UPDATE' AND NEW.deleted THEN 'DELETE' ELSE TG_OP END,
        TG_TABLE_NAME,
        '{index}'::text[]
    );
    RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION public.log_claim_category_event()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'UPDATE' AND NEW.deleted THEN
        DELETE FROM public.claim_category WHERE id = NEW.id;
    END IF;
   
    PERFORM public.log_generic_event(
        to_jsonb(OLD),
        to_jsonb(NEW),
        COALESCE(NEW.claim_id, OLD.claim_id),
        CASE WHEN TG_OP = 'UPDATE' AND NEW.deleted THEN 'DELETE' ELSE TG_OP END,
        TG_TABLE_NAME,
        '{}'::text[]
    );
    
    RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION public.log_user_event()
RETURNS TRIGGER AS $$
BEGIN
    
    PERFORM public.log_generic_event(
        to_jsonb(OLD),
        to_jsonb(NEW),
        null,
        CASE WHEN TG_OP = 'UPDATE' AND NEW.deleted THEN 'DELETE' ELSE TG_OP END,
        TG_TABLE_NAME,
        '{first_name,last_name,email,mobile_number}'::text[]
    );
    RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;  -- Added proper function termination

-- Create Triggers 
CREATE TRIGGER log_claim_event
AFTER INSERT OR UPDATE ON public.claim
FOR EACH ROW EXECUTE FUNCTION public.log_claim_event();

CREATE TRIGGER log_fact_event
AFTER INSERT OR UPDATE ON public.fact
FOR EACH ROW EXECUTE FUNCTION public.log_fact_event();


CREATE TRIGGER log_origin_event
AFTER INSERT OR UPDATE ON public.origin
FOR EACH ROW EXECUTE FUNCTION public.log_origin_event();

CREATE TRIGGER log_source_event
AFTER INSERT OR UPDATE ON public.source
FOR EACH ROW EXECUTE FUNCTION public.log_source_event();

CREATE TRIGGER log_claim_category_event
AFTER INSERT OR UPDATE ON public.claim_category
FOR EACH ROW EXECUTE FUNCTION public.log_claim_category_event();

CREATE TRIGGER log_user_event
AFTER INSERT OR UPDATE ON public.user
FOR EACH ROW EXECUTE FUNCTION public.log_user_event();