ALTER TABLE public.comment
ADD COLUMN deleted boolean DEFAULT FALSE NOT NULL;

-- Add the censored column to the public.comment table
ALTER TABLE public.comment
ADD COLUMN blocked boolean DEFAULT FALSE NOT NULL;

-- Add a generated column for displayed_content
ALTER TABLE public.comment
ADD COLUMN displayed_content TEXT GENERATED ALWAYS AS (
    CASE
        WHEN deleted THEN 'Content deleted'
        WHEN blocked THEN 'Content blocked'
        ELSE content
    END
) STORED;