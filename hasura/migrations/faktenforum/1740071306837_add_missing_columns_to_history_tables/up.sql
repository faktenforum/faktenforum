-- add missing columns to the history tables
ALTER TABLE public.claim_history 
ADD COLUMN IF NOT EXISTS internal BOOLEAN,
ADD COLUMN IF NOT EXISTS publishing_url TEXT,
ADD COLUMN IF NOT EXISTS deleted BOOLEAN DEFAULT FALSE;

--origin
ALTER TABLE public.origin_history 
ADD COLUMN IF NOT EXISTS remarks TEXT,
ADD COLUMN IF NOT EXISTS deleted BOOLEAN DEFAULT FALSE;

--source
ALTER TABLE public.source_history 
ADD COLUMN IF NOT EXISTS remarks TEXT,
ADD COLUMN IF NOT EXISTS deleted BOOLEAN DEFAULT FALSE;

--fact
ALTER TABLE public.fact_history 
ADD COLUMN IF NOT EXISTS deleted BOOLEAN DEFAULT FALSE;

--user
ALTER TABLE public.user_history 
ADD COLUMN IF NOT EXISTS deleted BOOLEAN DEFAULT FALSE,
ADD COLUMN signed_code_of_conduct BOOLEAN;

