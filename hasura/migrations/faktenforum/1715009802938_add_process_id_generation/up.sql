-- Create Table to track the process_id 
CREATE TABLE public.claim_process_id_tracker (
    current_index integer DEFAULT 0
);

-- Insert Start value
INSERT INTO public.claim_process_id_tracker DEFAULT VALUES;

-- Create the function to update the process_id when status changes
CREATE OR REPLACE FUNCTION public.update_claim_process_id() 
RETURNS TRIGGER 
AS $$
DECLARE
    current_process_id integer;
    new_process_id integer;
    lock_key bigint;
BEGIN
    -- Check the status change before acquiring any locks
    IF NEW.status IN ('accepted', 'checked', 'published') AND NEW.process_id IS NULL THEN
        
        -- Compute a hash based on a string identifier for the function
        lock_key := hashtext('update_claim_process_id');

        -- Acquire an advisory lock
        PERFORM pg_advisory_lock(lock_key);

        BEGIN
            -- Acquire a row-level lock on the process_id tracker table
            SELECT current_index INTO current_process_id
            FROM public.claim_process_id_tracker
            FOR UPDATE;

            -- Increment the current index
            new_process_id := current_process_id + 1;
            
            -- Update the process_id tracker table
            UPDATE public.claim_process_id_tracker
            SET current_index = new_process_id;

            -- Update the new process_id
            NEW.process_id := new_process_id;

        EXCEPTION
            WHEN OTHERS THEN
                -- Ensure the advisory lock is released even if an error occurs
                PERFORM pg_advisory_unlock(lock_key);
                RAISE;
        END;

        -- Release the advisory lock
        PERFORM pg_advisory_unlock(lock_key);

    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create a trigger to call the function when status changes
CREATE TRIGGER update_claim_process_id_trigger 
BEFORE UPDATE ON public.claim 
FOR EACH ROW 
EXECUTE FUNCTION public.update_claim_process_id();
