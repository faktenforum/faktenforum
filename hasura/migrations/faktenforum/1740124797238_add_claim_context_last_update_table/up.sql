-- create table for claim context last update 
-- the last update is the last time the context (origin, claim_category, or ) was updated
CREATE TABLE claim_context_last_update (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    claim_id uuid NOT NULL REFERENCES claim(id),
    updated_by uuid REFERENCES "user"(id),
    updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_claim_id_claim_context_last_update ON claim_context_last_update(claim_id);
-- add column last_context_update to claim table and add foreign key to claim_context_last_update table
ALTER TABLE claim ADD COLUMN last_context_update_id uuid;
ALTER TABLE claim ADD CONSTRAINT fk_claim_last_context_update FOREIGN KEY (last_context_update_id) REFERENCES claim_context_last_update(id);

-- create column for each existing claim and link it
DO $$
DECLARE
    claim_record record;
    new_context_id uuid;
    latest_update timestamp;
    latest_user uuid;
BEGIN
    FOR claim_record IN SELECT id, created_by, created_at FROM claim LOOP
        new_context_id := gen_random_uuid();
        
        -- Get the latest update from all related tables
        SELECT event_time, user_id INTO latest_update, latest_user
        FROM (
            -- Check origin table
            SELECT updated_at AS event_time, updated_by AS user_id, 1 AS priority
            FROM origin WHERE claim_id = claim_record.id
            UNION ALL
            SELECT created_at, created_by, 0
            FROM origin WHERE claim_id = claim_record.id
            
            UNION ALL
            
            -- Check claim_category table
            SELECT updated_at, updated_by, 1
            FROM claim_category WHERE claim_id = claim_record.id
            UNION ALL
            SELECT created_at, created_by, 0
            FROM claim_category WHERE claim_id = claim_record.id
            
            UNION ALL
            
            -- Check fact table
            SELECT updated_at, updated_by, 1
            FROM fact WHERE claim_id = claim_record.id
            UNION ALL
            SELECT created_at, created_by, 0
            FROM fact WHERE claim_id = claim_record.id
            
            UNION ALL
            
            -- Check source table through fact
            SELECT s.updated_at, s.updated_by, 1
            FROM source s
            JOIN fact f ON f.id = s.fact_id
            WHERE f.claim_id = claim_record.id
            UNION ALL
            SELECT s.created_at, s.created_by, 0
            FROM source s
            JOIN fact f ON f.id = s.fact_id
            WHERE f.claim_id = claim_record.id
            
            UNION ALL
            
            -- Include claim's own timestamps as fallback
            SELECT updated_at, updated_by, 1
            FROM claim WHERE id = claim_record.id
            UNION ALL
            SELECT created_at, created_by, 0
            FROM claim WHERE id = claim_record.id
        ) AS all_events
        ORDER BY event_time DESC, priority DESC
        LIMIT 1;

        INSERT INTO claim_context_last_update (id, claim_id, updated_by, updated_at)
        VALUES (
            new_context_id,
            claim_record.id,
            COALESCE(latest_user, claim_record.created_by),
            COALESCE(latest_update, claim_record.created_at)
        );
        
        UPDATE claim
        SET last_context_update_id = new_context_id
        WHERE id = claim_record.id;
    END LOOP;
END $$;



