CREATE TABLE public.claim_history (
    LIKE public.claim,
    history_id UUID NOT NULL DEFAULT gen_random_uuid(),
    PRIMARY KEY (history_id)
);
CREATE TABLE public.user_history (
    LIKE public.user,
    history_id UUID NOT NULL DEFAULT gen_random_uuid(),
    PRIMARY KEY (history_id)
);
CREATE TABLE public.file_history (
    LIKE public.file,
    history_id UUID NOT NULL DEFAULT gen_random_uuid(),
    PRIMARY KEY (history_id)
);
CREATE TABLE public.fact_resource_history (
    LIKE public.fact_resource,
    history_id UUID NOT NULL DEFAULT gen_random_uuid(),
    PRIMARY KEY (history_id)
);
CREATE TABLE public.fact_history (
    LIKE public.fact,
    history_id UUID NOT NULL DEFAULT gen_random_uuid(),
    PRIMARY KEY (history_id)
);
CREATE TABLE public.comment_history (
    LIKE public.comment,
    history_id UUID NOT NULL DEFAULT gen_random_uuid(),
    PRIMARY KEY (history_id)
);
CREATE TABLE public.claim_resource_history (
    LIKE public.claim_resource,
    history_id UUID NOT NULL DEFAULT gen_random_uuid(),
    PRIMARY KEY (history_id)
);
CREATE TABLE public.claim_fact_history (
    LIKE public.claim_fact,
    history_id UUID NOT NULL DEFAULT gen_random_uuid(),
    PRIMARY KEY (history_id)
);
CREATE TRIGGER versioning_trigger BEFORE
INSERT
    OR
UPDATE
    OR DELETE ON public.claim FOR EACH ROW EXECUTE PROCEDURE versioning('sys_period', 'public.claim_history', true);
CREATE TRIGGER versioning_trigger BEFORE
INSERT
    OR
UPDATE
    OR DELETE ON public.user FOR EACH ROW EXECUTE PROCEDURE versioning('sys_period', 'public.user_history', true);
CREATE TRIGGER versioning_trigger BEFORE
INSERT
    OR
UPDATE
    OR DELETE ON public.file FOR EACH ROW EXECUTE PROCEDURE versioning('sys_period', 'public.file_history', true);
CREATE TRIGGER versioning_trigger BEFORE
INSERT
    OR
UPDATE
    OR DELETE ON public.fact_resource FOR EACH ROW EXECUTE PROCEDURE versioning(
        'sys_period',
        'public.fact_resource_history',
        true
    );
CREATE TRIGGER versioning_trigger BEFORE
INSERT
    OR
UPDATE
    OR DELETE ON public.comment FOR EACH ROW EXECUTE PROCEDURE versioning('sys_period', 'public.comment_history', true);
CREATE TRIGGER versioning_trigger BEFORE
INSERT
    OR
UPDATE
    OR DELETE ON public.claim_resource FOR EACH ROW EXECUTE PROCEDURE versioning(
        'sys_period',
        'public.claim_resource_history',
        true
    );
CREATE TRIGGER versioning_trigger BEFORE
INSERT
    OR
UPDATE
    OR DELETE ON public.claim_fact FOR EACH ROW EXECUTE PROCEDURE versioning('sys_period', 'public.claim_fact_history', true);