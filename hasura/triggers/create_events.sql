-- Step 1: Drop OLD trigger and function
DROP TRIGGER IF EXISTS log_claim_event ON public.claim;
DROP TRIGGER IF EXISTS log_fact_event ON public.fact;
DROP TRIGGER IF EXISTS log_origin_event ON public.origin;
DROP TRIGGER IF EXISTS log_source_event ON public.source;
DROP TRIGGER IF EXISTS log_claim_category_event ON public.claim_category;
DROP TRIGGER IF EXISTS log_user_event ON public.user;
DROP TRIGGER IF EXISTS log_checkworthiness_event ON public.checkworthiness;

DROP FUNCTION IF EXISTS public.log_claim_event();  
DROP FUNCTION IF EXISTS public.log_fact_event();
DROP FUNCTION IF EXISTS public.log_origin_event();
DROP FUNCTION IF EXISTS public.log_source_event();
DROP FUNCTION IF EXISTS public.log_claim_category_event();
DROP FUNCTION IF EXISTS public.log_user_event();
DROP FUNCTION IF EXISTS public.log_checkworthiness_event();
-- Only dro(p claim-specific function
-- Step 2: Create NEW function
CREATE OR REPLACE FUNCTION public.log_generic_event(
    p_old jsonb,
    p_new jsonb,
    p_claim_id uuid,
    p_operation text,
    p_table_name text,
    p_ignore_keys text[] DEFAULT '{}'::text[],
    p_metadata jsonb DEFAULT null
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

    -- If there are no changes which are for intrest of the user, don't create an event
    IF p_operation = 'UPDATE' AND v_changes = '{}'::jsonb THEN
        RETURN;
    END IF;

    INSERT INTO public.event (
        claim_id,
        user_id,
        action,
        table_name,
        created_at,
        entry_id,
        content,
        metadata
    )
    VALUES (
        p_claim_id,
        COALESCE((p_new->>'updated_by')::uuid, (p_new->>'created_by')::uuid, null),
        p_operation,
        p_table_name,
        NOW(),
        (p_new->>'id')::uuid,
        v_changes,
        p_metadata
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
        '{submitter_notes,process_id,last_context_update_id}'::text[],
        null
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
        '{index,claim_id}'::text[],
        jsonb_build_object('index', NEW.index, 'claim_id', NEW.claim_id)
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
        '{index,claim_id}'::text[],
        jsonb_build_object('index', NEW.index)
    );
    RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION public.log_source_event()
RETURNS TRIGGER AS $$
DECLARE
    v_claim_id uuid;
    v_fact_index integer;
BEGIN
    IF TG_OP = 'UPDATE' AND NEW.deleted THEN
        DELETE FROM public.source WHERE id = NEW.id;
    END IF;
    
    SELECT claim_id, index INTO v_claim_id, v_fact_index 
    FROM public.fact WHERE id = NEW.fact_id LIMIT 1;

    PERFORM public.log_generic_event(
        to_jsonb(OLD),
        to_jsonb(NEW),
        v_claim_id,  -- Use the fetched claim_id
        CASE WHEN TG_OP = 'UPDATE' AND NEW.deleted THEN 'DELETE' ELSE TG_OP END,
        TG_TABLE_NAME,
        '{index}'::text[],
        jsonb_build_object(
            'index', NEW.index,
            'fact_index', v_fact_index,  -- Add fact index to metadata
            'fact_id', NEW.fact_id
        )
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
        null,
        jsonb_build_object(
            'category_name', COALESCE(NEW.category_name, OLD.category_name)
        )
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
        '{first_name,last_name,email,mobile_number}'::text[],
        jsonb_build_object( 'username', NEW.username)
    );
    RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;  -- Added proper function termination

CREATE OR REPLACE FUNCTION public.log_checkworthiness_event()
RETURNS TRIGGER AS $$
BEGIN

    PERFORM public.log_generic_event(
        to_jsonb(OLD),
        to_jsonb(NEW),
        COALESCE(NEW.claim_id, OLD.claim_id),
        TG_OP,
        TG_TABLE_NAME,
        null,
        jsonb_build_object(
            'category', COALESCE(NEW.category, OLD.category),
            'confidence', COALESCE(NEW.confidence, OLD.confidence)
        )
    );
    
    RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

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

CREATE TRIGGER log_checkworthiness_event
AFTER INSERT OR UPDATE ON public.checkworthiness
FOR EACH ROW EXECUTE FUNCTION public.log_checkworthiness_event();

