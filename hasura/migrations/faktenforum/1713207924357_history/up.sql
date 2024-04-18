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
-- Workaround for sql bug in LIKE operator https://www.postgresql.org/message-id/20150707072942.1186.98151@wrigleys.postgresql.org
DO $$
DECLARE current_table_name text;
current_column_name text;
current_type text;
current_data_type text;
new_type text;
BEGIN RAISE NOTICE 'Fixing array columns';
FOR current_table_name IN (
    SELECT table_name
    FROM information_schema.tables
    WHERE table_name LIKE '%_history'
) LOOP RAISE NOTICE 'Table %',
current_table_name;
FOR current_column_name,
current_type,
current_data_type IN (
    SELECT column_name,
        udt_name,
        data_type
    FROM information_schema.columns
    WHERE table_name = current_table_name
        AND data_type LIKE 'ARRAY'
) LOOP -- Assuming you want to change the number of dimensions to 1 for array columns
RAISE NOTICE 'Column % in table % has type %',
current_column_name,
current_table_name,
current_type;
IF current_data_type LIKE 'ARRAY' THEN new_type := substr(current_type, 2) || '[]';
EXECUTE 'ALTER TABLE ' || current_table_name || ' ALTER COLUMN ' || current_column_name || ' TYPE ' || new_type;
RAISE NOTICE 'Altered column % in table % to type %',
current_column_name,
current_table_name,
new_type;
END IF;
END LOOP;
END LOOP;
END $$;