ALTER TABLE claim_context_last_update
ALTER COLUMN updated_at TYPE timestamptz USING updated_at AT TIME ZONE 'UTC';