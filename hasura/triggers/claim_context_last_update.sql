-- Step 1: Drop OLD trigger and function
DROP TRIGGER IF EXISTS update_claim_context_last_update ON public.claim;
DROP TRIGGER IF EXISTS update_claim_context_last_update ON public.fact;
DROP TRIGGER IF EXISTS update_claim_context_last_update ON public.origin;
DROP TRIGGER IF EXISTS update_claim_context_last_update ON public.source;
DROP TRIGGER IF EXISTS update_claim_context_last_update ON public.claim_category;


DROP FUNCTION IF EXISTS public.update_claim_context_last_update();  
DROP FUNCTION IF EXISTS public.update_claim_claim_context_last_update();
DROP FUNCTION IF EXISTS public.update_fact_claim_context_last_update();
DROP FUNCTION IF EXISTS public.update_origin_claim_context_last_update();
DROP FUNCTION IF EXISTS public.update_source_claim_context_last_update();
DROP FUNCTION IF EXISTS public.update_claim_category_claim_context_last_update();

-- Only dro(p claim-specific function
-- Step 2: Create NEW function
CREATE OR REPLACE FUNCTION public.update_claim_context_last_update(
    p_claim_id uuid,
    p_user_id uuid,
    p_timestamp timestamptz
) RETURNS void AS $$
BEGIN
    UPDATE claim_context_last_update
    SET updated_by = p_user_id,
        updated_at = p_timestamp
    WHERE claim_id = p_claim_id;
END;
$$ LANGUAGE plpgsql;

-- Claim-specific trigger function
CREATE OR REPLACE FUNCTION public.update_claim_claim_context_last_update()
RETURNS TRIGGER AS $$
DECLARE
    new_context_id uuid;
BEGIN
    -- Handle insert/update logic
    IF TG_OP = 'INSERT' THEN
        new_context_id := gen_random_uuid();
        -- Insert new context entry with generated ID
        INSERT INTO claim_context_last_update (id, claim_id, updated_by, updated_at)
        VALUES (
            new_context_id,
            NEW.id,  -- Directly use the claim's ID
            COALESCE(NEW.updated_by, NEW.created_by),
            COALESCE(NEW.updated_at, NEW.created_at)
        );
        
        -- Update claim with the new context ID
        UPDATE claim
        SET last_context_update_id = new_context_id
        WHERE id = NEW.id;
    ELSE
        PERFORM public.update_claim_context_last_update(
            NEW.id,
            NEW.updated_by,
            NEW.updated_at
        );
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Fact table example

CREATE OR REPLACE FUNCTION public.update_fact_claim_context_last_update()
RETURNS TRIGGER AS $$
BEGIN

    PERFORM public.update_claim_context_last_update(
        NEW.claim_id,
        COALESCE(NEW.updated_by, NEW.created_by),
        COALESCE(NEW.updated_at, NEW.created_at) 
    );
    RETURN NEW; 
END;
$$ LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION public.update_origin_claim_context_last_update()
RETURNS TRIGGER AS $$
BEGIN
    PERFORM public.update_claim_context_last_update(
        NEW.claim_id,
        COALESCE(NEW.updated_by, NEW.created_by),
        COALESCE(NEW.updated_at, NEW.created_at) 
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION public.update_source_claim_context_last_update()
RETURNS TRIGGER AS $$
BEGIN
    PERFORM public.update_claim_context_last_update(
        (SELECT claim_id FROM public.fact WHERE id = NEW.fact_id LIMIT 1),
        COALESCE(NEW.updated_by, NEW.created_by),
        COALESCE(NEW.updated_at, NEW.created_at) 
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION public.update_claim_category_claim_context_last_update()
RETURNS TRIGGER AS $$
BEGIN
    PERFORM public.update_claim_context_last_update(
        NEW.claim_id,
        COALESCE(NEW.updated_by, NEW.created_by),
        COALESCE(NEW.updated_at, NEW.created_at) 
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

 


-- Create Triggers 
CREATE TRIGGER update_claim_context_last_update
AFTER INSERT OR UPDATE ON public.claim
FOR EACH ROW EXECUTE FUNCTION public.update_claim_claim_context_last_update();

CREATE TRIGGER update_claim_context_last_update
AFTER INSERT OR UPDATE ON public.fact
FOR EACH ROW EXECUTE FUNCTION public.update_fact_claim_context_last_update();


CREATE TRIGGER update_claim_context_last_update
AFTER INSERT OR UPDATE ON public.origin
FOR EACH ROW EXECUTE FUNCTION public.update_origin_claim_context_last_update();

CREATE TRIGGER update_claim_context_last_update
AFTER INSERT OR UPDATE ON public.source
FOR EACH ROW EXECUTE FUNCTION public.update_source_claim_context_last_update();

CREATE TRIGGER update_claim_context_last_update
AFTER INSERT OR UPDATE ON public.claim_category
FOR EACH ROW EXECUTE FUNCTION public.update_claim_category_claim_context_last_update();
