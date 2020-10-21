DROP TABLE IF EXISTS quotes CASCADE;
CREATE TABLE quotes (
id SERIAL PRIMARY KEY,
quote VARCHAR NOT NULL,
author TEXT
);

INSERT INTO quotes (quote, author) VALUES (
    '"Scratch a dog and you`ll find a permanent job." - ',
    'Franklin P. Jones'
 
);
INSERT INTO quotes (quote, author) VALUES (
    ' “Anybody who doesn’t know what soap tastes like never washed a dog.” -',
    'Franklin P. Jones'
    );

    INSERT INTO quotes (quote, author) VALUES (
        ' "My dog is half pit-bull, half poodle. Not much of a watchdog, but a vicious gossip." - ',
        'Craig Shoemaker'
    );

    INSERT INTO quotes (quote, author) VALUES (
        ' “As wonderful as dogs can be, they are famous for missing the point.” – ',
        'Jean Ferris'
    );

    INSERT INTO quotes (quote, author) VALUES (
        ' “A well trained dog will make no attempt to share your lunch. He will just make you feel so guilty that you cannot enjoy it.” — ',
        'Helen Thomson'
    );

    INSERT INTO quotes (quote, author) VALUES (
        ' “I wonder if other dogs think poodles are members of a weird religious cult.” — ',
        'Rita Rudner'
    );

    INSERT INTO quotes (quote, author) VALUES (
        ' “You can say any foolish thing to a dog, and the dog will give you a look that says, ‘Wow, you’re right! I never would’ve thought of that!’ ” —',
        'Dave Barry'
    );

    INSERT INTO quotes (quote, author) VALUES (
        ' “Handle every situation like a dog. If you can’t eat it or play with it, just pee on it and walk away.” - ',
        'Unknown'
    );

    INSERT INTO quotes (quote, author) VALUES (
        ' “Every snack you make, every meal you bake, every bite you take…I’ll be watching you.” -',
        'The Pawlice'
    );

INSERT INTO quotes (quote, author) VALUES (
         ' “Some of my best leading men have been dogs and horses.” –',
        'Elizabeth Taylor'
   );