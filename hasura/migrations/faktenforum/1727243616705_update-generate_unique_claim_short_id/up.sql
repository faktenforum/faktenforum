
-- Step 2: Create the generate_claim_id function
CREATE OR REPLACE FUNCTION generate_unique_claim_short_id()
RETURNS text
LANGUAGE plpgsql
AS $$
DECLARE
    new_id text;
    lock_key bigint;
    date_text text;
    next_counter integer;
BEGIN
    date_text := TO_CHAR(CURRENT_DATE, 'YYYY/MM/DD');
    lock_key := hashtext(date_text);

    LOOP
        IF pg_try_advisory_lock(lock_key) THEN
            BEGIN
                UPDATE claim_counters
                SET counter = counter + 1
                WHERE date = CURRENT_DATE
                RETURNING counter INTO next_counter;

                IF NOT FOUND THEN
                    INSERT INTO claim_counters(date, counter)
                    VALUES (CURRENT_DATE, 1)
                    RETURNING counter INTO next_counter;
                END IF;
            EXCEPTION WHEN unique_violation THEN
                PERFORM pg_advisory_unlock(lock_key);
                CONTINUE;
            END;

            new_id := date_text || '-' || next_counter;
            PERFORM pg_advisory_unlock(lock_key);

            RETURN new_id;
        END IF;

        PERFORM pg_sleep(0.1);
    END LOOP;
END
$$;

-- Step 3: Update the claim table to use the new function
ALTER TABLE public.claim
ALTER COLUMN id SET DEFAULT generate_unique_claim_short_id();

ALTER TABLE public.claim
ADD CONSTRAINT claim_id_format_check CHECK (id ~ '^\d{4}/\d{2}/\d{2}-\d+$');
