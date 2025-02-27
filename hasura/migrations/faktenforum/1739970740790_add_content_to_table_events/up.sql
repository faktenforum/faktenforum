-- Step 1: Add content column
ALTER TABLE public.event ADD COLUMN content JSONB;
ALTER TABLE public.event DROP COLUMN claim_status;
