-- Up Migration: Rename 'stale' to 'discarded' in claim_status enum

-- Step 0: Check if 'discarded' already exists in claim_status enum
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM pg_enum
               WHERE enumlabel = 'discarded'
               AND enumtypid = (SELECT oid FROM pg_type WHERE typname = 'claim_status')) THEN
        RAISE NOTICE 'Value "discarded" already exists in claim_status enum. Skipping migration.';
    ELSE
        -- Step 1: Update the existing data to use 'accepted' instead of 'stale'
        UPDATE claim
        SET "status" = 'accepted'
        WHERE "status" = 'stale';
        UPDATE claim_history
        SET "status" = 'accepted'
        WHERE "status" = 'stale';

        UPDATE event
        SET "claim_status" = 'accepted'
        WHERE "claim_status" = 'stale';

        -- Step 2: Drop the new enum type if it exists
        IF EXISTS (SELECT 1 FROM pg_type WHERE typname = 'new_claim_status') THEN
            DROP TYPE public.new_claim_status;
        END IF;

        -- Step 3: Create the new enum type with the updated values
        CREATE TYPE public.new_claim_status AS ENUM (
            'submitted',
            'accepted',
            'observed',
            'discarded',
            'spam',
            'rejected',
            'checked',
            'published'
        );

        -- Step 4: Alter the table(s) to use the new enum type
        ALTER TABLE claim
        ALTER COLUMN "status" DROP DEFAULT;
        ALTER TABLE claim
        ALTER COLUMN "status" TYPE public.new_claim_status USING "status"::text::public.new_claim_status;
        ALTER TABLE claim_history
        ALTER COLUMN "status" DROP DEFAULT;
        ALTER TABLE claim_history
        ALTER COLUMN "status" TYPE public.new_claim_status USING "status"::text::public.new_claim_status;
        ALTER TABLE "event"
        ALTER COLUMN "claim_status" TYPE public.new_claim_status USING "claim_status"::text::public.new_claim_status;

        -- Step 5: Drop the old enum type
        DROP TYPE public.claim_status;

        -- Step 6: Rename the new enum type to the original name
        ALTER TYPE public.new_claim_status
        RENAME TO claim_status;

        -- Step 7: Set the default value to 'submitted'
        ALTER TABLE claim
        ALTER COLUMN "status"
        SET DEFAULT 'submitted';
        ALTER TABLE claim_history
        ALTER COLUMN "status"
        SET DEFAULT 'submitted';
    END IF;
END $$;
