-- Add view for user account so hasura permissions can be set on it
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
    updated_at
FROM
    public.user;
COMMENT ON VIEW public.user_account_view IS 'View of user table to set Hasura Permissions for User to real all';
