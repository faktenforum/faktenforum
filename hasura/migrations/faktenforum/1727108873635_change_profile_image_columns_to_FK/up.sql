-- Step 1: Check if the foreign key constraint exists on public.user
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM information_schema.table_constraints
        WHERE constraint_type = 'FOREIGN KEY'
        AND constraint_name = 'fk_profile_image'
        AND table_name = 'user'
    ) THEN
        -- Drop the existing profile_image column
        ALTER TABLE public.user
        DROP COLUMN profile_image;

        -- Add the new profile_image column with type uuid, default null
        ALTER TABLE public.user
        ADD COLUMN profile_image uuid DEFAULT NULL;

        -- Add the foreign key constraint to reference the file table with ON DELETE SET NULL
        ALTER TABLE public.user
        ADD CONSTRAINT fk_profile_image
        FOREIGN KEY (profile_image) REFERENCES public.file(id) ON DELETE SET NULL;
    END IF;
END $$;

-- Step 2: Check if the foreign key constraint exists on public.user_history
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM information_schema.table_constraints
        WHERE constraint_type = 'FOREIGN KEY'
        AND constraint_name = 'fk_profile_image'
        AND table_name = 'user_history'
    ) THEN
        -- Drop the existing profile_image column
        ALTER TABLE public.user_history
        DROP COLUMN profile_image;

        -- Add the new profile_image column with type uuid, default null
        ALTER TABLE public.user_history
        ADD COLUMN profile_image uuid DEFAULT NULL;
    END IF;
END $$;