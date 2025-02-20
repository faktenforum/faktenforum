CREATE TABLE public.claim_category_history (
    LIKE public.claim_category,
    history_id UUID NOT NULL DEFAULT gen_random_uuid(),
    PRIMARY KEY (history_id),
    CONSTRAINT fk_claim_category_history FOREIGN KEY (id) REFERENCES public.claim_category(id) ON DELETE CASCADE
);

---add history trigger
CREATE TRIGGER versioning_trigger BEFORE
INSERT
    OR
UPDATE ON public.claim_category FOR EACH ROW EXECUTE PROCEDURE versioning('sys_period', 'public.claim_category_history', true);

