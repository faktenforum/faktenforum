-- Create History Tables with a unique history_id of type UUID
CREATE TABLE public."ClaimHistory" (LIKE public."Claim" INCLUDING ALL, history_id UUID NOT NULL DEFAULT gen_random_uuid(), PRIMARY KEY (history_id));
CREATE TABLE public."UserHistory" (LIKE public."User" INCLUDING ALL, history_id UUID NOT NULL DEFAULT gen_random_uuid(), PRIMARY KEY (history_id));
CREATE TABLE public."FileHistory" (LIKE public."File" INCLUDING ALL, history_id UUID NOT NULL DEFAULT gen_random_uuid(), PRIMARY KEY (history_id));
CREATE TABLE public."FactResourceHistory" (LIKE public."FactResource" INCLUDING ALL, history_id UUID NOT NULL DEFAULT gen_random_uuid(), PRIMARY KEY (history_id));
CREATE TABLE public."FactHistory" (LIKE public."Fact" INCLUDING ALL, history_id UUID NOT NULL DEFAULT gen_random_uuid(), PRIMARY KEY (history_id));
CREATE TABLE public."CommentHistory" (LIKE public."Comment" INCLUDING ALL, history_id UUID NOT NULL DEFAULT gen_random_uuid(), PRIMARY KEY (history_id));
CREATE TABLE public."ClaimResourceHistory" (LIKE public."ClaimResource" INCLUDING ALL, history_id UUID NOT NULL DEFAULT gen_random_uuid(), PRIMARY KEY (history_id));
CREATE TABLE public."ClaimFactHistory" (LIKE public."ClaimFact" INCLUDING ALL, history_id UUID NOT NULL DEFAULT gen_random_uuid(), PRIMARY KEY (history_id));


CREATE TRIGGER versioning_trigger BEFORE INSERT OR UPDATE OR DELETE ON public."Claim" FOR EACH ROW EXECUTE PROCEDURE versioning('sys_period', 'public.ClaimHistory', true);
CREATE TRIGGER versioning_trigger BEFORE INSERT OR UPDATE OR DELETE ON public."User" FOR EACH ROW EXECUTE PROCEDURE versioning('sys_period', 'public.UserHistory', true); 
CREATE TRIGGER versioning_trigger BEFORE INSERT OR UPDATE OR DELETE ON public."File" FOR EACH ROW EXECUTE PROCEDURE versioning('sys_period', 'public.FileHistory', true); 
CREATE TRIGGER versioning_trigger BEFORE INSERT OR UPDATE OR DELETE ON public."FactResource" FOR EACH ROW EXECUTE PROCEDURE versioning('sys_period', 'public.FactResourceHistory', true); 
CREATE TRIGGER versioning_trigger BEFORE INSERT OR UPDATE OR DELETE ON public."Comment" FOR EACH ROW EXECUTE PROCEDURE versioning('sys_period', 'public.CommentHistory', true); 
CREATE TRIGGER versioning_trigger BEFORE INSERT OR UPDATE OR DELETE ON public."ClaimResource" FOR EACH ROW EXECUTE PROCEDURE versioning('sys_period', 'public.ClaimResourceHistory', true); 
CREATE TRIGGER versioning_trigger BEFORE INSERT OR UPDATE OR DELETE ON public."ClaimFact" FOR EACH ROW EXECUTE PROCEDURE versioning('sys_period', 'public.ClaimFactHistory', true); 
