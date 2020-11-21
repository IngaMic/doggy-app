 DROP TABLE IF EXISTS trickssteps CASCADE;
 CREATE TABLE trickssteps(
        id SERIAL PRIMARY KEY,
        trick_id INT NOT NULL REFERENCES tricks(id),
        imageon TEXT,
        stepone VARCHAR NOT NULL,
        imageone TEXT,
        steptwo VARCHAR NOT NULL,
        imagetwo TEXT,
        stepthree VARCHAR NOT NULL,
        imagethree TEXT
    );

    INSERT INTO trickssteps (trick_id, imageon, stepone, imageone, steptwo, imagetwo, stepthree, imagethree) VALUES (
    1,
    '/sitstep3.gif',
    E' As with the teaching of all behaviors, the first step is to get your dogs full attention.\r\n


    Hold a treat in your hand so that he knows you have it, but also so that he cannot nip it from your hand.

    Keep the treat very close to the dog’s nose, then slowly raise it over the top of his head. He will follow the treat with his eyes and nose,
     looking upward and in the process placing his bottom on the ground.',
    '/sitstep1.gif',
     'After you are comfortable with the fist step it is time to introduce the voice command.\n
     
      Say "sit" as the 
     dog sits and reward him with a treat. When your dog’s rear end makes contact with the ground, say “sit” in a firm voice,
       then immediately offer him the treat as a reward for sitting. \n
       Reinforce the treat reward with praise, because in
       the next step you will have to remove the treat, but let your dog know the he has done well.',
    '/sitstep2.gif',
     'When you first start training with the treat trick, give your dog a treat each time he sits.\n


      Be sure you always offer enthusiastic praise as well.\n
      
      After a week or two, when your dog is reliably 
      sitting for treats, offer the treats intermittently but continue to offer praise. You will (slowly) work 
      towards getting the dog to sit with your hand signal and the “sit” command with no treat,
      then with only the “sit” command.',
    '/sitstep4.gif'
);
    INSERT INTO trickssteps (trick_id, imageon, stepone, imageone, steptwo, imagetwo, stepthree, imagethree) VALUES (
    2,
    '/pawstep4.gif',
    ' As with the teaching of all behaviors, the first step is to get your dogs full attention.
    Hold a treat in your hand so that he knows you have it, but also so that he cannot nip it from your hand.
    Keep the treat very close to the dog’s nose, then slowly raise it over the top of his head. He will follow the treat with his eyes and nose,
     looking upward and in the process placing his bottom on the ground.',
    '/laystep1.gif',
     'After you are comfortable with the fist step it is time to introduce the voice command. Say "sit" as the 
     dog sits and reward him with a treat. When your dog’s rear end makes contact with the ground, say “sit” in a firm voice,
       then immediately offer him the treat as a reward for sitting. Reinforce the treat reward with praise, because in
       the next step you will have to remove the treat, but let your dog know the he has done well.',
    '/laystep2.gif',
     'When you first start training with the treat trick, give your dog a treat each time he sits.
      Be sure you always offer enthusiastic praise as well. After a week or two, when your dog is reliably 
      sitting for treats, offer the treats intermittently but continue to offer praise. You will (slowly) work 
      towards getting the dog to sit with your hand signal and the “sit” command with no treat,
      then with only the “sit” command.',
    '/laystep3.gif'
);
    INSERT INTO trickssteps (trick_id, imageon, stepone, imageone, steptwo, imagetwo, stepthree, imagethree) VALUES (
    3,
    '/pawstep3.gif',
    ' As with the teaching of all behaviors, the first step is to get your dogs full attention.
    Hold a treat in your hand so that he knows you have it, but also so that he cannot nip it from your hand.
    Keep the treat very close to the dog’s nose, then slowly raise it over the top of his head. He will follow the treat with his eyes and nose,
     looking upward and in the process placing his bottom on the ground.',
    '/pawstep1.gif',
     'After you are comfortable with the fist step it is time to introduce the voice command. Say "sit" as the 
     dog sits and reward him with a treat. When your dog’s rear end makes contact with the ground, say “sit” in a firm voice,
       then immediately offer him the treat as a reward for sitting. Reinforce the treat reward with praise, because in
       the next step you will have to remove the treat, but let your dog know the he has done well.',
    '/pawstep2.gif',
     'When you first start training with the treat trick, give your dog a treat each time he sits.
      Be sure you always offer enthusiastic praise as well. After a week or two, when your dog is reliably 
      sitting for treats, offer the treats intermittently but continue to offer praise. You will (slowly) work 
      towards getting the dog to sit with your hand signal and the “sit” command with no treat,
      then with only the “sit” command.',
    '/pawstep3.gif'
);
    INSERT INTO trickssteps (trick_id, imageon, stepone, imageone, steptwo, imagetwo, stepthree, imagethree) VALUES (
    4,
    '/waitstep1.gif',
    ' WAIT WAIT WAIT As with the teaching of all behaviors, the first step is to get your dogs full attention.
    Hold a treat in your hand so that he knows you have it, but also so that he cannot nip it from your hand.
    Keep the treat very close to the dog’s nose, then slowly raise it over the top of his head. He will follow the treat with his eyes and nose,
     looking upward and in the process placing his bottom on the ground.',
    '/pawstep1.gif',
     'After you are comfortable with the fist step it is time to introduce the voice command. Say "sit" as the 
     dog sits and reward him with a treat. When your dog’s rear end makes contact with the ground, say “sit” in a firm voice,
       then immediately offer him the treat as a reward for sitting. Reinforce the treat reward with praise, because in
       the next step you will have to remove the treat, but let your dog know the he has done well.',
    '/pawstep2.gif',
     'When you first start training with the treat trick, give your dog a treat each time he sits.
      Be sure you always offer enthusiastic praise as well. After a week or two, when your dog is reliably 
      sitting for treats, offer the treats intermittently but continue to offer praise. You will (slowly) work 
      towards getting the dog to sit with your hand signal and the “sit” command with no treat,
      then with only the “sit” command.',
    '/pawstep3.gif'
);
    INSERT INTO trickssteps (trick_id, imageon, stepone, imageone, steptwo, imagetwo, stepthree, imagethree) VALUES (
    5,
    '/pawstep3.gif',
    ' HI5 HI5 HIFIVE As with the teaching of all behaviors, the first step is to get your dogs full attention.
    Hold a treat in your hand so that he knows you have it, but also so that he cannot nip it from your hand.
    Keep the treat very close to the dog’s nose, then slowly raise it over the top of his head. He will follow the treat with his eyes and nose,
     looking upward and in the process placing his bottom on the ground.',
    '/pawstep1.gif',
     'After you are comfortable with the fist step it is time to introduce the voice command. Say "sit" as the 
     dog sits and reward him with a treat. When your dog’s rear end makes contact with the ground, say “sit” in a firm voice,
       then immediately offer him the treat as a reward for sitting. Reinforce the treat reward with praise, because in
       the next step you will have to remove the treat, but let your dog know the he has done well.',
    '/pawstep2.gif',
     'When you first start training with the treat trick, give your dog a treat each time he sits.
      Be sure you always offer enthusiastic praise as well. After a week or two, when your dog is reliably 
      sitting for treats, offer the treats intermittently but continue to offer praise. You will (slowly) work 
      towards getting the dog to sit with your hand signal and the “sit” command with no treat,
      then with only the “sit” command.',
    '/pawstep3.gif'
);
    INSERT INTO trickssteps (trick_id, imageon, stepone, imageone, steptwo, imagetwo, stepthree, imagethree) VALUES (
    6,
    '/pawstep3.gif',
    ' BAND BAND BANG As with the teaching of all behaviors, the first step is to get your dogs full attention.
    Hold a treat in your hand so that he knows you have it, but also so that he cannot nip it from your hand.
    Keep the treat very close to the dog’s nose, then slowly raise it over the top of his head. He will follow the treat with his eyes and nose,
     looking upward and in the process placing his bottom on the ground.',
    '/pawstep1.gif',
     'After you are comfortable with the fist step it is time to introduce the voice command. Say "sit" as the 
     dog sits and reward him with a treat. When your dog’s rear end makes contact with the ground, say “sit” in a firm voice,
       then immediately offer him the treat as a reward for sitting. Reinforce the treat reward with praise, because in
       the next step you will have to remove the treat, but let your dog know the he has done well.',
    '/pawstep2.gif',
     'When you first start training with the treat trick, give your dog a treat each time he sits.
      Be sure you always offer enthusiastic praise as well. After a week or two, when your dog is reliably 
      sitting for treats, offer the treats intermittently but continue to offer praise. You will (slowly) work 
      towards getting the dog to sit with your hand signal and the “sit” command with no treat,
      then with only the “sit” command.',
    '/pawstep3.gif'
);
    INSERT INTO trickssteps (trick_id, imageon, stepone, imageone, steptwo, imagetwo, stepthree, imagethree) VALUES (
    7,
    '/pawstep3.gif',
    ' LEASH LEASH As with the teaching of all behaviors, the first step is to get your dogs full attention.
    Hold a treat in your hand so that he knows you have it, but also so that he cannot nip it from your hand.
    Keep the treat very close to the dog’s nose, then slowly raise it over the top of his head. He will follow the treat with his eyes and nose,
     looking upward and in the process placing his bottom on the ground.',
    '/pawstep1.gif',
     'After you are comfortable with the fist step it is time to introduce the voice command. Say "sit" as the 
     dog sits and reward him with a treat. When your dog’s rear end makes contact with the ground, say “sit” in a firm voice,
       then immediately offer him the treat as a reward for sitting. Reinforce the treat reward with praise, because in
       the next step you will have to remove the treat, but let your dog know the he has done well.',
    '/pawstep2.gif',
     'When you first start training with the treat trick, give your dog a treat each time he sits.
      Be sure you always offer enthusiastic praise as well. After a week or two, when your dog is reliably 
      sitting for treats, offer the treats intermittently but continue to offer praise. You will (slowly) work 
      towards getting the dog to sit with your hand signal and the “sit” command with no treat,
      then with only the “sit” command.',
    '/leashstep3.gif'
);