-- Drop triggers associated with history versioning
DROP TRIGGER IF EXISTS versioning_trigger ON public."Claim";
DROP TRIGGER IF EXISTS versioning_trigger ON public."User";
DROP TRIGGER IF EXISTS versioning_trigger ON public."File";
DROP TRIGGER IF EXISTS versioning_trigger ON public."FactResource";
DROP TRIGGER IF EXISTS versioning_trigger ON public."Comment";
DROP TRIGGER IF EXISTS versioning_trigger ON public."ClaimResource";
DROP TRIGGER IF EXISTS versioning_trigger ON public."ClaimFact";

-- Drop history tables
DROP TABLE IF EXISTS public."ClaimHistory";
DROP TABLE IF EXISTS public."UserHistory";
DROP TABLE IF EXISTS public."FileHistory";
DROP TABLE IF EXISTS public."FactResourceHistory";
DROP TABLE IF EXISTS public."FactHistory";
DROP TABLE IF EXISTS public."CommentHistory";
DROP TABLE IF EXISTS public."ClaimResourceHistory";
DROP TABLE IF EXISTS public."ClaimFactHistory";
