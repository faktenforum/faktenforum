CREATE OR REPLACE FUNCTION public.log_event() RETURNS trigger LANGUAGE plpgsql AS $$
DECLARE
    v_claim_id uuid;
    v_claim_status public.claim_status;
    v_user_id uuid;
    v_entry_id uuid;
BEGIN
    -- Default values
    v_claim_id := NULL;
    v_claim_status := NULL;
    v_user_id := NULL;
    v_entry_id := NULL;

    -- Handle different operations and table structures
    IF TG_OP = 'DELETE' THEN
        IF TG_TABLE_NAME = 'claim' THEN
            v_claim_id := OLD.id;
            v_claim_status := OLD.status;
            v_user_id := OLD.updated_by;
            v_entry_id := OLD.id;
        ELSIF TG_TABLE_NAME = 'source' THEN
            SELECT f.claim_id INTO v_claim_id
            FROM public.fact f
            WHERE f.id = OLD.fact_id;
            v_user_id := OLD.updated_by;
            v_entry_id := OLD.id;
        ELSIF TG_TABLE_NAME = 'origin' THEN
            v_claim_id := OLD.claim_id;
            v_user_id := OLD.updated_by;
            v_entry_id := OLD.id;
        ELSIF TG_TABLE_NAME = 'comment' THEN
            -- Lookup claim_id from comment table
            SELECT c.claim_id INTO v_claim_id
            FROM public.comment c
            WHERE c.id = OLD.id;
            v_user_id := OLD.updated_by;
            v_entry_id := OLD.id;
        ELSE
            v_claim_id := OLD.claim_id;
            v_user_id := OLD.updated_by;
            v_entry_id := OLD.id;
        END IF;
    ELSIF TG_OP = 'INSERT' THEN
        IF TG_TABLE_NAME = 'claim' THEN
            v_claim_id := NEW.id;
            v_claim_status := NEW.status;
            v_user_id := NEW.created_by;
            v_entry_id := NEW.id;
        ELSIF TG_TABLE_NAME = 'source' THEN
            SELECT f.claim_id INTO v_claim_id
            FROM public.fact f
            WHERE f.id = NEW.fact_id;
            v_user_id := NEW.created_by;
            v_entry_id := NEW.id;
        ELSIF TG_TABLE_NAME = 'origin' THEN
            v_claim_id := NEW.claim_id;
            v_user_id := NEW.created_by;
            v_entry_id := NEW.id;
        ELSIF TG_TABLE_NAME = 'comment' THEN
            -- Lookup claim_id from comment table
            SELECT c.claim_id INTO v_claim_id
            FROM public.comment c
            WHERE c.id = NEW.id;
            v_user_id := NEW.created_by;
            v_entry_id := NEW.id;
        ELSE
            v_claim_id := NEW.claim_id;
            v_user_id := NEW.created_by;
            v_entry_id := NEW.id;
        END IF;
    ELSE
        IF TG_TABLE_NAME = 'claim' THEN
            v_claim_id := NEW.id;
            v_claim_status := NEW.status;
            v_user_id := NEW.updated_by;
            v_entry_id := NEW.id;
        ELSIF TG_TABLE_NAME = 'source' THEN
            SELECT f.claim_id INTO v_claim_id
            FROM public.fact f
            WHERE f.id = NEW.fact_id;
            v_user_id := NEW.updated_by;
            v_entry_id := NEW.id;
        ELSIF TG_TABLE_NAME = 'origin' THEN
            v_claim_id := NEW.claim_id;
            v_user_id := NEW.updated_by;
            v_entry_id := NEW.id;
        ELSIF TG_TABLE_NAME = 'comment' THEN
            -- Lookup claim_id from comment table
            SELECT c.claim_id INTO v_claim_id
            FROM public.comment c
            WHERE c.id = NEW.id;
            v_user_id := NEW.updated_by;
            v_entry_id := NEW.id;
        ELSE
            v_claim_id := NEW.claim_id;
            v_user_id := NEW.updated_by;
            v_entry_id := NEW.id;
        END IF;
    END IF;

    -- Get claim status for non-claim tables
    IF v_claim_status IS NULL AND v_claim_id IS NOT NULL THEN
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

    IF TG_OP = 'DELETE' THEN
        RETURN OLD;
    ELSE
        RETURN NEW;
    END IF;
END;
$$;