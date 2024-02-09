CREATE TABLE IF NOT EXISTS users(
  id uuid DEFAULT gen_random_uuid(),
  username varchar,
  email varchar,
  encrypted_password varchar,
  gender varchar,
  inserted_at timestamp,
  updated_at timestamp,
  PRIMARY KEY(id)
);
