-- Create the comment_user_reactions table if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE schemaname = 'public' AND tablename = 'comment_user_reactions') THEN
        CREATE TABLE public.comment_user_reactions (
            id uuid NOT NULL DEFAULT gen_random_uuid(),
            comment_id uuid NOT NULL,
            user_id uuid NOT NULL,
            emoji text NOT NULL,
            created_at timestamp with time zone DEFAULT now() NOT NULL,
            PRIMARY KEY (id),
            FOREIGN KEY (comment_id) REFERENCES public.comment (id) ON DELETE CASCADE,
            FOREIGN KEY (user_id) REFERENCES public.user (id) ON DELETE CASCADE,
            CONSTRAINT unique_user_comment_emoji UNIQUE (comment_id, user_id, emoji)
        );
    END IF;
END $$;

-- Create or replace the function to handle INSERT event for comment_user_reactions
CREATE OR REPLACE FUNCTION public.add_event_for_comment_reaction_insert()
RETURNS TRIGGER AS $$
DECLARE
    claim_id uuid;
    claim_status public.claim_status;
BEGIN
    -- Look up the claim_id from the comment table
    SELECT c.claim_id INTO claim_id
    FROM public.comment c
    WHERE c.id = NEW.comment_id;

    SELECT c.status INTO claim_status
    FROM public.claim c
    WHERE c.id = claim_id;

    -- Insert a new row into the event table
    INSERT INTO public.event (
        claim_id,
        user_id,
        action,
        table_name,
        created_at,
        entry_id,
        claim_status
    ) VALUES (
        claim_id,
        NEW.user_id,
        'INSERT',
        'comment_user_reactions',
        now(),
        NEW.id,
        claim_status
    );

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop and create the trigger on comment_user_reactions for INSERT
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'trg_add_event_for_comment_reaction_insert') THEN
        DROP TRIGGER trg_add_event_for_comment_reaction_insert ON public.comment_user_reactions;
    END IF;
    CREATE TRIGGER trg_add_event_for_comment_reaction_insert
    AFTER INSERT ON public.comment_user_reactions
    FOR EACH ROW
    EXECUTE FUNCTION public.add_event_for_comment_reaction_insert();
END $$;

-- Function to handle DELETE event for comment_user_reactions
CREATE OR REPLACE FUNCTION public.add_event_for_comment_reaction_delete()
RETURNS TRIGGER AS $$
DECLARE
    claim_id uuid;
    claim_status public.claim_status;
BEGIN
    -- Look up the claim_id from the comment table
    SELECT c.claim_id INTO claim_id
    FROM public.comment c
    WHERE c.id = OLD.comment_id;

    SELECT c.status INTO claim_status
    FROM public.claim c
    WHERE c.id = claim_id;

    -- Insert a new row into the event table
    INSERT INTO public.event (
        claim_id,
        user_id,
        action,
        table_name,
        created_at,
        entry_id,
        claim_status
    ) VALUES (
        claim_id,
        OLD.user_id,
        'DELETE',
        'comment_user_reactions',
        now(),
        OLD.id,
        claim_status
    );

    RETURN OLD;
END;
$$ LANGUAGE plpgsql;

-- Drop and create the trigger on comment_user_reactions for DELETE
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'trg_add_event_for_comment_reaction_delete') THEN
        DROP TRIGGER trg_add_event_for_comment_reaction_delete ON public.comment_user_reactions;
    END IF;
    CREATE TRIGGER trg_add_event_for_comment_reaction_delete
    AFTER DELETE ON public.comment_user_reactions
    FOR EACH ROW
    EXECUTE FUNCTION public.add_event_for_comment_reaction_delete();
END $$;
