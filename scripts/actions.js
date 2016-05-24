use emotext_development
db.actions.insert({
	"name": "gack",
	"self_no_arg": "Gaaack!",
	"others_no_arg": "$n gacks with dismay!",
	"self_found": "Appalled, you gack at $N.",
	"others_found": "$n gacks expressively, shooting $N a dismayed look.",
	"vict_found": "$n gacks, and looks your way, dismayed.",
	"self_not_found": "That person isn't here.",
	"self_auto": "*GACK!*",
	"others_auto": "Appalled, $n gacks at $mself!"
})
db.actions.insert({
	"name": "kiss",
	"self_no_arg": "Isn't there someone you want to kiss?",
	"self_found": "You kiss $M.",
	"others_found": "$n kisses $N.",
	"vict_found": "$n kisses you.",
	"self_not_found": "Never around when required.",
	"self_auto": "All the lonely people :("
})
db.actions.insert({
	"name": "bounce",
	"self_no_arg": "BOIINNNNNNGG!",
	"others_no_arg": "$n bounces around with a happy smile.",
	"self_found": "You bounce onto $S lap and wiggle about.",
	"others_found": "$n bounces onto $N's lap and wiggles about.",
	"vict_found": "$n bounces onto your lap and wiggles about.",
	"self_not_found": "You don't see your plaything.",
	"self_auto": "You bounce your head like a basketball.",
	"others_auto": "$n plays basketball with $s head."
})
db.actions.insert({
	"name": "smile",
	"self_no_arg": "You smile happily.",
	"others_no_arg": "$n smiles happily.",
	"self_found": "You smile at $M.",
	"others_found": "$n beams a smile at $N.",
	"vict_found": "$n smiles at you.",
	"self_not_found": "There's no one by that name around.",
	"self_auto": "You smile at yourself.",
	"others_auto": "$n smiles at $mself."
})
db.actions.insert({
	"name": "dance",
	"self_no_arg": "Feels silly, doesn't it?",
	"others_no_arg": "$n dances wildly before you!",
	"self_found": "You lead $M to the dancefloor.",
	"others_found": "$n sends $N across the dancefloor.",
	"vict_found": "$n sends you across the dancefloor.",
	"self_not_found": "Eh, WHO?",
	"self_auto": "You skip and dance around by yourself.",
	"others_auto": "$n skips a light Fandango."
})
db.actions.insert({
	"name": "cackle",
	"self_no_arg": "You cackle gleefully.",
	"others_no_arg": "$n throws back $s head and cackles with insane glee!",
	"self_found": "You cackle gleefully at $N",
	"others_found": "$n cackles gleefully at $N.",
	"vict_found": "$n cackles gleefully at you.  Better keep your distance from $m.",
	"self_not_found": "You can't find a friend to cackle with.",
	"self_auto": "You cackle at yourself.  Now, THAT'S strange!",
	"others_auto": "$n is really crazy now!  $e cackles at $mself."
})
db.actions.insert({
	"name": "laugh",
	"self_no_arg": "You fall down laughing.",
	"others_no_arg": "$n falls down laughing.",
	"self_found": "You laugh at $N mercilessly.",
	"others_found": "$n laughs at $N mercilessly.",
	"vict_found": "$n laughs at you mercilessly.  Hmmmmph.",
	"self_not_found": "You can't find the butt of your joke.",
	"self_auto": "You laugh at yourself.  I would, too.",
	"others_auto": "$n laughs at $mself.  Let's all join in!!!"
})
db.actions.insert({
	"name": "giggle",
	"self_no_arg": "You giggle.",
	"others_no_arg": "$n giggles.",
	"self_found": "You giggle in $S presence.",
	"others_found": "$n giggles at $N's actions.",
	"vict_found": "$n giggles at you.  Hope it's not contagious!",
	"self_not_found": "You giggle by yourself, since you can't find a partner to giggle with.",
	"self_auto": "You giggle at yourself, which makes you giggle at yourself, which makes you ...",
	"others_auto": "$n giggles at $mself.  $e must be nervous or something."
})
db.actions.insert({
	"name": "shake",
	"self_no_arg": "You shake your head.",
	"others_no_arg": "$n shakes $s head.",
	"self_found": "You shake $S hand.",
	"others_found": "$n shakes $N's hand.",
	"vict_found": "$n shakes your hand.",
	"self_not_found": "Sorry good buddy, but that person doesn't seem to be here.",
	"self_auto": "You are shaken by yourself.",
	"others_auto": "$n shakes and quivers like a bowl full of jelly."
})
db.actions.insert({
	"name": "puke",
	"self_no_arg": "You puke...chunks everywhere!!! YUK!",
	"others_no_arg": "$n pukes.",
	"self_found": "You puke on $M.",
	"others_found": "$n pukes on $N.",
	"vict_found": "$n spews vomit and pukes all over your clothing!",
	"self_not_found": "Once again?",
	"self_auto": "You puke on yourself.",
	"others_auto": "$n pukes on $s clothes."
})
db.actions.insert({
	"name": "growl",
	"self_no_arg": "Grrrrrrrrrr...",
	"others_no_arg": "$n growls.",
	"self_found": "Grrrrrrrrrr....take that, $N!!!",
	"others_found": "$n growls at $N.  Better leave the room before the fighting starts.",
	"vict_found": "$n growls at you.  Hey, two can play it that way!",
	"self_not_found": "No one can see you growl that far.",
	"self_auto": "You growl at yourself.  Boy, do you feel bitter!",
	"others_auto": "$n growls at $mself.  This could get interesting..."
})
db.actions.insert({
	"name": "scream",
	"self_no_arg": "ARRRRRRRRRRGH!!!!!",
	"others_no_arg": "$n screams loudly!",
	"self_found": "ARRRRRRRRRRGH!!!!!  Yes, it MUST have been $S fault!!!",
	"others_found": "$n screams loudly at $N.  Better leave before $n blames you, too!!!",
	"vict_found": "$n screams at you!  That's not nice!  *sniff*",
	"self_not_found": "Your lungs can't reach that far!",
	"self_auto": "You scream at yourself.  Yes, that's ONE way of relieving tension!",
	"others_auto": "$n screams loudly at $mself!  Is there a full moon up?"
})
db.actions.insert({
	"name": "comfort",
	"self_no_arg": "Do you feel uncomfortable?",
	"self_found": "You comfort $M.",
	"others_found": "$n comforts $N.",
	"vict_found": "$n comforts you.",
	"self_not_found": "Comfort who?",
	"self_auto": "You make a vain attempt to comfort yourself.",
	"others_auto": "$n has no one to comfort $m but $mself"
})
db.actions.insert({
	"name": "sigh",
	"self_no_arg": "You sigh.",
	"others_no_arg": "$n sighs.",
	"self_found": "You sigh as you think of $M.",
	"others_found": "$n sighs at the sight of $N.",
	"vict_found": "$n sighs as $e thinks of you.  Touching, huh?",
	"self_not_found": "You really sigh, since you don't see your friend.",
	"self_auto": "You sigh at yourself.  You MUST be lonely.",
	"others_auto": "$n sighs at $mself.  What a sorry sight."
})
db.actions.insert({
	"name": "sulk",
	"self_no_arg": "You sulk.",
	"others_no_arg": "$n sulks in the corner."
})
db.actions.insert({
	"name": "hug",
	"self_no_arg": "Hug who?",
	"self_found": "You hug $M.",
	"others_found": "$n hugs $N.",
	"vict_found": "$n hugs you.",
	"self_not_found": "Sorry, friend, I can't see that person here.",
	"self_auto": "You hug yourself.",
	"others_auto": "$n hugs $mself in a vain attempt to get friendship."
})
db.actions.insert({
	"name": "snuggle",
	"self_no_arg": "Who?",
	"self_found": "You snuggle $M.",
	"others_found": "$n snuggles up to $N.",
	"vict_found": "$n snuggles up to you.",
	"self_not_found": "They aren't here.",
	"self_auto": "You snuggle up, getting ready to sleep.",
	"others_auto": "$n snuggles up, getting ready to sleep."
})
db.actions.insert({
	"name": "cuddle",
	"self_no_arg": "Who do you feel like cuddling today?",
	"self_found": "You cuddle $M.",
	"others_found": "$n cuddles $N.",
	"vict_found": "$n cuddles you.",
	"self_not_found": "They aren't here.",
	"self_auto": "You must feel very cuddly indeed ... :)",
	"others_auto": "$n cuddles up to $s shadow.  What a sorry sight."
})
db.actions.insert({
	"name": "nuzzle",
	"self_no_arg": "Nuzzle who??",
	"self_found": "You nuzzle $S neck softly.",
	"others_found": "$n softly nuzzles $N's neck.",
	"vict_found": "$n softly nuzzles your neck.",
	"self_not_found": "No.. they aren't here..",
	"self_auto": "I'm sorry, friend, but that's impossible."
})
db.actions.insert({
	"name": "cry",
	"self_no_arg": "Waaaaah..",
	"others_no_arg": "$n bursts into tears.",
	"self_found": "You cry on $S shoulder.",
	"others_found": "$n cries on $N's shoulder.",
	"vict_found": "$n cries on your shoulder.",
	"self_not_found": "Who's that?",
	"self_auto": "You cry to yourself.",
	"others_auto": "$n sobs quietly to $mself."
})
db.actions.insert({
	"name": "poke",
	"self_no_arg": "Poke who??",
	"self_found": "You poke $M in the ribs.",
	"others_found": "$n pokes $N in the ribs.",
	"vict_found": "$n pokes you in the ribs.",
	"self_not_found": "You can't poke someone who's not here!.",
	"self_auto": "You poke yourself in the ribs, feeling very silly.",
	"others_auto": "$n pokes $mself in the ribs, looking very sheepish."
})
db.actions.insert({
	"name": "accuse",
	"self_no_arg": "Accuse who??",
	"others_no_arg": "$n is in an accusing mood.",
	"self_found": "You look accusingly at $M.",
	"others_found": "$n looks accusingly at $N.",
	"vict_found": "$n looks accusingly at you.",
	"self_not_found": "Accuse somebody who's not even there ??",
	"self_auto": "You accuse yourself.",
	"others_auto": "$n seems to have a bad conscience."
})
db.actions.insert({
	"name": "grin",
	"self_no_arg": "You grin evilly.",
	"others_no_arg": "$n grins evilly.",
	"self_found": "You grin evilly at $M.",
	"others_found": "$n grins evilly at $N.",
	"vict_found": "$n grins evilly at you.  Hmmm.  Better keep your distance.",
	"self_not_found": "You must be delirious.",
	"self_auto": "You grin at youself.  You must be getting very bad thoughts.",
	"others_auto": "$n grins at $mself.  You must wonder what's in $s mind."
})
db.actions.insert({
	"name": "bow",
	"self_no_arg": "You bow deeply.",
	"others_no_arg": "$n bows deeply.",
	"self_found": "You bow before $M.",
	"others_found": "$n bows before $N.",
	"vict_found": "$n bows before you.",
	"self_not_found": "Who's that?",
	"self_auto": "You kiss your toes.",
	"others_auto": "$n folds up like a jacknife and kisses $s own toes."
})
db.actions.insert({
	"name": "applaud",
	"self_no_arg": "Clap, clap, clap.",
	"others_no_arg": "$n gives a round of applause.",
	"self_found": "You clap at $N's actions.",
	"others_found": "$n claps at $N's actions.",
	"vict_found": "$n gives you a round of applause.  You MUST'VE done something good!",
	"self_not_found": "You give your imaginary round of applause to your imaginary friend.",
	"self_auto": "You applaud at yourself.  Boy, are we conceited!",
	"others_auto": "$n applauds at $mself.  Boy, are we conceited!"
})
db.actions.insert({
	"name": "blush",
	"self_no_arg": "Your cheeks are burning.",
	"others_no_arg": "$n blushes.",
	"self_found": "You get all flustered up seeing $M.",
	"others_found": "$n blushes as $e sees $N here.",
	"vict_found": "$n blushes as $e sees you here.  Such an effect on people!",
	"self_not_found": "You blush as you notice that person isn't here.",
	"self_auto": "You blush at your own folly.",
	"others_auto": "$n blushes as $e notices $s boo-boo."
})
db.actions.insert({
	"name": "burp",
	"self_no_arg": "You burp loudly.",
	"others_no_arg": "$n burps loudly.",
	"self_found": "You burp loudly to $M in response.",
	"others_found": "$n burps loudly in response to $N's remark.",
	"vict_found": "$n burps loudly in response to your remark.",
	"self_not_found": "You can't find your victim.",
	"self_auto": "You burp at yourself.",
	"others_auto": "$n burps at $mself.  What a sick sight."
})
db.actions.insert({
	"name": "chuckle",
	"self_no_arg": "You chuckle politely.",
	"others_no_arg": "$n chuckles politely.",
	"self_found": "You chuckle at $S joke.",
	"others_found": "$n chuckles at $N's joke.",
	"vict_found": "$n chuckles at your joke.",
	"self_not_found": "You can't find a friend to chuckle with.",
	"self_auto": "You chuckle at your own joke, since no one else would.",
	"others_auto": "$n chuckles at $s own joke, since none of you would."
})
db.actions.insert({
	"name": "clap",
	"self_no_arg": "You clap your hands together.",
	"others_no_arg": "$n shows $s approval by clapping $s hands together.",
	"self_found": "You clap at $S performance.",
	"others_found": "$n claps at $N's performance.",
	"vict_found": "$n claps at your performance.",
	"self_not_found": "You clap for nothing.",
	"self_auto": "You clap at your own performance.",
	"others_auto": "$n claps at $s own performance."
})
db.actions.insert({
	"name": "cough",
	"self_no_arg": "Yuck, try to cover your mouth next time!",
	"others_no_arg": "$n coughs loudly."
})
db.actions.insert({
	"name": "curtsey",
	"self_no_arg": "You curtsey to your audience.",
	"others_no_arg": "$n curtseys gracefully.",
	"self_found": "You curtsey to $M.",
	"others_found": "$n curtseys gracefully to $N.",
	"vict_found": "$n curtseys gracefully for you.",
	"self_not_found": "You curtsey to no one in particular.",
	"self_auto": "You curtsey to your audience (yourself).",
	"others_auto": "$n curtseys to $mself, since no one is paying attention to $m."
})
db.actions.insert({
	"name": "fart",
	"self_no_arg": "Where are your manners ?",
	"others_no_arg": "$n lets off a real rip-roarer ... a greenish cloud envelops $n!",
	"self_found": "You fart at $M.  Boy, you are sick.",
	"others_found": "$n farts in the direction of $N.  Better flee before $e turns to you!",
	"vict_found": "$n farts in your direction.  You gasp for air.",
	"self_not_found": "You can't hold it that long!",
	"self_auto": "You fart at yourself.  You deserve it.",
	"others_auto": "$n farts at $mself.  Better $m than you."
})
db.actions.insert({
	"name": "flip",
	"self_no_arg": "You flip head over heels.",
	"others_no_arg": "$n flips head over heels.",
	"self_found": "You flip $M over your shoulder.",
	"others_found": "$n flips $N over $s shoulder.",
	"vict_found": "$n flips you over $s shoulder.  Hmmmm.",
	"self_not_found": "You can't find the person.",
	"self_auto": "You tumble all over the room.",
	"others_auto": "$n does some nice tumbling and gymnastics."
})
db.actions.insert({
	"name": "fondle",
	"self_no_arg": "Who needs to be fondled ?",
	"self_found": "You fondly fondle $M.",
	"others_found": "$n fondly fondles $N.",
	"vict_found": "$n fondly fondles you.",
	"self_not_found": "You fondly try to fondle someone not in the room, but who cares.",
	"self_auto": "You fondly fondle yourself, feels funny doesn't it?",
	"others_auto": "$n fondly fondles $mself - this is going too far!!"
})
db.actions.insert({
	"name": "frown",
	"self_no_arg": "You frown disapprovingly.",
	"others_no_arg": "$n frowns.",
	"self_found": "You frown at what $E did.",
	"others_found": "$n frowns at what $N did.",
	"vict_found": "$n frowns at what you did.",
	"self_not_found": "You don't see any reason to frown.",
	"self_auto": "You frown at yourself.  Poor baby.",
	"others_auto": "$n frowns at $mself.  What a sad puppy...."
})
db.actions.insert({
	"name": "gasp",
	"self_no_arg": "You gasp in astonishment.",
	"others_no_arg": "$n gasps in astonishment.",
	"self_found": "You gasp as you realize what $E did.",
	"others_found": "$n gasps as $e realizes what $N did.",
	"vict_found": "$n gasps as $e realizes what you did.",
	"self_not_found": "You need to panic.",
	"self_auto": "You look at yourself and gasp!",
	"others_auto": "$n takes one look at $mself and gasps in astonisment!"
})
db.actions.insert({
	"name": "glare",
	"self_no_arg": "You glare at nothing in particular.",
	"others_no_arg": "$n glares around $m.",
	"self_found": "You glare icily at $M.",
	"others_found": "$n glares at $N.",
	"vict_found": "$n glares icily at you, you feel cold to your bones.",
	"self_not_found": "You try to glare at somebody who is not present.",
	"self_auto": "You glare icily at your feet, they are suddenly very cold.",
	"others_auto": "$n glares at $s feet, what is bothering $m?"
})
db.actions.insert({
	"name": "groan",
	"self_no_arg": "You groan loudly.",
	"others_no_arg": "$n groans loudly.",
	"self_found": "You groan at the sight of $M.",
	"others_found": "$n groans at the sight of $N.",
	"vict_found": "$n groans at the sight of you.",
	"self_not_found": "You see no reason to groan.",
	"self_auto": "You groan as you realize what you have done.",
	"others_auto": "$n groans as $e realizes what $e has done."
})
db.actions.insert({
	"name": "grope",
	"self_no_arg": "Whom do you wish to grope ??",
	"self_found": "Well, what sort of noise do you expect here?",
	"others_found": "$n gropes $N.",
	"vict_found": "$n gropes you.",
	"self_not_found": "Try someone who's here.",
	"self_auto": "You grope yourself - YUCK.",
	"others_auto": "$n gropes $mself - YUCK."
})
db.actions.insert({
	"name": "hiccup",
	"self_no_arg": "*HIC*",
	"others_no_arg": "$n hiccups."
})
db.actions.insert({
	"name": "lick",
	"self_no_arg": "You lick your mouth and smile.",
	"others_no_arg": "$n licks $s mouth and smiles.",
	"self_found": "You lick $N's jawline delicately.",
	"others_found": "$n licks $N's jawline delicately.",
	"vict_found": "$n licks your jawline delicately.",
	"self_not_found": "Lick away, nobody's here with that name.",
	"self_auto": "You lick your own eyebrows.",
	"others_auto": "$n licks $s own eyebrows."
})
db.actions.insert({
	"name": "love",
	"self_no_arg": "You love the whole world.",
	"others_no_arg": "$n loves everybody in the world.",
	"self_found": "You tell your true feelings to $N.",
	"others_found": "$n whispers softly to $N.",
	"vict_found": "$n whispers to you sweet words of love.",
	"self_not_found": "Alas, your love is not present...",
	"self_auto": "Well, we already know you love yourself (lucky someone does !)",
	"others_auto": "$n loves $mself, can you believe it ?"
})
db.actions.insert({
	"name": "moan",
	"self_no_arg": "You start to moan.",
	"others_no_arg": "$n starts moaning.",
	"self_found": "You moan for the loss of $M.",
	"others_found": "$n moans for the loss of $N.",
	"vict_found": "$n moans at the sight of you.  Hmmmm.",
	"self_not_found": "You see no cause to moan.",
	"self_auto": "You moan at yourself.",
	"others_auto": "$n makes $mself moan."
})
db.actions.insert({
	"name": "nibble",
	"self_no_arg": "Nibble on who ?",
	"self_found": "You nibble on $N's ear.",
	"others_found": "$n nibbles on $N's ear.",
	"vict_found": "$n nibbles on your ear.",
	"self_not_found": "Sorry, not present.",
	"self_auto": "You nibble on your OWN ear ???????????????????",
	"others_auto": "$n nibbles on $s OWN ear (I wonder how it is done !!)."
})
db.actions.insert({
	"name": "pout",
	"self_no_arg": "Ah, don't take it so hard.",
	"others_no_arg": "$n pouts."
})
db.actions.insert({
	"name": "ruffle",
	"self_no_arg": "You've got to ruffle SOMEONE.",
	"self_found": "You ruffle $N's hair playfully.",
	"others_found": "$n ruffles $N's hair playfully.",
	"vict_found": "$n ruffles your hair playfully.",
	"self_not_found": "Might be a bit difficult.",
	"self_auto": "You ruffle your hair, wondering how far you can go before the rest think you're crazy.",
	"others_auto": "$n ruffles $s hair - weirdo!"
})
db.actions.insert({
	"name": "shiver",
	"self_no_arg": "Brrrrrrrrr.",
	"others_no_arg": "$n shivers uncomfortably.",
	"self_found": "You shiver at the thought of fighting $M.",
	"others_found": "$n shivers at the thought of fighting $N.",
	"vict_found": "$n shivers at the suicidal thought of fighting you.",
	"self_not_found": "You don't see any reason to shiver.",
	"self_auto": "You shiver to yourself?",
	"others_auto": "$n scares $mself to shivers."
})
db.actions.insert({
	"name": "shrug",
	"self_no_arg": "You shrug.",
	"others_no_arg": "$n shrugs helplessly.",
	"self_found": "You shrug in response to $S question.",
	"others_found": "$n shrugs in response to $N's question.",
	"vict_found": "$n shrugs in response to your question.",
	"self_not_found": "You shrug to no one in particular.",
	"self_auto": "You shrug to yourself.",
	"others_auto": "$n shrugs to $mself.  What a strange person."
})
db.actions.insert({
	"name": "sing",
	"self_no_arg": "You raise your clear (?) voice towards the sky.",
	"others_no_arg": "HEY CLERICS! I COULD USE A HEAL!  $n has begun to sing.",
	"self_found": "You sing a ballad to $M.",
	"others_found": "$n sings a ballad to $N.",
	"vict_found": "$n sings a ballad to you!  How sweet!",
	"self_not_found": "You see no one to sing to.",
	"self_auto": "You sing a little ditty to yourself.",
	"others_auto": "$n sings a little ditty to $mself."
})
db.actions.insert({
	"name": "slap",
	"self_no_arg": "What is the sound of one hand slapping?",
	"self_found": "*thwock!* You slap $N ringingly.",
	"others_found": "*thwock!* $n slaps $N!",
	"vict_found": "$n slaps you stingingly.",
	"self_not_found": "How about slapping someone in the same room as you ??",
	"self_auto": "You slap yourself, silly you.",
	"others_auto": "$n slaps $mself, really strange ..."
})
db.actions.insert({
	"name": "smirk",
	"self_no_arg": "You smirk.",
	"others_no_arg": "$n smirks.",
	"self_found": "You smirk at $S saying.",
	"others_found": "$n smirks at $N's saying.",
	"vict_found": "$n smirks at your saying.",
	"self_not_found": "You want to smirk to whom?",
	"self_auto": "You smirk at yourself.  Okay.....",
	"others_auto": "$n smirks at $s own 'wisdom'."
})
db.actions.insert({
	"name": "snap",
	"self_no_arg": "Eureka!  You snap your fingers.",
	"others_no_arg": "$n snaps $s fingers.",
	"self_found": "You snap back at $M.",
	"others_found": "$n snaps back at $N.",
	"vict_found": "$n snaps back at you!",
	"self_not_found": "You must be very agitated.",
	"self_auto": "You snap yourself to attention.",
	"others_auto": "$n snaps $mself to attention."
})
db.actions.insert({
	"name": "sneeze",
	"self_no_arg": "Gesundheit !",
	"others_no_arg": "$n sneezes."
})
db.actions.insert({
	"name": "snicker",
	"self_no_arg": "You snicker softly.",
	"others_no_arg": "$n snickers softly.",
	"self_found": "You snicker with $M about your shared secret.",
	"others_found": "$n snickers with $N about their shared secret.",
	"vict_found": "$n snickers with you about your shared secret.",
	"self_not_found": "Huh?",
	"self_auto": "You snicker at your own evil thoughts.",
	"others_auto": "$n snickers at $s own evil thoughts."
})
db.actions.insert({
	"name": "sniff",
	"self_no_arg": "You sniff sadly. *SNIFF*",
	"others_no_arg": "$n sniffs sadly.",
	"self_found": "You sniff sadly at the way $E is treating you.",
	"others_found": "$n sniffs sadly at the way $N is treating $m.",
	"vict_found": "$n sniffs sadly at the way you are treating $m.",
	"self_not_found": "You see no reason to sniff.",
	"self_auto": "You sniff sadly at your lost opportunities.",
	"others_auto": "$n sniffs sadly at $mself.  Something MUST be bothering $m."
})
db.actions.insert({
	"name": "snore",
	"self_no_arg": "Zzzzzzzzzzzzzzzzz.",
	"others_no_arg": "$n snores loudly."
})
db.actions.insert({
	"name": "squeeze",
	"self_no_arg": "Where, what, how, WHO ???",
	"self_found": "You squeeze $M fondly.",
	"others_found": "$n squeezes $N fondly.",
	"vict_found": "$n squeezes you fondly.",
	"self_not_found": "Where, what, how, WHO ???",
	"self_auto": "You squeeze yourself - try to relax a little!",
	"others_auto": "$n squeezes $mself."
})
db.actions.insert({
	"name": "stare",
	"self_no_arg": "You stare at the sky.",
	"others_no_arg": "$n stares at the sky.",
	"self_found": "You stare dreamily at $N, completely lost in $S eyes..",
	"others_found": "$n stares dreamily at $N.",
	"vict_found": "$n stares dreamily at you, completely lost in your eyes.",
	"self_not_found": "You stare and stare but can't see that person anywhere...",
	"self_auto": "You stare dreamily at yourself - enough narcissism for now.",
	"others_auto": "$n stares dreamily at $mself - NARCISSIST!"
})
db.actions.insert({
	"name": "strut",
	"self_no_arg": "Strut your stuff.",
	"others_no_arg": "$n struts proudly.",
	"self_found": "You strut to get $S attention.",
	"others_found": "$n struts, hoping to get $N's attention.",
	"vict_found": "$n struts, hoping to get your attention.",
	"self_not_found": "You don't see an audience.",
	"self_auto": "You strut to yourself, lost in your own world.",
	"others_auto": "$n struts to $mself, lost in $s own world."
})
db.actions.insert({
	"name": "thank",
	"self_no_arg": "Thank you too.",
	"self_found": "You thank $N heartily.",
	"others_found": "$n thanks $N heartily.",
	"vict_found": "$n thanks you heartily.",
	"self_not_found": "No one answers to that name here.",
	"self_auto": "You thank yourself since nobody else wants to !",
	"others_auto": "$n thanks $mself since you won't."
})
db.actions.insert({
	"name": "twiddle",
	"self_no_arg": "You patiently twiddle your thumbs.",
	"others_no_arg": "$n patiently twiddles $s thumbs.",
	"self_found": "You twiddle $S ears.",
	"others_found": "$n twiddles $N's ears.",
	"vict_found": "$n twiddles your ears.",
	"self_not_found": "You don't see the person here.",
	"self_auto": "You twiddle your ears like Dumbo.",
	"others_auto": "$n twiddles $s own ears like Dumbo."
})
db.actions.insert({
	"name": "wave",
	"self_no_arg": "You wave.",
	"others_no_arg": "$n waves happily.",
	"self_found": "You wave goodbye to $N.",
	"others_found": "$n waves goodbye to $N.",
	"vict_found": "$n waves goodbye to you.  Have a good journey.",
	"self_not_found": "They didn't wait for you to wave goodbye.",
	"self_auto": "Are you going on adventures as well??",
	"others_auto": "$n waves goodbye to $mself."
})
db.actions.insert({
	"name": "whistle",
	"self_no_arg": "You whistle appreciatively.",
	"others_no_arg": "$n whistles appreciatively.",
	"self_found": "You whistle at the sight of $M.",
	"others_found": "$n whistles at the sight of $N.",
	"vict_found": "$n whistles at the sight of you.",
	"self_not_found": "You don't see nothing special to whistle at.",
	"self_auto": "You whistle a little tune to yourself.",
	"others_auto": "$n whistles a little tune to $mself."
})
db.actions.insert({
	"name": "wiggle",
	"self_no_arg": "Your wiggle your bottom.",
	"others_no_arg": "$n wiggles $s bottom.",
	"self_found": "You wiggle your bottom toward $M.",
	"others_found": "$n wiggles $s bottom toward $N.",
	"vict_found": "$n wiggles $s bottom toward you.",
	"self_not_found": "You must be alone.",
	"self_auto": "You wiggle about like a fish.",
	"others_auto": "$n wiggles about like a fish."
})
db.actions.insert({
	"name": "wink",
	"self_no_arg": "Have you got something in your eye?",
	"others_no_arg": "$n winks suggestively.",
	"self_found": "You wink suggestively at $N.",
	"others_found": "$n winks at $N.",
	"vict_found": "$n winks suggestively at you.",
	"self_not_found": "No one with that name is present.",
	"self_auto": "You wink at yourself ?? - what are you up to?",
	"others_auto": "$n winks at $mself - something strange is going on..."
})
db.actions.insert({
	"name": "yawn",
	"self_no_arg": "You must be tired.",
	"others_no_arg": "$n yawns."
})
db.actions.insert({
	"name": "snowball",
	"self_no_arg": "Who do you want to throw a snowball at?",
	"self_found": "You throw a snowball in $N's face.",
	"others_found": "$n conjures a snowball from the thin air and throws it at $N.",
	"vict_found": "$n conjures a snowball from the thin air and throws it at you.",
	"self_not_found": "You stand with the snowball in your hand because your victim is not here.",
	"self_auto": "You conjure a snowball from the thin air and throw it at yourself.",
	"others_auto": "$n conjures a snowball out of the thin air and throws it at $mself."
})
db.actions.insert({
	"name": "french",
	"self_no_arg": "Kiss whom?",
	"self_found": "You give $N a long and passionate kiss, it seems to last forever...",
	"others_found": "$n kisses $N passionately.",
	"vict_found": "$n gives you a long and passionate kiss, it seems to last forever...",
	"self_not_found": "Your heart is filled with despair as that person is not here.",
	"self_auto": "You gather yourself in your arms and try to kiss yourself.",
	"others_auto": "$n makes an attempt at kissing $mself."
})
db.actions.insert({
	"name": "comb",
	"self_no_arg": "You comb your hair - perfect.",
	"others_no_arg": "$n combs $s hair, what a dashing specimen !",
	"self_found": "You patiently untangle $N's hair - what a mess !",
	"others_found": "$n tries patiently to untangle $N's hair.",
	"vict_found": "$n pulls your hair in an attempt to comb it.",
	"self_not_found": "That person is not here.",
	"self_auto": "You pull your hair, but it will not be combed.",
	"others_auto": "$n tries to comb $s tangled hair."
})
db.actions.insert({
	"name": "massage",
	"self_no_arg": "Massage what?  Thin air?",
	"self_found": "You gently massage $N's shoulders.",
	"others_found": "$n massages $N's shoulders.",
	"vict_found": "$n gently massages your shoulders - Ahhhhhhhhhh...",
	"self_not_found": "You can only massage someone in the same room as you.",
	"self_auto": "You practice yoga as you try to massage yourself.",
	"others_auto": "$n gives a show on yoga-positions, trying to massage $mself."
})
db.actions.insert({
	"name": "tickle",
	"self_no_arg": "Whom do you want to tickle?",
	"self_found": "You tickle $N.",
	"others_found": "$n tickles $N.",
	"vict_found": "$n tickles you - ho ho ho.",
	"self_not_found": "Who is that??",
	"self_auto": "You tickle yourself, how funny!",
	"others_auto": "$n tickles $mself."
})
db.actions.insert({
	"name": "pat",
	"self_no_arg": "Pat who?",
	"self_found": "You pat $N on $S head.",
	"others_found": "$n pats $N on $S head.",
	"vict_found": "$n pats you on your head.",
	"self_not_found": "Who, where, what?",
	"self_auto": "You pat yourself on your head, very reassuring.",
	"others_auto": "$n pats $mself on the head."
})
db.actions.insert({
	"name": "curse",
	"self_no_arg": "You swear loudly for a long time.",
	"others_no_arg": "$n swears : #@*\"*&^*#%@*&! !!!!!",
	"self_found": "You swear at $M.",
	"others_found": "$n swears at $N.",
	"vict_found": "$n swears at you!  Where are the manners?",
	"self_not_found": "You can't find the victim of your frustrations.",
	"self_auto": "You swear at your own mistakes.",
	"others_auto": "$n starts swearing at $mself.  Why don't you help?"
})
db.actions.insert({
	"name": "pray",
	"self_no_arg": "You feel righteous, and maybe a little foolish.",
	"others_no_arg": "$n begs and grovels to the powers that be.",
	"self_found": "You crawl in the dust before $M.",
	"others_found": "$n falls down and grovels in the dirt before $N.",
	"vict_found": "$n kisses the dirt at your feet.",
	"self_not_found": "No such person around; your prayers vanish into the endless voids.",
	"self_auto": "Talk about narcissism...",
	"others_auto": "$n performs some strange yoga-exercises and mumbles a prayer to $mself."
})
db.actions.insert({
	"name": "beg",
	"self_no_arg": "You beg the gods for mercy.",
	"others_no_arg": "The gods fall down laughing at $n's request for mercy.",
	"self_found": "You desperately try to squeeze a few coins from $M.",
	"others_found": "$n begs you for money. You graciously let $m peep at your fortune.",
	"vict_found": "$n begs $N for a dime or two - or twenty !",
	"self_not_found": "Your money-lender seems to be out for the moment.",
	"self_auto": "Begging yourself for money doesn't help."
})
db.actions.insert({
	"name": "cringe",
	"self_no_arg": "You cringe in terror.",
	"others_no_arg": "$n cringes in terror!",
	"self_found": "You cringe away from $M.",
	"others_found": "$n cringes away from $N in mortal terror.",
	"vict_found": "$n cringes away from you.",
	"self_not_found": "I don't see anyone by that name here.. what are you afraid of?",
	"self_auto": "I beg your pardon?"
})
db.actions.insert({
	"name": "daydream",
	"self_no_arg": "You dream of better times.",
	"others_no_arg": "$n looks absent-minded, his eyes staring into space."
})
db.actions.insert({
	"name": "fume",
	"self_no_arg": "Take it easy now! count to ten, very slowly.",
	"others_no_arg": "$n grits $s teeth and fumes with rage.",
	"self_found": "You stare at $M, fuming.",
	"others_found": "$n stares at $N, fuming with rage.",
	"vict_found": "$n stares at you, fuming with rage!",
	"self_not_found": "Fume away... they ain't here.",
	"self_auto": "That's right - hate yourself!",
	"others_auto": "$n clenches $s fists and stomps his feet, fuming with anger."
})
db.actions.insert({
	"name": "grovel",
	"self_no_arg": "You grovel in the dirt.",
	"others_no_arg": "$n grovels in the dirt.",
	"self_found": "You grovel before $M",
	"others_found": "$n grovels in the dirt before $N.",
	"vict_found": "$n grovels in the dirt before you.",
	"self_not_found": "Who?",
	"self_auto": "That seems a little silly to me."
})
db.actions.insert({
	"name": "hop",
	"self_no_arg": "You hop around like a little kid.",
	"others_no_arg": "$n hops around like a little kid."
})
db.actions.insert({
	"name": "nudge",
	"self_no_arg": "Nudge whom?",
	"self_found": "You nudge $M.",
	"others_found": "$n nudges $N.",
	"vict_found": "$n nudges you.",
	"self_not_found": "Who?",
	"self_auto": "You nudge yourself, for some strange reason.",
	"others_auto": "$n nudges $mself, to keep $mself awake."
})
db.actions.insert({
	"name": "ponder",
	"self_no_arg": "You ponder the question.",
	"others_no_arg": "$n sits down and thinks deeply."
})
db.actions.insert({
	"name": "punch",
	"self_no_arg": "Punch whom?",
	"self_found": "You punch $M playfully.",
	"others_found": "$n punches $N playfully.",
	"vict_found": "$n punches you playfully.  OUCH!",
	"self_not_found": "You can't find your boxing partner.",
	"self_auto": "You punch yourself.  You deserve it.",
	"others_auto": "$n punches $mself.  Why don't you join in?"
})
db.actions.insert({
	"name": "snarl",
	"self_no_arg": "You grizzle your teeth and look mean.",
	"others_no_arg": "$n snarls angrily.",
	"self_found": "You snarl at $M.",
	"others_found": "$n snarls at $N.",
	"vict_found": "$n snarls at you, for some reason.",
	"self_not_found": "No need to snarl!",
	"self_auto": "You snarl at yourself.",
	"others_auto": "$n snarls at $mself."
})
db.actions.insert({
	"name": "spank",
	"self_no_arg": "Spank whom?",
	"self_found": "You spank $M playfully.",
	"others_found": "$n spanks $N playfully.",
	"vict_found": "$n spanks you playfully.  OUCH!",
	"self_not_found": "Your hand can't find your victim!",
	"self_auto": "You spank yourself....HMMMMMMM...",
	"others_auto": "$n spanks $mself....HMMMMMMM..."
})
db.actions.insert({
	"name": "hand",
	"self_no_arg": "Kiss whose hand?",
	"self_found": "You kiss $S hand.",
	"others_found": "$n kisses $N's hand.  How continental!",
	"vict_found": "$n kisses your hand.  How continental!",
	"self_not_found": "You can't find a lady in THIS group.",
	"self_auto": "You kiss your own hand.",
	"others_auto": "$n kisses $s own hand."
})
db.actions.insert({
	"name": "yodel",
	"self_no_arg": "You think of Julie Andrews and start to yodel.",
	"others_no_arg": "$n begins to yodel:  HEY!! CLERICS!! I COULD USE A HEAL!!!",
	"self_found": "$N covers $S ears as you begin to yodel.",
	"others_found": "$n yodels to $N.",
	"vict_found": "$n yodels to you...you cringe and turn away.",
	"self_not_found": "That person just escaped!",
	"self_auto": "Well, it's up to you if you want to damage your hearing.",
	"others_auto": "$n yodels to $mself.  What a sado-masochist."
})
db.actions.insert({
	"name": "faint",
	"self_no_arg": "You faint.",
	"others_no_arg": "$n faints.",
	"self_found": "You faint into $S arms.",
	"others_found": "$n faints into $N's open arms.",
	"vict_found": "$n just fainted into YOUR arms.",
	"self_not_found": "You fall on the floor and look stupid--really suave."
})
db.actions.insert({
	"name": "pinch",
	"self_no_arg": "You say, 'A pinch of this, and a dab of that.'",
	"others_no_arg": "$n says, 'A pinch of this and a dab of that.'",
	"self_found": "You squeeze $S bottom and grin.",
	"others_found": "$n pinches $N's bottom and grins.",
	"vict_found": "$n pinches your bottom and grins.",
	"self_not_found": "You'd like to, wouldn't you?",
	"self_auto": "You pinch yourself to see if you are dreaming!",
	"others_auto": "$n pinches $mself to see if $e is dreaming!"
})
db.actions.insert({
	"name": "stroke",
	"self_no_arg": "You stroke the air vaguely.",
	"others_no_arg": "$n makes vague stroking motions.",
	"self_found": "You gently stroke $S inner thigh.  $N inhales sharply.",
	"others_found": "$N exhales sharply and suddenly.",
	"vict_found": "$n gently strokes your inner thigh.  You inhale sharply.",
	"self_not_found": "Maybe you should practice on yourself first.",
	"self_auto": "You are about to do something you'd rather not be caught doing."
})
db.actions.insert({
	"name": "apologize",
	"self_no_arg": "You apologize until you are blue in the face.",
	"others_no_arg": "$n apologizes profusely.",
	"self_found": "You might as well apologize because $E sure as hell won't.",
	"others_found": "$n apologizes to $N with a very sincere look on $s face.",
	"vict_found": "$n apologizes to you and begs for forgiveness.",
	"self_not_found": "Who's that?"
})
db.actions.insert({
	"name": "caress",
	"self_no_arg": "Who do you wish to caress?",
	"others_no_arg": "$n looks for someone to caress.",
	"self_found": "You tenderly caress $M.",
	"others_found": "$n tenderly caresses $N.",
	"vict_found": "$n tenderly caresses your body.",
	"self_not_found": "You're S.O.L., buddy."
})
db.actions.insert({
	"name": "stagger",
	"self_no_arg": "You stagger blindly around the room.",
	"others_no_arg": "$n staggers blindly around the room.",
	"self_found": "You stagger toward $N as the room begins to spin.",
	"others_found": "$n staggers into $N.",
	"vict_found": "$n staggers blindly into you.",
	"self_not_found": "Stagger into whom!?!?"
})
db.actions.insert({
	"name": "snort",
	"self_no_arg": "You snort derisively.",
	"others_no_arg": "$n snorts derisively.",
	"self_found": "You snort derisively at $N.",
	"others_found": "$n snorts derisively at $N.",
	"vict_found": "$n snorts at you.",
	"self_not_found": "Snort at whom?",
	"self_auto": "You snort derisively at yourself.",
	"others_auto": "$n snorts derisively at $sself."
})
db.actions.insert({
	"name": "slobber",
	"self_no_arg": "You slobber down your front.",
	"others_no_arg": "$n slobbers all over $mself.",
	"self_found": "You slobber on $N.",
	"others_found": "$n slobbers on $N  **Yuck**",
	"vict_found": "$n slobbers disgustingly on you.",
	"self_not_found": "Slobber on WHOM?"
})
db.actions.insert({
	"name": "blink",
	"self_no_arg": "You bat your eyelashes.",
	"others_no_arg": "$n blinks innocently.",
	"self_found": "You blink innocently at $N.",
	"others_found": "$n blinks innocently at $N.",
	"vict_found": "$n blinks innocently at you.",
	"self_not_found": "Feign innocence for whom?",
	"self_auto": "You try to convince yourself of your innocence."
})
db.actions.insert({
	"name": "tease",
	"self_no_arg": "What a tease.   SHEESH.",
	"others_no_arg": "$n looks around for someone to tease.",
	"self_found": "You tease $N in a playful way.",
	"others_found": "$n sticks $s tongue out at $N.",
	"vict_found": "$n sticks $s tongue out at you, what a DORK!!",
	"self_not_found": "Tease whom?",
	"self_auto": "You tease yourself. NYAH NYAH NYAH.",
	"others_auto": "$n teases $mself."
})
db.actions.insert({
	"name": "knee",
	"self_no_arg": "You raise one knee, preparing to do justice...",
	"others_no_arg": "$n cocks one knee threateningly.",
	"self_found": "You knee $M hard in the groin.",
	"others_found": "$N doubles over in pain as $n knees $M in the groin!",
	"vict_found": "$n suddenly knees you in the groin!  You fall to your knees in agony.",
	"self_not_found": "Whom do you wish to render impotent?",
	"self_auto": "What ARE you thinking !?!??!?!?!?!"
})
db.actions.insert({
	"name": "flirt",
	"self_no_arg": "You flirt outrageously.",
	"others_no_arg": "$n is an outrageous flirt.",
	"self_found": "You flirt with $N trying to get $S attention.",
	"others_found": "$n flirts with $N, hmmm wonder what $e wants? *wink*",
	"vict_found": "$n flirts with you.",
	"self_not_found": "Sorry no one here to flirt with. :(",
	"self_auto": "You flirt with yourself -- what ARE you trying to gain!?!?!?",
	"others_auto": "$n flirts with $mself, wonder what $e is trying to accomplish?"
})
db.actions.insert({
	"name": "tip",
	"self_no_arg": "You tip your hat gallantly.",
	"others_no_arg": "$n gallantly tips $s hat.",
	"self_found": "You tip your hat to $N.",
	"others_found": "$n gallantly tips $s hat to $N.",
	"vict_found": "$n gallantly tips $s hat to you.",
	"self_not_found": "But there is no one here to impress?!?!"
})
db.actions.insert({
	"name": "lust",
	"self_no_arg": "Your hormones begin to rage.",
	"others_no_arg": "$n has that look of lust in $s eyes --- Get away QUICK!",
	"self_found": "You have lust after $N.",
	"others_found": "$n looks lustily at $N.",
	"vict_found": "$n lusts after your delectable body.",
	"self_not_found": "Whom are you trying to lust after?",
	"self_auto": "Oh, please! You aren't THAT great...",
	"others_auto": "$n lusts after $mself, lonely eh?"
})
db.actions.insert({
	"name": "flutter",
	"self_no_arg": "You flutter your eyelashes seductively.",
	"others_no_arg": "$n flutters $s eyelashes seductively.",
	"self_found": "You flutter your eyelashes at $N, trying to be seductive.",
	"others_found": "$n flirts with $N, flutters $s eyelashes at $M.",
	"vict_found": "$n flutters $s eyelashes at you coyly.",
	"self_not_found": "EH? Can't see them here."
})
db.actions.insert({
	"name": "bark",
	"self_no_arg": "You bark loudly.",
	"others_no_arg": "$n barks like a dog. GO DAWGS SIC 'EM!!! WOOF! WOOF! WOOF! WOOF!",
	"self_found": "You bark at $N scaring $M silly -- SHAME ON YOU!!",
	"others_found": "$n barks at $N scaring $M senseless.",
	"vict_found": "$n barks loudly at you, you back away, because $e might bite too!!",
	"self_not_found": "Bark at whom?",
	"self_auto": "You bark at yourself and jump back in fear.",
	"others_auto": "$n barks at $mself and cowers in fear."
})
db.actions.insert({
	"name": "howl",
	"self_no_arg": "You howl at the moon.",
	"others_no_arg": "$n howls at the moon.",
	"self_found": "You howl soulfully at $N.",
	"others_found": "$n howls at $N.",
	"vict_found": "$n howls soulfully at you.",
	"self_not_found": "Who? What? Where?"
})
db.actions.insert({
	"name": "babble",
	"self_no_arg": "You babble endlessly.",
	"others_no_arg": "$n babbles endlessly, won't $e EVER shut up?",
	"self_found": "You babble to $N for hours on end.",
	"others_found": "$n babbles to $N for what seems an eternity, how can $N stand it?",
	"vict_found": "$n babbles at you. You nod mechanically, hoping $e will shut up soon.",
	"self_not_found": "Whom do you wish to annoy with your babble?",
	"self_auto": "You babble on and on to yourself, FINALLY! someone who LISTENS!!",
	"others_auto": "$n babbles quietly to $mself."
})
db.actions.insert({
	"name": "ramble",
	"self_no_arg": "You ramble on and on.",
	"others_no_arg": "$n rambles on about a boring exploit.",
	"self_found": "You ramble on to $N about your past adventures.",
	"others_found": "$n blithers on and on to $N about something.",
	"vict_found": "$n tells you a rather boring tale, you feign interest.",
	"self_not_found": "??EH??"
})
db.actions.insert({
	"name": "hush",
	"self_no_arg": "SHHHHHHHHHHHHHHHHHHHHHH",
	"others_no_arg": "$n requests everyone quiet down.  Shhhhhhhhhhh...",
	"self_found": "You nicely ask $N to be more quiet.",
	"others_found": "$n nicely asks $N to be more quiet.",
	"vict_found": "$n kindly requests that you please quiet down.",
	"self_not_found": "Who needs to be silenced?",
	"self_auto": "You realize you are loud and obnoxious and try to silence yourself.",
	"others_auto": "$n covers $s mouth in an attempt to silence $mself."
})
db.actions.insert({
	"name": "threaten",
	"self_no_arg": "You threaten everyone with your overwhelming presence.",
	"others_no_arg": "You feel threatened in the presence of the great $n.",
	"self_found": "You stand tall as you threaten $N.",
	"others_found": "$n threatens $N forcefully.",
	"vict_found": "$n threatens you...oooooooh scary *laugh*",
	"self_not_found": "Whom do you wish to intimidate?"
})
db.actions.insert({
	"name": "roll",
	"self_no_arg": "You roll your eyes in disgust.",
	"others_no_arg": "$n rolls $s eyes, disgusted.",
	"self_found": "You look at $N and roll your eyes in disgust.",
	"others_found": "$n rolls $s eyes in disgust at $N.",
	"vict_found": "$n rolls $s eyes at you.",
	"self_not_found": "You should be disgusted with yourself because you look so foolish.",
	"self_auto": "At whom do you wish to roll your eyes?"
})
db.actions.insert({
	"name": "swoon",
	"self_no_arg": "You swoon.",
	"others_no_arg": "$n swoons in absolute ecstasy.",
	"self_found": "You look at $N and swoon in ecstasy.",
	"others_found": "$n looks at $N and swoons in ecstasy.",
	"vict_found": "$n looks at you and swoons in ecstasy.",
	"self_not_found": "Who?"
})
db.actions.insert({
	"name": "bird",
	"self_no_arg": "You flick a bird...How obscene!",
	"others_no_arg": "$n flicks a bird at no one in particular.",
	"self_found": "You shoot a bird at $N.",
	"others_found": "$n gives $N the bird.",
	"vict_found": "$n gives you the bird...What an ass!",
	"self_not_found": "Don't you hate to waste a good obscene gesture like that?"
})
db.actions.insert({
	"name": "eyebrow",
	"self_no_arg": "You raise an eyebrow at the notion.",
	"others_no_arg": "$n raises an eyebrow.",
	"self_found": "You raise your eyebrow at $N.",
	"others_found": "$n raises an eyebrow at $N's weird actions.",
	"vict_found": "$n raises an eyebrow at you.",
	"self_not_found": "Forget it.  They aren't here."
})
db.actions.insert({
	"name": "serenade",
	"self_no_arg": "You raise your voice in a loud serenade to your invisible love.",
	"others_no_arg": "$n raises $s voice to serenade the world.",
	"self_found": "You raise your voice in a loving serenade to $N.",
	"others_found": "$n raises $s voice in a loving serenade to $N.",
	"vict_found": "$n serenades you, you are swept away by $s voice.",
	"self_not_found": "The one that you wish to serenade has left you to sing to yourself.",
	"self_auto": "You sing a loud serenade to yourself.  What type of person are you?!",
	"others_auto": "$n serenades $mself.  What an ego!"
})
db.actions.insert({
	"name": "grimace",
	"self_no_arg": "You grimace painfully at the thought.",
	"others_no_arg": "$n grimaces painfully at the thought.",
	"self_found": "You grimace at $N.",
	"others_found": "$n grimaces at $n.",
	"vict_found": "$n grimaces at you.  What could be wrong?",
	"self_not_found": "You grimace at no one in particular.",
	"self_auto": "You grimace painfully at your thoughts.",
	"others_auto": "$n grimaces painfully to $mself."
})
db.actions.insert({
	"name": "boggle",
	"self_no_arg": "You boggle at the concept.",
	"others_no_arg": "$n boggles at the concept.",
	"self_found": "You boggle at $N.",
	"others_found": "$n boggles at $N.",
	"vict_found": "$n boggles at you.",
	"self_not_found": "Boggle away.  They've left.",
	"self_auto": "You boggle at yourself.  Hmmm...intriguing.",
	"others_auto": "$n boggles quietly to $mself."
})
db.actions.insert({
	"name": "beckon",
	"self_no_arg": "You beckon for everyone to follow.",
	"others_no_arg": "$n beckons for everyone to follow.",
	"self_found": "You beckon for $N to follow -- sure hope they do!",
	"others_found": "$n beckons $N to follow...hmmm what's going on?",
	"vict_found": "$n beckons for you to follow.",
	"self_not_found": "So sorry, that person has already left.",
	"self_auto": "You beckon to your shadow to follow.",
	"others_auto": "$n beckons to $s shadow to follow."
})
db.actions.insert({
	"name": "wonder",
	"self_no_arg": "You wonder about how things could have been.",
	"others_no_arg": "$n gets a blank stare on $s face.  What could $e be wondering about?",
	"self_found": "You look at $N and wonder what will happen.",
	"others_found": "$n looks at $N and wonders....",
	"vict_found": "$n looks at you quizzically.",
	"self_not_found": "You wonder what would have happened had they been here.",
	"self_auto": "You wonder about yourself and your purpose here.",
	"others_auto": "A blank stare crosses $n's face.  What could $e be wondering about?"
})
db.actions.insert({
	"name": "worry",
	"self_no_arg": "You worry about what's going to happen.",
	"others_no_arg": "A troubled look suddenly crosses $n's face.  Wonder what's wrong?",
	"self_found": "You look at $N worriedly.",
	"others_found": "$n looks at $N with a troubled gaze.",
	"vict_found": "$n looks at you worriedly.",
	"self_not_found": "Well they obviously aren't worried -- they left!",
	"self_auto": "You worry about what's going to happen.",
	"others_auto": "A troubled look suddenly crosses $n's face.  Wonder what's wrong?"
})
db.actions.insert({
	"name": "drool",
	"self_no_arg": "You drool down the front of your shirt.",
	"others_no_arg": "$n drools all over $mself -- making a TERRIBLE mess!",
	"self_found": "You drool messily on $N.",
	"others_found": "$n drools upon $N.",
	"vict_found": "$n looks at you lustily and drools.",
	"self_not_found": "Oh fine, make a pool of slobber -- they aren't even here!",
	"self_auto": "You drool down the front of your shirt.",
	"others_auto": "$n drools all over $mself -- making a TERRIBLE mess!"
})
db.actions.insert({
	"name": "nod",
	"self_no_arg": "You nod.",
	"others_no_arg": "$n nods.",
	"self_found": "You nod at $N.",
	"others_found": "$n nods at $N.",
	"vict_found": "$n nods at you in agreement.",
	"self_not_found": "Nod your head off -- they aren't here.",
	"self_auto": "You attempt to nod at yourself and get dizzy instead.",
	"others_auto": "$n nods quietly to $mself.  What a wacko."
})
db.actions.insert({
	"name": "purr",
	"self_no_arg": "MMMMMMEEEEEEEEEOOOOOOOOOOOOOWWWWWWWWWWW!!!!!!!!!!!",
	"others_no_arg": "$n purrs contentedly.",
	"self_found": "You rub up against $N and purr contentedly.",
	"others_found": "$n rubs against $N and purrs contentedly.",
	"vict_found": "$n rubs up against you and purrs contentedly.",
	"self_not_found": "You silly cat!  They aren't here.",
	"self_auto": "You purr quietly to yourself.",
	"others_auto": "$n purrs contentedly to $mself."
})
db.actions.insert({
	"name": "point",
	"self_no_arg": "You point in every direction.",
	"others_no_arg": "$n points excitedly!",
	"self_found": "You point at $N.",
	"others_found": "$n points excitedly at $N!",
	"vict_found": "$n points at you.  How rude!",
	"self_not_found": "You point at no one in particular.",
	"self_auto": "You point at yourself, obviously very confused.",
	"others_auto": "$n points at $mself, obviously very confused."
})
db.actions.insert({
	"name": "rub",
	"self_no_arg": "You rub your hands together in greedy anticipation.",
	"others_no_arg": "$n rubs $s hands together in greedy anticipation.",
	"self_found": "You give $N a nice, long, kinky rubdown.",
	"others_found": "$n gives $N a nice long rubdown.",
	"vict_found": "$n gives you a rubdown, running $s hands over your tense shoulders...Mmmm...",
	"self_not_found": "Shame to waste those talented hands, but they've already left.",
	"self_auto": "You rub yourself...lingering a little too long in some places.",
	"others_auto": "$n rubs $mself...what a creep!"
})
db.actions.insert({
	"name": "bleed",
	"self_no_arg": "You bleed profusely -- making a horrible mess!",
	"others_no_arg": "$n weakly bleeds all over the floor.",
	"self_found": "You bleed on $N -- ewww!",
	"others_found": "$n bleeds on $N.  Watch out, YOU might be next!",
	"vict_found": "$n bleeds on you -- ewww!  Get away!!",
	"self_not_found": "Bleed on whom?",
	"self_auto": "You bleed all over yourself.",
	"others_auto": "$n bleeds profusely all over $mself."
})
db.actions.insert({
	"name": "highfive",
	"self_no_arg": "You jump in the air and give a BIG high five to...umm...absolutely nothing.",
	"others_no_arg": "$n wildly high fives the air, looking very foolish -- very foolish indeed.",
	"self_found": "You jump in the air and give a BIG high five to $N!",
	"others_found": "$n enthusiastically high-five's $N!",
	"vict_found": "$n gives you a BIG high five!  Way to go!!",
	"self_not_found": "Sorry, they have already left.",
	"self_auto": "You try to give yourself a high five.  What ARE you thinking?",
	"others_auto": "$n tries to high five $mself, but ends up looking foolish instead."
})
db.actions.insert({
	"name": "propose",
	"self_no_arg": "You propose to everyone in the room.",
	"others_no_arg": "$n proposes to everyone in the room.  Very odd.",
	"self_found": "You kneel and romantically propose to $N.",
	"others_found": "$n gets on one knee and proposes to $N.",
	"vict_found": "$n gets down on one knee and romantically proposes to you.",
	"self_not_found": "You must be lonely.  They aren't here.",
	"self_auto": "You are SO full of yourself!",
	"others_auto": "$n proposes to $mself -- how narcissistic!"
})
db.actions.insert({
	"name": "peer",
	"self_no_arg": "You peer around yourself intently.",
	"others_no_arg": "$n peers around $mself intently.",
	"self_found": "You peer intently at $N.",
	"others_found": "$n peers intently at $N.",
	"vict_found": "$n peers at you intently.",
	"self_not_found": "They aren't here.",
	"self_auto": "You get a little cross-eyed with your attempts to stare yourself down.",
	"others_auto": "$n peers at $mself, crossing $s eyes in the process."
})
db.actions.insert({
	"name": "worship",
	"self_no_arg": "You prostrate yourself and worship the gods!",
	"others_no_arg": "$n prostrates $mself and worships the gods!",
	"self_found": "You fall on your knees and worship $N.",
	"others_found": "$n falls on $s knees and worships $N.",
	"vict_found": "$n falls to the ground and worships you.",
	"self_not_found": "You can't worship someone who isn't here.",
	"self_auto": "You worship yourself.",
	"others_auto": "$n worships $mself."
})
db.actions.insert({
	"name": "bearhug",
	"self_no_arg": "Whom do you wish to bearhug?",
	"self_found": "You overwhelm $N with a great, big, hulking bearhug.",
	"others_found": "$n encompasses $N in an ENORMOUS bearhug!",
	"vict_found": "$n clutches you tightly in an overwhelming bearhug!",
	"self_not_found": "Perhaps you should shower your affections on someone who is here?",
	"self_auto": "You vainly clutch yourself in a bearhug for consolation.",
	"others_auto": "$n hugs $mself as tightly as possible.  Looks like $e could use a hand."
})
db.actions.insert({
	"name": "innocent",
	"self_no_arg": "You innocently whistle a tune.",
	"others_no_arg": "$n looks around and whistles innocently.",
	"self_found": "You look at $N and bat your eyelashes -- the picture of innocence!",
	"others_found": "$n bats $s eyelashes innocently at $N.",
	"vict_found": "$n looks at you and innocently bats $s eyelashes.",
	"self_not_found": "Don't even TRY -- they've already left."
})
db.actions.insert({
	"name": "collapse",
	"self_no_arg": "You collapse on the floor from exhaustion.",
	"others_no_arg": "$n dramatically collapses to the floor from exhaustion.",
	"self_found": "You collapse right into $N's arms.",
	"others_found": "$n collapses right into $N's arms.",
	"vict_found": "Suddenly, $n collapses into your arms from exhaustion.",
	"self_not_found": "They've already left, just collapse on the floor."
})
db.actions.insert({
	"name": "stretch",
	"self_no_arg": "You lean back and streeeeeettch your arms and legs.",
	"others_no_arg": "$n stretches luxuriously.  Kinda makes you want to doesn't it?"
})
db.actions.insert({
	"name": "spam",
	"self_no_arg": "You mutter, 'spam' quietly to yourself again and again.",
	"others_no_arg": "$n rests in a corner and mutters 'spam' quietly to $mself.",
	"self_found": "You SPAM $N mercilessly!",
	"others_found": "$n spams $N!",
	"vict_found": "You've been SPAMMED by $n!",
	"self_not_found": "Spam away -- they've left."
})
db.actions.insert({
	"name": "boast",
	"self_no_arg": "You boast loudly of all your amazing accomplishments.",
	"others_no_arg": "$n boasts loudly in a pigheaded fashion.",
	"self_found": "You boast to $N of all your great deeds.",
	"others_found": "$n boasts to $N.",
	"vict_found": "Once again, $n boasts to you, what a bloated ego!",
	"self_not_found": "Your ego takes a blow.  They've already left.",
	"self_auto": "You boast to yourself of all your great feats!  Your own biggest fan.",
	"others_auto": "$n boasts to $mself -- what an ego!"
})
db.actions.insert({
	"name": "squirm",
	"self_no_arg": "You squirm uncontrollably in your consternation.",
	"others_no_arg": "$n squirms uncontrollably, suddenly looking very uncomfortable.",
	"self_found": "You look at $N and squirm with delight.",
	"others_found": "$n looks at $N and squirms with delight.",
	"vict_found": "$n looks at you and squirms with delight."
})
db.actions.insert({
	"name": "moo",
	"self_no_arg": "You chew your cud and moo plaintively.  Muh-OOOOO!",
	"others_no_arg": "$n turns cowlike eyes on you, chews $s cud, and moos plaintively.",
	"self_found": "You focus all your bovine Zen on $N, and speak your thoughts.  Muh-OOOOO!",
	"others_found": "Slowly, $n looks at $N, chews $s cud, and muh-OOOOs!",
	"vict_found": "$n moos at you.  What could that possibly mean?",
	"self_not_found": "You'd better find someone else to moo at.",
	"self_auto": "You settle down into the center of your bovine Zen; the foolish world thinks you're just mooing.",
	"others_auto": "$n is mooing at $mself again...  You look for an exit..."
})
db.actions.insert({
	"name": "moon",
	"self_no_arg": "You drop your drawers and moon everyone in the room!",
	"others_no_arg": "$n drops $s pants and gives you the vertical smile!",
	"self_found": "You bend over and moon $N.",
	"others_found": "$n drops $s pants and rudely moons $N!",
	"vict_found": "$n bends over and gives you the vertical smile!",
	"self_not_found": "You stand, with your pants around your ankles, looking VERY silly!",
	"self_auto": "You try to moon yourself, but you can't see your A** that well.",
	"others_auto": "$n nearly goes into convulsions while trying to moon $mself."
})
db.actions.insert({
	"name": "goose",
	"self_no_arg": "Who would you like to goose?",
	"self_found": "You tenderly goose $N on the tush.",
	"others_found": "$n reaches around $N's backside and gooses $M tenderly.",
	"vict_found": "$n gooses you tenderly!",
	"self_not_found": "You should go hunting for another victim, they left.",
	"self_auto": "You pinch yourself on the rear, you must be desperate.",
	"others_auto": "$n pinches $mself on the rear."
})
db.actions.insert({
	"name": "wince",
	"self_no_arg": "You wince in agony.",
	"others_no_arg": "$n winces in agony.",
	"self_found": "You look at $N and wince at $S remark.",
	"others_found": "$n winces at $N's remark.",
	"vict_found": "$n winces at your remark."
})
db.actions.insert({
	"name": "type",
	"self_no_arg": "You can't type for crap tonight!  You give up in frustration!",
	"others_no_arg": "$n throws $s hands up in disgust at $s lousy typing skills!"
})
db.actions.insert({
	"name": "brb",
	"self_no_arg": "Hope to see you soon!",
	"others_no_arg": "$n will be right back!"
})
db.actions.insert({
	"name": "mutter",
	"self_no_arg": "You mutter quietly to yourself.",
	"others_no_arg": "$n mutters something quietly to $mself.",
	"self_found": "You mutter something to $N.",
	"others_found": "$n looks at $N and mutters something nasty under $s breath.",
	"vict_found": "$n looks at you and mutters something nasty under $s breath.",
	"self_not_found": "There's nothing left for you to say, they've left!",
	"self_auto": "You mutter quietly to yourself.",
	"others_auto": "$n mutters something quietly to $mself."
})
db.actions.insert({
	"name": "rofl",
	"self_no_arg": "You roll on the floor, laughing hysterically.",
	"others_no_arg": "$n falls to the ground and rolls around laughing hysterically.",
	"self_found": "You fall to the floor laughing at $N's remark.",
	"others_found": "$n rolls on the floor laughing at $N's antics!",
	"vict_found": "$n rolls on the floor laughing at your antics!"
})
db.actions.insert({
	"name": "sob",
	"self_no_arg": "You sob quietly to yourself.",
	"others_no_arg": "$n sobs in misery.",
	"self_found": "You sob quietly to yourself because $N has hurt your feelings so badly.",
	"others_found": "$n sobs quietly to $mself because $N was a jerk!",
	"vict_found": "You feel like a cad because you've made $n sob."
})
db.actions.insert({
	"name": "pant",
	"self_no_arg": "You pant lustily.",
	"others_no_arg": "$n pants lustily.",
	"self_found": "You pant lustily at $M.",
	"others_found": "$n looks at $N and pants lustily.",
	"vict_found": "$n looks at you and pants lustily..."
})
db.actions.insert({
	"name": "whine",
	"self_no_arg": "You whine to anyone who will listen to you.",
	"others_no_arg": "$n whines pathetically to anyone who will listen.",
	"self_found": "You whine to $M, hoping desperately that at least $E will give a damn.",
	"others_found": "$n whines pathetically to $N.",
	"vict_found": "$n whines pathetically to you.  What a loser!",
	"self_not_found": "They really don't care.",
	"self_auto": "You whine to yourself, probably the only one who will listen.",
	"others_auto": "$n whines to $mself.  At least $e isn't bitching to YOU."
})
db.actions.insert({
	"name": "flex",
	"self_no_arg": "You flex your muscles proudly!",
	"others_no_arg": "$n flexes $s muscles...what a stud!?!",
	"self_found": "You show off to $N, flexing your muscles proudly.",
	"others_found": "$n flexes $s muscles, in a vain attempt to impress $N.",
	"vict_found": "$n flexes $s muscles in a vain attempt to show off to you."
})
db.actions.insert({
	"name": "embrace",
	"self_no_arg": "Who would you like to embrace?",
	"self_found": "You wrap your arms around $N in a warm and loving embrace.",
	"others_found": "$n wraps $s arms around $N in a warm and loving embrace.",
	"vict_found": "$n takes you in $s arms in a warm and loving embrace.",
	"self_not_found": "Your heart breaks as you realize you are alone.",
	"self_auto": "You try to console yourself with a loving embrace.",
	"others_auto": "$n tries to console $mself by wrapping $s arms around $mself."
})
db.actions.insert({
	"name": "duck",
	"self_no_arg": "DUCK!!!!",
	"others_no_arg": "$n ducks defensively.",
	"self_found": "You duck defensively, anticipating the oncoming swipe from $N.",
	"others_found": "$n ducks, anticipating $N's reaction.",
	"vict_found": "$n ducks, please oh please don't hit $m!"
})
db.actions.insert({
	"name": "bonk",
	"self_no_arg": "***BONK!!!***",
	"self_found": "You bonk $N on the head for being such a moron.",
	"others_found": "$n bonks $N on the head for being such an UTTER moron.",
	"vict_found": "$n bonks you on the head for being so foolish.",
	"self_not_found": "***BONK*** they left...",
	"self_auto": "You bonk yourself, fool that you are.",
	"others_auto": "$n bonks $mself and grimaces in pain."
})
db.actions.insert({
	"name": "squeal",
	"self_no_arg": "You squeal with delight!",
	"others_no_arg": "$n lets out a sudden squeal of delight!",
	"self_found": "You look at $N and squeal with delight!",
	"others_found": "$n squeals with delight at $N.",
	"vict_found": "$n looks at you and squeals with delight!"
})
db.actions.insert({
	"name": "tackle",
	"self_no_arg": "You're going to tackle everyone in the room?!",
	"self_found": "You tackle $N playfully.",
	"others_found": "$n playfully tackles $N.",
	"vict_found": "$n brings you down in a playful tackle!"
})
db.actions.insert({
	"name": "spit",
	"self_no_arg": "You spit in utter disgust.",
	"others_no_arg": "$n spits in utter disgust!",
	"self_found": "You spit on $N...you're gross!",
	"others_found": "$n spits on $N.",
	"vict_found": "$n spits on you -- how gross!",
	"self_not_found": "Your victim isn't here.",
	"self_auto": "You spit on yourself, pretty nasty eh?",
	"others_auto": "$n spits on $mself...what a sicko!"
})
db.actions.insert({
	"name": "life",
	"self_no_arg": "You try to get a life, and fail.",
	"others_no_arg": "$n tries to get a life, and fails.",
	"self_found": "$N needs to get a life!",
	"others_found": "$N needs to get a life!",
	"vict_found": "You need to get a life!",
	"self_not_found": "Who needs a life?",
	"self_auto": "But you have none to give!",
	"others_auto": "$n attempts to give $mself a life, but has none to spare."
})
db.actions.insert({
	"name": "mosh",
	"self_no_arg": "You mosh insanely around the room!",
	"others_no_arg": "$n moshes insanely around the room!",
	"self_found": "You mosh sadistically against $N ... you WILL be punished.",
	"others_found": "$n bounces off of $N in a vain attempt to mosh... what a LOSER.",
	"vict_found": "$n slams into you, moshing painfully against you.  That REALLY hurts!",
	"self_not_found": "Hmmm...  your victim found a new dance partner.",
	"self_auto": "Masochist!",
	"others_auto": "$n throws $mself on the floor, grinding $mself into a bloody pulp"
})
db.actions.insert({
	"name": "flinch",
	"self_no_arg": "EEEK... You flinch in obvious pain.",
	"others_no_arg": "$n flinches in obvious pain... you wonder what $e did THIS time.",
	"self_found": "Don't you wish you could just crawl under a rock and die?",
	"others_found": "$n sneaks a glance at $N and flinches.",
	"vict_found": "$n flinches in response to your cold rebuke.",
	"self_not_found": "Relax, $E is gone.",
	"self_auto": "You can't belive what you've done...",
	"others_auto": "$n twitches violently, shocked at $s own behavior."
})
db.actions.insert({
	"name": "air",
	"self_no_arg": "You grab your air guitar and play for all you're worth.",
	"others_no_arg": "$n air-guitars like a mad man ... EXCELLENT!!!",
	"self_found": "You hope $E appreciates your (total lack of) talent.",
	"others_found": "$n is surrounded by air groupies.",
	"vict_found": "$n plays a most excellent tune for you on $s most excellent air guitar.",
	"self_not_found": "Awww... you have no audience!",
	"self_auto": "You play softly to yourself."
})
db.actions.insert({
	"name": "tweak",
	"self_no_arg": "Tweak who?",
	"self_found": "You gently tweak $S cheek.  Isn't $E so CUTE?",
	"others_found": "$n tweaked $N's cheek... don't they look so adorable together?",
	"vict_found": "$n lovingly tweaks your cheek.  It reminds you of Grandma... sniff...",
	"self_not_found": "*Sniff*  That cheek seems to be missing.",
	"self_auto": "You can't DO that."
})
db.actions.insert({
	"name": "peck",
	"self_no_arg": "Wouldn't you like to do that to a person, or do you prefer air?",
	"self_found": "Risking a slap to the face, you give $N a peck on the cheek.",
	"others_found": "$n smiles and gives $N a chaste peck on the cheek.",
	"vict_found": "$n pecks you on the cheek, how sweet!",
	"self_not_found": "I guess you scared them away...",
	"self_auto": "You must REALLY like yourself.",
	"others_auto": "$n tries in vain to wrap $s lips around $s cheeks."
})
db.actions.insert({
	"name": "explode",
	"self_no_arg": "You feel the blood boiling in your veins!",
	"others_no_arg": "$n turns a deep red, fighting to contain $s temper...",
	"self_found": "You feel your rage explode deep in the pit of your stomach...",
	"others_found": "$n burns holes through $N with his explosive anger!",
	"vict_found": "$n is ANGRY with you... I'd run if I were you!!!",
	"self_not_found": "Temper Temper... they left.",
	"self_auto": "Your soul burns brightly then fades to nothing.",
	"others_auto": "$n implodes!!!  Only a grease spot remains where $e once stood."
})
db.actions.insert({
	"name": "raspberry",
	"self_no_arg": "You stick your tongue out at ... well, no one.",
	"others_no_arg": "$n sticks $s tongue out, catching a few flies in the process.",
	"self_found": "You give $N the raspberry... and spit all over yourself.",
	"others_found": "$n gives $N the raspberry... PHBT!  What a mess... Spit EVERYWHERE!",
	"vict_found": "You are splattered with saliva as $n gives you the raspberry... HOW RUDE!",
	"self_not_found": "Hang your tongue out if you like, $e isn't here.",
	"self_auto": "You try to stick your tongue out at yourself... somehow, it isn't the same."
})
db.actions.insert({
	"name": "flash",
	"self_no_arg": "You grin and strut as you open your coat and show what you've got!",
	"others_no_arg": "$n rips $s clothes off and parades naked around the room!",
	"self_found": "Swiftly you jerk open your jacket, trying to get $M to notice you.",
	"others_found": "Cover your eyes, $n is exposing $mself to $n!  EWWWW!",
	"vict_found": "You gasp!  $n has just revealed $s \"equipment\" to you!",
	"self_not_found": "Exhibitionist, that person isn't here!",
	"self_auto": "That's sick.",
	"others_auto": "PERVERT PRESENT!  $n is trying to flash $mself"
})
db.actions.insert({
	"name": "strip",
	"self_no_arg": "You do a slow strip tease for the people...",
	"others_no_arg": "$n begins a slow, erotic strip-tease act...",
	"self_found": "You start to undress $N ... one piece of clothing at a time...",
	"others_found": "$n runs $s hands over $Ns body, slowly stripping away the clothing...",
	"vict_found": "$n has started to strip you... woah BABY!",
	"self_not_found": "Your toy doesn't seem to be here...",
	"self_auto": "You can't DO that in public!"
})
db.actions.insert({
	"name": "undress",
	"self_no_arg": "You start to undress in the shadows, waiting for someone to notice.",
	"others_no_arg": "$n begins to undress... $e is VERY sexy... *Pant*",
	"self_found": "You undress $M with your eyes... Kinky.",
	"others_found": "You feel the temperature of the room rise as $n lusts on $N...",
	"vict_found": "Feeling exposed, you sense $n undressing you with $s eyes...",
	"self_not_found": "They are not here...",
	"self_auto": "A mirror would work better..."
})
db.actions.insert({
	"name": "tongue",
	"self_no_arg": "You slowly give your tongue a nice workout.",
	"self_found": "Mmmm... you give $N a good working over with your tongue...",
	"others_found": "$n slides $s tongue over $N's body...",
	"vict_found": "$n wraps $s tongue around you, moving it across your young, nubile flesh...",
	"self_not_found": "Never around when required...",
	"self_auto": "You slowly tongue yourself.",
	"others_auto": "$n slowly tongues $mself... ICK."
})
db.actions.insert({
	"name": "view",
	"self_no_arg": "You sit back and watch the world go by.",
	"others_no_arg": "$n kicks back and enjoys the view."
})
db.actions.insert({
	"name": "grumble",
	"self_no_arg": "You grumble distractedly to yourself",
	"others_no_arg": "$n grumbles and growls. You wonder what's wrong...",
	"self_found": "You grumble at $N, disgusted with their presence.",
	"others_found": "$n seems to be a grumpy bear... $e is grumbling at poor $N.",
	"vict_found": "$n is grumbling at you... what'd you do?",
	"self_not_found": "That person is presently AWOL.",
	"self_auto": "Why bother?"
})
db.actions.insert({
	"name": "cheer",
	"self_no_arg": "You cheer and dance as the joy within you bursts forth!",
	"others_no_arg": "$n cheers and sings... $e is just BURSTING with joy!",
	"self_found": "You cheer $N on and wish $M good luck!",
	"others_found": "*Yay!*  Go $N!!!  $n cheers $M on.",
	"vict_found": "You are cheered on by $n... you feel so loved!",
	"self_not_found": "Who? Huh? Where?  They're not here, that's for sure",
	"self_auto": "You cheer silently for yourself since nobody else will",
	"others_auto": "$n resorts to cheering for $mself... how sad."
})
db.actions.insert({
	"name": "plead",
	"self_no_arg": "You beg and plead to anyone who will listen.",
	"others_no_arg": "$n pleads $s case to anyone who will listen... You ALMOST feel sorry for $s."
})
db.actions.insert({
	"name": "charge",
	"self_no_arg": "You charge into the fray!",
	"others_no_arg": "$n charges into the fray!  All guts, no brains.",
	"self_found": "With surprising dexterity, you head-butt $N!",
	"others_found": "$n ducks down low, charges forward, and head-butts $N!",
	"vict_found": "OOF!  $n rammed $s head into your stomach!  That HURT.",
	"self_not_found": "Nobody 'round with that name, Mister!",
	"self_auto": "You run your head into a brick wall.  OUCH!"
})
db.actions.insert({
	"name": "criticize",
	"self_no_arg": "Yes, but who?",
	"self_found": "You criticize $M with all the warmth of a snake.",
	"others_found": "With a nasty grin, $n rips apart $Ns efforts.",
	"vict_found": "$n informs you that your attempts need some MAJOR adjustments.",
	"self_not_found": "Where oh where has my victim gone, oh where oh where...",
	"self_auto": "You criticize yourself profusely.",
	"others_auto": "$n tears $mself apart, cursing $s own stupidity."
})
db.actions.insert({
	"name": "run",
	"self_no_arg": "You run away in terror and horror!",
	"others_no_arg": "$n runs away in utter terror!",
	"self_found": "You run away from $N in complete terror!",
	"others_found": "$n runs away from $N in utter terror and horror!",
	"vict_found": "$n runs from you, fearing for $s life!",
	"self_not_found": "No reason to be afraid, they aren't here.",
	"self_auto": "Are you THAT ugly?",
	"others_auto": "$n looks in the mirror, sees $s face, and runs away terrified!"
})
db.actions.insert({
	"name": "judge",
	"self_no_arg": "Yes, but who?",
	"self_found": "You judge $m on a scale of 1 to 10.",
	"others_found": "On a scale from 1 to 10, $n thinks $N is a complete ZERO!!!",
	"vict_found": "$n judges your actions on a scale of 1 to 10 and comes up with ZERO!!!",
	"self_not_found": "They aren't here right now.",
	"self_auto": "You don't REALLY want to do that."
})
db.actions.insert({
	"name": "insane",
	"self_no_arg": "You feel your sanity slipping away...",
	"others_no_arg": "Before your eyes, $n's sanity is slipping away..."
})
db.actions.insert({
	"name": "cover",
	"self_no_arg": "You cover your ears to protect them from the noise.",
	"others_no_arg": "$n covers $s ears to protect them from all the noise.",
	"self_found": "You glare at $N and cover your ears.",
	"others_found": "$n glares at $N and covers $s ears.",
	"vict_found": "$n covers $s ears because of you... you are TOO LOUD!",
	"self_not_found": "They aren't here right now.",
	"self_auto": "No... I don't think so."
})
db.actions.insert({
	"name": "flare",
	"self_no_arg": "You flare your nostrils disdainfully.",
	"others_no_arg": "$n flares $s nostrils disdainfully.",
	"self_found": "You flare your nostrils disdainfully at $N... HOW RUDE!",
	"others_found": "$n flares $s nostrils disdainfully at $N and turns up $s snobbish nose.",
	"vict_found": "$n flares $s nostrils disdainfully at you... what'd you DO???",
	"self_not_found": "Flare if you wish, but that person isn't here to see it.",
	"self_auto": "*Sniff*  But you should LOVE yourself!"
})
db.actions.insert({
	"name": "head",
	"self_no_arg": "You toss your head haughtily.",
	"others_no_arg": "$n tosses $s head haughtily.",
	"self_found": "You toss your head haughtily at $N.",
	"others_found": "$n tosses her head haughtily at $N... what an ATTITUDE!",
	"vict_found": "$n tossed $s head haughtily at you... :(",
	"self_not_found": "That person is AWOL.",
	"self_auto": "Why would you do that?"
})
db.actions.insert({
	"name": "pie",
	"self_no_arg": "You pick up a pie and toss it around for a bit.",
	"others_no_arg": "$n picks up a pie and tosses it around for a bit.",
	"self_found": "You toss a pie at $N and hit $M right in the FACE!",
	"others_found": "$n tosses a pie at $N and hits $m right in the FACE!",
	"vict_found": "$n tossed a pie in your face... and now you are all covered in GOO!",
	"self_not_found": "That person isn't here...",
	"self_auto": "You bury your face in the pie... yummmmm!!! :)",
	"others_auto": "$n buries $s face in the pie, licking the pan clean."
})
db.actions.insert({
	"name": "cower",
	"self_no_arg": "You cower in a corner.",
	"others_no_arg": "$n cowers in a corner and whimpers softly.",
	"self_found": "You cower away from $N and $S harsh words.",
	"others_found": "$n cowers in a corner, terrified that $N will come after $m.",
	"vict_found": "You scared poor $n!  Now $S is cowering in a corner, afraid for $s life.",
	"self_not_found": "That person is AWOL at the moment.",
	"self_auto": "You are afraid of your own shadow!",
	"others_auto": "$n cowers in the corner afraid of $s own shadow"
})
db.actions.insert({
	"name": "noogie",
	"self_no_arg": "You can't noogie the AIR!  It has no head.",
	"self_found": "You grab $N, get $M in a head lock and NOOGIE $M!",
	"others_found": "$n grabs $N in a head lock and NOOGIES $M... ARGH!!!",
	"vict_found": "Oh NO, $n grabs you, throws you in a head lock and NOOGIES you!",
	"self_not_found": "That person has gone off to other lands...",
	"self_auto": "You rub your head and create a static charge...",
	"others_auto": "$n rubs $s OWN head and creates a static charge... *ZAP*"
})
db.actions.insert({
	"name": "yeehaw",
	"self_no_arg": "You mount your pony(?) and shout YEEEEEEEHAAAAAAAW!",
	"others_no_arg": "$n bounces up and down screaming *YEEEEEEHAAAAAAW!*"
})
db.actions.insert({
	"name": "pissed",
	"self_no_arg": "You are PISSED!",
	"others_no_arg": "$n is PISSED so watch out!",
	"self_found": "You turn a stoney gaze toward $N... you are SOOO pissed at $N!",
	"others_found": "$n glares at $n.... $n is SOOO PISSED at $m!",
	"vict_found": "$n is pissed at you now... What do you think $e'll DO?",
	"self_not_found": "That person is not here...",
	"self_auto": "You are PISSED at yourself!",
	"others_auto": "$n is so pissed at $mself.  How could $e be so stupid???"
})
db.actions.insert({
	"name": "passout",
	"self_no_arg": "You belch and pass out.",
	"others_no_arg": "$n is OBVIOUSLY intoxicated... $e burps loudly and passes out!"
})
db.actions.insert({
	"name": "adjust",
	"self_no_arg": "You look around, make sure nobody is watching, and you adjust your \"Tool.\"",
	"others_no_arg": "$n looks around slyly, smiles, then reaches down and \"adjusts\" $mself..."
})
db.actions.insert({
	"name": "scratch",
	"self_no_arg": "You scratch yourself contentedly.",
	"others_no_arg": "$n reaches down and scratches $mself...  Now $e looks VERY happy."
})
db.actions.insert({
	"name": "meditate",
	"self_no_arg": "You assume a very comfortable position and begin to meditate.",
	"others_no_arg": "$n rests and begins to meditate... $e chants softly to $mself."
})
db.actions.insert({
	"name": "bkiss",
	"self_no_arg": "You blow kisses to the air.",
	"others_no_arg": "$n blows kisses at no one in particular.",
	"self_found": "You blow a kiss at $N and wonder if $E will catch it.",
	"others_found": "$n blows a kiss at $N ... isn't $e so CUTE?",
	"vict_found": "$n blows a kiss at you and hopes you'll blow one back at $m.",
	"self_not_found": "You kiss falls to the ground with no one to go to.",
	"self_auto": "You blow a kiss to yourself... isn't the world beautiful?",
	"others_auto": "$n blows a kiss to $mself, obviously very in love."
})
db.actions.insert({
	"name": "beer",
	"self_no_arg": "You pull out a six-pack.",
	"others_no_arg": "$n starts to juggle a six-pack of beer.",
	"self_found": "You toss a bottle of beer at $N.",
	"others_found": "$n tosses a bottle of beer at $N ... let's just hope $e'll catch it!",
	"vict_found": "$n tossed you a bottle of beer... I think $e wants something...",
	"self_not_found": "The bottle crashes to the floor and shatters.",
	"self_auto": "You pop off the top and down a beer.",
	"others_auto": "$n pops the top off a bottle of beer and downs it in one gulp."
})
db.actions.insert({
	"name": "bcatch",
	"self_no_arg": "You reach out and rescue the bottle from its flight.",
	"others_no_arg": "$n reaches out and grabs the bottle of beer tossed to $m."
})
db.actions.insert({
	"name": "claw",
	"self_no_arg": "You tighten your hands into a fist.",
	"others_no_arg": "$n clenches $s fists until blood drips from them...",
	"self_found": "You claw $S eyes out... GROSS!",
	"others_found": "$n buries $s nails in $N's eyes ... OH GOD, THE BLOOD!",
	"vict_found": "$n buries $s nails in your eyes and you are blinded by your own blood!",
	"self_not_found": "They aren't here to claw.",
	"self_auto": "You claw yourself to shreds!",
	"others_auto": "$n rips $mself to shreds with $s fingernails!"
})
db.actions.insert({
	"name": "rose",
	"self_no_arg": "Who would you like to give it to?",
	"self_found": "You give $M a pretty rose.",
	"others_found": "$n hands $N a beautiful rose.",
	"vict_found": "$n hands you a beautiful ---'---,--{@",
	"self_not_found": "They seem to have left.",
	"self_auto": "You give yourself a rose and feel a little sad...",
	"others_auto": "$n gives $mself a rose, dont you feel sorry for $m?"
})
db.actions.insert({
	"name": "laces",
	"self_no_arg": "Whose laces?",
	"self_found": "With the greatest of stealth, you tie $S shoelaces together.",
	"others_found": "$n sneaks up to $N and ties $S shoelaces together.",
	"vict_found": "You try to take a step, and you hit the world facedown!  Someone must have tied your shoelaces together!",
	"self_not_found": "Whose laces?",
	"self_auto": "You tie your own shoelaces together, try to walk, and promptly fall.",
	"others_auto": "$n cleverly ties $s own shoelaces together, tries to walk, and sprawls flat on the floor."
})
db.actions.insert({
	"name": "tag",
	"self_no_arg": "Tag whom?",
	"others_no_arg": "$n casts about for someone to tag.",
	"self_found": ">From nowhere, you pounce on $N and TAG $M remorselessly!  BWAHAHA!!!",
	"others_found": "$n dives from the shadows and TAGS $N.  $N IS IT!",
	"vict_found": "$n pounces on you and >>> TAGS <<< you!  You're IT!",
	"self_not_found": "Who were you going to tag, then?",
	"self_auto": "Unable to catch anyone else, you do the intelligent thing and tag yourself. You're still IT!",
	"others_auto": "Unable to catch anyone else, $n tags $mself.  Are you impressed?"
})
db.actions.insert({
	"name": "tank",
	"self_no_arg": "You boldly offer to tank for your everyone else.  Are you sure you know what you're getting into?",
	"others_no_arg": "$n offers to tank!",
	"self_found": "You offer to tank for $N.",
	"others_found": "$n offers to tank for $N.",
	"vict_found": "$n offers to tank for you!",
	"self_not_found": "Tank for whom?",
	"self_auto": "No one will tank for you, eh?!? WELL, YOU'LL SHOW THEM!  (right?)",
	"others_auto": "In dazzling chivalry, $n offers to tank-- for $mself!"
})
db.actions.insert({
	"name": "starve",
	"self_no_arg": "You show your prominent ribs and hope that someone will take pity.",
	"others_no_arg": "$n is withering before your eyes!  Starvation!",
	"self_found": "You throw yourself upon $S mercy, begging for food.",
	"others_found": "$n begs $N for food.  One would think that magic would have cured hunger by now...",
	"vict_found": "$n is starving before your eyes!  Could you spare some food, please?",
	"self_not_found": "Sorry, but that person isn't around-- looks like you'll starve."
})
db.actions.insert({
	"name": "aargh",
	"self_no_arg": "AAAAAARRRRRRGGGGGGHHHHHH!!!!!!",
	"others_no_arg": "$n throws back $s head and howls in profound frustration!",
	"self_found": "You scream your frustration and grab for $S throat with both hands!",
	"others_found": "$n howls in frustration, and leaps for $N, trying to throttle $M!",
	"vict_found": "$n grabs for your throat with two hands, howling in frustration!",
	"self_not_found": "You get even MORE frustrated when you can't find anyone to throttle!",
	"self_auto": "You scream in frustration at your own stupidity!",
	"others_auto": "$n screams in frustration at $s own stupidity!"
})
db.actions.insert({
	"name": "homework",
	"self_no_arg": "Your suddenly remember that you have to defend your thesis today...",
	"others_no_arg": "$n looks stricken.  Could $e have blown off some important homework?"
})
db.actions.insert({
	"name": "puff",
	"self_no_arg": "You mimic Puff at her most annoying.",
	"others_no_arg": "$n says, \"Did you know that I'm written in C?\""
})
db.actions.insert({
	"name": "yae",
	"self_no_arg": "You sigh, burdened with Yet Another Eeediot.",
	"others_no_arg": "$n sighs, burdened with Yet Another Eeediot.",
	"self_found": "There's Yet Another Eeediot in the room, and you're looking right at $M.",
	"others_found": "$n clearly believes that $N is an Eeediot!",
	"vict_found": "$n glares at you, obviously not impressed with your intelligence.",
	"self_not_found": "There are plenty of Eeediots, but that one doesn't seem to be present.",
	"self_auto": "You bonk yourself for the Eeediot you are!",
	"others_auto": "$n bonks $mself, HARD, and curses $mself for the Eeediot $e is!"
})
db.actions.insert({
	"name": "lightbulb",
	"self_no_arg": "*Ding!*  Inspiration!",
	"others_no_arg": "A light bulb appears above $n's head!"
})
db.actions.insert({
	"name": "voodoo",
	"self_no_arg": "Bad juju like this has to be directed at a person.",
	"others_no_arg": "$n looks hostile for a moment.",
	"self_found": "You stare daggers at $N, jabbing pins into $S effigy.",
	"others_found": "$n glares balefully at $N while stabbing a pin into a voodoo doll.",
	"vict_found": "Your heart lurches in your chest, and fiery pain stabs through your skull!",
	"self_not_found": "Your hatred finds no such target.",
	"self_auto": "You stab a pin into your own voodoo doll!  Agony!",
	"others_auto": "$n jabs a pin into $s own voodoo doll, and twitches in agony!"
})
db.actions.insert({
	"name": "ogg",
	"self_no_arg": "Ogg who?",
	"self_found": "Engage!",
	"others_found": "$n oggs $N's head with photon torpedos!  $N reels.",
	"vict_found": "$n oggs your head with photon torpedos!  You are reeling.",
	"self_not_found": "You can't find your target.",
	"self_auto": "If you do that, the universe will explode.",
	"others_auto": "$n almost oggs $mself, but wisely reconsiders."
})
db.actions.insert({
	"name": "confused",
	"self_no_arg": "Your confusion is showing.",
	"others_no_arg": "$n blinks slowly...",
	"self_found": "You blink slowly, trying to decipher $S comment.",
	"others_found": "$n blinks slowly.  Maybe $N left a word out of $S sentence...",
	"vict_found": "$n blinks slowly.  Maybe you left a word out of your sentence?",
	"self_not_found": "No wonder you're confused."
})
db.actions.insert({
	"name": "beam",
	"self_no_arg": "You beam delightedly at nothing in particular.",
	"others_no_arg": "$n beams broadly at nothing in particular.",
	"self_found": "You dazzle $N with your smile.",
	"others_found": "$n must like $N a great deal to beam at $M so broadly!",
	"vict_found": "$n must like you a great deal to beam at you so broadly!",
	"self_not_found": "You look pretty silly beaming at imaginary friends...",
	"self_auto": "Well, aren't you special?",
	"others_auto": "$n beams at $mself, obviously pleased."
})
db.actions.insert({
	"name": "bite",
	"self_no_arg": "You glare around, muttering \"Bite me...\" under your breath.",
	"others_no_arg": "$n glares around, muttering \"Bite me...\" under $s breath.",
	"self_found": "You bite $N on the neck.",
	"others_found": "$n bites $N on the neck!",
	"vict_found": "$n bites you on the neck.",
	"self_not_found": "Hungry?  No such luck.",
	"self_auto": "You bite your knuckle in anguish.",
	"others_auto": "$n bites $s knuckle in anguish...the tragedy!"
})
db.actions.insert({
	"name": "discodance",
	"self_no_arg": "Groovy!",
	"others_no_arg": "$n discos wildly!",
	"self_found": "You grab $N and disco wildly!  Groovy!",
	"others_found": "$n grabs $N and does $m best Travolta!",
	"vict_found": "$n grabs you and does $m best Travolta!",
	"self_not_found": "It's okay, you can disco solo too."
})
db.actions.insert({
	"name": "scuff",
	"self_no_arg": "You scuff your foot sheepishly.",
	"others_no_arg": "$n scuffs $s foot in the dirt, looking very sheepish.",
	"self_found": "You scuff your foot, avoiding $N's gaze.",
	"others_found": "$n scuffs $s foot and shyly avoids $N's gaze.",
	"vict_found": "$n scuffs $s foot and shyly avoids your gaze.",
	"self_not_found": "They aren't here."
})
db.actions.insert({
	"name": "whap",
	"self_no_arg": "Whap who?",
	"self_found": "You whap $N upside the head!",
	"others_found": "With a resounding WHAP!, $n reprimands $N.",
	"vict_found": "HEY!  $n whaps you upside the head!",
	"self_not_found": "Whiff...",
	"self_auto": "Ow! You give yourself a resounding whap upside the head.",
	"others_auto": "Biff!  $n whaps $mself upside the head!"
})
db.actions.insert({
	"name": "lag",
	"self_no_arg": "Yes, yes.",
	"others_no_arg": "$n is   m o v i n g      v  e    ry  sl  o w   l   y ..."
})
db.actions.insert({
	"name": "chortle",
	"self_no_arg": "Heh.",
	"others_no_arg": "$n chortles mischievously.",
	"self_found": "You chortle mischievously at $N.",
	"others_found": "$n chortles mischievously at $N.",
	"vict_found": "$n chortles mischievously at you.",
	"self_not_found": "Took you a while to get that....they aren't here.",
	"self_auto": "You chortle at your own joke.",
	"others_auto": "$n chortles at $s own joke.  Don't bother."
})
db.actions.insert({
	"name": "zerbert",
	"self_no_arg": "Gotta zerbert SOMEBODY.",
	"self_found": "You lift $N's shirt and blow loudly into $S navel!",
	"others_found": "$n lifts $N's shirt and blows loudly into $S navel!",
	"vict_found": "Yeek!  $n lifts your shirt and blows loudly into your navel!",
	"self_not_found": "You missed.",
	"self_auto": "Careful, people are staring...",
	"others_auto": "$n looks around furtively, and then bends over and blows loudly into $s own navel!"
})
db.actions.insert({
	"name": "twitch",
	"self_no_arg": "You twitch nervously.",
	"others_no_arg": "$n twitches nervously.",
	"self_found": "You twitch involuntarily at $N's presence.",
	"others_found": "$N must really be getting to $n...",
	"vict_found": "$n notices you and twitches.",
	"self_not_found": "Nervous? They aren't even here."
})
db.actions.insert({
	"name": "leer",
	"self_no_arg": "You peer around the room, leering like the pervert you are!",
	"others_no_arg": "$n peers about, leering like a filthy pervert!",
	"self_found": "You leer at $N like the pervert you are.",
	"others_found": "$n eyes $N up and down, leering like a filthy pervert!",
	"vict_found": "$n eyes you up and down, leering like a filthy pervert!",
	"self_not_found": "You'll have to settle for memories -- that person isn't here.",
	"self_auto": "Desperation has reached new heights, hasn't it?",
	"others_auto": "$n leers at $mself shamelessly."
})
db.actions.insert({
	"name": "polite",
	"self_no_arg": "You give a polite little chuckle.",
	"others_no_arg": "$n gives a polite little chuckle.",
	"self_found": "You indicate your underappreciation of $S joke.",
	"others_found": "$n gives a polite little chuckle to $N's joke.",
	"vict_found": "$n gives a politle but unappreciative chuckle to your joke.",
	"self_not_found": "You can't find a friend to chuckle with.",
	"self_auto": "You chuckle at your own joke, since no one else would.",
	"others_auto": "$n chuckles at $s own joke, since none of you would."
})
db.actions.insert({
	"name": "mischievous",
	"self_no_arg": "You give a mischievous smile at the trouble you have in mind.",
	"others_no_arg": "$n grins mischievously at a nasty idea.",
	"self_found": "You grin mischievously at $M, thinking an evil thought.",
	"others_found": "$n grins mischievously at $N.  $m must be thinking something evil.",
	"vict_found": "$n grins mischievously at you.  You inch toward the door.",
	"self_not_found": "You must be delirious.",
	"self_auto": "You grin mischievously to yourself.",
	"others_auto": "$n grins mischievously to $mself."
})
db.actions.insert({
	"name": "accept",
	"self_no_arg": "You accept the proferred apology graciously.",
	"others_no_arg": "$n graciously accepts the proferred apology."
})
db.actions.insert({
	"name": "anticipate",
	"self_no_arg": "You murmur 'Sssssoonnn, my presssssciousssss...'",
	"others_no_arg": "$n murmurs 'Ssssssooonnnn, my pressssscioussss...'"
})
db.actions.insert({
	"name": "shudder",
	"self_no_arg": "You shudder at the horror and repress tears.",
	"others_no_arg": "$n shudders at the horror and represses tears."
})
db.actions.insert({
	"name": "powertrip",
	"self_no_arg": "You scream 'The PPppppPOOOOoooWWWwwwErrRRR!' and writhe.",
	"others_no_arg": "$n writhes, screaming 'The PPppppPOOOOoooWWWwwwErrRRR!'"
})
db.actions.insert({
	"name": "mull",
	"self_no_arg": "You mull over the idea at hand, asking for patience.",
	"others_no_arg": "$n mulls over the idea at hand.  Please be patient."
})
db.actions.insert({
	"name": "wait",
	"self_no_arg": "You wait patiently.",
	"others_no_arg": "$n waits patiently."
})
db.actions.insert({
	"name": "bat",
	"self_no_arg": "You bat your long, dark lashes and smile innocently.",
	"others_no_arg": "$n bats $s long, dark lashes and smiles innocently."
})
db.actions.insert({
	"name": "sage",
	"self_no_arg": "You nod sagely.",
	"others_no_arg": "$n nods sagely."
})
db.actions.insert({
	"name": "contemplate",
	"self_no_arg": "You bite your lip contemplatively.",
	"others_no_arg": "$n bites $s lip contemplatively."
})
db.actions.insert({
	"name": "agree",
	"self_no_arg": "You agree absolutely.",
	"others_no_arg": "$n agrees absolutely.",
	"self_found": "You nod in enthusiastic agreement with $N.",
	"others_found": "$n nods in enthusiastic agreement with $N.",
	"vict_found": "$n nods in enthusiastic agreement with you.",
	"self_not_found": "Sorry, your target is absent.",
	"self_auto": "You find yourself most agreeable.",
	"others_auto": "$n finds $mself the most agreeable being alive."
})
db.actions.insert({
	"name": "toast",
	"self_no_arg": "You raise a glass of champagne in a toast.",
	"others_no_arg": "$n raises $s glass of champagne in a toast.",
	"self_found": "You raise your glass of champagne to $S.",
	"others_found": "$n silently toasts $N.",
	"vict_found": "$n silently toasts you.",
	"self_not_found": "Your object of praise is absent.",
	"self_auto": "You grin evilly and toast yourself.",
	"others_auto": "$n grins evilly and toasts $mself."
})
db.actions.insert({
	"name": "conspire",
	"self_no_arg": "You wink conspiratorily, waiting for the countersign.",
	"others_no_arg": "$n winks conspiratorily, waiting for the countersign.",
	"self_found": "You induct $S into your private conspiracy with a wink.",
	"others_found": "$n winks conspiratorily at $N.  You wonder what this can mean.",
	"vict_found": "$n inducts you into $m private conspiracy with a wink.",
	"self_not_found": "Even you conspire against yourself.",
	"self_auto": "$n is paranoid enough to distrust even $mself."
})
db.actions.insert({
	"name": "support",
	"self_no_arg": "You fully support the plan.",
	"others_no_arg": "$n fully supports the plan.",
	"self_found": "You hug $M supportively and smile.",
	"others_found": "$n hugs $N supportively and smiles.",
	"vict_found": "$n hugs you supportively and smiles.",
	"self_not_found": "Sorry, friend, I can't see that person here.",
	"self_auto": "You hug yourself sadly.",
	"others_auto": "$n hugs $mself sadly.  Perhaps you could help?"
})
db.actions.insert({
	"name": "pound",
	"self_no_arg": "You make vague pounding motions with your fist at the thought.",
	"others_no_arg": "$n makes vague pounding motions with $m fist at the thought.",
	"self_found": "You pound $M into a bloody mass.",
	"others_found": "$n pounds $N into a bloody mass.",
	"vict_found": "$n pounds you into a bloody mass.",
	"self_not_found": "Sorry, friend, I can't see that person here."
})
db.actions.insert({
	"name": "wrist",
	"self_no_arg": "You hold out out a wrist for a slap.",
	"others_no_arg": "$n holds out a wrist for a slap.",
	"self_found": "You slaps $M wrist sharply.",
	"others_found": "$n slaps $N's wrist sharply.",
	"vict_found": "$n slaps your wrist sharply.",
	"self_not_found": "Sorry, friend, I can't see that person here.",
	"self_auto": "You slap your own wrist.",
	"others_auto": "$n slaps $m own wrist."
})
db.actions.insert({
	"name": "romeo",
	"self_no_arg": "You light up a Romeo y Julietta cigar and puff contentedly.",
	"others_no_arg": "$n lights up a Romeo y Julietta cigar and puffs contentedly."
})
db.actions.insert({
	"name": "camel",
	"self_no_arg": "You pretend you are a camel.",
	"others_no_arg": "$n pretends to be a camel.",
	"self_found": "You light a Camel cigarette for $M.",
	"others_found": "$n lights a Camel cigarette for $N.",
	"vict_found": "$n lights a Camel cigarette for you.",
	"self_not_found": "You don't see that personhere.",
	"self_auto": "You light a Camel cigarette and inhale sharply.",
	"others_auto": "$n lights a Camel cigarette and inhales sharply."
})
db.actions.insert({
	"name": "whip",
	"self_no_arg": "You crack your bullwhip menacingly.",
	"others_no_arg": "$n cracks a bullwhip menacingly.",
	"self_found": "You flick your whip across $M bare back.",
	"others_found": "$n flicks $s whip across $N's bare back.",
	"vict_found": "$n flicks a whip across your back... the pain.. the pleasure..",
	"self_not_found": "Sorry, friend, I can't see that person here.",
	"self_auto": "You whip yourself into a frenzy.",
	"others_auto": "$n whips $mself into a frenzy."
})
db.actions.insert({
	"name": "cramp",
	"self_no_arg": "You gasp and clutch your abdomen, wheezing with the pain.",
	"others_no_arg": "$n gasps and clutches $m abdomen in agony.",
	"self_found": "You hammerlock $M, screaming, \"AAAAARRRRRGH!! I HAVE A CRAMP!!!\"",
	"others_found": "$n hammerlocks $N, screaming, \"AAAAARRRRRGH!! I HAVE A CRAMP!!!\".",
	"vict_found": "$n hammerlocks you, screaming \"AAAAARRRRRGH!! I HAVE A CRAMP!!!\"",
	"self_not_found": "Suffering as you are, you didn't see that person slip out."
})
db.actions.insert({
	"name": "make",
	"self_no_arg": "You breathe heavily and wetly.",
	"others_no_arg": "$n breathes heavily and wetly.",
	"self_found": "You steam up the windows with $M.",
	"others_found": "$n and $N start steaming up the windows.",
	"vict_found": "$n starts steaming up the windows with you.",
	"self_not_found": "Sorry, friend, I can't see that person here."
})
db.actions.insert({
	"name": "sweep",
	"self_no_arg": "You look at your empty arms and sigh.",
	"others_no_arg": "$n looks at $s empty arms and sighs.",
	"self_found": "You sweep $M into your arms and kiss $M long and deeply.",
	"others_found": "$n sweeps $N into $s arms and kisses $M long and deeply.",
	"vict_found": "$n sweeps you into $s arms and kisses you long and deeply.",
	"self_not_found": "The object of your kiss is absent."
})
db.actions.insert({
	"name": "buff",
	"self_no_arg": "You buff your nails on your cloak.",
	"others_no_arg": "$n buffs $s nails on $s cloak."
})
db.actions.insert({
	"name": "liver",
	"self_no_arg": "You look angrily for someone to disembowel.",
	"others_no_arg": "$n angrily for someone to disembowel.",
	"self_found": "You rip out $S liver and eat it.",
	"others_found": "$n rips out $N's liver and eats it.",
	"vict_found": "$n rips out your liver and eats it.",
	"self_not_found": "The object of your wrath is absent."
})
db.actions.insert({
	"name": "wrestle",
	"self_found": "You wrestle $M to the floor and pin $M there.",
	"others_found": "$n wrestles $N to the floor, pinning $M there.",
	"vict_found": "$n wrestles you to the floor and pins you.",
	"self_not_found": "Sorry, friend, I can't see that person here.",
	"self_auto": "You wrestle with your conscience.",
	"others_auto": "$n wrestles with $m conscience."
})
db.actions.insert({
	"name": "tie",
	"self_no_arg": "You toy with a pair of handcuffs suggestively.",
	"others_no_arg": "$n toys suggestively with a pair of handcuffs.",
	"self_found": "You grab $N and tie $M to the bedposts.",
	"others_found": "$n grabs $N and ties $S to a four poster bed.",
	"vict_found": "$n grabs you and ties you securely to a four poster bed.",
	"self_not_found": "Sorry, friend, I can't see that person here."
})
db.actions.insert({
	"name": "tight",
	"self_found": "You hold $M tightly in your arms.",
	"others_found": "$n holds $N tightly in $m arms.",
	"vict_found": "$n holds you in $m arms.",
	"self_not_found": "Sorry, friend, I can't see that person here."
})
db.actions.insert({
	"name": "fatality",
	"self_found": "You intone, '$N wins.  Fatality.'",
	"others_found": "$n intones, '$N wins.  Fatality.'",
	"vict_found": "$n intones, '$N wins.  Fatality.'"
})
db.actions.insert({
	"name": "yowl",
	"self_no_arg": "You yowl in frustration.",
	"others_no_arg": "$n yowls in frustration!"
})
db.actions.insert({
	"name": "silly",
	"self_no_arg": "You do the silly walk all around the room.",
	"others_no_arg": "$n does the silly walk all around the room.  $e *is* silly."
})
