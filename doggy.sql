DROP TABLE IF EXISTS doggy CASCADE;
CREATE TABLE doggy (
id SERIAL PRIMARY KEY,
name VARCHAR,
gender VARCHAR,
size VARCHAR,
bio VARCHAR,
imageUrl TEXT,
firstuserid INT REFERENCES users(id) NOT NULL UNIQUE,
seconduserid INT REFERENCES users(id) UNIQUE
);
