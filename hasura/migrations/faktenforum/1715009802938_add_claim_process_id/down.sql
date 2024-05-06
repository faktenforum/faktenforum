-- Drop the trigger to update the process_id when status changes
DROP TRIGGER IF EXISTS update_claim_process_id_trigger ON public.claim;
-- Drop the function to update the process_id
DROP FUNCTION IF EXISTS public.update_claim_process_id();
-- Remove the 'process_id' field from the 'public.claim' table
ALTER TABLE public.claim DROP COLUMN IF EXISTS process_id;
ALTER TABLE public.claim_history DROP COLUMN IF EXISTS process_id;