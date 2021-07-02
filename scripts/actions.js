db.actions.insert({
	"name": "gack",
	"self_no_arg": { "all": "Gaaack!" },
	"others_no_arg": { "all": "$n gacks with dismay!" },
	"self_found": { "all": "Appalled, you gack at $N." },
	"others_found": { "all": "$n gacks expressively, shooting $N a dismayed look." },
	"vict_found": { "all": "$n gacks, and looks your way, dismayed." },
	"self_not_found": { "all": "That person isn't here." },
	"self_auto": { "all": "*GACK!*" },
	"others_auto": { "male": "Appalled, $n gacks at himself!", "female": "Appalled, $n gacks at herself!", "neutral": "Appalled, $n gacks at itself!"},
	})
db.actions.insert({
	"name": "kiss",
	"self_no_arg": { "all": "Isn't there someone you want to kiss?" },
		"self_found": { "male": "You kiss him.", "female": "You kiss her.", "neutral": "You kiss it."},
	"others_found": { "all": "$n kisses $N." },
	"vict_found": { "all": "$n kisses you." },
	"self_not_found": { "all": "Never around when required." },
	"self_auto": { "all": "All the lonely people :(" },
	})
db.actions.insert({
	"name": "bounce",
	"self_no_arg": { "all": "BOIINNNNNNGG!" },
	"others_no_arg": { "all": "$n bounces around with a happy smile." },
	"self_found": { "male": "You bounce onto his lap and wiggle about.", "female": "You bounce onto her lap and wiggle about.", "neutral": "You bounce onto it lap and wiggle about."},
	"others_found": { "all": "$n bounces onto $N's lap and wiggles about." },
	"vict_found": { "all": "$n bounces onto your lap and wiggles about." },
	"self_not_found": { "all": "You don't see your plaything." },
	"self_auto": { "all": "You bounce your head like a basketball." },
	"others_auto": { "male": "$n plays basketball with his head.", "female": "$n plays basketball with her head.", "neutral": "$n plays basketball with it head."},
	})
db.actions.insert({
	"name": "smile",
	"self_no_arg": { "all": "You smile happily." },
	"others_no_arg": { "all": "$n smiles happily." },
	"self_found": { "male": "You smile at him.", "female": "You smile at her.", "neutral": "You smile at it."},
	"others_found": { "all": "$n beams a smile at $N." },
	"vict_found": { "all": "$n smiles at you." },
	"self_not_found": { "all": "There's no one by that name around." },
	"self_auto": { "all": "You smile at yourself." },
	"others_auto": { "male": "$n smiles at himself.", "female": "$n smiles at herself.", "neutral": "$n smiles at itself."},
	})
db.actions.insert({
	"name": "dance",
	"self_no_arg": { "all": "Feels silly, doesn't it?" },
	"others_no_arg": { "all": "$n dances wildly before you!" },
	"self_found": { "male": "You lead him to the dancefloor.", "female": "You lead her to the dancefloor.", "neutral": "You lead it to the dancefloor."},
	"others_found": { "all": "$n sends $N across the dancefloor." },
	"vict_found": { "all": "$n sends you across the dancefloor." },
	"self_not_found": { "all": "Eh, WHO?" },
	"self_auto": { "all": "You skip and dance around by yourself." },
	"others_auto": { "all": "$n skips a light Fandango." },
	})
db.actions.insert({
	"name": "cackle",
	"self_no_arg": { "all": "You cackle gleefully." },
	"others_no_arg": { "male": "$n throws back his head and cackles with insane glee!", "female": "$n throws back her head and cackles with insane glee!", "neutral": "$n throws back it head and cackles with insane glee!"},
	"self_found": { "all": "You cackle gleefully at $N" },
	"others_found": { "all": "$n cackles gleefully at $N." },
	"vict_found": { "male": "$n cackles gleefully at you.  Better keep your distance from him.", "female": "$n cackles gleefully at you.  Better keep your distance from her.", "neutral": "$n cackles gleefully at you.  Better keep your distance from it."},
	"self_not_found": { "all": "You can't find a friend to cackle with." },
	"self_auto": { "all": "You cackle at yourself.  Now, THAT'S strange!" },
	"others_auto": { "male": "$n is really crazy now!  he cackles at himself.", "female": "$n is really crazy now!  she cackles at herself.", "neutral": "$n is really crazy now!  it cackles at itself."},
	})
db.actions.insert({
	"name": "laugh",
	"self_no_arg": { "all": "You fall down laughing." },
	"others_no_arg": { "all": "$n falls down laughing." },
	"self_found": { "all": "You laugh at $N mercilessly." },
	"others_found": { "all": "$n laughs at $N mercilessly." },
	"vict_found": { "all": "$n laughs at you mercilessly.  Hmmmmph." },
	"self_not_found": { "all": "You can't find the butt of your joke." },
	"self_auto": { "all": "You laugh at yourself.  I would, too." },
	"others_auto": { "male": "$n laughs at himself.  Let's all join in!!!", "female": "$n laughs at herself.  Let's all join in!!!", "neutral": "$n laughs at itself.  Let's all join in!!!"},
	})
db.actions.insert({
	"name": "giggle",
	"self_no_arg": { "all": "You giggle." },
	"others_no_arg": { "all": "$n giggles." },
	"self_found": { "male": "You giggle in his presence.", "female": "You giggle in her presence.", "neutral": "You giggle in it presence."},
	"others_found": { "all": "$n giggles at $N's actions." },
	"vict_found": { "all": "$n giggles at you.  Hope it's not contagious!" },
	"self_not_found": { "all": "You giggle by yourself, since you can't find a partner to giggle with." },
	"self_auto": { "all": "You giggle at yourself, which makes you giggle at yourself, which makes you ..." },
	"others_auto": { "male": "$n giggles at himself.  he must be nervous or something.", "female": "$n giggles at herself.  she must be nervous or something.", "neutral": "$n giggles at itself.  it must be nervous or something."},
	})
db.actions.insert({
	"name": "shake",
	"self_no_arg": { "all": "You shake your head." },
	"others_no_arg": { "male": "$n shakes his head.", "female": "$n shakes her head.", "neutral": "$n shakes it head."},
	"self_found": { "male": "You shake his hand.", "female": "You shake her hand.", "neutral": "You shake it hand."},
	"others_found": { "all": "$n shakes $N's hand." },
	"vict_found": { "all": "$n shakes your hand." },
	"self_not_found": { "all": "Sorry good buddy, but that person doesn't seem to be here." },
	"self_auto": { "all": "You are shaken by yourself." },
	"others_auto": { "all": "$n shakes and quivers like a bowl full of jelly." },
	})
db.actions.insert({
	"name": "puke",
	"self_no_arg": { "all": "You puke...chunks everywhere!!! YUK!" },
	"others_no_arg": { "all": "$n pukes." },
	"self_found": { "male": "You puke on him.", "female": "You puke on her.", "neutral": "You puke on it."},
	"others_found": { "all": "$n pukes on $N." },
	"vict_found": { "all": "$n spews vomit and pukes all over your clothing!" },
	"self_not_found": { "all": "Once again?" },
	"self_auto": { "all": "You puke on yourself." },
	"others_auto": { "male": "$n pukes on his clothes.", "female": "$n pukes on her clothes.", "neutral": "$n pukes on it clothes."},
	})
db.actions.insert({
	"name": "growl",
	"self_no_arg": { "all": "Grrrrrrrrrr..." },
	"others_no_arg": { "all": "$n growls." },
	"self_found": { "all": "Grrrrrrrrrr....take that, $N!!!" },
	"others_found": { "all": "$n growls at $N.  Better leave the room before the fighting starts." },
	"vict_found": { "all": "$n growls at you.  Hey, two can play it that way!" },
	"self_not_found": { "all": "No one can see you growl that far." },
	"self_auto": { "all": "You growl at yourself.  Boy, do you feel bitter!" },
	"others_auto": { "male": "$n growls at himself.  This could get interesting...", "female": "$n growls at herself.  This could get interesting...", "neutral": "$n growls at itself.  This could get interesting..."},
	})
db.actions.insert({
	"name": "scream",
	"self_no_arg": { "all": "ARRRRRRRRRRGH!!!!!" },
	"others_no_arg": { "all": "$n screams loudly!" },
	"self_found": { "male": "ARRRRRRRRRRGH!!!!!  Yes, it MUST have been his fault!!!", "female": "ARRRRRRRRRRGH!!!!!  Yes, it MUST have been her fault!!!", "neutral": "ARRRRRRRRRRGH!!!!!  Yes, it MUST have been it fault!!!"},
	"others_found": { "all": "$n screams loudly at $N.  Better leave before $n blames you, too!!!" },
	"vict_found": { "all": "$n screams at you!  That's not nice!  *sniff*" },
	"self_not_found": { "all": "Your lungs can't reach that far!" },
	"self_auto": { "all": "You scream at yourself.  Yes, that's ONE way of relieving tension!" },
	"others_auto": { "male": "$n screams loudly at himself!  Is there a full moon up?", "female": "$n screams loudly at herself!  Is there a full moon up?", "neutral": "$n screams loudly at itself!  Is there a full moon up?"},
	})
db.actions.insert({
	"name": "comfort",
	"self_no_arg": { "all": "Do you feel uncomfortable?" },
		"self_found": { "male": "You comfort him.", "female": "You comfort her.", "neutral": "You comfort it."},
	"others_found": { "all": "$n comforts $N." },
	"vict_found": { "all": "$n comforts you." },
	"self_not_found": { "all": "Comfort who?" },
	"self_auto": { "all": "You make a vain attempt to comfort yourself." },
	"others_auto": { "male": "$n has no one to comfort him but himself", "female": "$n has no one to comfort her but herself", "neutral": "$n has no one to comfort it but itself"},
	})
db.actions.insert({
	"name": "sigh",
	"self_no_arg": { "all": "You sigh." },
	"others_no_arg": { "all": "$n sighs." },
	"self_found": { "male": "You sigh as you think of him.", "female": "You sigh as you think of her.", "neutral": "You sigh as you think of it."},
	"others_found": { "all": "$n sighs at the sight of $N." },
	"vict_found": { "male": "$n sighs as he thinks of you.  Touching, huh?", "female": "$n sighs as she thinks of you.  Touching, huh?", "neutral": "$n sighs as it thinks of you.  Touching, huh?"},
	"self_not_found": { "all": "You really sigh, since you don't see your friend." },
	"self_auto": { "all": "You sigh at yourself.  You MUST be lonely." },
	"others_auto": { "male": "$n sighs at himself.  What a sorry sight.", "female": "$n sighs at herself.  What a sorry sight.", "neutral": "$n sighs at itself.  What a sorry sight."},
	})
db.actions.insert({
	"name": "sulk",
	"self_no_arg": { "all": "You sulk." },
	"others_no_arg": { "all": "$n sulks in the corner." },
	})
db.actions.insert({
	"name": "hug",
	"self_no_arg": { "all": "Hug who?" },
		"self_found": { "male": "You hug him.", "female": "You hug her.", "neutral": "You hug it."},
	"others_found": { "all": "$n hugs $N." },
	"vict_found": { "all": "$n hugs you." },
	"self_not_found": { "all": "Sorry, friend, I can't see that person here." },
	"self_auto": { "all": "You hug yourself." },
	"others_auto": { "male": "$n hugs himself in a vain attempt to get friendship.", "female": "$n hugs herself in a vain attempt to get friendship.", "neutral": "$n hugs itself in a vain attempt to get friendship."},
	})
db.actions.insert({
	"name": "snuggle",
	"self_no_arg": { "all": "Who?" },
		"self_found": { "male": "You snuggle him.", "female": "You snuggle her.", "neutral": "You snuggle it."},
	"others_found": { "all": "$n snuggles up to $N." },
	"vict_found": { "all": "$n snuggles up to you." },
	"self_not_found": { "all": "They aren't here." },
	"self_auto": { "all": "You snuggle up, getting ready to sleep." },
	"others_auto": { "all": "$n snuggles up, getting ready to sleep." },
	})
db.actions.insert({
	"name": "cuddle",
	"self_no_arg": { "all": "Who do you feel like cuddling today?" },
		"self_found": { "male": "You cuddle him.", "female": "You cuddle her.", "neutral": "You cuddle it."},
	"others_found": { "all": "$n cuddles $N." },
	"vict_found": { "all": "$n cuddles you." },
	"self_not_found": { "all": "They aren't here." },
	"self_auto": { "all": "You must feel very cuddly indeed ... :)" },
	"others_auto": { "male": "$n cuddles up to his shadow.  What a sorry sight.", "female": "$n cuddles up to her shadow.  What a sorry sight.", "neutral": "$n cuddles up to it shadow.  What a sorry sight."},
	})
db.actions.insert({
	"name": "nuzzle",
	"self_no_arg": { "all": "Nuzzle who??" },
		"self_found": { "male": "You nuzzle his neck softly.", "female": "You nuzzle her neck softly.", "neutral": "You nuzzle it neck softly."},
	"others_found": { "all": "$n softly nuzzles $N's neck." },
	"vict_found": { "all": "$n softly nuzzles your neck." },
	"self_not_found": { "all": "No.. they aren't here.." },
	"self_auto": { "all": "I'm sorry, friend, but that's impossible." },
	})
db.actions.insert({
	"name": "cry",
	"self_no_arg": { "all": "Waaaaah.." },
	"others_no_arg": { "all": "$n bursts into tears." },
	"self_found": { "male": "You cry on his shoulder.", "female": "You cry on her shoulder.", "neutral": "You cry on it shoulder."},
	"others_found": { "all": "$n cries on $N's shoulder." },
	"vict_found": { "all": "$n cries on your shoulder." },
	"self_not_found": { "all": "Who's that?" },
	"self_auto": { "all": "You cry to yourself." },
	"others_auto": { "male": "$n sobs quietly to himself.", "female": "$n sobs quietly to herself.", "neutral": "$n sobs quietly to itself."},
	})
db.actions.insert({
	"name": "poke",
	"self_no_arg": { "all": "Poke who??" },
		"self_found": { "male": "You poke him in the ribs.", "female": "You poke her in the ribs.", "neutral": "You poke it in the ribs."},
	"others_found": { "all": "$n pokes $N in the ribs." },
	"vict_found": { "all": "$n pokes you in the ribs." },
	"self_not_found": { "all": "You can't poke someone who's not here!." },
	"self_auto": { "all": "You poke yourself in the ribs, feeling very silly." },
	"others_auto": { "male": "$n pokes himself in the ribs, looking very sheepish.", "female": "$n pokes herself in the ribs, looking very sheepish.", "neutral": "$n pokes itself in the ribs, looking very sheepish."},
	})
db.actions.insert({
	"name": "accuse",
	"self_no_arg": { "all": "Accuse who??" },
	"others_no_arg": { "all": "$n is in an accusing mood." },
	"self_found": { "male": "You look accusingly at him.", "female": "You look accusingly at her.", "neutral": "You look accusingly at it."},
	"others_found": { "all": "$n looks accusingly at $N." },
	"vict_found": { "all": "$n looks accusingly at you." },
	"self_not_found": { "all": "Accuse somebody who's not even there ??" },
	"self_auto": { "all": "You accuse yourself." },
	"others_auto": { "all": "$n seems to have a bad conscience." },
	})
db.actions.insert({
	"name": "grin",
	"self_no_arg": { "all": "You grin evilly." },
	"others_no_arg": { "all": "$n grins evilly." },
	"self_found": { "male": "You grin evilly at him.", "female": "You grin evilly at her.", "neutral": "You grin evilly at it."},
	"others_found": { "all": "$n grins evilly at $N." },
	"vict_found": { "all": "$n grins evilly at you.  Hmmm.  Better keep your distance." },
	"self_not_found": { "all": "You must be delirious." },
	"self_auto": { "all": "You grin at youself.  You must be getting very bad thoughts." },
	"others_auto": { "male": "$n grins at himself.  You must wonder what's in his mind.", "female": "$n grins at herself.  You must wonder what's in her mind.", "neutral": "$n grins at itself.  You must wonder what's in it mind."},
	})
db.actions.insert({
	"name": "bow",
	"self_no_arg": { "all": "You bow deeply." },
	"others_no_arg": { "all": "$n bows deeply." },
	"self_found": { "male": "You bow before him.", "female": "You bow before her.", "neutral": "You bow before it."},
	"others_found": { "all": "$n bows before $N." },
	"vict_found": { "all": "$n bows before you." },
	"self_not_found": { "all": "Who's that?" },
	"self_auto": { "all": "You kiss your toes." },
	"others_auto": { "male": "$n folds up like a jacknife and kisses his own toes.", "female": "$n folds up like a jacknife and kisses her own toes.", "neutral": "$n folds up like a jacknife and kisses it own toes."},
	})
db.actions.insert({
	"name": "applaud",
	"self_no_arg": { "all": "Clap, clap, clap." },
	"others_no_arg": { "all": "$n gives a round of applause." },
	"self_found": { "all": "You clap at $N's actions." },
	"others_found": { "all": "$n claps at $N's actions." },
	"vict_found": { "all": "$n gives you a round of applause.  You MUST'VE done something good!" },
	"self_not_found": { "all": "You give your imaginary round of applause to your imaginary friend." },
	"self_auto": { "all": "You applaud at yourself.  Boy, are we conceited!" },
	"others_auto": { "male": "$n applauds at himself.  Boy, are we conceited!", "female": "$n applauds at herself.  Boy, are we conceited!", "neutral": "$n applauds at itself.  Boy, are we conceited!"},
	})
db.actions.insert({
	"name": "blush",
	"self_no_arg": { "all": "Your cheeks are burning." },
	"others_no_arg": { "all": "$n blushes." },
	"self_found": { "male": "You get all flustered up seeing him.", "female": "You get all flustered up seeing her.", "neutral": "You get all flustered up seeing it."},
	"others_found": { "male": "$n blushes as he sees $N here.", "female": "$n blushes as she sees $N here.", "neutral": "$n blushes as it sees $N here."},
	"vict_found": { "male": "$n blushes as he sees you here.  Such an effect on people!", "female": "$n blushes as she sees you here.  Such an effect on people!", "neutral": "$n blushes as it sees you here.  Such an effect on people!"},
	"self_not_found": { "all": "You blush as you notice that person isn't here." },
	"self_auto": { "all": "You blush at your own folly." },
	"others_auto": { "male": "$n blushes as he notices his boo-boo.", "female": "$n blushes as she notices her boo-boo.", "neutral": "$n blushes as it notices it boo-boo."},
	})
db.actions.insert({
	"name": "burp",
	"self_no_arg": { "all": "You burp loudly." },
	"others_no_arg": { "all": "$n burps loudly." },
	"self_found": { "male": "You burp loudly to him in response.", "female": "You burp loudly to her in response.", "neutral": "You burp loudly to it in response."},
	"others_found": { "all": "$n burps loudly in response to $N's remark." },
	"vict_found": { "all": "$n burps loudly in response to your remark." },
	"self_not_found": { "all": "You can't find your victim." },
	"self_auto": { "all": "You burp at yourself." },
	"others_auto": { "male": "$n burps at himself.  What a sick sight.", "female": "$n burps at herself.  What a sick sight.", "neutral": "$n burps at itself.  What a sick sight."},
	})
db.actions.insert({
	"name": "chuckle",
	"self_no_arg": { "all": "You chuckle politely." },
	"others_no_arg": { "all": "$n chuckles politely." },
	"self_found": { "male": "You chuckle at his joke.", "female": "You chuckle at her joke.", "neutral": "You chuckle at it joke."},
	"others_found": { "all": "$n chuckles at $N's joke." },
	"vict_found": { "all": "$n chuckles at your joke." },
	"self_not_found": { "all": "You can't find a friend to chuckle with." },
	"self_auto": { "all": "You chuckle at your own joke, since no one else would." },
	"others_auto": { "male": "$n chuckles at his own joke, since none of you would.", "female": "$n chuckles at her own joke, since none of you would.", "neutral": "$n chuckles at it own joke, since none of you would."},
	})
db.actions.insert({
	"name": "clap",
	"self_no_arg": { "all": "You clap your hands together." },
	"others_no_arg": { "male": "$n shows his approval by clapping his hands together.", "female": "$n shows her approval by clapping her hands together.", "neutral": "$n shows it approval by clapping it hands together."},
	"self_found": { "male": "You clap at his performance.", "female": "You clap at her performance.", "neutral": "You clap at it performance."},
	"others_found": { "all": "$n claps at $N's performance." },
	"vict_found": { "all": "$n claps at your performance." },
	"self_not_found": { "all": "You clap for nothing." },
	"self_auto": { "all": "You clap at your own performance." },
	"others_auto": { "male": "$n claps at his own performance.", "female": "$n claps at her own performance.", "neutral": "$n claps at it own performance."},
	})
db.actions.insert({
	"name": "cough",
	"self_no_arg": { "all": "Yuck, try to cover your mouth next time!" },
	"others_no_arg": { "all": "$n coughs loudly." },
	})
