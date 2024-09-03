-- Drop the trigger on comment_user_reactions
DROP TRIGGER IF EXISTS trg_add_event_for_comment_reaction ON public.comment_user_reactions;
DROP TIGGER IF EXISTS trg_delete_event_for_comment_reaction ON public.comment_user_reactions;
-- Drop the function used by the trigger
DROP FUNCTION IF EXISTS public.add_event_for_comment_reaction();

-- Drop the comment_user_reactions table
DROP TABLE IF EXISTS public.comment_user_reactions CASCADE;

