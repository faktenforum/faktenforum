CREATE TABLE public.user_claim_status (
    user_id uuid NOT NULL,
    claim_id uuid NOT NULL,
    has_read boolean DEFAULT FALSE NOT NULL,
    has_marked boolean DEFAULT FALSE NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT null,
    PRIMARY KEY (user_id, claim_id),
    FOREIGN KEY (user_id) REFERENCES public.user(id) ON DELETE CASCADE,
    FOREIGN KEY (claim_id) REFERENCES public.claim(id) ON DELETE CASCADE
);
CREATE TRIGGER set_user_claim_status_updated_at BEFORE
UPDATE ON public.user_claim_status FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_user_claim_status_updated_at ON public.user_claim_status IS 'trigger to set value of column updated_at to current timestamp on row update';