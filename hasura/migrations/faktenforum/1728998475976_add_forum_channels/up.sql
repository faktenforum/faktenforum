CREATE TABLE public.channel (
    name text NOT NULL,
    archived boolean NOT NULL,
    internal boolean NOT NULL,
    file_id uuid,  -- Added missing comma here
    label_de text NOT NULL,
    label_en text NOT NULL,
    description_de text NOT NULL,
    description_en text NOT NULL
);
COMMENT ON TABLE public.channel IS 'Role Based Access Channels ';

ALTER TABLE ONLY public.channel  -- Removed redundant ALTER keyword
    ADD CONSTRAINT channel_pkey PRIMARY KEY (name);
ALTER TABLE ONLY public.channel
    ADD CONSTRAINT channel_image_fkey FOREIGN KEY (file_id) REFERENCES public.file(id) ON UPDATE CASCADE ON DELETE SET NULL;