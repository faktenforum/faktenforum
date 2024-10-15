-- Create the 'content' table if it does not exist
CREATE TABLE IF NOT EXISTS page_content (
    page_name TEXT PRIMARY KEY NOT NULL,
    content_de TEXT NOT NULL,
    content_en TEXT NOT NULL
);

-- Create the 'handbook_sections' table if it does not exist
CREATE TABLE IF NOT EXISTS handbook_sections (
    id UUID PRIMARY KEY NOT NULL,
    title_de TEXT NOT NULL,
    title_en TEXT NOT NULL,
    teaser_text_de TEXT NOT NULL,
    teaser_text_en TEXT NOT NULL,
    teaser_image TEXT NOT NULL,
    content_de TEXT NOT NULL,
    content_en TEXT NOT NULL
);

