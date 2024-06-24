CREATE OR REPLACE FUNCTION generate_unique_claim_short_id()
RETURNS text
LANGUAGE plpgsql
AS $$
DECLARE
    new_id text;
BEGIN
    LOOP
        new_id := nanoid(9, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ');
        -- Assuming public.claim is your table and short_id is the column to be unique
        PERFORM 1 FROM public.claim WHERE short_id = new_id;
        -- Exit loop if no conflict found
        IF NOT FOUND THEN
            RETURN new_id;
        END IF;
        -- Otherwise, loop again to generate a new ID
    END LOOP;
END
$$;

-- Alter the default value of the short_id column in the claim table
ALTER TABLE public.claim
ALTER COLUMN short_id SET DEFAULT generate_unique_claim_short_id();
-- 
ALTER TABLE public.claim ADD CONSTRAINT claim_short_id_check CHECK (short_id ~ '^[0-9A-Z]{9}$');
