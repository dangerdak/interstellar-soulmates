BEGIN;

  DROP TABLE IF EXISTS users CASCADE;

  DROP EXTENSION IF EXISTS citext CASCADE;
  

  CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(300) NOT NULL,
    password CHAR(64) NOT NULL
  );

DROP TABLE IF EXISTS profiles CASCADE;

  CREATE TABLE profiles (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    name VARCHAR(300),
    species VARCHAR(300),
    image_url VARCHAR(2083),
    cns BOOLEAN,
    legs INTEGER,
    interests VARCHAR(500)
  );

COMMIT;
