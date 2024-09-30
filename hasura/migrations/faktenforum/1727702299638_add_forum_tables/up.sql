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
COMMENT ON TABLE public.channel IS 'Role Based Access Channels ';ALTER TABLE ONLY ALTER ALTER TABLE ONLY public.channel
    ADD CONSTRAINT channel_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.channel
    ADD CONSTRAINT channel_image_fkey FOREIGN KEY (image) REFERENCES public.file(id) ON UPDATE CASCADE ON DELETE SET NULL;


CREATE TABLE public.message (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    channel_id uuid NOT NULL,
    thread_id uuid,
    content text NOT NULL,
    created_by uuid NOT NULL,
    updated_by uuid,
    deleted boolean DEFAULT FALSE NOT NULL;
    blocked boolean DEFAULT FALSE NOT NULL;
    displayed_content TEXT GENERATED ALWAYS AS (
    CASE
        WHEN deleted THEN '"Content deleted"'
        WHEN blocked THEN '"Content blocked"'
        ELSE content
    END
    ) STORED,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    sys_period tstzrange
);

CREATE TABLE public.message_file (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    message_id uuid NOT NULL,
    file_id uuid NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    sys_period tstzrange
);
COMMENT ON TABLE public.message IS 'Channels ';ALTER TABLE ONLY ALTER ALTER TABLE ONLY public.channel
 

