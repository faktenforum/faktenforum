-- Step 1: Drop the triggers

-- claim table
DROP TRIGGER IF EXISTS log_claim_event ON public.claim;

-- claim_category table
DROP TRIGGER IF EXISTS log_claim_category_event ON public.claim_category;

-- origin table
DROP TRIGGER IF EXISTS log_origin_event ON public.origin;

-- comment table
DROP TRIGGER IF EXISTS log_comment_event ON public.comment;

-- fact table
DROP TRIGGER IF EXISTS log_fact_event ON public.fact;

-- source table
DROP TRIGGER IF EXISTS log_source_event ON public.source;

-- file table
DROP TRIGGER IF EXISTS log_file_event ON public.file;

-- Step 2: Drop the logging function
DROP FUNCTION IF EXISTS public.log_event;

-- Step 3: Drop the events table
DROP TABLE IF EXISTS public.events;

