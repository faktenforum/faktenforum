-- Delete all events related to comment tables
DELETE FROM "event"
WHERE table_name IN ('comment', 'comment_user_reactions');

-- Drop the tables
DROP TABLE IF EXISTS comment;
DROP TABLE IF EXISTS comment_user_reactions;
DROP TABLE IF EXISTS comment_history;