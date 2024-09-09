-- Step 1: Drop the existing foreign key constraint
ALTER TABLE ONLY public.claim
DROP CONSTRAINT IF EXISTS claim_rating_label_rating_label_name_fkey;

-- Step 2: Add the new foreign key constraint with ON DELETE SET NULL
ALTER TABLE ONLY public.claim
ADD CONSTRAINT claim_rating_label_rating_label_name_fkey
FOREIGN KEY (rating_label_name)
REFERENCES public.rating_label(name)
ON UPDATE CASCADE
ON DELETE SET NULL;