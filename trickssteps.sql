 DROP TABLE IF EXISTS trickssteps CASCADE;
 CREATE TABLE trickssteps(
        id SERIAL PRIMARY KEY,
        trick_id INT NOT NULL REFERENCES tricks(id),
        stepone VARCHAR NOT NULL,
        imageone TEXT,
        steptwo VARCHAR NOT NULL,
        imagetwo TEXT,
        stepthree VARCHAR NOT NULL,
        imagethree TEXT
    );

    INSERT INTO trickssteps (trick_id, stepone, imageone, steptwo, imagetwo, stepthree, imagethree) VALUES (
    1,
    ' As with the teaching of all behaviors, the first step is to get your dogs full attention.
    Hold a treat in your hand so that he knows you have it, but also so that he cannot nip it from your hand.
    Keep the treat very close to the dog’s nose, then slowly raise it over the top of his head. He will follow the treat with his eyes and nose,
     looking upward and in the process placing his bottom on the ground.',
    '/sit.png',
     'After you are comfortable with the fist step it is time to introduce the voice command. Say "sit" as the 
     dog sits and reward him with a treat. When your dog’s rear end makes contact with the ground, say “sit” in a firm voice,
       then immediately offer him the treat as a reward for sitting. Reinforce the treat reward with praise, because in
       the next step you will have to remove the treat, but let your dog know the he has done well.',
    '/sit.png',
     'When you first start training with the treat trick, give your dog a treat each time he sits.
      Be sure you always offer enthusiastic praise as well. After a week or two, when your dog is reliably 
      sitting for treats, offer the treats intermittently but continue to offer praise. You will (slowly) work 
      towards getting the dog to sit with your hand signal and the “sit” command with no treat,
      then with only the “sit” command.',
    '/sit.png'
);
    INSERT INTO trickssteps (trick_id, stepone, imageone, steptwo, imagetwo, stepthree, imagethree) VALUES (
    2,
    ' As with the teaching of all behaviors, the first step is to get your dogs full attention.
    Hold a treat in your hand so that he knows you have it, but also so that he cannot nip it from your hand.
    Keep the treat very close to the dog’s nose, then slowly raise it over the top of his head. He will follow the treat with his eyes and nose,
     looking upward and in the process placing his bottom on the ground.',
    '/sit.png',
     'After you are comfortable with the fist step it is time to introduce the voice command. Say "sit" as the 
     dog sits and reward him with a treat. When your dog’s rear end makes contact with the ground, say “sit” in a firm voice,
       then immediately offer him the treat as a reward for sitting. Reinforce the treat reward with praise, because in
       the next step you will have to remove the treat, but let your dog know the he has done well.',
    '/sit.png',
     'When you first start training with the treat trick, give your dog a treat each time he sits.
      Be sure you always offer enthusiastic praise as well. After a week or two, when your dog is reliably 
      sitting for treats, offer the treats intermittently but continue to offer praise. You will (slowly) work 
      towards getting the dog to sit with your hand signal and the “sit” command with no treat,
      then with only the “sit” command.',
    '/sit.png'
);
    INSERT INTO trickssteps (trick_id, stepone, imageone, steptwo, imagetwo, stepthree, imagethree) VALUES (
    3,
    ' As with the teaching of all behaviors, the first step is to get your dogs full attention.
    Hold a treat in your hand so that he knows you have it, but also so that he cannot nip it from your hand.
    Keep the treat very close to the dog’s nose, then slowly raise it over the top of his head. He will follow the treat with his eyes and nose,
     looking upward and in the process placing his bottom on the ground.',
    '/sit.png',
     'After you are comfortable with the fist step it is time to introduce the voice command. Say "sit" as the 
     dog sits and reward him with a treat. When your dog’s rear end makes contact with the ground, say “sit” in a firm voice,
       then immediately offer him the treat as a reward for sitting. Reinforce the treat reward with praise, because in
       the next step you will have to remove the treat, but let your dog know the he has done well.',
    '/sit.png',
     'When you first start training with the treat trick, give your dog a treat each time he sits.
      Be sure you always offer enthusiastic praise as well. After a week or two, when your dog is reliably 
      sitting for treats, offer the treats intermittently but continue to offer praise. You will (slowly) work 
      towards getting the dog to sit with your hand signal and the “sit” command with no treat,
      then with only the “sit” command.',
    '/sit.png'
);