db.actions.insert({
	"name": "curtsey",
	"self_no_arg": { "all": "You curtsey to your audience." },
	"others_no_arg": { "all": "$n curtseys gracefully." },
	"self_found": { "male": "You curtsey to him.", "female": "You curtsey to her.", "neutral": "You curtsey to it."},
	"others_found": { "all": "$n curtseys gracefully to $N." },
	"vict_found": { "all": "$n curtseys gracefully for you." },
	"self_not_found": { "all": "You curtsey to no one in particular." },
	"self_auto": { "all": "You curtsey to your audience (yourself)." },
	"others_auto": { "male": "$n curtseys to himself, since no one is paying attention to him.", "female": "$n curtseys to herself, since no one is paying attention to her.", "neutral": "$n curtseys to itself, since no one is paying attention to it."},
	})
db.actions.insert({
	"name": "fart",
	"self_no_arg": { "all": "Where are your manners ?" },
	"others_no_arg": { "all": "$n lets off a real rip-roarer ... a greenish cloud envelops $n!" },
	"self_found": { "male": "You fart at him.  Boy, you are sick.", "female": "You fart at her.  Boy, you are sick.", "neutral": "You fart at it.  Boy, you are sick."},
	"others_found": { "male": "$n farts in the direction of $N.  Better flee before he turns to you!", "female": "$n farts in the direction of $N.  Better flee before she turns to you!", "neutral": "$n farts in the direction of $N.  Better flee before it turns to you!"},
	"vict_found": { "all": "$n farts in your direction.  You gasp for air." },
	"self_not_found": { "all": "You can't hold it that long!" },
	"self_auto": { "all": "You fart at yourself.  You deserve it." },
	"others_auto": { "male": "$n farts at himself.  Better him than you.", "female": "$n farts at herself.  Better her than you.", "neutral": "$n farts at itself.  Better it than you."},
	})
db.actions.insert({
	"name": "flip",
	"self_no_arg": { "all": "You flip head over heels." },
	"others_no_arg": { "all": "$n flips head over heels." },
	"self_found": { "male": "You flip him over your shoulder.", "female": "You flip her over your shoulder.", "neutral": "You flip it over your shoulder."},
	"others_found": { "male": "$n flips $N over his shoulder.", "female": "$n flips $N over her shoulder.", "neutral": "$n flips $N over it shoulder."},
	"vict_found": { "male": "$n flips you over his shoulder.  Hmmmm.", "female": "$n flips you over her shoulder.  Hmmmm.", "neutral": "$n flips you over it shoulder.  Hmmmm."},
	"self_not_found": { "all": "You can't find the person." },
	"self_auto": { "all": "You tumble all over the room." },
	"others_auto": { "all": "$n does some nice tumbling and gymnastics." },
	})
db.actions.insert({
	"name": "fondle",
	"self_no_arg": { "all": "Who needs to be fondled ?" },
		"self_found": { "male": "You fondly fondle him.", "female": "You fondly fondle her.", "neutral": "You fondly fondle it."},
	"others_found": { "all": "$n fondly fondles $N." },
	"vict_found": { "all": "$n fondly fondles you." },
	"self_not_found": { "all": "You fondly try to fondle someone not in the room, but who cares." },
	"self_auto": { "all": "You fondly fondle yourself, feels funny doesn't it?" },
	"others_auto": { "male": "$n fondly fondles himself - this is going too far!!", "female": "$n fondly fondles herself - this is going too far!!", "neutral": "$n fondly fondles itself - this is going too far!!"},
	})
db.actions.insert({
	"name": "frown",
	"self_no_arg": { "all": "You frown disapprovingly." },
	"others_no_arg": { "all": "$n frowns." },
	"self_found": { "male": "You frown at what he did.", "female": "You frown at what she did.", "neutral": "You frown at what it did."},
	"others_found": { "all": "$n frowns at what $N did." },
	"vict_found": { "all": "$n frowns at what you did." },
	"self_not_found": { "all": "You don't see any reason to frown." },
	"self_auto": { "all": "You frown at yourself.  Poor baby." },
	"others_auto": { "male": "$n frowns at himself.  What a sad puppy....", "female": "$n frowns at herself.  What a sad puppy....", "neutral": "$n frowns at itself.  What a sad puppy...."},
	})
db.actions.insert({
	"name": "gasp",
	"self_no_arg": { "all": "You gasp in astonishment." },
	"others_no_arg": { "all": "$n gasps in astonishment." },
	"self_found": { "male": "You gasp as you realize what he did.", "female": "You gasp as you realize what she did.", "neutral": "You gasp as you realize what it did."},
	"others_found": { "male": "$n gasps as he realizes what $N did.", "female": "$n gasps as she realizes what $N did.", "neutral": "$n gasps as it realizes what $N did."},
	"vict_found": { "male": "$n gasps as he realizes what you did.", "female": "$n gasps as she realizes what you did.", "neutral": "$n gasps as it realizes what you did."},
	"self_not_found": { "all": "You need to panic." },
	"self_auto": { "all": "You look at yourself and gasp!" },
	"others_auto": { "male": "$n takes one look at himself and gasps in astonisment!", "female": "$n takes one look at herself and gasps in astonisment!", "neutral": "$n takes one look at itself and gasps in astonisment!"},
	})
db.actions.insert({
	"name": "glare",
	"self_no_arg": { "all": "You glare at nothing in particular." },
	"others_no_arg": { "male": "$n glares around him.", "female": "$n glares around her.", "neutral": "$n glares around it."},
	"self_found": { "male": "You glare icily at him.", "female": "You glare icily at her.", "neutral": "You glare icily at it."},
	"others_found": { "all": "$n glares at $N." },
	"vict_found": { "all": "$n glares icily at you, you feel cold to your bones." },
	"self_not_found": { "all": "You try to glare at somebody who is not present." },
	"self_auto": { "all": "You glare icily at your feet, they are suddenly very cold." },
	"others_auto": { "male": "$n glares at his feet, what is bothering him?", "female": "$n glares at her feet, what is bothering her?", "neutral": "$n glares at it feet, what is bothering it?"},
	})
db.actions.insert({
	"name": "groan",
	"self_no_arg": { "all": "You groan loudly." },
	"others_no_arg": { "all": "$n groans loudly." },
	"self_found": { "male": "You groan at the sight of him.", "female": "You groan at the sight of her.", "neutral": "You groan at the sight of it."},
	"others_found": { "all": "$n groans at the sight of $N." },
	"vict_found": { "all": "$n groans at the sight of you." },
	"self_not_found": { "all": "You see no reason to groan." },
	"self_auto": { "all": "You groan as you realize what you have done." },
	"others_auto": { "male": "$n groans as he realizes what he has done.", "female": "$n groans as she realizes what she has done.", "neutral": "$n groans as it realizes what it has done."},
	})
db.actions.insert({
	"name": "grope",
	"self_no_arg": { "all": "Whom do you wish to grope ??" },
		"self_found": { "all": "Well, what sort of noise do you expect here?" },
	"others_found": { "all": "$n gropes $N." },
	"vict_found": { "all": "$n gropes you." },
	"self_not_found": { "all": "Try someone who's here." },
	"self_auto": { "all": "You grope yourself - YUCK." },
	"others_auto": { "male": "$n gropes himself - YUCK.", "female": "$n gropes herself - YUCK.", "neutral": "$n gropes itself - YUCK."},
	})
db.actions.insert({
	"name": "hiccup",
	"self_no_arg": { "all": "*HIC*" },
	"others_no_arg": { "all": "$n hiccups." },
	})
db.actions.insert({
	"name": "lick",
	"self_no_arg": { "all": "You lick your mouth and smile." },
	"others_no_arg": { "male": "$n licks his mouth and smiles.", "female": "$n licks her mouth and smiles.", "neutral": "$n licks it mouth and smiles."},
	"self_found": { "all": "You lick $N's jawline delicately." },
	"others_found": { "all": "$n licks $N's jawline delicately." },
	"vict_found": { "all": "$n licks your jawline delicately." },
	"self_not_found": { "all": "Lick away, nobody's here with that name." },
	"self_auto": { "all": "You lick your own eyebrows." },
	"others_auto": { "male": "$n licks his own eyebrows.", "female": "$n licks her own eyebrows.", "neutral": "$n licks it own eyebrows."},
	})
db.actions.insert({
	"name": "love",
	"self_no_arg": { "all": "You love the whole world." },
	"others_no_arg": { "all": "$n loves everybody in the world." },
	"self_found": { "all": "You tell your true feelings to $N." },
	"others_found": { "all": "$n whispers softly to $N." },
	"vict_found": { "all": "$n whispers to you sweet words of love." },
	"self_not_found": { "all": "Alas, your love is not present..." },
	"self_auto": { "all": "Well, we already know you love yourself (lucky someone does !)" },
	"others_auto": { "male": "$n loves himself, can you believe it ?", "female": "$n loves herself, can you believe it ?", "neutral": "$n loves itself, can you believe it ?"},
	})
db.actions.insert({
	"name": "moan",
	"self_no_arg": { "all": "You start to moan." },
	"others_no_arg": { "all": "$n starts moaning." },
	"self_found": { "male": "You moan for the loss of him.", "female": "You moan for the loss of her.", "neutral": "You moan for the loss of it."},
	"others_found": { "all": "$n moans for the loss of $N." },
	"vict_found": { "all": "$n moans at the sight of you.  Hmmmm." },
	"self_not_found": { "all": "You see no cause to moan." },
	"self_auto": { "all": "You moan at yourself." },
	"others_auto": { "male": "$n makes himself moan.", "female": "$n makes herself moan.", "neutral": "$n makes itself moan."},
	})
db.actions.insert({
	"name": "nibble",
	"self_no_arg": { "all": "Nibble on who ?" },
		"self_found": { "all": "You nibble on $N's ear." },
	"others_found": { "all": "$n nibbles on $N's ear." },
	"vict_found": { "all": "$n nibbles on your ear." },
	"self_not_found": { "all": "Sorry, not present." },
	"self_auto": { "all": "You nibble on your OWN ear ???????????????????" },
	"others_auto": { "male": "$n nibbles on his OWN ear (I wonder how it is done !!).", "female": "$n nibbles on her OWN ear (I wonder how it is done !!).", "neutral": "$n nibbles on it OWN ear (I wonder how it is done !!)."},
	})
db.actions.insert({
	"name": "pout",
	"self_no_arg": { "all": "Ah, don't take it so hard." },
	"others_no_arg": { "all": "$n pouts." },
	})
db.actions.insert({
	"name": "ruffle",
	"self_no_arg": { "all": "You've got to ruffle SOMEONE." },
		"self_found": { "all": "You ruffle $N's hair playfully." },
	"others_found": { "all": "$n ruffles $N's hair playfully." },
	"vict_found": { "all": "$n ruffles your hair playfully." },
	"self_not_found": { "all": "Might be a bit difficult." },
	"self_auto": { "all": "You ruffle your hair, wondering how far you can go before the rest think you're crazy." },
	"others_auto": { "male": "$n ruffles his hair - weirdo!", "female": "$n ruffles her hair - weirdo!", "neutral": "$n ruffles it hair - weirdo!"},
	})
db.actions.insert({
	"name": "shiver",
	"self_no_arg": { "all": "Brrrrrrrrr." },
	"others_no_arg": { "all": "$n shivers uncomfortably." },
	"self_found": { "male": "You shiver at the thought of fighting him.", "female": "You shiver at the thought of fighting her.", "neutral": "You shiver at the thought of fighting it."},
	"others_found": { "all": "$n shivers at the thought of fighting $N." },
	"vict_found": { "all": "$n shivers at the suicidal thought of fighting you." },
	"self_not_found": { "all": "You don't see any reason to shiver." },
	"self_auto": { "all": "You shiver to yourself?" },
	"others_auto": { "male": "$n scares himself to shivers.", "female": "$n scares herself to shivers.", "neutral": "$n scares itself to shivers."},
	})
db.actions.insert({
	"name": "shrug",
	"self_no_arg": { "all": "You shrug." },
	"others_no_arg": { "all": "$n shrugs helplessly." },
	"self_found": { "male": "You shrug in response to his question.", "female": "You shrug in response to her question.", "neutral": "You shrug in response to it question."},
	"others_found": { "all": "$n shrugs in response to $N's question." },
	"vict_found": { "all": "$n shrugs in response to your question." },
	"self_not_found": { "all": "You shrug to no one in particular." },
	"self_auto": { "all": "You shrug to yourself." },
	"others_auto": { "male": "$n shrugs to himself.  What a strange person.", "female": "$n shrugs to herself.  What a strange person.", "neutral": "$n shrugs to itself.  What a strange person."},
	})
db.actions.insert({
	"name": "sing",
	"self_no_arg": { "all": "You raise your clear (?) voice towards the sky." },
	"others_no_arg": { "all": "HEY CLERICS! I COULD USE A HEAL!  $n has begun to sing." },
	"self_found": { "male": "You sing a ballad to him.", "female": "You sing a ballad to her.", "neutral": "You sing a ballad to it."},
	"others_found": { "all": "$n sings a ballad to $N." },
	"vict_found": { "all": "$n sings a ballad to you!  How sweet!" },
	"self_not_found": { "all": "You see no one to sing to." },
	"self_auto": { "all": "You sing a little ditty to yourself." },
	"others_auto": { "male": "$n sings a little ditty to himself.", "female": "$n sings a little ditty to herself.", "neutral": "$n sings a little ditty to itself."},
	})
db.actions.insert({
	"name": "slap",
	"self_no_arg": { "all": "What is the sound of one hand slapping?" },
		"self_found": { "all": "*thwock!* You slap $N ringingly." },
	"others_found": { "all": "*thwock!* $n slaps $N!" },
	"vict_found": { "all": "$n slaps you stingingly." },
	"self_not_found": { "all": "How about slapping someone in the same room as you ??" },
	"self_auto": { "all": "You slap yourself, silly you." },
	"others_auto": { "male": "$n slaps himself, really strange ...", "female": "$n slaps herself, really strange ...", "neutral": "$n slaps itself, really strange ..."},
	})
db.actions.insert({
	"name": "smirk",
	"self_no_arg": { "all": "You smirk." },
	"others_no_arg": { "all": "$n smirks." },
	"self_found": { "male": "You smirk at his saying.", "female": "You smirk at her saying.", "neutral": "You smirk at it saying."},
	"others_found": { "all": "$n smirks at $N's saying." },
	"vict_found": { "all": "$n smirks at your saying." },
	"self_not_found": { "all": "You want to smirk to whom?" },
	"self_auto": { "all": "You smirk at yourself.  Okay....." },
	"others_auto": { "male": "$n smirks at his own 'wisdom'.", "female": "$n smirks at her own 'wisdom'.", "neutral": "$n smirks at it own 'wisdom'."},
	})
db.actions.insert({
	"name": "snap",
	"self_no_arg": { "all": "Eureka!  You snap your fingers." },
	"others_no_arg": { "male": "$n snaps his fingers.", "female": "$n snaps her fingers.", "neutral": "$n snaps it fingers."},
	"self_found": { "male": "You snap back at him.", "female": "You snap back at her.", "neutral": "You snap back at it."},
	"others_found": { "all": "$n snaps back at $N." },
	"vict_found": { "all": "$n snaps back at you!" },
	"self_not_found": { "all": "You must be very agitated." },
	"self_auto": { "all": "You snap yourself to attention." },
	"others_auto": { "male": "$n snaps himself to attention.", "female": "$n snaps herself to attention.", "neutral": "$n snaps itself to attention."},
	})
db.actions.insert({
	"name": "sneeze",
	"self_no_arg": { "all": "Gesundheit !" },
	"others_no_arg": { "all": "$n sneezes." },
	})
db.actions.insert({
	"name": "snicker",
	"self_no_arg": { "all": "You snicker softly." },
	"others_no_arg": { "all": "$n snickers softly." },
	"self_found": { "male": "You snicker with him about your shared secret.", "female": "You snicker with her about your shared secret.", "neutral": "You snicker with it about your shared secret."},
	"others_found": { "all": "$n snickers with $N about their shared secret." },
	"vict_found": { "all": "$n snickers with you about your shared secret." },
	"self_not_found": { "all": "Huh?" },
	"self_auto": { "all": "You snicker at your own evil thoughts." },
	"others_auto": { "male": "$n snickers at his own evil thoughts.", "female": "$n snickers at her own evil thoughts.", "neutral": "$n snickers at it own evil thoughts."},
	})
db.actions.insert({
	"name": "sniff",
	"self_no_arg": { "all": "You sniff sadly. *SNIFF*" },
	"others_no_arg": { "all": "$n sniffs sadly." },
	"self_found": { "male": "You sniff sadly at the way he is treating you.", "female": "You sniff sadly at the way she is treating you.", "neutral": "You sniff sadly at the way it is treating you."},
	"others_found": { "male": "$n sniffs sadly at the way $N is treating him.", "female": "$n sniffs sadly at the way $N is treating her.", "neutral": "$n sniffs sadly at the way $N is treating it."},
	"vict_found": { "male": "$n sniffs sadly at the way you are treating him.", "female": "$n sniffs sadly at the way you are treating her.", "neutral": "$n sniffs sadly at the way you are treating it."},
	"self_not_found": { "all": "You see no reason to sniff." },
	"self_auto": { "all": "You sniff sadly at your lost opportunities." },
	"others_auto": { "male": "$n sniffs sadly at himself.  Something MUST be bothering him.", "female": "$n sniffs sadly at herself.  Something MUST be bothering her.", "neutral": "$n sniffs sadly at itself.  Something MUST be bothering it."},
	})
db.actions.insert({
	"name": "snore",
	"self_no_arg": { "all": "Zzzzzzzzzzzzzzzzz." },
	"others_no_arg": { "all": "$n snores loudly." },
	})
db.actions.insert({
	"name": "squeeze",
	"self_no_arg": { "all": "Where, what, how, WHO ???" },
		"self_found": { "male": "You squeeze him fondly.", "female": "You squeeze her fondly.", "neutral": "You squeeze it fondly."},
	"others_found": { "all": "$n squeezes $N fondly." },
	"vict_found": { "all": "$n squeezes you fondly." },
	"self_not_found": { "all": "Where, what, how, WHO ???" },
	"self_auto": { "all": "You squeeze yourself - try to relax a little!" },
	"others_auto": { "male": "$n squeezes himself.", "female": "$n squeezes herself.", "neutral": "$n squeezes itself."},
	})
db.actions.insert({
	"name": "stare",
	"self_no_arg": { "all": "You stare at the sky." },
	"others_no_arg": { "all": "$n stares at the sky." },
	"self_found": { "male": "You stare dreamily at $N, completely lost in his eyes..", "female": "You stare dreamily at $N, completely lost in her eyes..", "neutral": "You stare dreamily at $N, completely lost in it eyes.."},
	"others_found": { "all": "$n stares dreamily at $N." },
	"vict_found": { "all": "$n stares dreamily at you, completely lost in your eyes." },
	"self_not_found": { "all": "You stare and stare but can't see that person anywhere..." },
	"self_auto": { "all": "You stare dreamily at yourself - enough narcissism for now." },
	"others_auto": { "male": "$n stares dreamily at himself - NARCISSIST!", "female": "$n stares dreamily at herself - NARCISSIST!", "neutral": "$n stares dreamily at itself - NARCISSIST!"},
	})
db.actions.insert({
	"name": "strut",
	"self_no_arg": { "all": "Strut your stuff." },
	"others_no_arg": { "all": "$n struts proudly." },
	"self_found": { "male": "You strut to get his attention.", "female": "You strut to get her attention.", "neutral": "You strut to get it attention."},
	"others_found": { "all": "$n struts, hoping to get $N's attention." },
	"vict_found": { "all": "$n struts, hoping to get your attention." },
	"self_not_found": { "all": "You don't see an audience." },
	"self_auto": { "all": "You strut to yourself, lost in your own world." },
	"others_auto": { "male": "$n struts to himself, lost in his own world.", "female": "$n struts to herself, lost in her own world.", "neutral": "$n struts to itself, lost in it own world."},
	})
db.actions.insert({
	"name": "thank",
	"self_no_arg": { "all": "Thank you too." },
		"self_found": { "all": "You thank $N heartily." },
	"others_found": { "all": "$n thanks $N heartily." },
	"vict_found": { "all": "$n thanks you heartily." },
	"self_not_found": { "all": "No one answers to that name here." },
	"self_auto": { "all": "You thank yourself since nobody else wants to !" },
	"others_auto": { "male": "$n thanks himself since you won't.", "female": "$n thanks herself since you won't.", "neutral": "$n thanks itself since you won't."},
	})
db.actions.insert({
	"name": "twiddle",
	"self_no_arg": { "all": "You patiently twiddle your thumbs." },
	"others_no_arg": { "male": "$n patiently twiddles his thumbs.", "female": "$n patiently twiddles her thumbs.", "neutral": "$n patiently twiddles it thumbs."},
	"self_found": { "male": "You twiddle his ears.", "female": "You twiddle her ears.", "neutral": "You twiddle it ears."},
	"others_found": { "all": "$n twiddles $N's ears." },
	"vict_found": { "all": "$n twiddles your ears." },
	"self_not_found": { "all": "You don't see the person here." },
	"self_auto": { "all": "You twiddle your ears like Dumbo." },
	"others_auto": { "male": "$n twiddles his own ears like Dumbo.", "female": "$n twiddles her own ears like Dumbo.", "neutral": "$n twiddles it own ears like Dumbo."},
	})
