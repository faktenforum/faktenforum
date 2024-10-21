-- Create a table to store daily counters if it doesn't exist
CREATE TABLE IF NOT EXISTS claim_counters (
    date DATE PRIMARY KEY,
    counter INTEGER NOT NULL
);

ALTER TABLE public.claim DROP CONSTRAINT IF EXISTS claim_short_id_check;

