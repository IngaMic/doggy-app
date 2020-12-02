DROP TABLE IF EXISTS questionaire CASCADE;
CREATE TABLE questionaire (
id SERIAL PRIMARY KEY,
cd VARCHAR NOT NULL,
training TEXT,
characters TEXT,
hero TEXT
);