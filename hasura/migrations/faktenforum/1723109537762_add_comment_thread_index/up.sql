
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_class c
        JOIN pg_namespace n ON n.oid = c.relnamespace
        WHERE c.relname = 'comment_thread_id_idx'
        AND n.nspname = 'public'
    ) THEN
        CREATE INDEX comment_thread_id_idx ON public.comment(thread_id);
    END IF;
END$$;
