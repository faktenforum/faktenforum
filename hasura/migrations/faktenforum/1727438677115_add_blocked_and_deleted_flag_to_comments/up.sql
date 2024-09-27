ALTER TABLE public.comment
ADD COLUMN deleted boolean DEFAULT FALSE;
-- Add the censored column to the public.comment table
ALTER TABLE public.comment
ADD COLUMN censored boolean DEFAULT FALSE;