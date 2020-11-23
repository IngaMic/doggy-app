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
    ' As with the teaching of all behaviors, the first step is to get your dogs full attention.


    Hold a treat in your hand so that he knows you have it, but also so that he cannot nip it from your hand.

    Keep the treat very close to the dog’s nose, then slowly raise it over the top of his head. He will follow the treat with his eyes and nose,
     looking upward and in the process placing his bottom on the ground.',
    '/sitstep1.gif',
     'After you are comfortable with the fist step it is time to introduce the voice command.
     
      Say "sit" as the 
     dog sits and reward him with a treat. When your dog’s rear end makes contact with the ground, say “sit” in a firm voice,
       then immediately offer him the treat as a reward for sitting.
       Reinforce the treat reward with praise, because in
       the next step you will have to remove the treat, but let your dog know the he has done well.',
    '/sitstep2.gif',
     'When you first start training with the treat trick, give your dog a treat each time he sits.
      Be sure you always offer enthusiastic praise as well.
      After a week or two, when your dog is reliably 
      sitting for treats, offer the treats intermittently but continue to offer praise. You will (slowly) work 
      towards getting the dog to sit with your hand signal and the “sit” command with no treat,
      then with only the “sit” command.',
    '/sitstep4.gif'
);
    INSERT INTO trickssteps (trick_id, imageon, stepone, imageone, steptwo, imagetwo, stepthree, imagethree) VALUES (
    2,
    '/laystep0.gif',
    'Lower the treat straight down to the ground slowly enough so that your pup’s muzzle sticks to it like a magnet,
    dogs body will follow the treat and lay down. Practice the behavior several times, so he understands the concept.
     However, when you’re trying to trick them into lying down, your dog might be too exited about the treat and 
     jump up. If this happens,
     move the treat away quickly. It will discourage this habit from continuing. Then, get them back in the
      sitting position and start the trick over again.',
    '/laystep1.gif',
     'After you are comfortable with the fist step it is time to introduce the voice command. You may exchange the lure with
      a hand signal and add a verbal "lay" or "down" command as soon as your dog is in a desired position. Then instantly reward with
      a treat and praises. Trained with consistency your puppy will learn to respond to the verbal and/or silent hand signal command.',
    '/laystep2.gif',
     'When you first start training with the trick, give your dog a treat each time he lays down.
      Be sure you always offer enthusiastic praise as well. After a week or two, when your dog reliably 
      knows this trick for treats, offer the treats intermittently but continue to offer praise. You will (slowly) work 
      towards a successfull behaviour with no special rewards. ',
    '/laystep3.gif'
);
    INSERT INTO trickssteps (trick_id, imageon, stepone, imageone, steptwo, imagetwo, stepthree, imagethree) VALUES (
    3,
    '/comestep0.gif',
    ' As with the teaching of all behaviors, the first step is to get your dogs full attention. Run away a couple of paces 
    then call your dogs name and say "come" in a friendly, exciting tone - getting down low can also encourage them to come back. 
     You need an incentive to encourage your dog to come back - a really tasty treat or a fun game with a toy.
  Show your dog the toy or food. When you are starting to train only call when you are going to praise your dog - 
  do not call your dog and then tell them off as it means they will be less likely to come back next time you call.',
    '/comestep1.gif',
     'Reward eye contact. When you notice your dog is looking at you or has self-selected to be close to you,
      verbally praise and treat. Don’t repeat yourself. If you have to repeat your recall cue, the environment 
      may be too distracting. Or, your dog doesn’t understand the skill well enough for the level you are trying to train. 
      Practice recalls daily. Slowly increase the difficulty and level of distraction.',
    '/pawstep2.gif',
     'Mix it up by running away from your dog just as they approach you. Encourage your dog to chase you, but never play games
      that involve you chasing your dog. We all feel annoyed when our dogs don’t come immediately, but it’s imperative that you 
      control any annoyance, or irritation. It can take months for your dog to develop a habit of coming to you when called, 
      even without distractions. Hang in there, and keep working on it. With lots of high-value rewards and praise, you can
       prove to your dog that you are more interesting than their environment, and it’s always worthwhile to come back to you.',
    '/pawstep3.gif'
);
    INSERT INTO trickssteps (trick_id, imageon, stepone, imageone, steptwo, imagetwo, stepthree, imagethree) VALUES (
    4,
    '/staystep0.gif',
    ' Sit down on a chair and ask your dog to sit in front of you, wait until you get your dogs full attention. 
   When your dog is sitting nicely, show him a treat and ask him to wait. Slowly place the treat onto your knee whilst
    your dog is watching you. If the dog moves or reaches for the treat take it away very quickly and ask him once again
     to sit and wait. Repeat it as many times as you need to until you can put the treat on your knee
      without the dog moving or trying to take it, always use the word wait. You may start with only a couple of seconds of suspense,
      if you see that your puppy waits, reward him.',
    '/waitstep1.gif',
     'Eventually your dog will sit and wait despite the tempting treat on your knee often he will look directly into your eyes,
      pleading for his treat. Now you should experiment with longer waiting times and bigger distance between you and the dog. Keep a 
      treat in your hand and reward your dog only after he remains calm and waits. You might need to step down a bit after a break
       between training and build up to a longer time and greater distance.',
    '/pawstep2.gif',
     'Once you can move around your dog freely while they remain in a stay, see if you can quickly pop out of sight and then
      come back to reward them. You could also begin to add in distractions, like toys, or dancing around them to test your 
      dog’s impulse control. However, you should always return to your dog to let them out of the stay. Don’t call your dog 
      out of a stay because this could confuse them.',
    '/pawstep3.gif'
);
    INSERT INTO trickssteps (trick_id, imageon, stepone, imageone, steptwo, imagetwo, stepthree, imagethree) VALUES (
    5,
    '/pawstep3.gif',
    ' If your dog already sits on command, you are off to a good start. If you already know "paw" trick, it will also be easier
    because your dog is used to having his paws touched. While this is a fairly easy trick for your dog to learn,
     it takes repetition and consistency for him to retain it.',
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
    ' Start out your leash training by letting your pup get used to wearing a collar or harness and a leash at home. 
  You could start leaving the leash on for short periods of time, for example while you are training,
   playing and giving your dog treats. The puppy should love collar-and-leash time 
   because it represents food and fun. ',
    '/pawstep1.gif',
     'After you introduced walking on a leash to your dog at home, take your training outside. You should get in the habit of carrying small, 
    easily chewable treats for your puppy during the training process. 
    Gradually you’ll reduce the number of treats and the amount of troubleshooting that your puppy
     needs during a walk.',
    '/pawstep2.gif',
     'If your dog starts pulling in the other direction, stop walking. 
     Stand very still and refuse to move until your dog comes back to you. Do not yank or 
     jerk the leash, and do not drag your dog along with you.  If your dog is going after something while
      on a walk — another dog, a car, be proactive. Try to redirect his attention with a treat and keep him focused on you.',
    '/leashstep3.gif'
);
    INSERT INTO trickssteps (trick_id, imageon, stepone, imageone, steptwo, imagetwo, stepthree, imagethree) VALUES (
    8,
    '/pawstep3.gif',
    ' PAWS UP PAWS UP Start out your leash training by letting your pup get used to wearing a collar or harness and a leash at home. 
  You could start leaving the leash on for short periods of time, for example while you are training,
   playing and giving your dog treats. The puppy should love collar-and-leash time 
   because it represents food and fun. ',
    '/pawstep1.gif',
     'After you introduced walking on a leash to your dog at home, take your training outside. You should get in the habit of carrying small, 
    easily chewable treats for your puppy during the training process. 
    Gradually you’ll reduce the number of treats and the amount of troubleshooting that your puppy
     needs during a walk.',
    '/pawstep2.gif',
     'If your dog starts pulling in the other direction, stop walking. 
     Stand very still and refuse to move until your dog comes back to you. Do not yank or 
     jerk the leash, and do not drag your dog along with you.  If your dog is going after something while
      on a walk — another dog, a car, be proactive. Try to redirect his attention with a treat and keep him focused on you.',
    '/leashstep3.gif'
);
    INSERT INTO trickssteps (trick_id, imageon, stepone, imageone, steptwo, imagetwo, stepthree, imagethree) VALUES (
    9,
    '/pawstep1.gif',
    ' As with the teaching of all behaviors, the first step is to get your dogs full attention. Start at a sitting position, show 
    your dog a treat to get his attention, and then create a fist to hide the treat. 
Wait for your dog to stretch out his paw to you. This may not take long if your dog regularly uses his paws to get your attention
 or play. If this is not how your dog uses his paws, do not respond if he uses his mouth, but when he lifts his paw, even if it is just slightly off the ground, immediately give
  him verbal praise ("good doggy", "yes") and open your fist to give him the treat.',
    '/pawstep1.gif',
     'Once your dog consistently lifts his paw in response to the ‘fisted’ treat, add in a verbal cue to the trick. Say the cue
      after you have closed your fist, and before he lifts his paw to get the treat. Do not repeat the verbal cue to get your 
      dog to follow your command. If your dog does not respond the first time, it could be that he does not yet understand 
      the logic of a trick. In this case, continue to practice the cue after your dog touches your hand first, then try to use the cue before he lifts his paw.',
    '/pawstep2.gif',
     'After a week or two, praise your dog with affection and hugs whenever trick goes well rather than handing a treat. Also, as your dog gets more skilled
      with this trick, add in some challenges. For example, practice the trick in different situations and locations where there
       will be distractions (e.g., cars, people, other dogs). ',
    '/pawstep4.gif'
);