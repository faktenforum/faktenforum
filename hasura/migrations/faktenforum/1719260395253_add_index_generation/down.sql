-- Drop the trigger before_insert_origin if it exists
DROP TRIGGER IF EXISTS before_insert_origin ON public.origin;

-- Drop the trigger function set_next_origin_index if it exists
DROP FUNCTION IF EXISTS set_next_origin_index;

-- Drop the function get_next_origin_index if it exists
DROP FUNCTION IF EXISTS get_next_origin_index;

-- Drop the table claim_origin_index_tracker if it exists
DROP TABLE IF EXISTS public.claim_origin_index_tracker;
