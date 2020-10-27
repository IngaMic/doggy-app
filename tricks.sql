DROP TABLE IF EXISTS tricks CASCADE;
CREATE TABLE tricks (
id SERIAL PRIMARY KEY,
tname VARCHAR NOT NULL,
imagebub TEXT,
descr VARCHAR NOT NULL
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
    'Sit',
    '/sit.png',
  'this is a description of sit command'
);
INSERT INTO tricks (tname, imagebub, descr) VALUES (
    'Lay',
    '/lay.png',
  'this is a description of lay command'
);
INSERT INTO tricks (tname, imagebub, descr) VALUES (
    'Wait',
    '/clock0.png',
  'this is a description of wait command'
);

INSERT INTO tricks (tname, imagebub, descr) VALUES (
    'Come',
    '/come.png',
  'this is a description of come command'
);