db.actions.insert({
	"name": "wave",
	"self_no_arg": { "all": "You wave." },
	"others_no_arg": { "all": "$n waves happily." },
	"self_found": { "all": "You wave goodbye to $N." },
	"others_found": { "all": "$n waves goodbye to $N." },
	"vict_found": { "all": "$n waves goodbye to you.  Have a good journey." },
	"self_not_found": { "all": "They didn't wait for you to wave goodbye." },
	"self_auto": { "all": "Are you going on adventures as well??" },
	"others_auto": { "male": "$n waves goodbye to himself.", "female": "$n waves goodbye to herself.", "neutral": "$n waves goodbye to itself."},
	})
db.actions.insert({
	"name": "whistle",
	"self_no_arg": { "all": "You whistle appreciatively." },
	"others_no_arg": { "all": "$n whistles appreciatively." },
	"self_found": { "male": "You whistle at the sight of him.", "female": "You whistle at the sight of her.", "neutral": "You whistle at the sight of it."},
	"others_found": { "all": "$n whistles at the sight of $N." },
	"vict_found": { "all": "$n whistles at the sight of you." },
	"self_not_found": { "all": "You don't see nothing special to whistle at." },
	"self_auto": { "all": "You whistle a little tune to yourself." },
	"others_auto": { "male": "$n whistles a little tune to himself.", "female": "$n whistles a little tune to herself.", "neutral": "$n whistles a little tune to itself."},
	})
db.actions.insert({
	"name": "wiggle",
	"self_no_arg": { "all": "Your wiggle your bottom." },
	"others_no_arg": { "male": "$n wiggles his bottom.", "female": "$n wiggles her bottom.", "neutral": "$n wiggles it bottom."},
	"self_found": { "male": "You wiggle your bottom toward him.", "female": "You wiggle your bottom toward her.", "neutral": "You wiggle your bottom toward it."},
	"others_found": { "male": "$n wiggles his bottom toward $N.", "female": "$n wiggles her bottom toward $N.", "neutral": "$n wiggles it bottom toward $N."},
	"vict_found": { "male": "$n wiggles his bottom toward you.", "female": "$n wiggles her bottom toward you.", "neutral": "$n wiggles it bottom toward you."},
	"self_not_found": { "all": "You must be alone." },
	"self_auto": { "all": "You wiggle about like a fish." },
	"others_auto": { "all": "$n wiggles about like a fish." },
	})
db.actions.insert({
	"name": "wink",
	"self_no_arg": { "all": "Have you got something in your eye?" },
	"others_no_arg": { "all": "$n winks suggestively." },
	"self_found": { "all": "You wink suggestively at $N." },
	"others_found": { "all": "$n winks at $N." },
	"vict_found": { "all": "$n winks suggestively at you." },
	"self_not_found": { "all": "No one with that name is present." },
	"self_auto": { "all": "You wink at yourself ?? - what are you up to?" },
	"others_auto": { "male": "$n winks at himself - something strange is going on...", "female": "$n winks at herself - something strange is going on...", "neutral": "$n winks at itself - something strange is going on..."},
	})
db.actions.insert({
	"name": "yawn",
	"self_no_arg": { "all": "You must be tired." },
	"others_no_arg": { "all": "$n yawns." },
	})
db.actions.insert({
	"name": "snowball",
	"self_no_arg": { "all": "Who do you want to throw a snowball at?" },
		"self_found": { "all": "You throw a snowball in $N's face." },
	"others_found": { "all": "$n conjures a snowball from the thin air and throws it at $N." },
	"vict_found": { "all": "$n conjures a snowball from the thin air and throws it at you." },
	"self_not_found": { "all": "You stand with the snowball in your hand because your victim is not here." },
	"self_auto": { "all": "You conjure a snowball from the thin air and throw it at yourself." },
	"others_auto": { "male": "$n conjures a snowball out of the thin air and throws it at himself.", "female": "$n conjures a snowball out of the thin air and throws it at herself.", "neutral": "$n conjures a snowball out of the thin air and throws it at itself."},
	})
db.actions.insert({
	"name": "french",
	"self_no_arg": { "all": "Kiss whom?" },
		"self_found": { "all": "You give $N a long and passionate kiss, it seems to last forever..." },
	"others_found": { "all": "$n kisses $N passionately." },
	"vict_found": { "all": "$n gives you a long and passionate kiss, it seems to last forever..." },
	"self_not_found": { "all": "Your heart is filled with despair as that person is not here." },
	"self_auto": { "all": "You gather yourself in your arms and try to kiss yourself." },
	"others_auto": { "male": "$n makes an attempt at kissing himself.", "female": "$n makes an attempt at kissing herself.", "neutral": "$n makes an attempt at kissing itself."},
	})
db.actions.insert({
	"name": "comb",
	"self_no_arg": { "all": "You comb your hair - perfect." },
	"others_no_arg": { "male": "$n combs his hair, what a dashing specimen !", "female": "$n combs her hair, what a dashing specimen !", "neutral": "$n combs it hair, what a dashing specimen !"},
	"self_found": { "all": "You patiently untangle $N's hair - what a mess !" },
	"others_found": { "all": "$n tries patiently to untangle $N's hair." },
	"vict_found": { "all": "$n pulls your hair in an attempt to comb it." },
	"self_not_found": { "all": "That person is not here." },
	"self_auto": { "all": "You pull your hair, but it will not be combed." },
	"others_auto": { "male": "$n tries to comb his tangled hair.", "female": "$n tries to comb her tangled hair.", "neutral": "$n tries to comb it tangled hair."},
	})
db.actions.insert({
	"name": "massage",
	"self_no_arg": { "all": "Massage what?  Thin air?" },
		"self_found": { "all": "You gently massage $N's shoulders." },
	"others_found": { "all": "$n massages $N's shoulders." },
	"vict_found": { "all": "$n gently massages your shoulders - Ahhhhhhhhhh..." },
	"self_not_found": { "all": "You can only massage someone in the same room as you." },
	"self_auto": { "all": "You practice yoga as you try to massage yourself." },
	"others_auto": { "male": "$n gives a show on yoga-positions, trying to massage himself.", "female": "$n gives a show on yoga-positions, trying to massage herself.", "neutral": "$n gives a show on yoga-positions, trying to massage itself."},
	})
db.actions.insert({
	"name": "tickle",
	"self_no_arg": { "all": "Whom do you want to tickle?" },
		"self_found": { "all": "You tickle $N." },
	"others_found": { "all": "$n tickles $N." },
	"vict_found": { "all": "$n tickles you - ho ho ho." },
	"self_not_found": { "all": "Who is that??" },
	"self_auto": { "all": "You tickle yourself, how funny!" },
	"others_auto": { "male": "$n tickles himself.", "female": "$n tickles herself.", "neutral": "$n tickles itself."},
	})
db.actions.insert({
	"name": "pat",
	"self_no_arg": { "all": "Pat who?" },
		"self_found": { "male": "You pat $N on his head.", "female": "You pat $N on her head.", "neutral": "You pat $N on it head."},
	"others_found": { "male": "$n pats $N on his head.", "female": "$n pats $N on her head.", "neutral": "$n pats $N on it head."},
	"vict_found": { "all": "$n pats you on your head." },
	"self_not_found": { "all": "Who, where, what?" },
	"self_auto": { "all": "You pat yourself on your head, very reassuring." },
	"others_auto": { "male": "$n pats himself on the head.", "female": "$n pats herself on the head.", "neutral": "$n pats itself on the head."},
	})
db.actions.insert({
	"name": "curse",
	"self_no_arg": { "all": "You swear loudly for a long time." },
	"others_no_arg": { "all": "$n swears : #@*\"*&^*#%@*&! !!!!!" },
	"self_found": { "male": "You swear at him.", "female": "You swear at her.", "neutral": "You swear at it."},
	"others_found": { "all": "$n swears at $N." },
	"vict_found": { "all": "$n swears at you!  Where are the manners?" },
	"self_not_found": { "all": "You can't find the victim of your frustrations." },
	"self_auto": { "all": "You swear at your own mistakes." },
	"others_auto": { "male": "$n starts swearing at himself.  Why don't you help?", "female": "$n starts swearing at herself.  Why don't you help?", "neutral": "$n starts swearing at itself.  Why don't you help?"},
	})
db.actions.insert({
	"name": "pray",
	"self_no_arg": { "all": "You feel righteous, and maybe a little foolish." },
	"others_no_arg": { "all": "$n begs and grovels to the powers that be." },
	"self_found": { "male": "You crawl in the dust before him.", "female": "You crawl in the dust before her.", "neutral": "You crawl in the dust before it."},
	"others_found": { "all": "$n falls down and grovels in the dirt before $N." },
	"vict_found": { "all": "$n kisses the dirt at your feet." },
	"self_not_found": { "all": "No such person around; your prayers vanish into the endless voids." },
	"self_auto": { "all": "Talk about narcissism..." },
	"others_auto": { "male": "$n performs some strange yoga-exercises and mumbles a prayer to himself.", "female": "$n performs some strange yoga-exercises and mumbles a prayer to herself.", "neutral": "$n performs some strange yoga-exercises and mumbles a prayer to itself."},
	})
db.actions.insert({
	"name": "beg",
	"self_no_arg": { "all": "You beg the gods for mercy." },
	"others_no_arg": { "all": "The gods fall down laughing at $n's request for mercy." },
	"self_found": { "male": "You desperately try to squeeze a few coins from him.", "female": "You desperately try to squeeze a few coins from her.", "neutral": "You desperately try to squeeze a few coins from it."},
	"others_found": { "male": "$n begs you for money. You graciously let him peep at your fortune.", "female": "$n begs you for money. You graciously let her peep at your fortune.", "neutral": "$n begs you for money. You graciously let it peep at your fortune."},
	"vict_found": { "all": "$n begs $N for a dime or two - or twenty !" },
	"self_not_found": { "all": "Your money-lender seems to be out for the moment." },
	"self_auto": { "all": "Begging yourself for money doesn't help." },
	})
db.actions.insert({
	"name": "cringe",
	"self_no_arg": { "all": "You cringe in terror." },
	"others_no_arg": { "all": "$n cringes in terror!" },
	"self_found": { "male": "You cringe away from him.", "female": "You cringe away from her.", "neutral": "You cringe away from it."},
	"others_found": { "all": "$n cringes away from $N in mortal terror." },
	"vict_found": { "all": "$n cringes away from you." },
	"self_not_found": { "all": "I don't see anyone by that name here.. what are you afraid of?" },
	"self_auto": { "all": "I beg your pardon?" },
	})
db.actions.insert({
	"name": "daydream",
	"self_no_arg": { "all": "You dream of better times." },
	"others_no_arg": { "all": "$n looks absent-minded, his eyes staring into space." },
	})
db.actions.insert({
	"name": "fume",
	"self_no_arg": { "all": "Take it easy now! count to ten, very slowly." },
	"others_no_arg": { "male": "$n grits his teeth and fumes with rage.", "female": "$n grits her teeth and fumes with rage.", "neutral": "$n grits it teeth and fumes with rage."},
	"self_found": { "male": "You stare at him, fuming.", "female": "You stare at her, fuming.", "neutral": "You stare at it, fuming."},
	"others_found": { "all": "$n stares at $N, fuming with rage." },
	"vict_found": { "all": "$n stares at you, fuming with rage!" },
	"self_not_found": { "all": "Fume away... they ain't here." },
	"self_auto": { "all": "That's right - hate yourself!" },
	"others_auto": { "male": "$n clenches his fists and stomps his feet, fuming with anger.", "female": "$n clenches her fists and stomps his feet, fuming with anger.", "neutral": "$n clenches it fists and stomps his feet, fuming with anger."},
	})
db.actions.insert({
	"name": "grovel",
	"self_no_arg": { "all": "You grovel in the dirt." },
	"others_no_arg": { "all": "$n grovels in the dirt." },
	"self_found": { "male": "You grovel before him", "female": "You grovel before her", "neutral": "You grovel before it"},
	"others_found": { "all": "$n grovels in the dirt before $N." },
	"vict_found": { "all": "$n grovels in the dirt before you." },
	"self_not_found": { "all": "Who?" },
	"self_auto": { "all": "That seems a little silly to me." },
	})
db.actions.insert({
	"name": "hop",
	"self_no_arg": { "all": "You hop around like a little kid." },
	"others_no_arg": { "all": "$n hops around like a little kid." },
	})
db.actions.insert({
	"name": "nudge",
	"self_no_arg": { "all": "Nudge whom?" },
		"self_found": { "male": "You nudge him.", "female": "You nudge her.", "neutral": "You nudge it."},
	"others_found": { "all": "$n nudges $N." },
	"vict_found": { "all": "$n nudges you." },
	"self_not_found": { "all": "Who?" },
	"self_auto": { "all": "You nudge yourself, for some strange reason." },
	"others_auto": { "male": "$n nudges himself, to keep himself awake.", "female": "$n nudges herself, to keep herself awake.", "neutral": "$n nudges itself, to keep itself awake."},
	})
db.actions.insert({
	"name": "ponder",
	"self_no_arg": { "all": "You ponder the question." },
	"others_no_arg": { "all": "$n sits down and thinks deeply." },
	})
db.actions.insert({
	"name": "punch",
	"self_no_arg": { "all": "Punch whom?" },
		"self_found": { "male": "You punch him playfully.", "female": "You punch her playfully.", "neutral": "You punch it playfully."},
	"others_found": { "all": "$n punches $N playfully." },
	"vict_found": { "all": "$n punches you playfully.  OUCH!" },
	"self_not_found": { "all": "You can't find your boxing partner." },
	"self_auto": { "all": "You punch yourself.  You deserve it." },
	"others_auto": { "male": "$n punches himself.  Why don't you join in?", "female": "$n punches herself.  Why don't you join in?", "neutral": "$n punches itself.  Why don't you join in?"},
	})
db.actions.insert({
	"name": "snarl",
	"self_no_arg": { "all": "You grizzle your teeth and look mean." },
	"others_no_arg": { "all": "$n snarls angrily." },
	"self_found": { "male": "You snarl at him.", "female": "You snarl at her.", "neutral": "You snarl at it."},
	"others_found": { "all": "$n snarls at $N." },
	"vict_found": { "all": "$n snarls at you, for some reason." },
	"self_not_found": { "all": "No need to snarl!" },
	"self_auto": { "all": "You snarl at yourself." },
	"others_auto": { "male": "$n snarls at himself.", "female": "$n snarls at herself.", "neutral": "$n snarls at itself."},
	})
db.actions.insert({
	"name": "spank",
	"self_no_arg": { "all": "Spank whom?" },
		"self_found": { "male": "You spank him playfully.", "female": "You spank her playfully.", "neutral": "You spank it playfully."},
	"others_found": { "all": "$n spanks $N playfully." },
	"vict_found": { "all": "$n spanks you playfully.  OUCH!" },
	"self_not_found": { "all": "Your hand can't find your victim!" },
	"self_auto": { "all": "You spank yourself....HMMMMMMM..." },
	"others_auto": { "male": "$n spanks himself....HMMMMMMM...", "female": "$n spanks herself....HMMMMMMM...", "neutral": "$n spanks itself....HMMMMMMM..."},
	})
db.actions.insert({
	"name": "hand",
	"self_no_arg": { "all": "Kiss whose hand?" },
		"self_found": { "male": "You kiss his hand.", "female": "You kiss her hand.", "neutral": "You kiss it hand."},
	"others_found": { "all": "$n kisses $N's hand.  How continental!" },
	"vict_found": { "all": "$n kisses your hand.  How continental!" },
	"self_not_found": { "all": "You can't find a lady in THIS group." },
	"self_auto": { "all": "You kiss your own hand." },
	"others_auto": { "male": "$n kisses his own hand.", "female": "$n kisses her own hand.", "neutral": "$n kisses it own hand."},
	})
db.actions.insert({
	"name": "yodel",
	"self_no_arg": { "all": "You think of Julie Andrews and start to yodel." },
	"others_no_arg": { "all": "$n begins to yodel:  HEY!! CLERICS!! I COULD USE A HEAL!!!" },
	"self_found": { "male": "$N covers his ears as you begin to yodel.", "female": "$N covers her ears as you begin to yodel.", "neutral": "$N covers it ears as you begin to yodel."},
	"others_found": { "all": "$n yodels to $N." },
	"vict_found": { "all": "$n yodels to you...you cringe and turn away." },
	"self_not_found": { "all": "That person just escaped!" },
	"self_auto": { "all": "Well, it's up to you if you want to damage your hearing." },
	"others_auto": { "male": "$n yodels to himself.  What a sado-masochist.", "female": "$n yodels to herself.  What a sado-masochist.", "neutral": "$n yodels to itself.  What a sado-masochist."},
	})
db.actions.insert({
	"name": "faint",
	"self_no_arg": { "all": "You faint." },
	"others_no_arg": { "all": "$n faints." },
	"self_found": { "male": "You faint into his arms.", "female": "You faint into her arms.", "neutral": "You faint into it arms."},
	"others_found": { "all": "$n faints into $N's open arms." },
	"vict_found": { "all": "$n just fainted into YOUR arms." },
	"self_not_found": { "all": "You fall on the floor and look stupid--really suave." },
	})
db.actions.insert({
	"name": "pinch",
	"self_no_arg": { "all": "You say, 'A pinch of this, and a dab of that.'" },
	"others_no_arg": { "all": "$n says, 'A pinch of this and a dab of that.'" },
	"self_found": { "male": "You squeeze his bottom and grin.", "female": "You squeeze her bottom and grin.", "neutral": "You squeeze it bottom and grin."},
	"others_found": { "all": "$n pinches $N's bottom and grins." },
	"vict_found": { "all": "$n pinches your bottom and grins." },
	"self_not_found": { "all": "You'd like to, wouldn't you?" },
	"self_auto": { "all": "You pinch yourself to see if you are dreaming!" },
	"others_auto": { "male": "$n pinches himself to see if he is dreaming!", "female": "$n pinches herself to see if she is dreaming!", "neutral": "$n pinches itself to see if it is dreaming!"},
	})
db.actions.insert({
	"name": "stroke",
	"self_no_arg": { "all": "You stroke the air vaguely." },
	"others_no_arg": { "all": "$n makes vague stroking motions." },
	"self_found": { "male": "You gently stroke his inner thigh.  $N inhales sharply.", "female": "You gently stroke her inner thigh.  $N inhales sharply.", "neutral": "You gently stroke it inner thigh.  $N inhales sharply."},
	"others_found": { "all": "$N exhales sharply and suddenly." },
	"vict_found": { "all": "$n gently strokes your inner thigh.  You inhale sharply." },
	"self_not_found": { "all": "Maybe you should practice on yourself first." },
	"self_auto": { "all": "You are about to do something you'd rather not be caught doing." },
	})
db.actions.insert({
	"name": "apologize",
	"self_no_arg": { "all": "You apologize until you are blue in the face." },
	"others_no_arg": { "all": "$n apologizes profusely." },
	"self_found": { "male": "You might as well apologize because he sure as hell won't.", "female": "You might as well apologize because she sure as hell won't.", "neutral": "You might as well apologize because it sure as hell won't."},
	"others_found": { "male": "$n apologizes to $N with a very sincere look on his face.", "female": "$n apologizes to $N with a very sincere look on her face.", "neutral": "$n apologizes to $N with a very sincere look on it face."},
	"vict_found": { "all": "$n apologizes to you and begs for forgiveness." },
	"self_not_found": { "all": "Who's that?" },
	})
db.actions.insert({
	"name": "caress",
	"self_no_arg": { "all": "Who do you wish to caress?" },
	"others_no_arg": { "all": "$n looks for someone to caress." },
	"self_found": { "male": "You tenderly caress him.", "female": "You tenderly caress her.", "neutral": "You tenderly caress it."},
	"others_found": { "all": "$n tenderly caresses $N." },
	"vict_found": { "all": "$n tenderly caresses your body." },
	"self_not_found": { "all": "You're S.O.L., buddy." },
	})
db.actions.insert({
	"name": "stagger",
	"self_no_arg": { "all": "You stagger blindly around the room." },
	"others_no_arg": { "all": "$n staggers blindly around the room." },
	"self_found": { "all": "You stagger toward $N as the room begins to spin." },
	"others_found": { "all": "$n staggers into $N." },
	"vict_found": { "all": "$n staggers blindly into you." },
	"self_not_found": { "all": "Stagger into whom!?!?" },
	})
db.actions.insert({
	"name": "snort",
	"self_no_arg": { "all": "You snort derisively." },
	"others_no_arg": { "all": "$n snorts derisively." },
	"self_found": { "all": "You snort derisively at $N." },
	"others_found": { "all": "$n snorts derisively at $N." },
	"vict_found": { "all": "$n snorts at you." },
	"self_not_found": { "all": "Snort at whom?" },
	"self_auto": { "all": "You snort derisively at yourself." },
	"others_auto": { "male": "$n snorts derisively at hisself.", "female": "$n snorts derisively at herself.", "neutral": "$n snorts derisively at itself."},
	})
