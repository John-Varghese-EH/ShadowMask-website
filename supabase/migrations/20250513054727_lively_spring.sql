/*
  # Create contact messages table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `subject` (text)
      - `message` (text)
      - `created_at` (timestamp)
      - `read` (boolean)
  2. Security
    - Enable RLS on `contact_messages` table
    - Add policy for authenticated users to read their own messages
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (email = auth.email());

CREATE POLICY "Anyone can insert messages"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);