CREATE OR REPLACE VIEW "public"."user_account_view" AS 
 SELECT id,
    email,
    username,
    first_name,
    last_name,
    pronouns,
    profile_image,
    bio,
    mobile_number,
    created_at,
    updated_at,
    signed_code_of_conduct,
    postal_code,
    city,
    country,
    role
   FROM "user";
