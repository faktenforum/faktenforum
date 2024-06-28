CREATE OR REPLACE FUNCTION generate_unique_claim_short_id()
RETURNS text
LANGUAGE plpgsql
AS $$
DECLARE
    new_id text;
    lock_key bigint;
BEGIN
    LOOP
        new_id := nanoid(9, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ');
        lock_key := hashtext(new_id);

        -- Try to acquire an advisory lock
        IF pg_try_advisory_lock(lock_key) THEN
            -- Check if the generated short_id is unique
            PERFORM 1 FROM public.claim WHERE short_id = new_id;
            IF NOT FOUND THEN
                -- Release the lock before returning
                PERFORM pg_advisory_unlock(lock_key);
                RETURN new_id;
            ELSE
                -- Release the lock if not unique
                PERFORM pg_advisory_unlock(lock_key);
            END IF;
        END IF;
        -- If lock was not acquired, loop again to generate a new ID
    END LOOP;
END
$$;

-- Alter the default value of the short_id column in the claim table
ALTER TABLE public.claim
ALTER COLUMN short_id SET DEFAULT generate_unique_claim_short_id();
-- 
ALTER TABLE public.claim ADD CONSTRAINT claim_short_id_check CHECK (short_id ~ '^[0-9A-Z]{9}$');
