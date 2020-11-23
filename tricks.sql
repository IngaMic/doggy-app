DROP TABLE IF EXISTS tricks CASCADE;
CREATE TABLE tricks (
id SERIAL PRIMARY KEY,
tname VARCHAR NOT NULL,
imagebub TEXT,
imagebubdone TEXT,
imageon TEXT,
descr VARCHAR NOT NULL
);

INSERT INTO tricks (tname, imagebub, imagebubdone, imageon, descr) VALUES (
    'Sit',
     '/sitbub.svg',
    '/sit.png',
    '/sitstep3.gif',
  'Teaching your dog how to sit on command is one of the simplest behaviors you can teach and it 
  is usually the first command in basic obedience training. As with the teaching of all behaviors,
   the first step is to get your dogs full attention. Practice step one until your dogs starts to get an idea
   what do you expect. When you are done with one step fully, transition to a second one.'
);
INSERT INTO tricks (tname, imagebub, imagebubdone, descr) VALUES (
    'Lay',
    '/lay.png',
    '/laystep0.gif',
  'this is a description of lay command'
);
INSERT INTO tricks (tname, imagebub, imagebubdone, descr) VALUES (
    'Come',
    '/come.png',
    'comestep0.gif',
  'An important part of teaching recall is to make training a game for your dog. You want your dog to think that coming and 
  being near you is the best thing imaginable, full of fantastic treats and rewards.To teach your dog to come back to you,
   you must learn to be more exciting than the rest of the world! Also, start training at home or other place with no distractions
   and slowly move towards more and more distractive environment.
   '
);
INSERT INTO tricks (tname, imagebub, descr) VALUES (
    'Wait',
    '/clock0.png',
  'The idea of "wait" trick is to encourage calm self-control in your dog. By learning that he only gets a reward when he is calm
   and waits for permission then your dog will be focused to learn. For more active dogs it is important to train after they had their
    play time and feel a bit less energetic. Choose an environment and timing that helps your dog to suceed when you start training. Many say 
    that “Stay” is probably the most difficult exercise to teach, because many dogs just hate being still!'
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
    'Leash',
    '/leash.png',
  'Leash training is often difficult because dogs naturally walk in a faster pace than humans. Instead
   of moving at a consistent speed in one direction they trot from smell to smell and linger until
    they have collected all the info that can be found there. This is why leash training often requires time and
    rewarding with treats.'
);
INSERT INTO tricks (tname, imagebub, descr) VALUES (
    'PawsUp',
    '/pawsup.png',
  'this is a description of Paws Up command'
);
INSERT INTO tricks (tname, imagebub, descr) VALUES (
    'Paw',
    '/pawstep3.gif',
  ' Giving paw is best learned when the dog is in a sitting position. When your dog is sitting, his weight is in his rear,
   making it easier for him to lift his paw comfortably. At first, some dogs do not like it when someone touch their paws,
    but soon, if the touches are calm and friendly they get accustomed to it. It is worth checking if your dog is comfortable
    with paw touches before you start to train.'
);