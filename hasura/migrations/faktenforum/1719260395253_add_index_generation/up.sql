-- Step 1: Create the table to track the current index for each claim_id
CREATE TABLE public.claim_origin_index_tracker (
    claim_id uuid PRIMARY KEY,
    current_index integer NOT NULL
);

CREATE TABLE public.claim_fact_index_tracker (
    claim_id uuid PRIMARY KEY,
    current_index integer NOT NULL
);

CREATE TABLE public.fact_source_index_tracker (
    fact_id uuid PRIMARY KEY,
    current_index integer NOT NULL
);


ALTER TABLE public.claim_origin_index_tracker
ADD CONSTRAINT claim_origin_index_tracker_claim_id_fkey FOREIGN KEY (claim_id) REFERENCES public.claim(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE public.claim_fact_index_tracker
ADD CONSTRAINT claim_fact_index_tracker_claim_id_fkey FOREIGN KEY (claim_id) REFERENCES public.claim(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE public.fact_source_index_tracker
ADD CONSTRAINT fact_source_index_tracker_fact_id_fkey FOREIGN KEY (fact_id) REFERENCES public.fact(id) ON UPDATE CASCADE ON DELETE CASCADE;

-- Step 2: Create the function to generate the next index
CREATE OR REPLACE FUNCTION get_next_origin_index(c_id uuid)
RETURNS integer AS $$
DECLARE
    next_index integer;
BEGIN
    -- Update the current index for the claim_id, or initialize it if it doesn't exist
    UPDATE public.claim_origin_index_tracker
    SET current_index = current_index + 1
    WHERE claim_id = c_id
    RETURNING current_index INTO next_index;

    -- If the claim_id doesn't exist, initialize the index at 1
    IF NOT FOUND THEN
        next_index := 1;
        INSERT INTO public.claim_origin_index_tracker (claim_id, current_index) VALUES (c_id, next_index);
    END IF;

    RETURN next_index;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION get_next_fact_index(f_id uuid)
RETURNS integer AS $$
DECLARE
    next_index integer;
BEGIN
    -- Update the current index for the claim_id, or initialize it if it doesn't exist
    UPDATE public.claim_fact_index_tracker
    SET current_index = current_index + 1
    WHERE claim_id = f_id
    RETURNING current_index INTO next_index;

    -- If the claim_id doesn't exist, initialize the index at 1
    IF NOT FOUND THEN
        next_index := 1;
        INSERT INTO public.claim_fact_index_tracker (claim_id, current_index) VALUES (f_id, next_index);
    END IF;

    RETURN next_index;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION get_next_source_index(c_id uuid)
RETURNS integer AS $$
DECLARE
    next_index integer;
BEGIN
    -- Update the current index for the fact_id, or initialize it if it doesn't exist
    UPDATE public.fact_source_index_tracker
    SET current_index = current_index + 1
    WHERE fact_id = c_id
    RETURNING current_index INTO next_index;

    -- If the fact_id doesn't exist, initialize the index at 1
    IF NOT FOUND THEN
        next_index := 1;
        INSERT INTO public.fact_source_index_tracker (fact_id, current_index) VALUES (c_id, next_index);
    END IF;

    RETURN next_index;
END;
$$ LANGUAGE plpgsql;

-- Step 3: Create the trigger function to set the next index
CREATE OR REPLACE FUNCTION set_next_origin_index()
RETURNS TRIGGER AS $$
BEGIN
    NEW.index := get_next_origin_index(NEW.claim_id);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION set_next_fact_index()
RETURNS TRIGGER AS $$
BEGIN
    NEW.index := get_next_fact_index(NEW.claim_id);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION set_next_source_index()
RETURNS TRIGGER AS $$
BEGIN
    NEW.index := get_next_source_index(NEW.fact_id);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Step 4: Drop existing trigger (if any) and create the new trigger
-- Drop the existing trigger if it exists
DROP TRIGGER IF EXISTS before_insert_origin ON public.origin;
DROP TRIGGER IF EXISTS before_insert_fact ON public.fact;
DROP TRIGGER IF EXISTS before_insert_source ON public.source;

-- Create the new trigger
CREATE TRIGGER before_insert_origin
BEFORE INSERT ON public.origin
FOR EACH ROW
EXECUTE FUNCTION set_next_origin_index();

CREATE TRIGGER before_insert_fact
BEFORE INSERT ON public.fact
FOR EACH ROW
EXECUTE FUNCTION set_next_fact_index();

CREATE TRIGGER before_insert_source
BEFORE INSERT ON public.source
FOR EACH ROW
EXECUTE FUNCTION set_next_source_index();
