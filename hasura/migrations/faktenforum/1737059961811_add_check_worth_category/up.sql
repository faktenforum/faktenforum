-- Create enum type for check worthiness categories
CREATE TYPE public.check_worth_category AS ENUM (
    'checkworthy-claim',
    'non-claim',
    'non-checkworthy-claim',
    'uncheckable'
);

-- Add category column to checkworthiness table
ALTER TABLE public.checkworthiness
ADD COLUMN category public.check_worth_category NOT NULL;
