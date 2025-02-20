-- remove the foreign key constraint on the history tables
ALTER TABLE public.claim_category_history DROP CONSTRAINT IF EXISTS fk_claim_category_history;
ALTER TABLE public.claim_history DROP CONSTRAINT IF EXISTS fk_claim_history;
ALTER TABLE public.origin_history DROP CONSTRAINT IF EXISTS fk_origin_history;
ALTER TABLE public.source_history DROP CONSTRAINT IF EXISTS fk_source_history;
ALTER TABLE public.fact_history DROP CONSTRAINT IF EXISTS fk_fact_history;
ALTER TABLE public.user_history DROP CONSTRAINT IF EXISTS fk_user_history;  
ALTER TABLE public.file_history DROP CONSTRAINT IF EXISTS fk_file_history;  

-- Create indexes with existence checks
CREATE INDEX IF NOT EXISTS idx_claim_category_id ON public.claim_category_history (id);
CREATE INDEX IF NOT EXISTS idx_claim_id ON public.claim_history (id);
CREATE INDEX IF NOT EXISTS idx_origin_id ON public.origin_history (id);
CREATE INDEX IF NOT EXISTS idx_source_id ON public.source_history (id);
CREATE INDEX IF NOT EXISTS idx_fact_id ON public.fact_history (id);
CREATE INDEX IF NOT EXISTS idx_user_id ON public.user_history (id);
CREATE INDEX IF NOT EXISTS idx_file_id ON public.file_history (id);