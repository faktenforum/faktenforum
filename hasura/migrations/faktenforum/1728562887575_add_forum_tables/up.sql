CREATE TABLE public.channel (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    minimum_acces_level integer NOT NULL,
    archived boolean NOT NULL,
    private boolean NOT NULL,
    image uuid,
    label_de text NOT NULL,
    label_en text NOT NULL,
    description_de text NOT NULL,
    description_en text NOT NULL,
);
COMMENT ON TABLE public.channel IS 'Role Based Access Channels ';

ALTER TABLE ONLY ALTER ALTER TABLE ONLY public.channel
    ADD CONSTRAINT channel_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.channel
    ADD CONSTRAINT channel_image_fkey FOREIGN KEY (image) REFERENCES public.file(id) ON UPDATE CASCADE ON DELETE SET NULL;
