-- Update view for user account to include signed_code_of_conduct
DROP VIEW IF EXISTS public.user_account_view;

CREATE VIEW public.user_account_view AS
SELECT
    id,
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
    signed_code_of_conduct  -- New column added
FROM
    public.user;

COMMENT ON VIEW public.user_account_view IS 'View of user table to set Hasura Permissions for User to read all, including signed_code_of_conduct'; 