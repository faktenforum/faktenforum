-- add column last_viewed_at to user_claim_status table
ALTER TABLE user_claim_status ADD COLUMN last_viewed_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- For existing records, use only created_at (since modified_at doesn't exist)
UPDATE user_claim_status SET last_viewed_at = created_at;

