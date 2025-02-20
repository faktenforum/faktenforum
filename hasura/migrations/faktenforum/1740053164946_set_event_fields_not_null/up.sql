-- Set event fields not null
ALTER TABLE public.event
ALTER COLUMN action SET NOT NULL,
ALTER COLUMN table_name SET NOT NULL,
ALTER COLUMN created_at SET NOT NULL,
ALTER COLUMN entry_id SET NOT NULL;

