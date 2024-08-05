-- Drop the trigger if it exists
DROP TRIGGER IF EXISTS set_user_claim_status_updated_at ON public.user_claim_status;
-- Drop the table if it exists
DROP TABLE IF EXISTS public.user_claim_status;