-- Add a column to the users table to indicate if the user has been deleted
ALTER TABLE "user" ADD COLUMN deleted BOOLEAN DEFAULT FALSE;