db.actions.insert({
	"name": "slobber",
	"self_no_arg": { "all": "You slobber down your front." },
	"others_no_arg": { "male": "$n slobbers all over himself.", "female": "$n slobbers all over herself.", "neutral": "$n slobbers all over itself."},
	"self_found": { "all": "You slobber on $N." },
	"others_found": { "all": "$n slobbers on $N  **Yuck**" },
	"vict_found": { "all": "$n slobbers disgustingly on you." },
	"self_not_found": { "all": "Slobber on WHOM?" },
	})
db.actions.insert({
	"name": "blink",
	"self_no_arg": { "all": "You bat your eyelashes." },
	"others_no_arg": { "all": "$n blinks innocently." },
	"self_found": { "all": "You blink innocently at $N." },
	"others_found": { "all": "$n blinks innocently at $N." },
	"vict_found": { "all": "$n blinks innocently at you." },
	"self_not_found": { "all": "Feign innocence for whom?" },
	"self_auto": { "all": "You try to convince yourself of your innocence." },
	})
db.actions.insert({
	"name": "tease",
	"self_no_arg": { "all": "What a tease.   SHEESH." },
	"others_no_arg": { "all": "$n looks around for someone to tease." },
	"self_found": { "all": "You tease $N in a playful way." },
	"others_found": { "male": "$n sticks his tongue out at $N.", "female": "$n sticks her tongue out at $N.", "neutral": "$n sticks it tongue out at $N."},
	"vict_found": { "male": "$n sticks his tongue out at you, what a DORK!!", "female": "$n sticks her tongue out at you, what a DORK!!", "neutral": "$n sticks it tongue out at you, what a DORK!!"},
	"self_not_found": { "all": "Tease whom?" },
	"self_auto": { "all": "You tease yourself. NYAH NYAH NYAH." },
	"others_auto": { "male": "$n teases himself.", "female": "$n teases herself.", "neutral": "$n teases itself."},
	})
db.actions.insert({
	"name": "knee",
	"self_no_arg": { "all": "You raise one knee, preparing to do justice..." },
	"others_no_arg": { "all": "$n cocks one knee threateningly." },
	"self_found": { "male": "You knee him hard in the groin.", "female": "You knee her hard in the groin.", "neutral": "You knee it hard in the groin."},
	"others_found": { "male": "$N doubles over in pain as $n knees him in the groin!", "female": "$N doubles over in pain as $n knees her in the groin!", "neutral": "$N doubles over in pain as $n knees it in the groin!"},
	"vict_found": { "all": "$n suddenly knees you in the groin!  You fall to your knees in agony." },
	"self_not_found": { "all": "Whom do you wish to render impotent?" },
	"self_auto": { "all": "What ARE you thinking !?!??!?!?!?!" },
	})
db.actions.insert({
	"name": "flirt",
	"self_no_arg": { "all": "You flirt outrageously." },
	"others_no_arg": { "all": "$n is an outrageous flirt." },
	"self_found": { "male": "You flirt with $N trying to get his attention.", "female": "You flirt with $N trying to get her attention.", "neutral": "You flirt with $N trying to get it attention."},
	"others_found": { "male": "$n flirts with $N, hmmm wonder what he wants? *wink*", "female": "$n flirts with $N, hmmm wonder what she wants? *wink*", "neutral": "$n flirts with $N, hmmm wonder what it wants? *wink*"},
	"vict_found": { "all": "$n flirts with you." },
	"self_not_found": { "all": "Sorry no one here to flirt with. :(" },
	"self_auto": { "all": "You flirt with yourself -- what ARE you trying to gain!?!?!?" },
	"others_auto": { "male": "$n flirts with himself, wonder what he is trying to accomplish?", "female": "$n flirts with herself, wonder what she is trying to accomplish?", "neutral": "$n flirts with itself, wonder what it is trying to accomplish?"},
	})
db.actions.insert({
	"name": "tip",
	"self_no_arg": { "all": "You tip your hat gallantly." },
	"others_no_arg": { "male": "$n gallantly tips his hat.", "female": "$n gallantly tips her hat.", "neutral": "$n gallantly tips it hat."},
	"self_found": { "all": "You tip your hat to $N." },
	"others_found": { "male": "$n gallantly tips his hat to $N.", "female": "$n gallantly tips her hat to $N.", "neutral": "$n gallantly tips it hat to $N."},
	"vict_found": { "male": "$n gallantly tips his hat to you.", "female": "$n gallantly tips her hat to you.", "neutral": "$n gallantly tips it hat to you."},
	"self_not_found": { "all": "But there is no one here to impress?!?!" },
	})
db.actions.insert({
	"name": "lust",
	"self_no_arg": { "all": "Your hormones begin to rage." },
	"others_no_arg": { "male": "$n has that look of lust in his eyes --- Get away QUICK!", "female": "$n has that look of lust in her eyes --- Get away QUICK!", "neutral": "$n has that look of lust in it eyes --- Get away QUICK!"},
	"self_found": { "all": "You have lust after $N." },
	"others_found": { "all": "$n looks lustily at $N." },
	"vict_found": { "all": "$n lusts after your delectable body." },
	"self_not_found": { "all": "Whom are you trying to lust after?" },
	"self_auto": { "all": "Oh, please! You aren't THAT great..." },
	"others_auto": { "male": "$n lusts after himself, lonely eh?", "female": "$n lusts after herself, lonely eh?", "neutral": "$n lusts after itself, lonely eh?"},
	})
db.actions.insert({
	"name": "flutter",
	"self_no_arg": { "all": "You flutter your eyelashes seductively." },
	"others_no_arg": { "male": "$n flutters his eyelashes seductively.", "female": "$n flutters her eyelashes seductively.", "neutral": "$n flutters it eyelashes seductively."},
	"self_found": { "all": "You flutter your eyelashes at $N, trying to be seductive." },
	"others_found": { "male": "$n flirts with $N, flutters his eyelashes at him.", "female": "$n flirts with $N, flutters her eyelashes at her.", "neutral": "$n flirts with $N, flutters it eyelashes at it."},
	"vict_found": { "male": "$n flutters his eyelashes at you coyly.", "female": "$n flutters her eyelashes at you coyly.", "neutral": "$n flutters it eyelashes at you coyly."},
	"self_not_found": { "all": "EH? Can't see them here." },
	})
db.actions.insert({
	"name": "bark",
	"self_no_arg": { "all": "You bark loudly." },
	"others_no_arg": { "all": "$n barks like a dog. GO DAWGS SIC 'EM!!! WOOF! WOOF! WOOF! WOOF!" },
	"self_found": { "male": "You bark at $N scaring him silly -- SHAME ON YOU!!", "female": "You bark at $N scaring her silly -- SHAME ON YOU!!", "neutral": "You bark at $N scaring it silly -- SHAME ON YOU!!"},
	"others_found": { "male": "$n barks at $N scaring him senseless.", "female": "$n barks at $N scaring her senseless.", "neutral": "$n barks at $N scaring it senseless."},
	"vict_found": { "male": "$n barks loudly at you, you back away, because he might bite too!!", "female": "$n barks loudly at you, you back away, because she might bite too!!", "neutral": "$n barks loudly at you, you back away, because it might bite too!!"},
	"self_not_found": { "all": "Bark at whom?" },
	"self_auto": { "all": "You bark at yourself and jump back in fear." },
	"others_auto": { "male": "$n barks at himself and cowers in fear.", "female": "$n barks at herself and cowers in fear.", "neutral": "$n barks at itself and cowers in fear."},
	})
db.actions.insert({
	"name": "howl",
	"self_no_arg": { "all": "You howl at the moon." },
	"others_no_arg": { "all": "$n howls at the moon." },
	"self_found": { "all": "You howl soulfully at $N." },
	"others_found": { "all": "$n howls at $N." },
	"vict_found": { "all": "$n howls soulfully at you." },
	"self_not_found": { "all": "Who? What? Where?" },
	})
db.actions.insert({
	"name": "babble",
	"self_no_arg": { "all": "You babble endlessly." },
	"others_no_arg": { "male": "$n babbles endlessly, won't he EVER shut up?", "female": "$n babbles endlessly, won't she EVER shut up?", "neutral": "$n babbles endlessly, won't it EVER shut up?"},
	"self_found": { "all": "You babble to $N for hours on end." },
	"others_found": { "all": "$n babbles to $N for what seems an eternity, how can $N stand it?" },
	"vict_found": { "male": "$n babbles at you. You nod mechanically, hoping he will shut up soon.", "female": "$n babbles at you. You nod mechanically, hoping she will shut up soon.", "neutral": "$n babbles at you. You nod mechanically, hoping it will shut up soon."},
	"self_not_found": { "all": "Whom do you wish to annoy with your babble?" },
	"self_auto": { "all": "You babble on and on to yourself, FINALLY! someone who LISTENS!!" },
	"others_auto": { "male": "$n babbles quietly to himself.", "female": "$n babbles quietly to herself.", "neutral": "$n babbles quietly to itself."},
	})
db.actions.insert({
	"name": "ramble",
	"self_no_arg": { "all": "You ramble on and on." },
	"others_no_arg": { "all": "$n rambles on about a boring exploit." },
	"self_found": { "all": "You ramble on to $N about your past adventures." },
	"others_found": { "all": "$n blithers on and on to $N about something." },
	"vict_found": { "all": "$n tells you a rather boring tale, you feign interest." },
	"self_not_found": { "all": "??EH??" },
	})
db.actions.insert({
	"name": "hush",
	"self_no_arg": { "all": "SHHHHHHHHHHHHHHHHHHHHHH" },
	"others_no_arg": { "all": "$n requests everyone quiet down.  Shhhhhhhhhhh..." },
	"self_found": { "all": "You nicely ask $N to be more quiet." },
	"others_found": { "all": "$n nicely asks $N to be more quiet." },
	"vict_found": { "all": "$n kindly requests that you please quiet down." },
	"self_not_found": { "all": "Who needs to be silenced?" },
	"self_auto": { "all": "You realize you are loud and obnoxious and try to silence yourself." },
	"others_auto": { "male": "$n covers his mouth in an attempt to silence himself.", "female": "$n covers her mouth in an attempt to silence herself.", "neutral": "$n covers it mouth in an attempt to silence itself."},
	})
db.actions.insert({
	"name": "threaten",
	"self_no_arg": { "all": "You threaten everyone with your overwhelming presence." },
	"others_no_arg": { "all": "You feel threatened in the presence of the great $n." },
	"self_found": { "all": "You stand tall as you threaten $N." },
	"others_found": { "all": "$n threatens $N forcefully." },
	"vict_found": { "all": "$n threatens you...oooooooh scary *laugh*" },
	"self_not_found": { "all": "Whom do you wish to intimidate?" },
	})
db.actions.insert({
	"name": "roll",
	"self_no_arg": { "all": "You roll your eyes in disgust." },
	"others_no_arg": { "male": "$n rolls his eyes, disgusted.", "female": "$n rolls her eyes, disgusted.", "neutral": "$n rolls it eyes, disgusted."},
	"self_found": { "all": "You look at $N and roll your eyes in disgust." },
	"others_found": { "male": "$n rolls his eyes in disgust at $N.", "female": "$n rolls her eyes in disgust at $N.", "neutral": "$n rolls it eyes in disgust at $N."},
	"vict_found": { "male": "$n rolls his eyes at you.", "female": "$n rolls her eyes at you.", "neutral": "$n rolls it eyes at you."},
	"self_not_found": { "all": "You should be disgusted with yourself because you look so foolish." },
	"self_auto": { "all": "At whom do you wish to roll your eyes?" },
	})
db.actions.insert({
	"name": "swoon",
	"self_no_arg": { "all": "You swoon." },
	"others_no_arg": { "all": "$n swoons in absolute ecstasy." },
	"self_found": { "all": "You look at $N and swoon in ecstasy." },
	"others_found": { "all": "$n looks at $N and swoons in ecstasy." },
	"vict_found": { "all": "$n looks at you and swoons in ecstasy." },
	"self_not_found": { "all": "Who?" },
	})
db.actions.insert({
	"name": "bird",
	"self_no_arg": { "all": "You flick a bird...How obscene!" },
	"others_no_arg": { "all": "$n flicks a bird at no one in particular." },
	"self_found": { "all": "You shoot a bird at $N." },
	"others_found": { "all": "$n gives $N the bird." },
	"vict_found": { "all": "$n gives you the bird...What an ass!" },
	"self_not_found": { "all": "Don't you hate to waste a good obscene gesture like that?" },
	})
db.actions.insert({
	"name": "eyebrow",
	"self_no_arg": { "all": "You raise an eyebrow at the notion." },
	"others_no_arg": { "all": "$n raises an eyebrow." },
	"self_found": { "all": "You raise your eyebrow at $N." },
	"others_found": { "all": "$n raises an eyebrow at $N's weird actions." },
	"vict_found": { "all": "$n raises an eyebrow at you." },
	"self_not_found": { "all": "Forget it.  They aren't here." },
	})
db.actions.insert({
	"name": "serenade",
	"self_no_arg": { "all": "You raise your voice in a loud serenade to your invisible love." },
	"others_no_arg": { "male": "$n raises his voice to serenade the world.", "female": "$n raises her voice to serenade the world.", "neutral": "$n raises it voice to serenade the world."},
	"self_found": { "all": "You raise your voice in a loving serenade to $N." },
	"others_found": { "male": "$n raises his voice in a loving serenade to $N.", "female": "$n raises her voice in a loving serenade to $N.", "neutral": "$n raises it voice in a loving serenade to $N."},
	"vict_found": { "male": "$n serenades you, you are swept away by his voice.", "female": "$n serenades you, you are swept away by her voice.", "neutral": "$n serenades you, you are swept away by it voice."},
	"self_not_found": { "all": "The one that you wish to serenade has left you to sing to yourself." },
	"self_auto": { "all": "You sing a loud serenade to yourself.  What type of person are you?!" },
	"others_auto": { "male": "$n serenades himself.  What an ego!", "female": "$n serenades herself.  What an ego!", "neutral": "$n serenades itself.  What an ego!"},
	})
db.actions.insert({
	"name": "grimace",
	"self_no_arg": { "all": "You grimace painfully at the thought." },
	"others_no_arg": { "all": "$n grimaces painfully at the thought." },
	"self_found": { "all": "You grimace at $N." },
	"others_found": { "all": "$n grimaces at $n." },
	"vict_found": { "all": "$n grimaces at you.  What could be wrong?" },
	"self_not_found": { "all": "You grimace at no one in particular." },
	"self_auto": { "all": "You grimace painfully at your thoughts." },
	"others_auto": { "male": "$n grimaces painfully to himself.", "female": "$n grimaces painfully to herself.", "neutral": "$n grimaces painfully to itself."},
	})
db.actions.insert({
	"name": "boggle",
	"self_no_arg": { "all": "You boggle at the concept." },
	"others_no_arg": { "all": "$n boggles at the concept." },
	"self_found": { "all": "You boggle at $N." },
	"others_found": { "all": "$n boggles at $N." },
	"vict_found": { "all": "$n boggles at you." },
	"self_not_found": { "all": "Boggle away.  They've left." },
	"self_auto": { "all": "You boggle at yourself.  Hmmm...intriguing." },
	"others_auto": { "male": "$n boggles quietly to himself.", "female": "$n boggles quietly to herself.", "neutral": "$n boggles quietly to itself."},
	})
db.actions.insert({
	"name": "beckon",
	"self_no_arg": { "all": "You beckon for everyone to follow." },
	"others_no_arg": { "all": "$n beckons for everyone to follow." },
	"self_found": { "all": "You beckon for $N to follow -- sure hope they do!" },
	"others_found": { "all": "$n beckons $N to follow...hmmm what's going on?" },
	"vict_found": { "all": "$n beckons for you to follow." },
	"self_not_found": { "all": "So sorry, that person has already left." },
	"self_auto": { "all": "You beckon to your shadow to follow." },
	"others_auto": { "male": "$n beckons to his shadow to follow.", "female": "$n beckons to her shadow to follow.", "neutral": "$n beckons to it shadow to follow."},
	})
db.actions.insert({
	"name": "wonder",
	"self_no_arg": { "all": "You wonder about how things could have been." },
	"others_no_arg": { "male": "$n gets a blank stare on his face.  What could he be wondering about?", "female": "$n gets a blank stare on her face.  What could she be wondering about?", "neutral": "$n gets a blank stare on it face.  What could it be wondering about?"},
	"self_found": { "all": "You look at $N and wonder what will happen." },
	"others_found": { "all": "$n looks at $N and wonders...." },
	"vict_found": { "all": "$n looks at you quizzically." },
	"self_not_found": { "all": "You wonder what would have happened had they been here." },
	"self_auto": { "all": "You wonder about yourself and your purpose here." },
	"others_auto": { "male": "A blank stare crosses $n's face.  What could he be wondering about?", "female": "A blank stare crosses $n's face.  What could she be wondering about?", "neutral": "A blank stare crosses $n's face.  What could it be wondering about?"},
	})
db.actions.insert({
	"name": "worry",
	"self_no_arg": { "all": "You worry about what's going to happen." },
	"others_no_arg": { "all": "A troubled look suddenly crosses $n's face.  Wonder what's wrong?" },
	"self_found": { "all": "You look at $N worriedly." },
	"others_found": { "all": "$n looks at $N with a troubled gaze." },
	"vict_found": { "all": "$n looks at you worriedly." },
	"self_not_found": { "all": "Well they obviously aren't worried -- they left!" },
	"self_auto": { "all": "You worry about what's going to happen." },
	"others_auto": { "all": "A troubled look suddenly crosses $n's face.  Wonder what's wrong?" },
	})
db.actions.insert({
	"name": "drool",
	"self_no_arg": { "all": "You drool down the front of your shirt." },
	"others_no_arg": { "male": "$n drools all over himself -- making a TERRIBLE mess!", "female": "$n drools all over herself -- making a TERRIBLE mess!", "neutral": "$n drools all over itself -- making a TERRIBLE mess!"},
	"self_found": { "all": "You drool messily on $N." },
	"others_found": { "all": "$n drools upon $N." },
	"vict_found": { "all": "$n looks at you lustily and drools." },
	"self_not_found": { "all": "Oh fine, make a pool of slobber -- they aren't even here!" },
	"self_auto": { "all": "You drool down the front of your shirt." },
	"others_auto": { "male": "$n drools all over himself -- making a TERRIBLE mess!", "female": "$n drools all over herself -- making a TERRIBLE mess!", "neutral": "$n drools all over itself -- making a TERRIBLE mess!"},
	})
db.actions.insert({
	"name": "nod",
	"self_no_arg": { "all": "You nod." },
	"others_no_arg": { "all": "$n nods." },
	"self_found": { "all": "You nod at $N." },
	"others_found": { "all": "$n nods at $N." },
	"vict_found": { "all": "$n nods at you in agreement." },
	"self_not_found": { "all": "Nod your head off -- they aren't here." },
	"self_auto": { "all": "You attempt to nod at yourself and get dizzy instead." },
	"others_auto": { "male": "$n nods quietly to himself.  What a wacko.", "female": "$n nods quietly to herself.  What a wacko.", "neutral": "$n nods quietly to itself.  What a wacko."},
	})
db.actions.insert({
	"name": "purr",
	"self_no_arg": { "all": "MMMMMMEEEEEEEEEOOOOOOOOOOOOOWWWWWWWWWWW!!!!!!!!!!!" },
	"others_no_arg": { "all": "$n purrs contentedly." },
	"self_found": { "all": "You rub up against $N and purr contentedly." },
	"others_found": { "all": "$n rubs against $N and purrs contentedly." },
	"vict_found": { "all": "$n rubs up against you and purrs contentedly." },
	"self_not_found": { "all": "You silly cat!  They aren't here." },
	"self_auto": { "all": "You purr quietly to yourself." },
	"others_auto": { "male": "$n purrs contentedly to himself.", "female": "$n purrs contentedly to herself.", "neutral": "$n purrs contentedly to itself."},
	})
db.actions.insert({
	"name": "point",
	"self_no_arg": { "all": "You point in every direction." },
	"others_no_arg": { "all": "$n points excitedly!" },
	"self_found": { "all": "You point at $N." },
	"others_found": { "all": "$n points excitedly at $N!" },
	"vict_found": { "all": "$n points at you.  How rude!" },
	"self_not_found": { "all": "You point at no one in particular." },
	"self_auto": { "all": "You point at yourself, obviously very confused." },
	"others_auto": { "male": "$n points at himself, obviously very confused.", "female": "$n points at herself, obviously very confused.", "neutral": "$n points at itself, obviously very confused."},
	})
