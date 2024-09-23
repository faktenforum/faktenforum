-- Step 1: Drop the existing profile_image column
ALTER TABLE public.user
DROP COLUMN profile_image;

-- Step 2: Add the new profile_image column with type uuid, default null
ALTER TABLE public.user
ADD COLUMN profile_image uuid DEFAULT NULL;

-- Step 3: Add the foreign key constraint to reference the file table with ON DELETE SET NULL
ALTER TABLE public.user
ADD CONSTRAINT fk_profile_image
FOREIGN KEY (profile_image) REFERENCES public.file(id) ON DELETE SET NULL;

-- Step 1: Drop the existing profile_image column
ALTER TABLE public.user_history
DROP COLUMN profile_image;

-- Step 2: Add the new profile_image column with type uuid, default null
ALTER TABLE public.user_history
ADD COLUMN profile_image uuid DEFAULT NULL;


