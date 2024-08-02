-- Rename column rating_title to rating_statement in the claim table
DO $$ BEGIN IF EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_name = 'claim'
        AND column_name = 'rating_title'
) THEN
ALTER TABLE public.claim
    RENAME COLUMN rating_title TO rating_statement;
END IF;
END $$;
-- Rename column rating_title to rating_statement in the claim_history table
DO $$ BEGIN IF EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_name = 'claim_history'
        AND column_name = 'rating_title'
) THEN
ALTER TABLE public.claim_history
    RENAME COLUMN rating_title TO rating_statement;
END IF;
END $$;