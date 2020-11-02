DROP TABLE IF EXISTS tricks CASCADE;
CREATE TABLE tricks (
id SERIAL PRIMARY KEY,
tname VARCHAR NOT NULL,
imagebub TEXT,
descr VARCHAR NOT NULL
);

INSERT INTO tricks (tname, imagebub, descr) VALUES (
    'Sit',
    '/sit.png',
  'Teaching your dog how to sit on command is one of the simplest behaviors you can teach and it 
  is usually the first command in basic obedience training. As with the teaching of all behaviors,
   the first step is to get your dogs full attention. Practice step one until your dogs starts to get an idea
   what do you expect. When you are done with one step fully, transition to a second one.'
);
INSERT INTO tricks (tname, imagebub, descr) VALUES (
    'Lay',
    '/lay.png',
  'this is a description of lay command'
);
INSERT INTO tricks (tname, imagebub, descr) VALUES (
    'Come',
    '/come.png',
  'this is a description of come command'
);
INSERT INTO tricks (tname, imagebub, descr) VALUES (
    'Wait',
    '/clock0.png',
  'this is a description of wait command'
);

INSERT INTO tricks (tname, imagebub, descr) VALUES (
    'HiFive',
    '/huskygradient.png',
  'this is a description of high five command'
);
INSERT INTO tricks (tname, imagebub, descr) VALUES (
    'Bang',
    '/handgradient.png',
  'this is a description of bang command'
);
INSERT INTO tricks (tname, imagebub, descr) VALUES (
    'PawsUp',
    '/pawsup.png',
  'this is a description of Paws Up command'
);