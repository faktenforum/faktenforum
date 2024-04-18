-- Drop triggers associated with history versioning
DROP TRIGGER IF EXISTS versioning_trigger ON public.claim;
DROP TRIGGER IF EXISTS versioning_trigger ON public.user;
DROP TRIGGER IF EXISTS versioning_trigger ON public.file;
DROP TRIGGER IF EXISTS versioning_trigger ON public.fact_resource;
DROP TRIGGER IF EXISTS versioning_trigger ON public.comment;
DROP TRIGGER IF EXISTS versioning_trigger ON public.claim_resource;
DROP TRIGGER IF EXISTS versioning_trigger ON public.claim_fact;
-- Drop history tables
DROP TABLE IF EXISTS public.claim_history;
DROP TABLE IF EXISTS public.user_history;
DROP TABLE IF EXISTS public.file_history;
DROP TABLE IF EXISTS public.fact_resource_history;
DROP TABLE IF EXISTS public.fact_history;
DROP TABLE IF EXISTS public.comment_history;
DROP TABLE IF EXISTS public.claim_resource_history;
DROP TABLE IF EXISTS public.claim_fact_history;