db.actions.insert({
	"name": "rub",
	"self_no_arg": { "all": "You rub your hands together in greedy anticipation." },
	"others_no_arg": { "male": "$n rubs his hands together in greedy anticipation.", "female": "$n rubs her hands together in greedy anticipation.", "neutral": "$n rubs it hands together in greedy anticipation."},
	"self_found": { "all": "You give $N a nice, long, kinky rubdown." },
	"others_found": { "all": "$n gives $N a nice long rubdown." },
	"vict_found": { "male": "$n gives you a rubdown, running his hands over your tense shoulders...Mmmm...", "female": "$n gives you a rubdown, running her hands over your tense shoulders...Mmmm...", "neutral": "$n gives you a rubdown, running it hands over your tense shoulders...Mmmm..."},
	"self_not_found": { "all": "Shame to waste those talented hands, but they've already left." },
	"self_auto": { "all": "You rub yourself...lingering a little too long in some places." },
	"others_auto": { "male": "$n rubs himself...what a creep!", "female": "$n rubs herself...what a creep!", "neutral": "$n rubs itself...what a creep!"},
	})
db.actions.insert({
	"name": "bleed",
	"self_no_arg": { "all": "You bleed profusely -- making a horrible mess!" },
	"others_no_arg": { "all": "$n weakly bleeds all over the floor." },
	"self_found": { "all": "You bleed on $N -- ewww!" },
	"others_found": { "all": "$n bleeds on $N.  Watch out, YOU might be next!" },
	"vict_found": { "all": "$n bleeds on you -- ewww!  Get away!!" },
	"self_not_found": { "all": "Bleed on whom?" },
	"self_auto": { "all": "You bleed all over yourself." },
	"others_auto": { "male": "$n bleeds profusely all over himself.", "female": "$n bleeds profusely all over herself.", "neutral": "$n bleeds profusely all over itself."},
	})
db.actions.insert({
	"name": "highfive",
	"self_no_arg": { "all": "You jump in the air and give a BIG high five to...umm...absolutely nothing." },
	"others_no_arg": { "all": "$n wildly high fives the air, looking very foolish -- very foolish indeed." },
	"self_found": { "all": "You jump in the air and give a BIG high five to $N!" },
	"others_found": { "all": "$n enthusiastically high-five's $N!" },
	"vict_found": { "all": "$n gives you a BIG high five!  Way to go!!" },
	"self_not_found": { "all": "Sorry, they have already left." },
	"self_auto": { "all": "You try to give yourself a high five.  What ARE you thinking?" },
	"others_auto": { "male": "$n tries to high five himself, but ends up looking foolish instead.", "female": "$n tries to high five herself, but ends up looking foolish instead.", "neutral": "$n tries to high five itself, but ends up looking foolish instead."},
	})
db.actions.insert({
	"name": "propose",
	"self_no_arg": { "all": "You propose to everyone in the room." },
	"others_no_arg": { "all": "$n proposes to everyone in the room.  Very odd." },
	"self_found": { "all": "You kneel and romantically propose to $N." },
	"others_found": { "all": "$n gets on one knee and proposes to $N." },
	"vict_found": { "all": "$n gets down on one knee and romantically proposes to you." },
	"self_not_found": { "all": "You must be lonely.  They aren't here." },
	"self_auto": { "all": "You are SO full of yourself!" },
	"others_auto": { "male": "$n proposes to himself -- how narcissistic!", "female": "$n proposes to herself -- how narcissistic!", "neutral": "$n proposes to itself -- how narcissistic!"},
	})
db.actions.insert({
	"name": "peer",
	"self_no_arg": { "all": "You peer around yourself intently." },
	"others_no_arg": { "male": "$n peers around himself intently.", "female": "$n peers around herself intently.", "neutral": "$n peers around itself intently."},
	"self_found": { "all": "You peer intently at $N." },
	"others_found": { "all": "$n peers intently at $N." },
	"vict_found": { "all": "$n peers at you intently." },
	"self_not_found": { "all": "They aren't here." },
	"self_auto": { "all": "You get a little cross-eyed with your attempts to stare yourself down." },
	"others_auto": { "male": "$n peers at himself, crossing his eyes in the process.", "female": "$n peers at herself, crossing her eyes in the process.", "neutral": "$n peers at itself, crossing it eyes in the process."},
	})
db.actions.insert({
	"name": "worship",
	"self_no_arg": { "all": "You prostrate yourself and worship the gods!" },
	"others_no_arg": { "male": "$n prostrates himself and worships the gods!", "female": "$n prostrates herself and worships the gods!", "neutral": "$n prostrates itself and worships the gods!"},
	"self_found": { "all": "You fall on your knees and worship $N." },
	"others_found": { "male": "$n falls on his knees and worships $N.", "female": "$n falls on her knees and worships $N.", "neutral": "$n falls on it knees and worships $N."},
	"vict_found": { "all": "$n falls to the ground and worships you." },
	"self_not_found": { "all": "You can't worship someone who isn't here." },
	"self_auto": { "all": "You worship yourself." },
	"others_auto": { "male": "$n worships himself.", "female": "$n worships herself.", "neutral": "$n worships itself."},
	})
db.actions.insert({
	"name": "bearhug",
	"self_no_arg": { "all": "Whom do you wish to bearhug?" },
		"self_found": { "all": "You overwhelm $N with a great, big, hulking bearhug." },
	"others_found": { "all": "$n encompasses $N in an ENORMOUS bearhug!" },
	"vict_found": { "all": "$n clutches you tightly in an overwhelming bearhug!" },
	"self_not_found": { "all": "Perhaps you should shower your affections on someone who is here?" },
	"self_auto": { "all": "You vainly clutch yourself in a bearhug for consolation." },
	"others_auto": { "male": "$n hugs himself as tightly as possible.  Looks like he could use a hand.", "female": "$n hugs herself as tightly as possible.  Looks like she could use a hand.", "neutral": "$n hugs itself as tightly as possible.  Looks like it could use a hand."},
	})
db.actions.insert({
	"name": "innocent",
	"self_no_arg": { "all": "You innocently whistle a tune." },
	"others_no_arg": { "all": "$n looks around and whistles innocently." },
	"self_found": { "all": "You look at $N and bat your eyelashes -- the picture of innocence!" },
	"others_found": { "male": "$n bats his eyelashes innocently at $N.", "female": "$n bats her eyelashes innocently at $N.", "neutral": "$n bats it eyelashes innocently at $N."},
	"vict_found": { "male": "$n looks at you and innocently bats his eyelashes.", "female": "$n looks at you and innocently bats her eyelashes.", "neutral": "$n looks at you and innocently bats it eyelashes."},
	"self_not_found": { "all": "Don't even TRY -- they've already left." },
	})
db.actions.insert({
	"name": "collapse",
	"self_no_arg": { "all": "You collapse on the floor from exhaustion." },
	"others_no_arg": { "all": "$n dramatically collapses to the floor from exhaustion." },
	"self_found": { "all": "You collapse right into $N's arms." },
	"others_found": { "all": "$n collapses right into $N's arms." },
	"vict_found": { "all": "Suddenly, $n collapses into your arms from exhaustion." },
	"self_not_found": { "all": "They've already left, just collapse on the floor." },
	})
db.actions.insert({
	"name": "stretch",
	"self_no_arg": { "all": "You lean back and streeeeeettch your arms and legs." },
	"others_no_arg": { "all": "$n stretches luxuriously.  Kinda makes you want to doesn't it?" },
	})
db.actions.insert({
	"name": "spam",
	"self_no_arg": { "all": "You mutter, 'spam' quietly to yourself again and again." },
	"others_no_arg": { "male": "$n rests in a corner and mutters 'spam' quietly to himself.", "female": "$n rests in a corner and mutters 'spam' quietly to herself.", "neutral": "$n rests in a corner and mutters 'spam' quietly to itself."},
	"self_found": { "all": "You SPAM $N mercilessly!" },
	"others_found": { "all": "$n spams $N!" },
	"vict_found": { "all": "You've been SPAMMED by $n!" },
	"self_not_found": { "all": "Spam away -- they've left." },
	})
db.actions.insert({
	"name": "boast",
	"self_no_arg": { "all": "You boast loudly of all your amazing accomplishments." },
	"others_no_arg": { "all": "$n boasts loudly in a pigheaded fashion." },
	"self_found": { "all": "You boast to $N of all your great deeds." },
	"others_found": { "all": "$n boasts to $N." },
	"vict_found": { "all": "Once again, $n boasts to you, what a bloated ego!" },
	"self_not_found": { "all": "Your ego takes a blow.  They've already left." },
	"self_auto": { "all": "You boast to yourself of all your great feats!  Your own biggest fan." },
	"others_auto": { "male": "$n boasts to himself -- what an ego!", "female": "$n boasts to herself -- what an ego!", "neutral": "$n boasts to itself -- what an ego!"},
	})
db.actions.insert({
	"name": "squirm",
	"self_no_arg": { "all": "You squirm uncontrollably in your consternation." },
	"others_no_arg": { "all": "$n squirms uncontrollably, suddenly looking very uncomfortable." },
	"self_found": { "all": "You look at $N and squirm with delight." },
	"others_found": { "all": "$n looks at $N and squirms with delight." },
	"vict_found": { "all": "$n looks at you and squirms with delight." },
	})
db.actions.insert({
	"name": "moo",
	"self_no_arg": { "all": "You chew your cud and moo plaintively.  Muh-OOOOO!" },
	"others_no_arg": { "male": "$n turns cowlike eyes on you, chews his cud, and moos plaintively.", "female": "$n turns cowlike eyes on you, chews her cud, and moos plaintively.", "neutral": "$n turns cowlike eyes on you, chews it cud, and moos plaintively."},
	"self_found": { "all": "You focus all your bovine Zen on $N, and speak your thoughts.  Muh-OOOOO!" },
	"others_found": { "male": "Slowly, $n looks at $N, chews his cud, and muh-OOOOs!", "female": "Slowly, $n looks at $N, chews her cud, and muh-OOOOs!", "neutral": "Slowly, $n looks at $N, chews it cud, and muh-OOOOs!"},
	"vict_found": { "all": "$n moos at you.  What could that possibly mean?" },
	"self_not_found": { "all": "You'd better find someone else to moo at." },
	"self_auto": { "all": "You settle down into the center of your bovine Zen; the foolish world thinks you're just mooing." },
	"others_auto": { "male": "$n is mooing at himself again...  You look for an exit...", "female": "$n is mooing at herself again...  You look for an exit...", "neutral": "$n is mooing at itself again...  You look for an exit..."},
	})
db.actions.insert({
	"name": "moon",
	"self_no_arg": { "all": "You drop your drawers and moon everyone in the room!" },
	"others_no_arg": { "male": "$n drops his pants and gives you the vertical smile!", "female": "$n drops her pants and gives you the vertical smile!", "neutral": "$n drops it pants and gives you the vertical smile!"},
	"self_found": { "all": "You bend over and moon $N." },
	"others_found": { "male": "$n drops his pants and rudely moons $N!", "female": "$n drops her pants and rudely moons $N!", "neutral": "$n drops it pants and rudely moons $N!"},
	"vict_found": { "all": "$n bends over and gives you the vertical smile!" },
	"self_not_found": { "all": "You stand, with your pants around your ankles, looking VERY silly!" },
	"self_auto": { "all": "You try to moon yourself, but you can't see your A** that well." },
	"others_auto": { "male": "$n nearly goes into convulsions while trying to moon himself.", "female": "$n nearly goes into convulsions while trying to moon herself.", "neutral": "$n nearly goes into convulsions while trying to moon itself."},
	})
db.actions.insert({
	"name": "goose",
	"self_no_arg": { "all": "Who would you like to goose?" },
		"self_found": { "all": "You tenderly goose $N on the tush." },
	"others_found": { "male": "$n reaches around $N's backside and gooses him tenderly.", "female": "$n reaches around $N's backside and gooses her tenderly.", "neutral": "$n reaches around $N's backside and gooses it tenderly."},
	"vict_found": { "all": "$n gooses you tenderly!" },
	"self_not_found": { "all": "You should go hunting for another victim, they left." },
	"self_auto": { "all": "You pinch yourself on the rear, you must be desperate." },
	"others_auto": { "male": "$n pinches himself on the rear.", "female": "$n pinches herself on the rear.", "neutral": "$n pinches itself on the rear."},
	})
db.actions.insert({
	"name": "wince",
	"self_no_arg": { "all": "You wince in agony." },
	"others_no_arg": { "all": "$n winces in agony." },
	"self_found": { "male": "You look at $N and wince at his remark.", "female": "You look at $N and wince at her remark.", "neutral": "You look at $N and wince at it remark."},
	"others_found": { "all": "$n winces at $N's remark." },
	"vict_found": { "all": "$n winces at your remark." },
	})
db.actions.insert({
	"name": "type",
	"self_no_arg": { "all": "You can't type for crap tonight!  You give up in frustration!" },
	"others_no_arg": { "male": "$n throws his hands up in disgust at his lousy typing skills!", "female": "$n throws her hands up in disgust at her lousy typing skills!", "neutral": "$n throws it hands up in disgust at it lousy typing skills!"},
	})
db.actions.insert({
	"name": "brb",
	"self_no_arg": { "all": "Hope to see you soon!" },
	"others_no_arg": { "all": "$n will be right back!" },
	})
db.actions.insert({
	"name": "mutter",
	"self_no_arg": { "all": "You mutter quietly to yourself." },
	"others_no_arg": { "male": "$n mutters something quietly to himself.", "female": "$n mutters something quietly to herself.", "neutral": "$n mutters something quietly to itself."},
	"self_found": { "all": "You mutter something to $N." },
	"others_found": { "male": "$n looks at $N and mutters something nasty under his breath.", "female": "$n looks at $N and mutters something nasty under her breath.", "neutral": "$n looks at $N and mutters something nasty under it breath."},
	"vict_found": { "male": "$n looks at you and mutters something nasty under his breath.", "female": "$n looks at you and mutters something nasty under her breath.", "neutral": "$n looks at you and mutters something nasty under it breath."},
	"self_not_found": { "all": "There's nothing left for you to say, they've left!" },
	"self_auto": { "all": "You mutter quietly to yourself." },
	"others_auto": { "male": "$n mutters something quietly to himself.", "female": "$n mutters something quietly to herself.", "neutral": "$n mutters something quietly to itself."},
	})
db.actions.insert({
	"name": "rofl",
	"self_no_arg": { "all": "You roll on the floor, laughing hysterically." },
	"others_no_arg": { "all": "$n falls to the ground and rolls around laughing hysterically." },
	"self_found": { "all": "You fall to the floor laughing at $N's remark." },
	"others_found": { "all": "$n rolls on the floor laughing at $N's antics!" },
	"vict_found": { "all": "$n rolls on the floor laughing at your antics!" },
	})
db.actions.insert({
	"name": "sob",
	"self_no_arg": { "all": "You sob quietly to yourself." },
	"others_no_arg": { "all": "$n sobs in misery." },
	"self_found": { "all": "You sob quietly to yourself because $N has hurt your feelings so badly." },
	"others_found": { "male": "$n sobs quietly to himself because $N was a jerk!", "female": "$n sobs quietly to herself because $N was a jerk!", "neutral": "$n sobs quietly to itself because $N was a jerk!"},
	"vict_found": { "all": "You feel like a cad because you've made $n sob." },
	})
db.actions.insert({
	"name": "pant",
	"self_no_arg": { "all": "You pant lustily." },
	"others_no_arg": { "all": "$n pants lustily." },
	"self_found": { "male": "You pant lustily at him.", "female": "You pant lustily at her.", "neutral": "You pant lustily at it."},
	"others_found": { "all": "$n looks at $N and pants lustily." },
	"vict_found": { "all": "$n looks at you and pants lustily..." },
	})
db.actions.insert({
	"name": "whine",
	"self_no_arg": { "all": "You whine to anyone who will listen to you." },
	"others_no_arg": { "all": "$n whines pathetically to anyone who will listen." },
	"self_found": { "male": "You whine to him, hoping desperately that at least he will give a damn.", "female": "You whine to her, hoping desperately that at least she will give a damn.", "neutral": "You whine to it, hoping desperately that at least it will give a damn."},
	"others_found": { "all": "$n whines pathetically to $N." },
	"vict_found": { "all": "$n whines pathetically to you.  What a loser!" },
	"self_not_found": { "all": "They really don't care." },
	"self_auto": { "all": "You whine to yourself, probably the only one who will listen." },
	"others_auto": { "male": "$n whines to himself.  At least he isn't bitching to YOU.", "female": "$n whines to herself.  At least she isn't bitching to YOU.", "neutral": "$n whines to itself.  At least it isn't bitching to YOU."},
	})
db.actions.insert({
	"name": "flex",
	"self_no_arg": { "all": "You flex your muscles proudly!" },
	"others_no_arg": { "male": "$n flexes his muscles...what a stud!?!", "female": "$n flexes her muscles...what a stud!?!", "neutral": "$n flexes it muscles...what a stud!?!"},
	"self_found": { "all": "You show off to $N, flexing your muscles proudly." },
	"others_found": { "male": "$n flexes his muscles, in a vain attempt to impress $N.", "female": "$n flexes her muscles, in a vain attempt to impress $N.", "neutral": "$n flexes it muscles, in a vain attempt to impress $N."},
	"vict_found": { "male": "$n flexes his muscles in a vain attempt to show off to you.", "female": "$n flexes her muscles in a vain attempt to show off to you.", "neutral": "$n flexes it muscles in a vain attempt to show off to you."},
	})
db.actions.insert({
	"name": "embrace",
	"self_no_arg": { "all": "Who would you like to embrace?" },
		"self_found": { "all": "You wrap your arms around $N in a warm and loving embrace." },
	"others_found": { "male": "$n wraps his arms around $N in a warm and loving embrace.", "female": "$n wraps her arms around $N in a warm and loving embrace.", "neutral": "$n wraps it arms around $N in a warm and loving embrace."},
	"vict_found": { "male": "$n takes you in his arms in a warm and loving embrace.", "female": "$n takes you in her arms in a warm and loving embrace.", "neutral": "$n takes you in it arms in a warm and loving embrace."},
	"self_not_found": { "all": "Your heart breaks as you realize you are alone." },
	"self_auto": { "all": "You try to console yourself with a loving embrace." },
	"others_auto": { "male": "$n tries to console himself by wrapping his arms around himself.", "female": "$n tries to console herself by wrapping her arms around herself.", "neutral": "$n tries to console itself by wrapping it arms around itself."},
	})
db.actions.insert({
	"name": "duck",
	"self_no_arg": { "all": "DUCK!!!!" },
	"others_no_arg": { "all": "$n ducks defensively." },
	"self_found": { "all": "You duck defensively, anticipating the oncoming swipe from $N." },
	"others_found": { "all": "$n ducks, anticipating $N's reaction." },
	"vict_found": { "male": "$n ducks, please oh please don't hit him!", "female": "$n ducks, please oh please don't hit her!", "neutral": "$n ducks, please oh please don't hit it!"},
	})
db.actions.insert({
	"name": "bonk",
	"self_no_arg": { "all": "***BONK!!!***" },
		"self_found": { "all": "You bonk $N on the head for being such a moron." },
	"others_found": { "all": "$n bonks $N on the head for being such an UTTER moron." },
	"vict_found": { "all": "$n bonks you on the head for being so foolish." },
	"self_not_found": { "all": "***BONK*** they left..." },
	"self_auto": { "all": "You bonk yourself, fool that you are." },
	"others_auto": { "male": "$n bonks himself and grimaces in pain.", "female": "$n bonks herself and grimaces in pain.", "neutral": "$n bonks itself and grimaces in pain."},
	})
db.actions.insert({
	"name": "squeal",
	"self_no_arg": { "all": "You squeal with delight!" },
	"others_no_arg": { "all": "$n lets out a sudden squeal of delight!" },
	"self_found": { "all": "You look at $N and squeal with delight!" },
	"others_found": { "all": "$n squeals with delight at $N." },
	"vict_found": { "all": "$n looks at you and squeals with delight!" },
	})
db.actions.insert({
	"name": "tackle",
	"self_no_arg": { "all": "You're going to tackle everyone in the room?!" },
		"self_found": { "all": "You tackle $N playfully." },
	"others_found": { "all": "$n playfully tackles $N." },
	"vict_found": { "all": "$n brings you down in a playful tackle!" },
	})
db.actions.insert({
	"name": "spit",
	"self_no_arg": { "all": "You spit in utter disgust." },
	"others_no_arg": { "all": "$n spits in utter disgust!" },
	"self_found": { "all": "You spit on $N...you're gross!" },
	"others_found": { "all": "$n spits on $N." },
	"vict_found": { "all": "$n spits on you -- how gross!" },
	"self_not_found": { "all": "Your victim isn't here." },
	"self_auto": { "all": "You spit on yourself, pretty nasty eh?" },
	"others_auto": { "male": "$n spits on himself...what a sicko!", "female": "$n spits on herself...what a sicko!", "neutral": "$n spits on itself...what a sicko!"},
	})
db.actions.insert({
	"name": "life",
	"self_no_arg": { "all": "You try to get a life, and fail." },
	"others_no_arg": { "all": "$n tries to get a life, and fails." },
	"self_found": { "all": "$N needs to get a life!" },
	"others_found": { "all": "$N needs to get a life!" },
	"vict_found": { "all": "You need to get a life!" },
	"self_not_found": { "all": "Who needs a life?" },
	"self_auto": { "all": "But you have none to give!" },
	"others_auto": { "male": "$n attempts to give himself a life, but has none to spare.", "female": "$n attempts to give herself a life, but has none to spare.", "neutral": "$n attempts to give itself a life, but has none to spare."},
	})
