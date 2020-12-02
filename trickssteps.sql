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
    ' As with the teaching of all behaviors, the first step is to get your dog’s full attention. Hold a treat in your hand so
     that he knows you have it, but hold it in a closed fist so that they cannot reach it. Keep the treat very close to the
      dog’s nose, then slowly raise it over the top of their head. They should follow the treat with their eyes and nose,
       looking upward and in the process eventually placing their bottom on the ground.  Make sure you give your dog lots 
       of praise and encouragement, and that you reward them with the treat as soon as they are in a sitting position. 
        Don’t worry about having them hold the position for any length of time for now - just make sure they are consistently
         ending up with their bottom on the ground, and that they are getting more and more used to what you are expecting. ',
    '/sitstep1.gif',
     'After you are comfortable with the fist step, it’s time to introduce a voice command. Begin exactly as before, only this 
     time when your dog’s rear end makes contact with the ground, say “sit” in a firm voice (though never appear angry or
      strict).  Again, you should immediately offer the treat as a reward for sitting. Reinforce the treat reward with a lot
       of praise, because eventually you will phase out the treats, but still need your dog to feel encouraged to perform 
       the command. ',
    '/sitstep2.gif',
     'When you first start training, give your dog a treat each time he sits. Be sure you always offer enthusiastic praise as 
     well. After a week or two, when your dog is reliably sitting while expecting a treat, begin to only offer the treats
      intermittently but continue to give lots of encouragement and praise. You will (slowly) work towards getting the dog 
      to sit without a treat.  ',
    '/sitstep4.gif'
);
    INSERT INTO trickssteps (trick_id, imageon, stepone, imageone, steptwo, imagetwo, stepthree, imagethree) VALUES (
    2,
    '/laystep0.gif',
    'Start with a treat in a closed fist, and make sure your pup knows it is there.  While holding the treat in 
    front of your dog’s nose, slowly move your hand towards the floor, leading the muzzle - the dog’s body should quickly 
    follow.  Practice this several times until your dog begins to anticipate the action and throws their body down before
     your hand has reached the ground.  While you shouldn’t worry too much at this stage about your dog holding the position, 
     make sure to only reward them if they are fully lying down - even if just for a split second!',
    '/laystep1.gif',
     'Introduce the voice command when your dog is constantly lying down on seeing your hand (and their treat) moving towards the floor. 
     Again, speak in a clear, consistent voice when communicating with your dog, and make sure you are giving them lots of encouragement 
     - not just treats.  ',
    '/laystep2.gif',
     'Like with other commands, you should intermittently phase out the treat. You can start experimenting with different environments, 
     as well as asking your dog to lay down when you are not sitting directly in front of them - eventually your dog should respond
      instinctively on hearing the word as you might need to deploy it in an emergency situation. ',
    '/laystep3.gif'
);
    INSERT INTO trickssteps (trick_id, imageon, stepone, imageone, steptwo, imagetwo, stepthree, imagethree) VALUES (
    3,
    '/comestep0.gif',
    'The key to success in getting your dog to come every time is to be seen as a more appealing option than any other.  That means it is
     time to break out some seriously high-value rewards, and really celebrate the behaviour to keep your pup motivated.  Start by getting
      your dog’s attention, and calling them to you, making sure they know there are good things waiting.  This time, we will throw in the
       verbal cue immediately. When they get to you, say ‘come’ or any other chosen verbal cue immediately on giving your dog a treat.
      Practice this regularly at home, and gradually increase distance.',
    '/comestep1.gif',
     'As you increase distance and move to environments with more and more distractions, you can mix it up by running away from your dog
      just as they approach you. Encourage your dog to chase you, but never play games that involve chasing them as this can signal mixed 
      messages.  If your dog is not coming to you most of the time, it might be time to decrease distance again - dogs naturally pay much
       more attention to us when we are physically close to them.',
    '/comestep2.gif',
     'Begin to call your dog in increasingly distracting environments, as well as throwing in different contexts (try lying on your back 
     and calling, or calling your dog when you aren’t in the same room as them).  It can take a long time to really instill this behaviour
      so keep working on it regularly and never let your dog see that you are getting frustrated or irritated (if coming to you seems like
       they might get scolded or punished, it is natural that they will not see coming to you as worthwhile).  Remember, coming to you
        should always feel like the most exciting thing in the world to your dog.',
    '/pawstep3.gif'
);
    INSERT INTO trickssteps (trick_id, imageon, stepone, imageone, steptwo, imagetwo, stepthree, imagethree) VALUES (
    4,
    '/staystep0.gif',
    ' NEEDS CHANGE Sit down on a chair and ask your dog to sit in front of you, wait until you get your dogs full attention. 
   When your dog is sitting nicely, show him a treat and ask him to wait. Slowly place the treat onto your knee whilst
    your dog is watching you. If the dog moves or reaches for the treat take it away very quickly and ask him once again
     to sit and wait. Repeat it as many times as you need to until you can put the treat on your knee
      without the dog moving or trying to take it, always use the word wait. You may start with only a couple of seconds of suspense,
      if you see that your puppy waits, reward him.',
    '/staystep1.gif',
     'Eventually your dog will sit and wait despite the tempting treat on your knee often he will look directly into your eyes,
      pleading for his treat. Now you should experiment with longer waiting times and bigger distance between you and the dog. Keep a 
      treat in your hand and reward your dog only after he remains calm and waits. You might need to step down a bit after a break
       between training and build up to a longer time and greater distance.',
    '/staystep2.gif',
     'Once you can move around your dog freely while they remain in a stay, see if you can quickly pop out of sight and then
      come back to reward them. You could also begin to add in distractions, like toys, or dancing around them to test your 
      dog’s impulse control. However, you should always return to your dog to let them out of the stay. Don’t call your dog 
      out of a stay because this could confuse them.',
    '/staystep3.gif'
);
    INSERT INTO trickssteps (trick_id, imageon, stepone, imageone, steptwo, imagetwo, stepthree, imagethree) VALUES (
    5,
    '/pawstep1.gif',
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
    ' Start by letting your dog wear a collar (or harness) and leash for short periods of time while doing other things around
     the house, be it playing, training, or even feeding.  Either way, your dog should build only positive associations with wearing 
     their leash, and should always be excited to see it as it represents food and/or fun! ',
    '/leashstep1.gif',
     'When you get outside, your dog will want to run off and explore, so it is important to have high-value rewards at hand.
      Keep your dog close to you as you walk and keep attention and rewards regular, only reducing regularity when you are confident
       that they will stay by your side.  ',
    '/pawstep2.gif',
     'If your dog starts pulling in the other direction, stop walking. Stand very still and refuse to move until your dog comes back to 
     you. Do not yank or jerk the leash, and do not drag your dog along with you. If your dog is going after something while on a walk 
     — another dog, a car, be proactive. Try to redirect his attention with a treat and keep him focused on you. ',
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
    '/pawstep0.gif',
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
    '/pawstep3.gif'
);