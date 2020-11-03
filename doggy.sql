DROP TABLE IF EXISTS doggy CASCADE;
CREATE TABLE doggy (
id SERIAL PRIMARY KEY,
name VARCHAR,
gender VARCHAR,
size VARCHAR,
bio VARCHAR,
cd TEXT NOT NULL,
imageUrl TEXT,
firstuserid INT REFERENCES users(id),
seconduserid INT REFERENCES users(id)
);
