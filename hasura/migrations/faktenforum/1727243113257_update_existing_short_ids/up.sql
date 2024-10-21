-- Begin a transaction to ensure data integrity
BEGIN;

-- Step 2: Update existing short_ids based on created_at field
WITH numbered_claims AS (
    SELECT
        c.id,
        c.created_at,
        ROW_NUMBER() OVER (
            PARTITION BY date_trunc('day', c.created_at)
            ORDER BY c.created_at, c.id
        ) AS seq_num
    FROM
        public.claim c
)
UPDATE public.claim c
SET short_id = TO_CHAR(c.created_at, 'YYYY/MM/DD') || '-' || nc.seq_num
FROM numbered_claims nc
WHERE c.id = nc.id;

-- Step 3: Update claim_counters table with maximum counter per day
WITH daily_counters AS (
    SELECT
        date_trunc('day', created_at)::date AS date,
        MAX(seq_num) AS counter
    FROM (
        SELECT
            c.created_at,
            ROW_NUMBER() OVER (
                PARTITION BY date_trunc('day', c.created_at)
                ORDER BY c.created_at, c.id
            ) AS seq_num
        FROM
            public.claim c
    ) sub
    GROUP BY date_trunc('day', created_at)::date
)
INSERT INTO claim_counters (date, counter)
SELECT date, counter
FROM daily_counters
ON CONFLICT (date) DO UPDATE SET counter = EXCLUDED.counter;

-- Commit the transaction
COMMIT;