db.actions.insert({
	"name": "mosh",
	"self_no_arg": { "all": "You mosh insanely around the room!" },
	"others_no_arg": { "all": "$n moshes insanely around the room!" },
	"self_found": { "all": "You mosh sadistically against $N ... you WILL be punished." },
	"others_found": { "all": "$n bounces off of $N in a vain attempt to mosh... what a LOSER." },
	"vict_found": { "all": "$n slams into you, moshing painfully against you.  That REALLY hurts!" },
	"self_not_found": { "all": "Hmmm...  your victim found a new dance partner." },
	"self_auto": { "all": "Masochist!" },
	"others_auto": { "male": "$n throws himself on the floor, grinding himself into a bloody pulp", "female": "$n throws herself on the floor, grinding herself into a bloody pulp", "neutral": "$n throws itself on the floor, grinding itself into a bloody pulp"},
	})
db.actions.insert({
	"name": "flinch",
	"self_no_arg": { "all": "EEEK... You flinch in obvious pain." },
	"others_no_arg": { "male": "$n flinches in obvious pain... you wonder what he did THIS time.", "female": "$n flinches in obvious pain... you wonder what she did THIS time.", "neutral": "$n flinches in obvious pain... you wonder what it did THIS time."},
	"self_found": { "all": "Don't you wish you could just crawl under a rock and die?" },
	"others_found": { "all": "$n sneaks a glance at $N and flinches." },
	"vict_found": { "all": "$n flinches in response to your cold rebuke." },
	"self_not_found": { "male": "Relax, he is gone.", "female": "Relax, she is gone.", "neutral": "Relax, it is gone."},
	"self_auto": { "all": "You can't belive what you've done..." },
	"others_auto": { "male": "$n twitches violently, shocked at his own behavior.", "female": "$n twitches violently, shocked at her own behavior.", "neutral": "$n twitches violently, shocked at it own behavior."},
	})
db.actions.insert({
	"name": "air",
	"self_no_arg": { "all": "You grab your air guitar and play for all you're worth." },
	"others_no_arg": { "all": "$n air-guitars like a mad man ... EXCELLENT!!!" },
	"self_found": { "male": "You hope he appreciates your (total lack of) talent.", "female": "You hope she appreciates your (total lack of) talent.", "neutral": "You hope it appreciates your (total lack of) talent."},
	"others_found": { "all": "$n is surrounded by air groupies." },
	"vict_found": { "male": "$n plays a most excellent tune for you on his most excellent air guitar.", "female": "$n plays a most excellent tune for you on her most excellent air guitar.", "neutral": "$n plays a most excellent tune for you on it most excellent air guitar."},
	"self_not_found": { "all": "Awww... you have no audience!" },
	"self_auto": { "all": "You play softly to yourself." },
	})
db.actions.insert({
	"name": "tweak",
	"self_no_arg": { "all": "Tweak who?" },
		"self_found": { "male": "You gently tweak his cheek.  Isn't he so CUTE?", "female": "You gently tweak her cheek.  Isn't she so CUTE?", "neutral": "You gently tweak it cheek.  Isn't it so CUTE?"},
	"others_found": { "all": "$n tweaked $N's cheek... don't they look so adorable together?" },
	"vict_found": { "all": "$n lovingly tweaks your cheek.  It reminds you of Grandma... sniff..." },
	"self_not_found": { "all": "*Sniff*  That cheek seems to be missing." },
	"self_auto": { "all": "You can't DO that." },
	})
db.actions.insert({
	"name": "peck",
	"self_no_arg": { "all": "Wouldn't you like to do that to a person, or do you prefer air?" },
		"self_found": { "all": "Risking a slap to the face, you give $N a peck on the cheek." },
	"others_found": { "all": "$n smiles and gives $N a chaste peck on the cheek." },
	"vict_found": { "all": "$n pecks you on the cheek, how sweet!" },
	"self_not_found": { "all": "I guess you scared them away..." },
	"self_auto": { "all": "You must REALLY like yourself." },
	"others_auto": { "male": "$n tries in vain to wrap his lips around his cheeks.", "female": "$n tries in vain to wrap her lips around her cheeks.", "neutral": "$n tries in vain to wrap it lips around it cheeks."},
	})
db.actions.insert({
	"name": "explode",
	"self_no_arg": { "all": "You feel the blood boiling in your veins!" },
	"others_no_arg": { "male": "$n turns a deep red, fighting to contain his temper...", "female": "$n turns a deep red, fighting to contain her temper...", "neutral": "$n turns a deep red, fighting to contain it temper..."},
	"self_found": { "all": "You feel your rage explode deep in the pit of your stomach..." },
	"others_found": { "all": "$n burns holes through $N with his explosive anger!" },
	"vict_found": { "all": "$n is ANGRY with you... I'd run if I were you!!!" },
	"self_not_found": { "all": "Temper Temper... they left." },
	"self_auto": { "all": "Your soul burns brightly then fades to nothing." },
	"others_auto": { "male": "$n implodes!!!  Only a grease spot remains where he once stood.", "female": "$n implodes!!!  Only a grease spot remains where she once stood.", "neutral": "$n implodes!!!  Only a grease spot remains where it once stood."},
	})
db.actions.insert({
	"name": "raspberry",
	"self_no_arg": { "all": "You stick your tongue out at ... well, no one." },
	"others_no_arg": { "male": "$n sticks his tongue out, catching a few flies in the process.", "female": "$n sticks her tongue out, catching a few flies in the process.", "neutral": "$n sticks it tongue out, catching a few flies in the process."},
	"self_found": { "all": "You give $N the raspberry... and spit all over yourself." },
	"others_found": { "all": "$n gives $N the raspberry... PHBT!  What a mess... Spit EVERYWHERE!" },
	"vict_found": { "all": "You are splattered with saliva as $n gives you the raspberry... HOW RUDE!" },
	"self_not_found": { "male": "Hang your tongue out if you like, he isn't here.", "female": "Hang your tongue out if you like, she isn't here.", "neutral": "Hang your tongue out if you like, it isn't here."},
	"self_auto": { "all": "You try to stick your tongue out at yourself... somehow, it isn't the same." },
	})
db.actions.insert({
	"name": "flash",
	"self_no_arg": { "all": "You grin and strut as you open your coat and show what you've got!" },
	"others_no_arg": { "male": "$n rips his clothes off and parades naked around the room!", "female": "$n rips her clothes off and parades naked around the room!", "neutral": "$n rips it clothes off and parades naked around the room!"},
	"self_found": { "male": "Swiftly you jerk open your jacket, trying to get him to notice you.", "female": "Swiftly you jerk open your jacket, trying to get her to notice you.", "neutral": "Swiftly you jerk open your jacket, trying to get it to notice you."},
	"others_found": { "male": "Cover your eyes, $n is exposing himself to $n!  EWWWW!", "female": "Cover your eyes, $n is exposing herself to $n!  EWWWW!", "neutral": "Cover your eyes, $n is exposing itself to $n!  EWWWW!"},
	"vict_found": { "male": "You gasp!  $n has just revealed his \"equipment\" to you!", "female": "You gasp!  $n has just revealed her \"equipment\" to you!", "neutral": "You gasp!  $n has just revealed it \"equipment\" to you!"},
	"self_not_found": { "all": "Exhibitionist, that person isn't here!" },
	"self_auto": { "all": "That's sick." },
	"others_auto": { "male": "PERVERT PRESENT!  $n is trying to flash himself", "female": "PERVERT PRESENT!  $n is trying to flash herself", "neutral": "PERVERT PRESENT!  $n is trying to flash itself"},
	})
db.actions.insert({
	"name": "strip",
	"self_no_arg": { "all": "You do a slow strip tease for the people..." },
	"others_no_arg": { "all": "$n begins a slow, erotic strip-tease act..." },
	"self_found": { "all": "You start to undress $N ... one piece of clothing at a time..." },
	"others_found": { "male": "$n runs his hands over $Ns body, slowly stripping away the clothing...", "female": "$n runs her hands over $Ns body, slowly stripping away the clothing...", "neutral": "$n runs it hands over $Ns body, slowly stripping away the clothing..."},
	"vict_found": { "all": "$n has started to strip you... woah BABY!" },
	"self_not_found": { "all": "Your toy doesn't seem to be here..." },
	"self_auto": { "all": "You can't DO that in public!" },
	})
db.actions.insert({
	"name": "undress",
	"self_no_arg": { "all": "You start to undress in the shadows, waiting for someone to notice." },
	"others_no_arg": { "male": "$n begins to undress... he is VERY sexy... *Pant*", "female": "$n begins to undress... she is VERY sexy... *Pant*", "neutral": "$n begins to undress... it is VERY sexy... *Pant*"},
	"self_found": { "male": "You undress him with your eyes... Kinky.", "female": "You undress her with your eyes... Kinky.", "neutral": "You undress it with your eyes... Kinky."},
	"others_found": { "all": "You feel the temperature of the room rise as $n lusts on $N..." },
	"vict_found": { "male": "Feeling exposed, you sense $n undressing you with his eyes...", "female": "Feeling exposed, you sense $n undressing you with her eyes...", "neutral": "Feeling exposed, you sense $n undressing you with it eyes..."},
	"self_not_found": { "all": "They are not here..." },
	"self_auto": { "all": "A mirror would work better..." },
	})
db.actions.insert({
	"name": "tongue",
	"self_no_arg": { "all": "You slowly give your tongue a nice workout." },
		"self_found": { "all": "Mmmm... you give $N a good working over with your tongue..." },
	"others_found": { "male": "$n slides his tongue over $N's body...", "female": "$n slides her tongue over $N's body...", "neutral": "$n slides it tongue over $N's body..."},
	"vict_found": { "male": "$n wraps his tongue around you, moving it across your young, nubile flesh...", "female": "$n wraps her tongue around you, moving it across your young, nubile flesh...", "neutral": "$n wraps it tongue around you, moving it across your young, nubile flesh..."},
	"self_not_found": { "all": "Never around when required..." },
	"self_auto": { "all": "You slowly tongue yourself." },
	"others_auto": { "male": "$n slowly tongues himself... ICK.", "female": "$n slowly tongues herself... ICK.", "neutral": "$n slowly tongues itself... ICK."},
	})
db.actions.insert({
	"name": "view",
	"self_no_arg": { "all": "You sit back and watch the world go by." },
	"others_no_arg": { "all": "$n kicks back and enjoys the view." },
	})
db.actions.insert({
	"name": "grumble",
	"self_no_arg": { "all": "You grumble distractedly to yourself" },
	"others_no_arg": { "all": "$n grumbles and growls. You wonder what's wrong..." },
	"self_found": { "all": "You grumble at $N, disgusted with their presence." },
	"others_found": { "male": "$n seems to be a grumpy bear... he is grumbling at poor $N.", "female": "$n seems to be a grumpy bear... she is grumbling at poor $N.", "neutral": "$n seems to be a grumpy bear... it is grumbling at poor $N."},
	"vict_found": { "all": "$n is grumbling at you... what'd you do?" },
	"self_not_found": { "all": "That person is presently AWOL." },
	"self_auto": { "all": "Why bother?" },
	})
db.actions.insert({
	"name": "cheer",
	"self_no_arg": { "all": "You cheer and dance as the joy within you bursts forth!" },
	"others_no_arg": { "male": "$n cheers and sings... he is just BURSTING with joy!", "female": "$n cheers and sings... she is just BURSTING with joy!", "neutral": "$n cheers and sings... it is just BURSTING with joy!"},
	"self_found": { "male": "You cheer $N on and wish him good luck!", "female": "You cheer $N on and wish her good luck!", "neutral": "You cheer $N on and wish it good luck!"},
	"others_found": { "male": "*Yay!*  Go $N!!!  $n cheers him on.", "female": "*Yay!*  Go $N!!!  $n cheers her on.", "neutral": "*Yay!*  Go $N!!!  $n cheers it on."},
	"vict_found": { "all": "You are cheered on by $n... you feel so loved!" },
	"self_not_found": { "all": "Who? Huh? Where?  They're not here, that's for sure" },
	"self_auto": { "all": "You cheer silently for yourself since nobody else will" },
	"others_auto": { "male": "$n resorts to cheering for himself... how sad.", "female": "$n resorts to cheering for herself... how sad.", "neutral": "$n resorts to cheering for itself... how sad."},
	})
db.actions.insert({
	"name": "plead",
	"self_no_arg": { "all": "You beg and plead to anyone who will listen." },
	"others_no_arg": { "male": "$n pleads his case to anyone who will listen... You ALMOST feel sorry for his.", "female": "$n pleads her case to anyone who will listen... You ALMOST feel sorry for her.", "neutral": "$n pleads it case to anyone who will listen... You ALMOST feel sorry for it."},
	})
db.actions.insert({
	"name": "charge",
	"self_no_arg": { "all": "You charge into the fray!" },
	"others_no_arg": { "all": "$n charges into the fray!  All guts, no brains." },
	"self_found": { "all": "With surprising dexterity, you head-butt $N!" },
	"others_found": { "all": "$n ducks down low, charges forward, and head-butts $N!" },
	"vict_found": { "male": "OOF!  $n rammed his head into your stomach!  That HURT.", "female": "OOF!  $n rammed her head into your stomach!  That HURT.", "neutral": "OOF!  $n rammed it head into your stomach!  That HURT."},
	"self_not_found": { "all": "Nobody 'round with that name, Mister!" },
	"self_auto": { "all": "You run your head into a brick wall.  OUCH!" },
	})
db.actions.insert({
	"name": "criticize",
	"self_no_arg": { "all": "Yes, but who?" },
		"self_found": { "male": "You criticize him with all the warmth of a snake.", "female": "You criticize her with all the warmth of a snake.", "neutral": "You criticize it with all the warmth of a snake."},
	"others_found": { "all": "With a nasty grin, $n rips apart $Ns efforts." },
	"vict_found": { "all": "$n informs you that your attempts need some MAJOR adjustments." },
	"self_not_found": { "all": "Where oh where has my victim gone, oh where oh where..." },
	"self_auto": { "all": "You criticize yourself profusely." },
	"others_auto": { "male": "$n tears himself apart, cursing his own stupidity.", "female": "$n tears herself apart, cursing her own stupidity.", "neutral": "$n tears itself apart, cursing it own stupidity."},
	})
db.actions.insert({
	"name": "run",
	"self_no_arg": { "all": "You run away in terror and horror!" },
	"others_no_arg": { "all": "$n runs away in utter terror!" },
	"self_found": { "all": "You run away from $N in complete terror!" },
	"others_found": { "all": "$n runs away from $N in utter terror and horror!" },
	"vict_found": { "male": "$n runs from you, fearing for his life!", "female": "$n runs from you, fearing for her life!", "neutral": "$n runs from you, fearing for it life!"},
	"self_not_found": { "all": "No reason to be afraid, they aren't here." },
	"self_auto": { "all": "Are you THAT ugly?" },
	"others_auto": { "male": "$n looks in the mirror, sees his face, and runs away terrified!", "female": "$n looks in the mirror, sees her face, and runs away terrified!", "neutral": "$n looks in the mirror, sees it face, and runs away terrified!"},
	})
db.actions.insert({
	"name": "judge",
	"self_no_arg": { "all": "Yes, but who?" },
		"self_found": { "male": "You judge him on a scale of 1 to 10.", "female": "You judge her on a scale of 1 to 10.", "neutral": "You judge it on a scale of 1 to 10."},
	"others_found": { "all": "On a scale from 1 to 10, $n thinks $N is a complete ZERO!!!" },
	"vict_found": { "all": "$n judges your actions on a scale of 1 to 10 and comes up with ZERO!!!" },
	"self_not_found": { "all": "They aren't here right now." },
	"self_auto": { "all": "You don't REALLY want to do that." },
	})
db.actions.insert({
	"name": "insane",
	"self_no_arg": { "all": "You feel your sanity slipping away..." },
	"others_no_arg": { "all": "Before your eyes, $n's sanity is slipping away..." },
	})
db.actions.insert({
	"name": "cover",
	"self_no_arg": { "all": "You cover your ears to protect them from the noise." },
	"others_no_arg": { "male": "$n covers his ears to protect them from all the noise.", "female": "$n covers her ears to protect them from all the noise.", "neutral": "$n covers it ears to protect them from all the noise."},
	"self_found": { "all": "You glare at $N and cover your ears." },
	"others_found": { "male": "$n glares at $N and covers his ears.", "female": "$n glares at $N and covers her ears.", "neutral": "$n glares at $N and covers it ears."},
	"vict_found": { "male": "$n covers his ears because of you... you are TOO LOUD!", "female": "$n covers her ears because of you... you are TOO LOUD!", "neutral": "$n covers it ears because of you... you are TOO LOUD!"},
	"self_not_found": { "all": "They aren't here right now." },
	"self_auto": { "all": "No... I don't think so." },
	})
db.actions.insert({
	"name": "flare",
	"self_no_arg": { "all": "You flare your nostrils disdainfully." },
	"others_no_arg": { "male": "$n flares his nostrils disdainfully.", "female": "$n flares her nostrils disdainfully.", "neutral": "$n flares it nostrils disdainfully."},
	"self_found": { "all": "You flare your nostrils disdainfully at $N... HOW RUDE!" },
	"others_found": { "male": "$n flares his nostrils disdainfully at $N and turns up his snobbish nose.", "female": "$n flares her nostrils disdainfully at $N and turns up her snobbish nose.", "neutral": "$n flares it nostrils disdainfully at $N and turns up it snobbish nose."},
	"vict_found": { "male": "$n flares his nostrils disdainfully at you... what'd you DO???", "female": "$n flares her nostrils disdainfully at you... what'd you DO???", "neutral": "$n flares it nostrils disdainfully at you... what'd you DO???"},
	"self_not_found": { "all": "Flare if you wish, but that person isn't here to see it." },
	"self_auto": { "all": "*Sniff*  But you should LOVE yourself!" },
	})
db.actions.insert({
	"name": "head",
	"self_no_arg": { "all": "You toss your head haughtily." },
	"others_no_arg": { "male": "$n tosses his head haughtily.", "female": "$n tosses her head haughtily.", "neutral": "$n tosses it head haughtily."},
	"self_found": { "all": "You toss your head haughtily at $N." },
	"others_found": { "all": "$n tosses her head haughtily at $N... what an ATTITUDE!" },
	"vict_found": { "male": "$n tossed his head haughtily at you... :(", "female": "$n tossed her head haughtily at you... :(", "neutral": "$n tossed it head haughtily at you... :("},
	"self_not_found": { "all": "That person is AWOL." },
	"self_auto": { "all": "Why would you do that?" },
	})
db.actions.insert({
	"name": "pie",
	"self_no_arg": { "all": "You pick up a pie and toss it around for a bit." },
	"others_no_arg": { "all": "$n picks up a pie and tosses it around for a bit." },
	"self_found": { "male": "You toss a pie at $N and hit him right in the FACE!", "female": "You toss a pie at $N and hit her right in the FACE!", "neutral": "You toss a pie at $N and hit it right in the FACE!"},
	"others_found": { "male": "$n tosses a pie at $N and hits him right in the FACE!", "female": "$n tosses a pie at $N and hits her right in the FACE!", "neutral": "$n tosses a pie at $N and hits it right in the FACE!"},
	"vict_found": { "all": "$n tossed a pie in your face... and now you are all covered in GOO!" },
	"self_not_found": { "all": "That person isn't here..." },
	"self_auto": { "all": "You bury your face in the pie... yummmmm!!! :)" },
	"others_auto": { "male": "$n buries his face in the pie, licking the pan clean.", "female": "$n buries her face in the pie, licking the pan clean.", "neutral": "$n buries it face in the pie, licking the pan clean."},
	})
db.actions.insert({
	"name": "cower",
	"self_no_arg": { "all": "You cower in a corner." },
	"others_no_arg": { "all": "$n cowers in a corner and whimpers softly." },
	"self_found": { "male": "You cower away from $N and his harsh words.", "female": "You cower away from $N and her harsh words.", "neutral": "You cower away from $N and it harsh words."},
	"others_found": { "male": "$n cowers in a corner, terrified that $N will come after him.", "female": "$n cowers in a corner, terrified that $N will come after her.", "neutral": "$n cowers in a corner, terrified that $N will come after it."},
	"vict_found": { "male": "You scared poor $n!  Now his is cowering in a corner, afraid for his life.", "female": "You scared poor $n!  Now her is cowering in a corner, afraid for her life.", "neutral": "You scared poor $n!  Now it is cowering in a corner, afraid for it life."},
	"self_not_found": { "all": "That person is AWOL at the moment." },
	"self_auto": { "all": "You are afraid of your own shadow!" },
	"others_auto": { "male": "$n cowers in the corner afraid of his own shadow", "female": "$n cowers in the corner afraid of her own shadow", "neutral": "$n cowers in the corner afraid of it own shadow"},
	})
