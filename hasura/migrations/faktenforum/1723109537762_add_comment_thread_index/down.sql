DO $$
BEGIN
    IF EXISTS (
        SELECT 1
        FROM pg_class c
        JOIN pg_namespace n ON n.oid = c.relnamespace
        WHERE c.relname = 'comment_thread_id_idx'
        AND n.nspname = 'public'
    ) THEN
        DROP INDEX public.comment_thread_id_idx;
    END IF;
END$$;