DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM public.rating_label) THEN
        INSERT INTO public.rating_label (name, label_de, label_en)
        VALUES ('correct', 'Korrekt', 'Correct');
        INSERT INTO public.rating_label (name, label_de, label_en)
        VALUES ('misleading', 'Irreführend', 'Misleading');
        INSERT INTO public.rating_label (name, label_de, label_en)
        VALUES ('false', 'Falsch', 'False');
    END IF;
END $$;