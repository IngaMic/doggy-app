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
      dog’s nose, then slowly raise it over the top of their head. They should follow the treat with their nose,
       looking upward and eventually placing their bottom on the ground.  Make sure you give your dog lots 
       of praise, and reward them with the treat as soon as they are in a sitting position. 
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
    '/comestep3.gif'
);
    INSERT INTO trickssteps (trick_id, imageon, stepone, imageone, steptwo, imagetwo, stepthree, imagethree) VALUES (
    4,
    '/staystep0.gif',
    ' Teaching your dog to stay will take a lot of patience so start small and reward
big. Begin by getting your dog’s attention with a treat and asking them to sit.
Hold an open palm in front of them and say “stay”, as always in a firm tone of
voice. Once you have their attention, hold it for as long as possible, even if that’s
just a moment or two at first. You will be able to gauge quite quickly when your
dog is about to break their ‘stay’, and move for the treat, so be quick to reward
them before this happens. You should always be setting your dog up for success
and building on that. ',
    '/staystep1.gif',
     'When you have managed to consistently get your dog to stay put for at least 6-
10 seconds at a time, start incorporating a step away from them, maintaining the
hand gesture and voice command as you do so. Progress will likely be slow
going as dogs do have a hard time sitting still but perseverance and repetition
are both keys to success. Build up half a step at a time, and as before, always
try to spot when your dog’s focus starts to fade, rewarding them before they
break their stay. ',
    '/staystep2.gif',
     'Increase distance and time regularly as well as introducing more distracting
environments. It is a good idea to keep a reward at hand while training ‘stay’
longer than you would with most other commands, as even the best trained dogs
can sometimes give in to impulse on occasion. Importantly, you shouldn’t end
the stay by calling your dog to you - always go to them before releasing, as
otherwise they can easily become confused.',
    '/staystep3.gif'
);
    INSERT INTO trickssteps (trick_id, imageon, stepone, imageone, steptwo, imagetwo, stepthree, imagethree) VALUES (
    5,
    '/leashstep0.gif',
    ' Start by letting your dog wear a collar (or harness) and leash for short periods of time while doing other things around
     the house, be it playing, training, or even feeding.  Either way, your dog should build only positive associations with wearing 
     their leash, and should always be excited to see it as it represents food and/or fun! ',
    '/leashstep1.gif',
     'When you get outside, your dog will want to run off and explore, so it is important to have high-value rewards at hand.
      Keep your dog close to you as you walk and keep attention and rewards regular, only reducing regularity when you are confident
       that they will stay by your side.  ',
    '/leashstep2.gif',
     'If your dog starts pulling in the other direction, stop walking. Stand very still and refuse to move until your dog comes back to 
     you. Do not yank or jerk the leash, and do not drag your dog along with you. If your dog is going after something while on a walk 
     — another dog, a car, be proactive. Try to redirect his attention with a treat and keep him focused on you. ',
    '/leashstep3.gif'
);
    INSERT INTO trickssteps (trick_id, imageon, stepone, imageone, steptwo, imagetwo, stepthree, imagethree) VALUES (
    6,
    '/pawstep0.gif',
    ' The first step is to get your dogs full attention. Start at a sitting position, show 
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
    INSERT INTO trickssteps (trick_id, imageon, stepone, imageone, steptwo, imagetwo, stepthree, imagethree) VALUES (
    7,
    '/pawsupstep0.gif',
    'The goal is to have your dog sit up on their hind legs and hold the position. This
is not a natural position for a dog to sit in, so it is absolutely crucial that you do
not push them and that you recognize any signs of discomfort so you can stop at
the right time. Start with a treat in a closed fist held right above your dog`s nose.
raise your hand straight up and your dog should follow it with his head until his
front paws come off the ground. As soon as his paws leave the ground reward
him. Repeat this behaviour, letting your hand rise slightly higher each time. It is
a good idea to let your dog use your arm or shoulder for balance if they need to,
as it might take some time to build the muscles necessary to hold this position.  ',
    '/pawsupstep1.gif',
     'When they are comfortable with this routine and you notice they are already
holding the position themselves for a moment or two before being rewarded, you
can start to introduce the voice command. At the exact moment you reward
them, say "paws up" or any other chosen cue word. Now you can also start to
gradually increase the amount of time your dog sits fully upright before
rewarding, letting your dog get used to the position over time.',
    '/pawsupstep2.gif',
     'Patience really is key when practicing this trick, so when you begin to phase out
the reward, take it much slower than you would with other trainings. It is a good
idea to pepper this training in amongst others, rather than focus on it for long
stretches of time, as it can be physically challenging for a lot of dogs.',
    '/pawsupstep3.gif'
);
  INSERT INTO trickssteps (trick_id, imageon, stepone, imageone, steptwo, imagetwo, stepthree, imagethree) VALUES (
    8,
    '/pawstep1.gif',
    ' If your dog already sits on command, you are off to a good start. If you already know "paw" trick, it will also be easier
    because your dog is used to having his paws touched. While this is a fairly easy trick for your dog to learn,
     it takes repetition and consistency for him to retain it.',
    '/pawstep1.gif',
     'After you are comfortable with the first step it is time to introduce the voice command.',
    '/pawstep2.gif',
     'When you first start training with the treat..',
    '/pawstep3.gif'
);
    INSERT INTO trickssteps (trick_id, imageon, stepone, imageone, steptwo, imagetwo, stepthree, imagethree) VALUES (
    9,
    '/bangstep0.gif',
    ' Your dog should have by now fully mastered the lay command, so the first step is
to have them lay down. Hold a treat in a closed fist and hold it behind their ear
before moving your hand slowly to the back of their head. Your dog should
follow the treat with their head and eventually shift their weight on to their side.
You should not force your dog onto their side but if they aren`t quite getting it, a
gentle nudge won`t hurt.
 ',
    '/bangstep1.gif',
     'Next we will introduce the voice command. As soon as your pup reaches the
desired position, say in a loud clear voice "bang", or any other command you
have decided on - remembering of course to keep it consistent. As this involves
more than one movement (i.e. laying down and then rolling onto their side) it is a
good idea to gradually begin to say the command earlier and earlier in the
process, so they join the dots that this is one full trick, not just two tied together.',
    '/bangstep2.gif',
     'Finally, we can introduce the hand gesture. Before you say "Bang", show a
finger-gun to your dog. If they struggle to grasp what you are asking, you can
always repeat the process of leading them from behind the ear and phase this
out until they get the picture.',
    '/bangstep3.gif'
);


