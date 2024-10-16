-- Add new values to the enum

-- Since PostgreSQL does not support removing enum values directly,
-- you need to create a new enum type, migrate the data, and then drop the old type.

-- Step 1: Create a new enum type with the desired values
CREATE TYPE public.new_user_role AS ENUM (
    'administrator',
    'editor',
    'moderator',
    'senior',
    'junior',
    'aspirant',
);

-- Update all 'intermediate' roles to 'senior'
UPDATE public.user
SET user_role = 'senior'
WHERE user_role = 'intermediate';

-- Step 2: Update the column to use the new enum type
ALTER TABLE public.user
ALTER COLUMN user_role TYPE public.new_user_role
USING user_role::text::public.new_user_role;

x
-- Step 3: Drop the old enum type
DROP TYPE public.user_role;

-- Step 4: Rename the new enum type to the original name
ALTER TYPE public.new_user_role RENAME TO user_role;