-- Check if 'aspirant' exists before inserting
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM page_content WHERE page_name = 'code_of_conduct'
    ) THEN
        INSERT INTO page_content (page_name, content_de, content_en) VALUES ('code_of_conduct', '', '');
    END IF;
END
$$;
