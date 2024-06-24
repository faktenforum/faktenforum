
-- Create a function to update the process_id when status changes to 'ready_to_check'
CREATE OR REPLACE FUNCTION public.update_claim_process_id() RETURNS TRIGGER AS $$ BEGIN IF NEW.status IN (
        'accepted',
        'checked',
        'published'
    )
    AND NEW.process_id IS NULL THEN NEW.process_id := COALESCE(
        (
            SELECT MAX(process_id)
            FROM public.claim
        ),
        0
    ) + 1;
END IF;
RETURN NEW;
END;
$$ LANGUAGE plpgsql;
-- Create a trigger to call the function when status changes
CREATE TRIGGER update_claim_process_id_trigger BEFORE
UPDATE ON public.claim FOR EACH ROW EXECUTE FUNCTION public.update_claim_process_id();