db.actions.insert({
	"name": "noogie",
	"self_no_arg": { "all": "You can't noogie the AIR!  It has no head." },
		"self_found": { "male": "You grab $N, get him in a head lock and NOOGIE him!", "female": "You grab $N, get her in a head lock and NOOGIE her!", "neutral": "You grab $N, get it in a head lock and NOOGIE it!"},
	"others_found": { "male": "$n grabs $N in a head lock and NOOGIES him... ARGH!!!", "female": "$n grabs $N in a head lock and NOOGIES her... ARGH!!!", "neutral": "$n grabs $N in a head lock and NOOGIES it... ARGH!!!"},
	"vict_found": { "all": "Oh NO, $n grabs you, throws you in a head lock and NOOGIES you!" },
	"self_not_found": { "all": "That person has gone off to other lands..." },
	"self_auto": { "all": "You rub your head and create a static charge..." },
	"others_auto": { "male": "$n rubs his OWN head and creates a static charge... *ZAP*", "female": "$n rubs her OWN head and creates a static charge... *ZAP*", "neutral": "$n rubs it OWN head and creates a static charge... *ZAP*"},
	})
db.actions.insert({
	"name": "yeehaw",
	"self_no_arg": { "all": "You mount your pony(?) and shout YEEEEEEEHAAAAAAAW!" },
	"others_no_arg": { "all": "$n bounces up and down screaming *YEEEEEEHAAAAAAW!*" },
	})
db.actions.insert({
	"name": "pissed",
	"self_no_arg": { "all": "You are PISSED!" },
	"others_no_arg": { "all": "$n is PISSED so watch out!" },
	"self_found": { "all": "You turn a stoney gaze toward $N... you are SOOO pissed at $N!" },
	"others_found": { "male": "$n glares at $n.... $n is SOOO PISSED at him!", "female": "$n glares at $n.... $n is SOOO PISSED at her!", "neutral": "$n glares at $n.... $n is SOOO PISSED at it!"},
	"vict_found": { "male": "$n is pissed at you now... What do you think he'll DO?", "female": "$n is pissed at you now... What do you think she'll DO?", "neutral": "$n is pissed at you now... What do you think it'll DO?"},
	"self_not_found": { "all": "That person is not here..." },
	"self_auto": { "all": "You are PISSED at yourself!" },
	"others_auto": { "male": "$n is so pissed at himself.  How could he be so stupid???", "female": "$n is so pissed at herself.  How could she be so stupid???", "neutral": "$n is so pissed at itself.  How could it be so stupid???"},
	})
db.actions.insert({
	"name": "passout",
	"self_no_arg": { "all": "You belch and pass out." },
	"others_no_arg": { "male": "$n is OBVIOUSLY intoxicated... he burps loudly and passes out!", "female": "$n is OBVIOUSLY intoxicated... she burps loudly and passes out!", "neutral": "$n is OBVIOUSLY intoxicated... it burps loudly and passes out!"},
	})
db.actions.insert({
	"name": "adjust",
	"self_no_arg": { "all": "You look around, make sure nobody is watching, and you adjust your \"Tool.\"" },
	"others_no_arg": { "male": "$n looks around slyly, smiles, then reaches down and \"adjusts\" himself...", "female": "$n looks around slyly, smiles, then reaches down and \"adjusts\" herself...", "neutral": "$n looks around slyly, smiles, then reaches down and \"adjusts\" itself..."},
	})
db.actions.insert({
	"name": "scratch",
	"self_no_arg": { "all": "You scratch yourself contentedly." },
	"others_no_arg": { "male": "$n reaches down and scratches himself...  Now he looks VERY happy.", "female": "$n reaches down and scratches herself...  Now she looks VERY happy.", "neutral": "$n reaches down and scratches itself...  Now it looks VERY happy."},
	})
db.actions.insert({
	"name": "meditate",
	"self_no_arg": { "all": "You assume a very comfortable position and begin to meditate." },
	"others_no_arg": { "male": "$n rests and begins to meditate... he chants softly to himself.", "female": "$n rests and begins to meditate... she chants softly to herself.", "neutral": "$n rests and begins to meditate... it chants softly to itself."},
	})
db.actions.insert({
	"name": "bkiss",
	"self_no_arg": { "all": "You blow kisses to the air." },
	"others_no_arg": { "all": "$n blows kisses at no one in particular." },
	"self_found": { "male": "You blow a kiss at $N and wonder if he will catch it.", "female": "You blow a kiss at $N and wonder if she will catch it.", "neutral": "You blow a kiss at $N and wonder if it will catch it."},
	"others_found": { "male": "$n blows a kiss at $N ... isn't he so CUTE?", "female": "$n blows a kiss at $N ... isn't she so CUTE?", "neutral": "$n blows a kiss at $N ... isn't it so CUTE?"},
	"vict_found": { "male": "$n blows a kiss at you and hopes you'll blow one back at him.", "female": "$n blows a kiss at you and hopes you'll blow one back at her.", "neutral": "$n blows a kiss at you and hopes you'll blow one back at it."},
	"self_not_found": { "all": "You kiss falls to the ground with no one to go to." },
	"self_auto": { "all": "You blow a kiss to yourself... isn't the world beautiful?" },
	"others_auto": { "male": "$n blows a kiss to himself, obviously very in love.", "female": "$n blows a kiss to herself, obviously very in love.", "neutral": "$n blows a kiss to itself, obviously very in love."},
	})
db.actions.insert({
	"name": "beer",
	"self_no_arg": { "all": "You pull out a six-pack." },
	"others_no_arg": { "all": "$n starts to juggle a six-pack of beer." },
	"self_found": { "all": "You toss a bottle of beer at $N." },
	"others_found": { "male": "$n tosses a bottle of beer at $N ... let's just hope he'll catch it!", "female": "$n tosses a bottle of beer at $N ... let's just hope she'll catch it!", "neutral": "$n tosses a bottle of beer at $N ... let's just hope it'll catch it!"},
	"vict_found": { "male": "$n tossed you a bottle of beer... I think he wants something...", "female": "$n tossed you a bottle of beer... I think she wants something...", "neutral": "$n tossed you a bottle of beer... I think it wants something..."},
	"self_not_found": { "all": "The bottle crashes to the floor and shatters." },
	"self_auto": { "all": "You pop off the top and down a beer." },
	"others_auto": { "all": "$n pops the top off a bottle of beer and downs it in one gulp." },
	})
db.actions.insert({
	"name": "bcatch",
	"self_no_arg": { "all": "You reach out and rescue the bottle from its flight." },
	"others_no_arg": { "male": "$n reaches out and grabs the bottle of beer tossed to him.", "female": "$n reaches out and grabs the bottle of beer tossed to her.", "neutral": "$n reaches out and grabs the bottle of beer tossed to it."},
	})
db.actions.insert({
	"name": "claw",
	"self_no_arg": { "all": "You tighten your hands into a fist." },
	"others_no_arg": { "male": "$n clenches his fists until blood drips from them...", "female": "$n clenches her fists until blood drips from them...", "neutral": "$n clenches it fists until blood drips from them..."},
	"self_found": { "male": "You claw his eyes out... GROSS!", "female": "You claw her eyes out... GROSS!", "neutral": "You claw it eyes out... GROSS!"},
	"others_found": { "male": "$n buries his nails in $N's eyes ... OH GOD, THE BLOOD!", "female": "$n buries her nails in $N's eyes ... OH GOD, THE BLOOD!", "neutral": "$n buries it nails in $N's eyes ... OH GOD, THE BLOOD!"},
	"vict_found": { "male": "$n buries his nails in your eyes and you are blinded by your own blood!", "female": "$n buries her nails in your eyes and you are blinded by your own blood!", "neutral": "$n buries it nails in your eyes and you are blinded by your own blood!"},
	"self_not_found": { "all": "They aren't here to claw." },
	"self_auto": { "all": "You claw yourself to shreds!" },
	"others_auto": { "male": "$n rips himself to shreds with his fingernails!", "female": "$n rips herself to shreds with her fingernails!", "neutral": "$n rips itself to shreds with it fingernails!"},
	})
db.actions.insert({
	"name": "rose",
	"self_no_arg": { "all": "Who would you like to give it to?" },
		"self_found": { "male": "You give him a pretty rose.", "female": "You give her a pretty rose.", "neutral": "You give it a pretty rose."},
	"others_found": { "all": "$n hands $N a beautiful rose." },
	"vict_found": { "all": "$n hands you a beautiful ---'---,--{@" },
	"self_not_found": { "all": "They seem to have left." },
	"self_auto": { "all": "You give yourself a rose and feel a little sad..." },
	"others_auto": { "male": "$n gives himself a rose, dont you feel sorry for him?", "female": "$n gives herself a rose, dont you feel sorry for her?", "neutral": "$n gives itself a rose, dont you feel sorry for it?"},
	})
db.actions.insert({
	"name": "laces",
	"self_no_arg": { "all": "Whose laces?" },
		"self_found": { "male": "With the greatest of stealth, you tie his shoelaces together.", "female": "With the greatest of stealth, you tie her shoelaces together.", "neutral": "With the greatest of stealth, you tie it shoelaces together."},
	"others_found": { "male": "$n sneaks up to $N and ties his shoelaces together.", "female": "$n sneaks up to $N and ties her shoelaces together.", "neutral": "$n sneaks up to $N and ties it shoelaces together."},
	"vict_found": { "all": "You try to take a step, and you hit the world facedown!  Someone must have tied your shoelaces together!" },
	"self_not_found": { "all": "Whose laces?" },
	"self_auto": { "all": "You tie your own shoelaces together, try to walk, and promptly fall." },
	"others_auto": { "male": "$n cleverly ties his own shoelaces together, tries to walk, and sprawls flat on the floor.", "female": "$n cleverly ties her own shoelaces together, tries to walk, and sprawls flat on the floor.", "neutral": "$n cleverly ties it own shoelaces together, tries to walk, and sprawls flat on the floor."},
	})
db.actions.insert({
	"name": "tag",
	"self_no_arg": { "all": "Tag whom?" },
	"others_no_arg": { "all": "$n casts about for someone to tag." },
	"self_found": { "male": ">From nowhere, you pounce on $N and TAG him remorselessly!  BWAHAHA!!!", "female": ">From nowhere, you pounce on $N and TAG her remorselessly!  BWAHAHA!!!", "neutral": ">From nowhere, you pounce on $N and TAG it remorselessly!  BWAHAHA!!!"},
	"others_found": { "all": "$n dives from the shadows and TAGS $N.  $N IS IT!" },
	"vict_found": { "all": "$n pounces on you and >>> TAGS <<< you!  You're IT!" },
	"self_not_found": { "all": "Who were you going to tag, then?" },
	"self_auto": { "all": "Unable to catch anyone else, you do the intelligent thing and tag yourself. You're still IT!" },
	"others_auto": { "male": "Unable to catch anyone else, $n tags himself.  Are you impressed?", "female": "Unable to catch anyone else, $n tags herself.  Are you impressed?", "neutral": "Unable to catch anyone else, $n tags itself.  Are you impressed?"},
	})
db.actions.insert({
	"name": "tank",
	"self_no_arg": { "all": "You boldly offer to tank for your everyone else.  Are you sure you know what you're getting into?" },
	"others_no_arg": { "all": "$n offers to tank!" },
	"self_found": { "all": "You offer to tank for $N." },
	"others_found": { "all": "$n offers to tank for $N." },
	"vict_found": { "all": "$n offers to tank for you!" },
	"self_not_found": { "all": "Tank for whom?" },
	"self_auto": { "all": "No one will tank for you, eh?!? WELL, YOU'LL SHOW THEM!  (right?)" },
	"others_auto": { "male": "In dazzling chivalry, $n offers to tank-- for himself!", "female": "In dazzling chivalry, $n offers to tank-- for herself!", "neutral": "In dazzling chivalry, $n offers to tank-- for itself!"},
	})
db.actions.insert({
	"name": "starve",
	"self_no_arg": { "all": "You show your prominent ribs and hope that someone will take pity." },
	"others_no_arg": { "all": "$n is withering before your eyes!  Starvation!" },
	"self_found": { "male": "You throw yourself upon his mercy, begging for food.", "female": "You throw yourself upon her mercy, begging for food.", "neutral": "You throw yourself upon it mercy, begging for food."},
	"others_found": { "all": "$n begs $N for food.  One would think that magic would have cured hunger by now..." },
	"vict_found": { "all": "$n is starving before your eyes!  Could you spare some food, please?" },
	"self_not_found": { "all": "Sorry, but that person isn't around-- looks like you'll starve." },
	})
db.actions.insert({
	"name": "aargh",
	"self_no_arg": { "all": "AAAAAARRRRRRGGGGGGHHHHHH!!!!!!" },
	"others_no_arg": { "male": "$n throws back his head and howls in profound frustration!", "female": "$n throws back her head and howls in profound frustration!", "neutral": "$n throws back it head and howls in profound frustration!"},
	"self_found": { "male": "You scream your frustration and grab for his throat with both hands!", "female": "You scream your frustration and grab for her throat with both hands!", "neutral": "You scream your frustration and grab for it throat with both hands!"},
	"others_found": { "male": "$n howls in frustration, and leaps for $N, trying to throttle him!", "female": "$n howls in frustration, and leaps for $N, trying to throttle her!", "neutral": "$n howls in frustration, and leaps for $N, trying to throttle it!"},
	"vict_found": { "all": "$n grabs for your throat with two hands, howling in frustration!" },
	"self_not_found": { "all": "You get even MORE frustrated when you can't find anyone to throttle!" },
	"self_auto": { "all": "You scream in frustration at your own stupidity!" },
	"others_auto": { "male": "$n screams in frustration at his own stupidity!", "female": "$n screams in frustration at her own stupidity!", "neutral": "$n screams in frustration at it own stupidity!"},
	})
db.actions.insert({
	"name": "homework",
	"self_no_arg": { "all": "Your suddenly remember that you have to defend your thesis today..." },
	"others_no_arg": { "male": "$n looks stricken.  Could he have blown off some important homework?", "female": "$n looks stricken.  Could she have blown off some important homework?", "neutral": "$n looks stricken.  Could it have blown off some important homework?"},
	})
db.actions.insert({
	"name": "puff",
	"self_no_arg": { "all": "You mimic Puff at her most annoying." },
	"others_no_arg": { "all": "$n says, \"Did you know that I'm written in C?\"" },
	})
db.actions.insert({
	"name": "yae",
	"self_no_arg": { "all": "You sigh, burdened with Yet Another Eeediot." },
	"others_no_arg": { "all": "$n sighs, burdened with Yet Another Eeediot." },
	"self_found": { "male": "There's Yet Another Eeediot in the room, and you're looking right at him.", "female": "There's Yet Another Eeediot in the room, and you're looking right at her.", "neutral": "There's Yet Another Eeediot in the room, and you're looking right at it."},
	"others_found": { "all": "$n clearly believes that $N is an Eeediot!" },
	"vict_found": { "all": "$n glares at you, obviously not impressed with your intelligence." },
	"self_not_found": { "all": "There are plenty of Eeediots, but that one doesn't seem to be present." },
	"self_auto": { "all": "You bonk yourself for the Eeediot you are!" },
	"others_auto": { "male": "$n bonks himself, HARD, and curses himself for the Eeediot he is!", "female": "$n bonks herself, HARD, and curses herself for the Eeediot she is!", "neutral": "$n bonks itself, HARD, and curses itself for the Eeediot it is!"},
	})
db.actions.insert({
	"name": "lightbulb",
	"self_no_arg": { "all": "*Ding!*  Inspiration!" },
	"others_no_arg": { "all": "A light bulb appears above $n's head!" },
	})
db.actions.insert({
	"name": "voodoo",
	"self_no_arg": { "all": "Bad juju like this has to be directed at a person." },
	"others_no_arg": { "all": "$n looks hostile for a moment." },
	"self_found": { "male": "You stare daggers at $N, jabbing pins into his effigy.", "female": "You stare daggers at $N, jabbing pins into her effigy.", "neutral": "You stare daggers at $N, jabbing pins into it effigy."},
	"others_found": { "all": "$n glares balefully at $N while stabbing a pin into a voodoo doll." },
	"vict_found": { "all": "Your heart lurches in your chest, and fiery pain stabs through your skull!" },
	"self_not_found": { "all": "Your hatred finds no such target." },
	"self_auto": { "all": "You stab a pin into your own voodoo doll!  Agony!" },
	"others_auto": { "male": "$n jabs a pin into his own voodoo doll, and twitches in agony!", "female": "$n jabs a pin into her own voodoo doll, and twitches in agony!", "neutral": "$n jabs a pin into it own voodoo doll, and twitches in agony!"},
	})
db.actions.insert({
	"name": "ogg",
	"self_no_arg": { "all": "Ogg who?" },
		"self_found": { "all": "Engage!" },
	"others_found": { "all": "$n oggs $N's head with photon torpedos!  $N reels." },
	"vict_found": { "all": "$n oggs your head with photon torpedos!  You are reeling." },
	"self_not_found": { "all": "You can't find your target." },
	"self_auto": { "all": "If you do that, the universe will explode." },
	"others_auto": { "male": "$n almost oggs himself, but wisely reconsiders.", "female": "$n almost oggs herself, but wisely reconsiders.", "neutral": "$n almost oggs itself, but wisely reconsiders."},
	})
db.actions.insert({
	"name": "confused",
	"self_no_arg": { "all": "Your confusion is showing." },
	"others_no_arg": { "all": "$n blinks slowly..." },
	"self_found": { "male": "You blink slowly, trying to decipher his comment.", "female": "You blink slowly, trying to decipher her comment.", "neutral": "You blink slowly, trying to decipher it comment."},
	"others_found": { "male": "$n blinks slowly.  Maybe $N left a word out of his sentence...", "female": "$n blinks slowly.  Maybe $N left a word out of her sentence...", "neutral": "$n blinks slowly.  Maybe $N left a word out of it sentence..."},
	"vict_found": { "all": "$n blinks slowly.  Maybe you left a word out of your sentence?" },
	"self_not_found": { "all": "No wonder you're confused." },
	})
db.actions.insert({
	"name": "beam",
	"self_no_arg": { "all": "You beam delightedly at nothing in particular." },
	"others_no_arg": { "all": "$n beams broadly at nothing in particular." },
	"self_found": { "all": "You dazzle $N with your smile." },
	"others_found": { "male": "$n must like $N a great deal to beam at him so broadly!", "female": "$n must like $N a great deal to beam at her so broadly!", "neutral": "$n must like $N a great deal to beam at it so broadly!"},
	"vict_found": { "all": "$n must like you a great deal to beam at you so broadly!" },
	"self_not_found": { "all": "You look pretty silly beaming at imaginary friends..." },
	"self_auto": { "all": "Well, aren't you special?" },
	"others_auto": { "male": "$n beams at himself, obviously pleased.", "female": "$n beams at herself, obviously pleased.", "neutral": "$n beams at itself, obviously pleased."},
	})
db.actions.insert({
	"name": "bite",
	"self_no_arg": { "all": "You glare around, muttering \"Bite me...\" under your breath." },
	"others_no_arg": { "male": "$n glares around, muttering \"Bite me...\" under his breath.", "female": "$n glares around, muttering \"Bite me...\" under her breath.", "neutral": "$n glares around, muttering \"Bite me...\" under it breath."},
	"self_found": { "all": "You bite $N on the neck." },
	"others_found": { "all": "$n bites $N on the neck!" },
	"vict_found": { "all": "$n bites you on the neck." },
	"self_not_found": { "all": "Hungry?  No such luck." },
	"self_auto": { "all": "You bite your knuckle in anguish." },
	"others_auto": { "male": "$n bites his knuckle in anguish...the tragedy!", "female": "$n bites her knuckle in anguish...the tragedy!", "neutral": "$n bites it knuckle in anguish...the tragedy!"},
	})
db.actions.insert({
	"name": "discodance",
	"self_no_arg": { "all": "Groovy!" },
	"others_no_arg": { "all": "$n discos wildly!" },
	"self_found": { "all": "You grab $N and disco wildly!  Groovy!" },
	"others_found": { "male": "$n grabs $N and does him best Travolta!", "female": "$n grabs $N and does her best Travolta!", "neutral": "$n grabs $N and does it best Travolta!"},
	"vict_found": { "male": "$n grabs you and does him best Travolta!", "female": "$n grabs you and does her best Travolta!", "neutral": "$n grabs you and does it best Travolta!"},
	"self_not_found": { "all": "It's okay, you can disco solo too." },
	})
db.actions.insert({
	"name": "scuff",
	"self_no_arg": { "all": "You scuff your foot sheepishly." },
	"others_no_arg": { "male": "$n scuffs his foot in the dirt, looking very sheepish.", "female": "$n scuffs her foot in the dirt, looking very sheepish.", "neutral": "$n scuffs it foot in the dirt, looking very sheepish."},
	"self_found": { "all": "You scuff your foot, avoiding $N's gaze." },
	"others_found": { "male": "$n scuffs his foot and shyly avoids $N's gaze.", "female": "$n scuffs her foot and shyly avoids $N's gaze.", "neutral": "$n scuffs it foot and shyly avoids $N's gaze."},
	"vict_found": { "male": "$n scuffs his foot and shyly avoids your gaze.", "female": "$n scuffs her foot and shyly avoids your gaze.", "neutral": "$n scuffs it foot and shyly avoids your gaze."},
	"self_not_found": { "all": "They aren't here." },
	})
