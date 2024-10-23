CREATE OR REPLACE FUNCTION insert_channel_if_not_exists(channel_name text, archived boolean, internal boolean, label_de text, label_en text, description_de text, description_en text) RETURNS void AS $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM public.channel WHERE name = channel_name) THEN
        INSERT INTO public.channel (name, archived, internal, label_de, label_en, description_de, description_en)
        VALUES (channel_name, archived, internal, label_de, label_en, description_de, description_en);
    END IF;
END;
$$ LANGUAGE plpgsql;

DO $$
BEGIN
    PERFORM insert_channel_if_not_exists('general', false, false, 'Allgemein', 'General', 'Diskussionen rund um Desinformation und Faktenchecken – und alles, was euch sonst noch wichtig ist.', 'General discussions');
    PERFORM insert_channel_if_not_exists('introducing_networking', false, false, 'Kennenlernen & Vernetzen', 'Introduction/Networking', 'Stelle dich vor, lerne andere Mitglieder kennen und vernetze dich.', 'Introduction and networking');
    PERFORM insert_channel_if_not_exists('news_from_correctiv', false, false, 'Neues von Correctiv', 'News from Correctiv', 'Aktuelle Infos, Updates und Ankündigungen direkt von CORRECTIV.', 'News from Correctiv');
    PERFORM insert_channel_if_not_exists('reading_tips', false, false, 'Lesetipps', 'Reading Tips', 'Spannende Bücher, Artikel oder Links mit Bezug zu Faktencheck, öffentlicher Debatte und Desinformation.', 'Recommended reading');
    PERFORM insert_channel_if_not_exists('events', false, false, 'Veranstaltungen', 'Events', 'Workshops, Events und Termine für die Faktenforum-Community.', 'Events');
    PERFORM insert_channel_if_not_exists('feedback', false, false, 'Feedback & Fragen', 'Feddback', 'Teile dein Feedback zur Plattform und stelle technische Fragen oder Anmerkungen.', 'Events');   
END $$;

DROP FUNCTION insert_channel_if_not_exists(text, boolean, boolean, text, text, text, text);