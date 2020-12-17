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
  'Teaching your dog to sit is often the first step people take in their dog training journey, and will be the basis for a lot
   of commands we look at later.  Having your dog sit on command can be useful for keeping them at bay while waiting for 
   traffic lights, or stopping them from jumping up on visitors.  
As with the teaching of all behaviors, the first step is to get your dog’s full attention. Practice step one until your
 dog is fully comfortable with the action and begins to anticipate what is being asked. When you are done with one step fully,
  transition to the second.
'
);
INSERT INTO tricks (tname, imagebub, imagebubdone, descr) VALUES (
    'Lay',
    '/lay.png',
    '/laystep0.gif',
  'By now your dog should be well practiced at sitting on command - and the next step is to have them lay down. 
   As with ‘sit’, teaching your dog to lay down when asked can help keep them safe while out and about, but it can 
   also signal that it is time to settle in one place for a length of time, for example while out at a coffee shop, 
   or even when it’s time for bed.  '
);
INSERT INTO tricks (tname, imagebub, imagebubdone, descr) VALUES (
    'Come',
    '/come.png',
    'comestep0.gif',
  'For most people, one of the most challenging parts of training is teaching your dog to come back on command.  The world is a
   playground for our easily-distracted companions, so it is important to build up slowly and never get frustrated with your 
   dog if they don’t quite grasp it at first.  As with most other training, we recommend starting in a quiet, controlled
    environment with as few distractions as possible before moving outside. 
   '
);
INSERT INTO tricks (tname, imagebub, descr) VALUES (
    'Stay',
    '/clock0.png',
  'Dogs are notoriously impulsive creatures so teaching them to stay put while there are so many other things they would rather
   be doing (or sniffing) can be tricky.  Mastering this skill is vital though as it can keep your dog from running after 
   something they shouldn’t or keep them safe in an emergency situation.  It is important to have patience with your dog, 
   and to keep training sessions short and sweet, ending on a high note.'
);
INSERT INTO tricks (tname, imagebub, descr) VALUES (
    'Leash',
    '/walk.svg',
  'It is easy to forget that walking on a leash is not a natural behaviour for a dog - in fact, it is a bit counter-intuitive
   for creatures which naturally walk much quicker than we do and who would much rather trot from smell to smell than follow
    the pavement.  For this reason it is important to start small when leash training and make sure you are constantly
     encouraging your dog, even if it is slow going at first.  '
);
INSERT INTO tricks (tname, imagebub, descr) VALUES (
    'Paw',
    '/paw.svg',
  'Shaking hands / giving a paw is a simple trick that can be great fun for both you and your dog to learn. “Dogs naturally 
  use their paws more than you might think so this shouldn’t take too long”. It is important that your dog is already an 
  expert at sitting on command, and as always that you start in a quiet environment where your dog can fully focus!'
);
INSERT INTO tricks (tname, imagebub, descr) VALUES (
    'PawsUp',
    '/pawsup.png',
  'this is a description of Paws Up command'
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

