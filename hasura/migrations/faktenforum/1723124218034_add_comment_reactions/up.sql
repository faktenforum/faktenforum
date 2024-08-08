-- Create the comment_user_reactions table
CREATE TABLE public.comment_user_reactions (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    comment_id uuid NOT NULL,
    user_id uuid NOT NULL,
    emoji text NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    PRIMARY KEY (id),
    FOREIGN KEY (comment_id) REFERENCES public.comment (id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES public.user (id) ON DELETE CASCADE
);


CREATE OR REPLACE FUNCTION public.add_event_for_comment_reaction()
RETURNS TRIGGER AS $$
DECLARE
    claim_id uuid;
BEGIN
    -- Look up the claim_id from the comment table
    SELECT c.claim_id INTO claim_id
    FROM public.comment c
    WHERE c.id = NEW.comment_id;

    -- Insert a new row into the event table
    INSERT INTO public.event (
        claim_id,
        user_id,
        action,
        table_name,
        created_at,
        entry_id
    ) VALUES (
        claim_id,
        NEW.user_id,
        'INSERT',
        'comment_user_reactions',
        now(),
        NEW.id
    );

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


-- Create the trigger on comment_user_reactions
CREATE TRIGGER trg_add_event_for_comment_reaction
AFTER INSERT ON public.comment_user_reactions
FOR EACH ROW
EXECUTE FUNCTION public.add_event_for_comment_reaction();