CREATE TABLE public.checkworthiness (
    id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    claim_id uuid NOT NULL UNIQUE,
    confidence float NOT NULL,
    FOREIGN KEY (claim_id) REFERENCES public.claim(id)
);

-- Create specific logging function for checkworthiness
CREATE FUNCTION public.log_checkworthiness_event() RETURNS trigger LANGUAGE plpgsql AS $$
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

    v_claim_id := NEW.claim_id;
    v_entry_id := NEW.id;

    -- Get claim status
    SELECT status INTO v_claim_status
    FROM public.claim
    WHERE id = v_claim_id;

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

    RETURN NEW;
END;
$$;

-- Add trigger using the specific function (only for INSERT and UPDATE)
CREATE TRIGGER log_checkworthiness_event
AFTER INSERT OR UPDATE ON public.checkworthiness
FOR EACH ROW EXECUTE FUNCTION public.log_checkworthiness_event();
