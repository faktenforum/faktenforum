-- Revert the default value of the short_id column in the claim table to NULL
ALTER TABLE public.claim
ALTER COLUMN short_id DROP DEFAULT;

-- Drop the CHECK constraint
ALTER TABLE public.claim
DROP CONSTRAINT IF EXISTS claim_short_id_check;

-- Drop the generate_unique_id function
DROP FUNCTION IF EXISTS generate_unique_claim_short_id();