DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM information_schema.columns
        WHERE table_name = 'claim'
        AND column_name = 'internal'
    ) THEN
        ALTER TABLE public.claim
        ADD COLUMN internal boolean DEFAULT true;
    END IF;

END $$;