db.actions.insert({
	"name": "whap",
	"self_no_arg": { "all": "Whap who?" },
		"self_found": { "all": "You whap $N upside the head!" },
	"others_found": { "all": "With a resounding WHAP!, $n reprimands $N." },
	"vict_found": { "all": "HEY!  $n whaps you upside the head!" },
	"self_not_found": { "all": "Whiff..." },
	"self_auto": { "all": "Ow! You give yourself a resounding whap upside the head." },
	"others_auto": { "male": "Biff!  $n whaps himself upside the head!", "female": "Biff!  $n whaps herself upside the head!", "neutral": "Biff!  $n whaps itself upside the head!"},
	})
db.actions.insert({
	"name": "lag",
	"self_no_arg": { "all": "Yes, yes." },
	"others_no_arg": { "all": "$n is   m o v i n g      v  e    ry  sl  o w   l   y ..." },
	})
db.actions.insert({
	"name": "chortle",
	"self_no_arg": { "all": "Heh." },
	"others_no_arg": { "all": "$n chortles mischievously." },
	"self_found": { "all": "You chortle mischievously at $N." },
	"others_found": { "all": "$n chortles mischievously at $N." },
	"vict_found": { "all": "$n chortles mischievously at you." },
	"self_not_found": { "all": "Took you a while to get that....they aren't here." },
	"self_auto": { "all": "You chortle at your own joke." },
	"others_auto": { "male": "$n chortles at his own joke.  Don't bother.", "female": "$n chortles at her own joke.  Don't bother.", "neutral": "$n chortles at it own joke.  Don't bother."},
	})
db.actions.insert({
	"name": "zerbert",
	"self_no_arg": { "all": "Gotta zerbert SOMEBODY." },
		"self_found": { "male": "You lift $N's shirt and blow loudly into his navel!", "female": "You lift $N's shirt and blow loudly into her navel!", "neutral": "You lift $N's shirt and blow loudly into it navel!"},
	"others_found": { "male": "$n lifts $N's shirt and blows loudly into his navel!", "female": "$n lifts $N's shirt and blows loudly into her navel!", "neutral": "$n lifts $N's shirt and blows loudly into it navel!"},
	"vict_found": { "all": "Yeek!  $n lifts your shirt and blows loudly into your navel!" },
	"self_not_found": { "all": "You missed." },
	"self_auto": { "all": "Careful, people are staring..." },
	"others_auto": { "male": "$n looks around furtively, and then bends over and blows loudly into his own navel!", "female": "$n looks around furtively, and then bends over and blows loudly into her own navel!", "neutral": "$n looks around furtively, and then bends over and blows loudly into it own navel!"},
	})
db.actions.insert({
	"name": "twitch",
	"self_no_arg": { "all": "You twitch nervously." },
	"others_no_arg": { "all": "$n twitches nervously." },
	"self_found": { "all": "You twitch involuntarily at $N's presence." },
	"others_found": { "all": "$N must really be getting to $n..." },
	"vict_found": { "all": "$n notices you and twitches." },
	"self_not_found": { "all": "Nervous? They aren't even here." },
	})
db.actions.insert({
	"name": "leer",
	"self_no_arg": { "all": "You peer around the room, leering like the pervert you are!" },
	"others_no_arg": { "all": "$n peers about, leering like a filthy pervert!" },
	"self_found": { "all": "You leer at $N like the pervert you are." },
	"others_found": { "all": "$n eyes $N up and down, leering like a filthy pervert!" },
	"vict_found": { "all": "$n eyes you up and down, leering like a filthy pervert!" },
	"self_not_found": { "all": "You'll have to settle for memories -- that person isn't here." },
	"self_auto": { "all": "Desperation has reached new heights, hasn't it?" },
	"others_auto": { "male": "$n leers at himself shamelessly.", "female": "$n leers at herself shamelessly.", "neutral": "$n leers at itself shamelessly."},
	})
db.actions.insert({
	"name": "polite",
	"self_no_arg": { "all": "You give a polite little chuckle." },
	"others_no_arg": { "all": "$n gives a polite little chuckle." },
	"self_found": { "male": "You indicate your underappreciation of his joke.", "female": "You indicate your underappreciation of her joke.", "neutral": "You indicate your underappreciation of it joke."},
	"others_found": { "all": "$n gives a polite little chuckle to $N's joke." },
	"vict_found": { "all": "$n gives a politle but unappreciative chuckle to your joke." },
	"self_not_found": { "all": "You can't find a friend to chuckle with." },
	"self_auto": { "all": "You chuckle at your own joke, since no one else would." },
	"others_auto": { "male": "$n chuckles at his own joke, since none of you would.", "female": "$n chuckles at her own joke, since none of you would.", "neutral": "$n chuckles at it own joke, since none of you would."},
	})
db.actions.insert({
	"name": "mischievous",
	"self_no_arg": { "all": "You give a mischievous smile at the trouble you have in mind." },
	"others_no_arg": { "all": "$n grins mischievously at a nasty idea." },
	"self_found": { "male": "You grin mischievously at him, thinking an evil thought.", "female": "You grin mischievously at her, thinking an evil thought.", "neutral": "You grin mischievously at it, thinking an evil thought."},
	"others_found": { "male": "$n grins mischievously at $N.  him must be thinking something evil.", "female": "$n grins mischievously at $N.  her must be thinking something evil.", "neutral": "$n grins mischievously at $N.  it must be thinking something evil."},
	"vict_found": { "all": "$n grins mischievously at you.  You inch toward the door." },
	"self_not_found": { "all": "You must be delirious." },
	"self_auto": { "all": "You grin mischievously to yourself." },
	"others_auto": { "male": "$n grins mischievously to himself.", "female": "$n grins mischievously to herself.", "neutral": "$n grins mischievously to itself."},
	})
db.actions.insert({
	"name": "accept",
	"self_no_arg": { "all": "You accept the proferred apology graciously." },
	"others_no_arg": { "all": "$n graciously accepts the proferred apology." },
	})
db.actions.insert({
	"name": "anticipate",
	"self_no_arg": { "all": "You murmur 'Sssssoonnn, my presssssciousssss...'" },
	"others_no_arg": { "all": "$n murmurs 'Ssssssooonnnn, my pressssscioussss...'" },
	})
db.actions.insert({
	"name": "shudder",
	"self_no_arg": { "all": "You shudder at the horror and repress tears." },
	"others_no_arg": { "all": "$n shudders at the horror and represses tears." },
	})
db.actions.insert({
	"name": "powertrip",
	"self_no_arg": { "all": "You scream 'The PPppppPOOOOoooWWWwwwErrRRR!' and writhe." },
	"others_no_arg": { "all": "$n writhes, screaming 'The PPppppPOOOOoooWWWwwwErrRRR!'" },
	})
db.actions.insert({
	"name": "mull",
	"self_no_arg": { "all": "You mull over the idea at hand, asking for patience." },
	"others_no_arg": { "all": "$n mulls over the idea at hand.  Please be patient." },
	})
db.actions.insert({
	"name": "wait",
	"self_no_arg": { "all": "You wait patiently." },
	"others_no_arg": { "all": "$n waits patiently." },
	})
db.actions.insert({
	"name": "bat",
	"self_no_arg": { "all": "You bat your long, dark lashes and smile innocently." },
	"others_no_arg": { "male": "$n bats his long, dark lashes and smiles innocently.", "female": "$n bats her long, dark lashes and smiles innocently.", "neutral": "$n bats it long, dark lashes and smiles innocently."},
	})
db.actions.insert({
	"name": "sage",
	"self_no_arg": { "all": "You nod sagely." },
	"others_no_arg": { "all": "$n nods sagely." },
	})
db.actions.insert({
	"name": "contemplate",
	"self_no_arg": { "all": "You bite your lip contemplatively." },
	"others_no_arg": { "male": "$n bites his lip contemplatively.", "female": "$n bites her lip contemplatively.", "neutral": "$n bites it lip contemplatively."},
	})
db.actions.insert({
	"name": "agree",
	"self_no_arg": { "all": "You agree absolutely." },
	"others_no_arg": { "all": "$n agrees absolutely." },
	"self_found": { "all": "You nod in enthusiastic agreement with $N." },
	"others_found": { "all": "$n nods in enthusiastic agreement with $N." },
	"vict_found": { "all": "$n nods in enthusiastic agreement with you." },
	"self_not_found": { "all": "Sorry, your target is absent." },
	"self_auto": { "all": "You find yourself most agreeable." },
	"others_auto": { "male": "$n finds himself the most agreeable being alive.", "female": "$n finds herself the most agreeable being alive.", "neutral": "$n finds itself the most agreeable being alive."},
	})
db.actions.insert({
	"name": "toast",
	"self_no_arg": { "all": "You raise a glass of champagne in a toast." },
	"others_no_arg": { "male": "$n raises his glass of champagne in a toast.", "female": "$n raises her glass of champagne in a toast.", "neutral": "$n raises it glass of champagne in a toast."},
	"self_found": { "male": "You raise your glass of champagne to his.", "female": "You raise your glass of champagne to her.", "neutral": "You raise your glass of champagne to it."},
	"others_found": { "all": "$n silently toasts $N." },
	"vict_found": { "all": "$n silently toasts you." },
	"self_not_found": { "all": "Your object of praise is absent." },
	"self_auto": { "all": "You grin evilly and toast yourself." },
	"others_auto": { "male": "$n grins evilly and toasts himself.", "female": "$n grins evilly and toasts herself.", "neutral": "$n grins evilly and toasts itself."},
	})
db.actions.insert({
	"name": "conspire",
	"self_no_arg": { "all": "You wink conspiratorily, waiting for the countersign." },
	"others_no_arg": { "all": "$n winks conspiratorily, waiting for the countersign." },
	"self_found": { "male": "You induct his into your private conspiracy with a wink.", "female": "You induct her into your private conspiracy with a wink.", "neutral": "You induct it into your private conspiracy with a wink."},
	"others_found": { "all": "$n winks conspiratorily at $N.  You wonder what this can mean." },
	"vict_found": { "male": "$n inducts you into him private conspiracy with a wink.", "female": "$n inducts you into her private conspiracy with a wink.", "neutral": "$n inducts you into it private conspiracy with a wink."},
	"self_not_found": { "all": "Even you conspire against yourself." },
	"self_auto": { "male": "$n is paranoid enough to distrust even himself.", "female": "$n is paranoid enough to distrust even herself.", "neutral": "$n is paranoid enough to distrust even itself."},
	})
db.actions.insert({
	"name": "support",
	"self_no_arg": { "all": "You fully support the plan." },
	"others_no_arg": { "all": "$n fully supports the plan." },
	"self_found": { "male": "You hug him supportively and smile.", "female": "You hug her supportively and smile.", "neutral": "You hug it supportively and smile."},
	"others_found": { "all": "$n hugs $N supportively and smiles." },
	"vict_found": { "all": "$n hugs you supportively and smiles." },
	"self_not_found": { "all": "Sorry, friend, I can't see that person here." },
	"self_auto": { "all": "You hug yourself sadly." },
	"others_auto": { "male": "$n hugs himself sadly.  Perhaps you could help?", "female": "$n hugs herself sadly.  Perhaps you could help?", "neutral": "$n hugs itself sadly.  Perhaps you could help?"},
	})
db.actions.insert({
	"name": "pound",
	"self_no_arg": { "all": "You make vague pounding motions with your fist at the thought." },
	"others_no_arg": { "male": "$n makes vague pounding motions with him fist at the thought.", "female": "$n makes vague pounding motions with her fist at the thought.", "neutral": "$n makes vague pounding motions with it fist at the thought."},
	"self_found": { "male": "You pound him into a bloody mass.", "female": "You pound her into a bloody mass.", "neutral": "You pound it into a bloody mass."},
	"others_found": { "all": "$n pounds $N into a bloody mass." },
	"vict_found": { "all": "$n pounds you into a bloody mass." },
	"self_not_found": { "all": "Sorry, friend, I can't see that person here." },
	})
db.actions.insert({
	"name": "wrist",
	"self_no_arg": { "all": "You hold out out a wrist for a slap." },
	"others_no_arg": { "all": "$n holds out a wrist for a slap." },
	"self_found": { "male": "You slaps him wrist sharply.", "female": "You slaps her wrist sharply.", "neutral": "You slaps it wrist sharply."},
	"others_found": { "all": "$n slaps $N's wrist sharply." },
	"vict_found": { "all": "$n slaps your wrist sharply." },
	"self_not_found": { "all": "Sorry, friend, I can't see that person here." },
	"self_auto": { "all": "You slap your own wrist." },
	"others_auto": { "male": "$n slaps him own wrist.", "female": "$n slaps her own wrist.", "neutral": "$n slaps it own wrist."},
	})
db.actions.insert({
	"name": "romeo",
	"self_no_arg": { "all": "You light up a Romeo y Julietta cigar and puff contentedly." },
	"others_no_arg": { "all": "$n lights up a Romeo y Julietta cigar and puffs contentedly." },
	})
db.actions.insert({
	"name": "camel",
	"self_no_arg": { "all": "You pretend you are a camel." },
	"others_no_arg": { "all": "$n pretends to be a camel." },
	"self_found": { "male": "You light a Camel cigarette for him.", "female": "You light a Camel cigarette for her.", "neutral": "You light a Camel cigarette for it."},
	"others_found": { "all": "$n lights a Camel cigarette for $N." },
	"vict_found": { "all": "$n lights a Camel cigarette for you." },
	"self_not_found": { "all": "You don't see that personhere." },
	"self_auto": { "all": "You light a Camel cigarette and inhale sharply." },
	"others_auto": { "all": "$n lights a Camel cigarette and inhales sharply." },
	})
db.actions.insert({
	"name": "whip",
	"self_no_arg": { "all": "You crack your bullwhip menacingly." },
	"others_no_arg": { "all": "$n cracks a bullwhip menacingly." },
	"self_found": { "male": "You flick your whip across him bare back.", "female": "You flick your whip across her bare back.", "neutral": "You flick your whip across it bare back."},
	"others_found": { "male": "$n flicks his whip across $N's bare back.", "female": "$n flicks her whip across $N's bare back.", "neutral": "$n flicks it whip across $N's bare back."},
	"vict_found": { "all": "$n flicks a whip across your back... the pain.. the pleasure.." },
	"self_not_found": { "all": "Sorry, friend, I can't see that person here." },
	"self_auto": { "all": "You whip yourself into a frenzy." },
	"others_auto": { "male": "$n whips himself into a frenzy.", "female": "$n whips herself into a frenzy.", "neutral": "$n whips itself into a frenzy."},
	})
db.actions.insert({
	"name": "cramp",
	"self_no_arg": { "all": "You gasp and clutch your abdomen, wheezing with the pain." },
	"others_no_arg": { "male": "$n gasps and clutches him abdomen in agony.", "female": "$n gasps and clutches her abdomen in agony.", "neutral": "$n gasps and clutches it abdomen in agony."},
	"self_found": { "male": "You hammerlock him, screaming, \"AAAAARRRRRGH!! I HAVE A CRAMP!!!\"", "female": "You hammerlock her, screaming, \"AAAAARRRRRGH!! I HAVE A CRAMP!!!\"", "neutral": "You hammerlock it, screaming, \"AAAAARRRRRGH!! I HAVE A CRAMP!!!\""},
	"others_found": { "all": "$n hammerlocks $N, screaming, \"AAAAARRRRRGH!! I HAVE A CRAMP!!!\"." },
	"vict_found": { "all": "$n hammerlocks you, screaming \"AAAAARRRRRGH!! I HAVE A CRAMP!!!\"" },
	"self_not_found": { "all": "Suffering as you are, you didn't see that person slip out." },
	})
db.actions.insert({
	"name": "make",
	"self_no_arg": { "all": "You breathe heavily and wetly." },
	"others_no_arg": { "all": "$n breathes heavily and wetly." },
	"self_found": { "male": "You steam up the windows with him.", "female": "You steam up the windows with her.", "neutral": "You steam up the windows with it."},
	"others_found": { "all": "$n and $N start steaming up the windows." },
	"vict_found": { "all": "$n starts steaming up the windows with you." },
	"self_not_found": { "all": "Sorry, friend, I can't see that person here." },
	})
db.actions.insert({
	"name": "sweep",
	"self_no_arg": { "all": "You look at your empty arms and sigh." },
	"others_no_arg": { "male": "$n looks at his empty arms and sighs.", "female": "$n looks at her empty arms and sighs.", "neutral": "$n looks at it empty arms and sighs."},
	"self_found": { "male": "You sweep him into your arms and kiss him long and deeply.", "female": "You sweep her into your arms and kiss her long and deeply.", "neutral": "You sweep it into your arms and kiss it long and deeply."},
	"others_found": { "male": "$n sweeps $N into his arms and kisses him long and deeply.", "female": "$n sweeps $N into her arms and kisses her long and deeply.", "neutral": "$n sweeps $N into it arms and kisses it long and deeply."},
	"vict_found": { "male": "$n sweeps you into his arms and kisses you long and deeply.", "female": "$n sweeps you into her arms and kisses you long and deeply.", "neutral": "$n sweeps you into it arms and kisses you long and deeply."},
	"self_not_found": { "all": "The object of your kiss is absent." },
	})
db.actions.insert({
	"name": "buff",
	"self_no_arg": { "all": "You buff your nails on your cloak." },
	"others_no_arg": { "male": "$n buffs his nails on his cloak.", "female": "$n buffs her nails on her cloak.", "neutral": "$n buffs it nails on it cloak."},
	})
db.actions.insert({
	"name": "liver",
	"self_no_arg": { "all": "You look angrily for someone to disembowel." },
	"others_no_arg": { "all": "$n angrily for someone to disembowel." },
	"self_found": { "male": "You rip out his liver and eat it.", "female": "You rip out her liver and eat it.", "neutral": "You rip out it liver and eat it."},
	"others_found": { "all": "$n rips out $N's liver and eats it." },
	"vict_found": { "all": "$n rips out your liver and eats it." },
	"self_not_found": { "all": "The object of your wrath is absent." },
	})
db.actions.insert({
	"name": "wrestle",
			"self_found": { "male": "You wrestle him to the floor and pin him there.", "female": "You wrestle her to the floor and pin her there.", "neutral": "You wrestle it to the floor and pin it there."},
	"others_found": { "male": "$n wrestles $N to the floor, pinning him there.", "female": "$n wrestles $N to the floor, pinning her there.", "neutral": "$n wrestles $N to the floor, pinning it there."},
	"vict_found": { "all": "$n wrestles you to the floor and pins you." },
	"self_not_found": { "all": "Sorry, friend, I can't see that person here." },
	"self_auto": { "all": "You wrestle with your conscience." },
	"others_auto": { "male": "$n wrestles with him conscience.", "female": "$n wrestles with her conscience.", "neutral": "$n wrestles with it conscience."},
	})
db.actions.insert({
	"name": "tie",
	"self_no_arg": { "all": "You toy with a pair of handcuffs suggestively." },
	"others_no_arg": { "all": "$n toys suggestively with a pair of handcuffs." },
	"self_found": { "male": "You grab $N and tie him to the bedposts.", "female": "You grab $N and tie her to the bedposts.", "neutral": "You grab $N and tie it to the bedposts."},
	"others_found": { "male": "$n grabs $N and ties his to a four poster bed.", "female": "$n grabs $N and ties her to a four poster bed.", "neutral": "$n grabs $N and ties it to a four poster bed."},
	"vict_found": { "all": "$n grabs you and ties you securely to a four poster bed." },
	"self_not_found": { "all": "Sorry, friend, I can't see that person here." },
	})
db.actions.insert({
	"name": "tight",
			"self_found": { "male": "You hold him tightly in your arms.", "female": "You hold her tightly in your arms.", "neutral": "You hold it tightly in your arms."},
	"others_found": { "male": "$n holds $N tightly in him arms.", "female": "$n holds $N tightly in her arms.", "neutral": "$n holds $N tightly in it arms."},
	"vict_found": { "male": "$n holds you in him arms.", "female": "$n holds you in her arms.", "neutral": "$n holds you in it arms."},
	"self_not_found": { "all": "Sorry, friend, I can't see that person here." },
	})
db.actions.insert({
	"name": "fatality",
			"self_found": { "all": "You intone, '$N wins.  Fatality.'" },
	"others_found": { "all": "$n intones, '$N wins.  Fatality.'" },
	"vict_found": { "all": "$n intones, '$N wins.  Fatality.'" },
	})
db.actions.insert({
	"name": "yowl",
	"self_no_arg": { "all": "You yowl in frustration." },
	"others_no_arg": { "all": "$n yowls in frustration!" },
	})
db.actions.insert({
	"name": "silly",
	"self_no_arg": { "all": "You do the silly walk all around the room." },
	"others_no_arg": { "male": "$n does the silly walk all around the room.  he *is* silly.", "female": "$n does the silly walk all around the room.  she *is* silly.", "neutral": "$n does the silly walk all around the room.  it *is* silly."},
	})
