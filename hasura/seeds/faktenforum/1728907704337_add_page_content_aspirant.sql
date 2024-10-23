-- Check if 'aspirant' exists before inserting
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM page_content WHERE page_name = 'aspirant'
    ) THEN
        INSERT INTO page_content (page_name, content_de, content_en) VALUES ('aspirant', '', '');
    END IF;
END
$$;
