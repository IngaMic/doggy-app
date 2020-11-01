 DROP TABLE IF EXISTS walks CASCADE;
 CREATE TABLE walks(
        id SERIAL PRIMARY KEY,
        mins VARCHAR NOT NULL,
        user_id INT NOT NULL REFERENCES users(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

      INSERT INTO walks (mins, user_id, created_at) VALUES (
         '15',
         1,
        '2020-10-27 04:05:06'
   );
    INSERT INTO walks (mins, user_id, created_at) VALUES (
         '25',
         1,
        '2020-10-28 04:05:06'
   );