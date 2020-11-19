 DROP TABLE IF EXISTS walks CASCADE;
 CREATE TABLE walks(
        id SERIAL PRIMARY KEY,
        activity VARCHAR NOT NULL,
        mins VARCHAR NOT NULL,
        cd VARCHAR NOT NULL,
        user_id INT NOT NULL REFERENCES users(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

      INSERT INTO walks (activity, mins, cd, user_id, created_at) VALUES (
         'sit',
         '15',
         '0c9683',
         1,
        '2020-10-27 04:05:06'
   );
    INSERT INTO walks (activity, mins, cd, user_id, created_at) VALUES (
        'walk',
         '25',
         '0c9683',
         4,
        '2020-10-28 04:05:06'
   );
   INSERT INTO walks (activity, mins, cd, user_id, created_at) VALUES (
        'walk',
         '25',
         '0c9683',
         3,
        '2020-10-28 04:05:06'
   );
   INSERT INTO walks (activity, mins, cd, user_id, created_at) VALUES (
        'walk',
         '25',
         '0c9683',
         2,
        '2020-10-28 04:05:06'
   );