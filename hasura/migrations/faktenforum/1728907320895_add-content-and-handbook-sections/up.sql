-- Create the 'content' table if it does not exist
CREATE TABLE IF NOT EXISTS page_content (
    page_name TEXT PRIMARY KEY NOT NULL,
    content_de TEXT NOT NULL,
    content_en TEXT NOT NULL
);

-- Create the 'handbook_sections' table if it does not exist
CREATE TABLE IF NOT EXISTS handbook_sections (
    id UUID PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
    title_de TEXT NOT NULL,
    title_en TEXT NOT NULL,
    teaser_text_de TEXT NOT NULL,
    teaser_text_en TEXT NOT NULL,
    teaser_image uuid,
    content_de TEXT NOT NULL,
    content_en TEXT NOT NULL
);


ALTER TABLE ONLY public.handbook_sections
    ADD CONSTRAINT handbook_sections_teaser_image_fkey FOREIGN KEY (teaser_image) REFERENCES public.file(id) ON UPDATE CASCADE ON DELETE SET NULL;