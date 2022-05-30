/*This file is used in Index for the newHouse function. It randomizez elements in a sentance about a sims house.
It should take input from user about specific variables they want to incluce (packs, types of rooms, family influence on style) and
has the ability to incorporate a family from the CAS randomizer.
*/
var sizes = ["small house","tiny house","big house","mansion","starter home","family house","apartment","townhouse"] //size of house
var testfamily = ["Mom", "Dad", "Big Sis", "Little Bro", "Grandma"] //This will be a container for the CAS family. Size/contents are used to populate simroom and interests
var locations = ["Sulani", "Del Sol Valley", "Brightchester"] //cities in sims 4
var buildingtype = ["a ranch style home","a surburban", "a bungulo", "modern", "in the tutor style"] //archetecture types of homes
var interior = [" beach-house style interior", " modern aestetic", " farmy feel", "homey interior", "sterile interior", "a kitchy interior",
             "a spooky aestetic"] //the interior style of the home(furnitue, decorations)
var colors = ["black and white", "warm colors", "cool colors", "bright colors", "gloomy colors", "colors reminisent of candy", "tropical colors",
             "colors reminisent of the woods", "coastal colors"] //the main colors, inside and out
var outside = ["cactus flowerbeds", "manicured flowerbeds", "a manicured lawn", "interestingly shaped shubbery", "overgrown flowerbeds", 
                "nature running wild"] //needs to be better seperated from plants[]. should list the type of landscaping the house has
var plants = ["a large tree", "wild flowers everywhere", "clean cut grass", "a patchy lawn", "stone details", "otherwise be only dirt"] //an interesting detail of the landscapaing
var bonusroom = ["an extra bedroom","a breakfast nook", "an outdoor kitchen", "a finished basement", "a laundry room", "a pet room", 
                "an office", "an attic", "a play area outside", "a library", "a playroom", "a pool"] //interesting challenge room, can be rolled multiple times
//var hobbyroom = ["h1","h2"] //a room dedicated to a hobby of a family member. got obsorbed by simroom
var simroom = ["a nursery","an artists studio", "a greenhouse", "an arcade", "a mother-in-law suite"] //a room connected to the interests of the family. populated from a list of posibilities when the family[] is created
var interests = [", who wants another baby", ", the painter", " to garden", " to play his favorite games", ""] //flavor text to accompany simroom, populated from contents of simroom[]
var objects = ["a family gaming console","a top of the line stove", "lots of garden gnomes", "the giraffe lamp", "a hot tub", "a pond, don't forget the piranahs"] //random, wacky or expnsive, object to include in the home

function newHouse(){
    //All variables are random numbers used in the text string. For repeate rolls the function is called in the string, otherwise the number does not change. This should be fixed to be cleaner.
    var sizeNumber = Math.floor(Math.random()*(sizes.length));
    //var familyNumber = Math.floor(Math.random()*(family.length));
    let bedroomNumber = Math.floor(Math.random()*(testfamily.length));
    var locationNumber = Math.floor(Math.random()*(locations.length));
    var buildingtypeNumber = Math.floor(Math.random()*(buildingtype.length));
    var interiorNumber = Math.floor(Math.random()*(interior.length));
    var colorNumber = Math.floor(Math.random()*(colors.length));
    var outsideNumber = Math.floor(Math.random()*(outside.length));
    var plantNumber = Math.floor(Math.random()*(plants.length));
    let bonusNumber = Math.floor(Math.random()*(bonusroom.length));
    //var hobbyNumber = Math.floor(Math.random()*(hobbyroom.length));
    var simroomNumber = Math.floor(Math.random()*(testfamily.length));
    var objectNumber = Math.floor(Math.random()*(objects.length));

    document.getElementById('house-discription').innerHTML = ("Build a " +sizes[sizeNumber]+ " house with " +bedroomNumber+ "\
     bedrooms in " +locations[locationNumber]+ ". It should be "+buildingtype[buildingtypeNumber]+" with a "+ interior[interiorNumber]+ "\
     in "+colors[colorNumber]+". The yard should have "+outside[outsideNumber]+" and "+plants[plantNumber]+". Don't forget to\
      add "+bonusroom[bonusNumber]+", "+bonusroom[Math.floor(Math.random()*(bonusroom.length))]+", and "+simroom[simroomNumber]+"\
       for "+testfamily[simroomNumber]+interests[simroomNumber]+", as well as "+objects[objectNumber]+".");
      //Example text: Build a big house house with 3 bedrooms in Sulani. It should be a surburban with a homey interior in cool colors. The yard should have nature running wild and otherwise be only dirt. Don't forget to add a pet room, an extra bedroom, and an artists studio for Dad, the painter, as well as a top of the line stove.   
}


//CAS CODE

function Sim(name, sex, pronouns, age, species, eye, hair, style, personalItem, favoriteColor, traits, ambition, job, quirk) {
    this.name= name;
    this.sex= sex;
    this.pronouns = pronouns;
    this.age= age;
    this.species= species;
    this.eyeColor= eye;
    this.hairColor= hair;
    this.style= style;
    this.personalItem= personalItem;
    this.favoriteColor= favoriteColor;
    this.traits= traits;
    this.ambition=ambition;
    this.job=job;
    this.quirk=quirk;
}
function newSim(moniker){
    //biology traits
    var pronouns=["She", "He"];
    var sexes=["female", "male"]; //idk how to link sex and pronouns yet, unused
    var ages=["toddler", "child", "teen", "young adult", "young adult","adult","adult","elder"];
    var speciesList=[   "human", "human", "human", "human", "human", "human", "human", "human", "human", "human",
                        "alien", "vampire", "mermaid", "caster"]; //add eye variation for occults
    var eyeColors=["blue", "green", "brown", "grey", "blue", "green", "brown", "grey", "red"];
    var hairColors=["black", "dark brown", "light brown", " bright red", "dark ginger", "light ginger", "cheese blond", "blond", "platinum blond", "black", "dark brown", "light brown", " bright red", "dark ginger", "light ginger", "cheese blond", "blond", "platinum blond", "white", "grey", "lilac", "pink", "blue", "teal", "green", "greying brown", "greying black"];
    //style traits
    var styles=["basic","polished", "rocker", "hipster", "dressy", "romantic", "formal", "casual", "boho", "retro", "preppy", "gothic", "pastel goth", "country", "colorful", "monocromatic", "insta-influancer", "conservative", "athletic", "out-dated", "grandma/grandpa", "nerdy", "cultural", "highly petterned", "overdramatic"] //make grandma/grandpa adhere to gender
    var personalItems=["a bracelet or watch", "a ring", "a necklace", "earrings", "headphones", "a hat", "statement makeup", "glasses", "funky socks"]
    var favoriteColors=["red", "orange", "yellow", "green", "blue", "purple", "white", "black", "grey", "pink", "brown", "silver", "gold", "beige"]
    //personality traits
    var traitList=[ "active", "cheerful", "creative", "genius", "gloomy", 
                    "goofball", "hot-headed", "romantic", "self-assured", 
                    "unflirty", "art lover", "bookworm", "foodie", "geek", 
                    "maker", "music lover", "perfectionist", "adventurous", 
                    "ambitious", "cat lover", "child of the islands", 
                    "child of the oceans", "childish", "clumsy", "dance machine", 
                    "dog lover", "eratic", "freegan", "glutton", "green fiend", 
                    "kleptomaniac", "lazy", "loves the outdoors", "neat", 
                    "recycle disciple", "slob", "snob", "squeamish", "vegetarian", 
                    "bro", "evil", "family-oriented", "good", "hates children", 
                    "insider", "jealous", "loner", "mean", "noncommittal", 
                    "outgoing", "paranoid", "proper", "self-absorbed"]

    var ambitions=[ "friend of the animals", "bodybuilder", "extreme sports enthusiast", 
                    "painter extraordinaire", "musical genius", "bestselling author", 
                    "master actor", "master maker", "lord of the knits", "public enemy", 
                    "cheif of mischief", "successful lineage", "big happy family", 
                    "vampire family", "super parent", "master chef", "master mixologist", 
                    "fabulously wealthy", "mansion baron", "renaissance sim", "nerd brain", 
                    "computer whiz", "master vampire", "archaeology scholar", 
                    "spellcraft & sorcery", "academic", "serial romantic", "soulamte", 
                    "city native", "strangerville mystery", "beach life", "Mt. Komorebi sightseer", 
                    "freelance botanist", "the curator", "angling ace", "outdoor enthusiast", 
                    "jungle explorer", "purveyor of potions", "eco innovator", "joke stor", 
                    "party animal", "friend of the world", "leader of the pack", "good vampire", "wold-famous celebrity"]; //fix gendered ones

    var jobs=[      "astronaut", "athlete", "business", "criminal", "culinary",  "entertainer", "feelance programmer", 
                    "freelance artist", "freelance writer",  "painter", "secret agent", "style influencer", "tech guru", "writer",
                           
                    "babysitter", "baista", "fast food employee", "manual labour", "retail employee", 
                    
                    "unemployed", "runs a restraunt", "vet", "runs a store", "hacker", "klepto", "mooches off of others", 
                    "sells things on plopsy", "scavange around the neighborhood for food and collectables to sell",

                    "actor",

                    "military",

                    "gardener",

                    "salaryperson",

                    "freelance photographer",

                    "civil designer", "freelance maker", 

                    "conservationist", "diver", "fisherman", "lifeguard",

                    "critic", "politician", "social media",

                    "detective", "doctor", "scientist",
                    
                    "education", "engineer", "law",
                
                
                ]; //show how to mooch, hack, kleptio, add careers/afterschool clubs to be rarely rolled for children/teens, add soccer/game team to be rolled for university students

    var quirks=[    "collects Mysim dolls", "became a fruititarian after hearing carrots can feel pain", "is scared of swimming", 
                    "uses the future cube religiously and always follows it's advice",  //future cube base game?
                    "plays an instrument", "can't say no, and always agrees to go out with friends when called", 
                    "Has 1 really ugly piece of furniture they can’t get rid of because its sentimental value", 
                    "refuses to learn how to cook and has to order out all the time", "wants a real rocketship", 
                    "has a gallery wall with photos of family and friends", "has a gallery wall with photos of only themselves", 
                    "hates white light so all light in the house is tinted", "doesn't belive in marriage", "has a painting of a sad clown",                      
                    "technophobe, refuses to use most electronics", "has a massive garden, but just grows one kind of plant", 
                    "Spends a lot of time at the library and brags about their huge book collection, but never actually reads", 
                    "only eats raw food and has many vertical planters", "crickets are their favorite food", "flirts with every sim they see", 
                    "obsessed with grilled cheese, it's all they eat", "belives in ghosts and would love a ghost pet or roommamte",
                    "has a juice addiction, drinks at lease once every day, either goes to a local bar or had their own bar room where they also brew their own juice",                       
                    "agoraphobic, almost never leaves their undergound living area", "wants to be roommates with death", "has a frog collection room", 
                     "has an aquarium room which, as Troy Mcclure would attest, is perfectly normal", 
                    "collects postcards from their pen palls", "breeds garden gnomes", "only listens to EDM", //is edm even a genera?
                    " has very low self-control, always follows whims when possible even if that means stopping what they are doing or spending most of their money",

                    "lives in a tiny home",

                    "loves archaeology",

                    "lives off the grid", 

                    "wants to collect every fancy restraunt pic", 

                    "loves to bowl and wants an indoor bowling lane",

                    "insists on a spa day once a week and will throw a tantrum without one", 
                    
                    "sleeps in a coffin for no reason", "obsessed with vampire stories, belives they are real",

                    "big HP fan, collects a lot of witchy stuff", "cooks most of their meals in a large cauldron",

                    "deeply dedicated to a club that meets at least once a week",

                    "collects voidcritters, has to catch them all", 
                    
                    "has a video station they update at least once a week and a big social media following",
                    
                    "trains dogs", "devoted to their cat", "has a pet fox", "has a pet racoon they may or my not think is a pet cat", "can never leave a stray animal behind",
                    
                    "building a robotic companion", "randomly takes university classes with no intention of ever graduating", 

                    "wants to bear Winter Father's child", "celebrates a holiday with mourning and collects sugar skulls", 
                    "collects holiday popper plushies", "throws a big party every year on their favorit holiday",

                    "takes a camping trip every other season no matter what to reconnect with nature", "has an insect room", "an avist herbalist", 
                    
                    "always invests with Bess", "active in the community, always participates and votes in NAPS and makes a weekly appearance at the community center",
                    "belives deeply in recycling, will only use furnitue that was taken from the dumpster, bought from the flea market, stolen from peoples house, gifted, or fabricated themselves (Can use a cheat to clean up unuseable furnitue from the dumpster if sim does not want to pursue the civil designer profession",

                    "has to have all the cool new tech (VR gaming, robot vaccume, talking toilet, etc.)", //multipack?

                    "collects snow globes", "has a favorite city event they never miss",
                
                ]  //add in ugly furnitiue generator, add random music to replace EDM based on packs (ie. metal for knitting), add in specific sad clown painting name, change HP to sims harry potter name, add link to furniture cleaning cheat

    var sexNumber = Math.floor(Math.random()*(pronouns.length))
    var sex = sexes[sexNumber];
    var pronouns = pronouns[sexNumber];
    var age = ages[Math.floor(Math.random()*(ages.length))];
    var species = speciesList[Math.floor(Math.random()*(speciesList.length))];
    var eye = eyeColors[Math.floor(Math.random()*(eyeColors.length))];
    var hair = hairColors[Math.floor(Math.random()*(hairColors.length))];
    var style = styles[Math.floor(Math.random()*(styles.length))];
    var personalItem = personalItems[Math.floor(Math.random()*(personalItems.length))];
    var favoriteColor = favoriteColors[Math.floor(Math.random()*(favoriteColors.length))];
    var traits = traitList[Math.floor(Math.random()*(traitList.length))];
    var ambition = ambitions[Math.floor(Math.random()*(ambitions.length))];
    var job = jobs[Math.floor(Math.random()*(jobs.length))];
    var quirk = quirks[Math.floor(Math.random()*(quirks.length))];

    var thisSim = new Sim(moniker,sex, pronouns,age, species, eye, hair, style, personalItem, favoriteColor, traits, ambition, job, quirk);
    return thisSim;
}

function newFamily(){
    var familysize = Math.floor(Math.random()*(8))+1;
    var family= [];

    for(var i=1;i<=familysize;i++){ //creates a family with generic names
        var name = ("Sim "+i);
        var tempSim = newSim(name);
        family[i-1]= (tempSim);
    }

//var testSim = newSim(TestName);
//var testage = ages[Math.floor(Math.random()*(ages.length))];
    var familyDiscription = "";
    for(var x=0;x<familysize;x++){
        var sim = family[x]; 
        familyDiscription = familyDiscription.concat(sim.name +" is a "+sim.age+" "+sim.sex+" "+sim.species+" with "+sim.eyeColor+" eyes and "+sim.hairColor+" hair. "+sim.pronouns+" likes to dress in a "+sim.style+" style, always wears "+sim.personalItem+" and loves the color "+sim.favoriteColor+". "+sim.pronouns+" is a "+sim.traits+" who dreams of being "+sim.ambition+" and works as a "+sim.job+". "+sim.pronouns+" also "+sim.quirk+".<br><br>");
    }

        document.getElementById('family-discription').innerHTML = (familyDiscription);          //(sim.name +" is a "+sim.age+" "+sim.sex+" "+sim.species+" with "+sim.eyeColor+" eyes and "+sim.hairColor+" hair. "+sim.pronouns+" likes to dress in a "+sim.style+" style, always wears "+sim.personalItem+" and loves the color "+sim.favoriteColor+". "+sim.pronouns+" is a "+sim.traits+" who dreams of being "+sim.ambition+" and works as a "+sim.job+". "+sim.pronouns+" also "+sim.quirk+".");
}

//Random Event Generator Code
//Make it so once one has shown up it is less likely to show up again
var events = [  "Layoffs! Have one sim quit their job. Spend three days moping on the couch or doing odd jobs or part time work. After that the sim may join a diffrent career or, if they get a degree in the field, they may rejoin their original career.", 
                "Have one sim take the week off: take it easy at work/school and ignore any homework or promotion skills/activities for one week.", 
                "Crunch time! Have one sim work hard at school/work and spend all their time at home on homework/promotion tasks and work related skills.", 
                "Break up with your S.O.",
                "cheat on your S.O.", 
                "Have your lowest cooking skill sim make servings of a dish on the stove (ie: grilled cheese) until they gain 1 level. If all sims have at least level 3 cooking, instead have your highest skill sim cook the most complex (ie: highly skilled) dish they know to celelrate being a compitant adult! Good luck not burning your house down.",                
                "Mid-life Crisis: Have an adult sim get a new, younger wardrobe and preform at least one of the following: \nget a tattoo, change careers, get a new young S.O. (either an afair or remarry if they have a spouse), buy an expensive flashy item such as a hot tub or rocket ship, get plastic surgery (change your face/body in CAS and subtract 1000 for face and 3000 for body from your family funds).",      
                "Get a new hair style.",
                "Change up your wardrobe.",
                "Take a vaccation, either to one of the vaccation worlds or by adding a vaccation home to a residential world.",
                "Someone needs glasses! Add glasses to every appropriate outfit and subtract 500 simolians for optometry fees.",
                "Make an enemy.",
                "Move to a new home.",
                "Get a pool. If your backyard is too small for a pool put it inside or on the roof.",               
                "Adopt a child. If there is no room in your family and it is possible to move them out you must do so. It's time for that adult child to get their own place or grandma to go to a nursing home.",
                "Try for baby, if you're single it's time to make a new special friend!",
                "If you have a teen change their wardrobe and room to match a new phase (such as goth, jock, nerd, theater kid, weeaboo, delinqente, musician, preppy/popular, artist). Do activities or form a club to match their new lifestyle. Keep this up for at least a week.",
                "There's a dead body in your yard. If you have more than one adult sim in the house kill one off. If not, kill one neighbor.",
                "Throw a party! If a wedding, birthday, or holiday is coming up throw it in celebration! Otherwise throw one just for fun!",
                "A drunken night on the town leads to a vegas wedding. Have one sim go on a date to a bar or club and elope by the end of the night.",
                "Unexpected bill: remove 3000 from household funds",               
                "Renovate the kitchen.",
                "Renovate the bathroom.",
                "Renovate the kids room",
                "Create an outdoor cooking area with a grill, a dinning table, and anything else for the perfecct bbq night.",
                "Build a rec room with a bar and any fun group activities you can fit in there.",
                "Buy a better bed.",
                "Throw a backyard barbecue party for the neighborhood.",                
                "It's been a hard week. Don a full body costume for three days to hide your shame.",
                "Spend the day at the pool! Swim and lounge by the pool for at least 4 hours. It's winter? Too bad! Think warm thoughts.",               
                "Buy a better TV.",
                "Buy a better computer.",
                "Gain a skill level in any skill.",
                "Gain a skill level in a new skill.",
                "Have one sim play hookie for the day.",
                "Eat only icecream all day.",
                "Destruction! Break a dollhouse, school project, sandcastle, snowman, and anything else you can get your hands on.",                               
                "Ask someone out on a date. From a spouse to a stranger, pluck up the courage and make sure to go somewhere nice if they say yes!",
                "Buy a hot tub. Already have one? Throw a pool party to celebrate!",
                "Buy an aquarium or fish bowl",
//Eco
                "Time to put some waste to good use: Add the compost upgrade to all toilets in the house. Better find a use for all that compost fast or things are about to get hot in here!",
                "Vote for a N.A.P.",
                "Buy a solar pannel, wind turbine, or dew collector.",
                "Go dumpster diving until you get something good!",
                "Make at least 5 candles to decorate your house. Head to the community center if you don't have your own candle maker.",
                "Make some fizzy juice. Head to the community center if you don't have your own juice fizzer.",
                "Make some new furniture for the house in a crafting machine. Head to the community center if you don't have your own.",
                "Have crickets for dinner. Don't have cricket meal? Time to buy a new bug house.",
                "Change the community center, either by redesigning it in Build/Buy or by selecting a new one on the board.",
//Pets
                "Adopt! Child or pet, your choice.",
                "Adopt a new cat.",
                "Adopt a new dog.",
                "Get some puppies or kittens! Successfully breed your pets or, if you don't have an un-fixed pet, adopt at least 2 baby animals from the phone.",
                "Go to the pet graveyard on the lighthouse island at Brindleton Bay at night. Stay until morning or until you meet a new friend.",
                "Adopt the next stray you see",
                //Assuming they have a pet
                "Get your pet a snazzy new outfit",
                "Train your dog to do a new trick or obstical course",
                "Send your pet hunting until you get a gift",

//First pet
                "Get a new small pet",
//laundry
                "Set up a laundry room. Already have one? Get a fresh start by checking all the pockets and doing all the laundry before next Monday.",
//Toddler
                "set up a big toddler play area, either in a community lot or in your own backyard! If you don't have a toddler maybe it's time to start thinking about growing your family.",
//Uni
                "Sign up for a college class! If you don't want to do a full semester just do one class to improve a skill.",
                "Go to the university library and use the research machine to level up one skill.",
                "Start pursuing a new degree. It might be time for a career change, a promotion oportunity, or just some new skills.",
                "Start working on a robot. If you don't want to own a robotics station there are some at foxbury commons. This is a long term goal, because making all the parts and improving your skill will take a while, but don't forget about it!",
                "Throw a keg party and don't forget the juice pong table.",
                "Go watch a soccer game. Head over to Foxbury Institute on Friday or Britechester Arena on Saturday. The matches start at 6pm so don't be late!",
                "Go watch a gaming competition. Head over to Britechester Arena on Friday or Foxbury Institute on Saturday. The matches start at 5pm so don't be late!",
                "Make a basement bar room complete with a pong table, bar games, and a minifridge.",
//Work
                "Go on a shopping spree at a retail business this weekend.",
                "Buy a cupcake machine",
                "Eat nothing but baked goods for the next week. Use either the baking skill or the cupcake machine (or, if you're sim just refuses to cook, head over to a coffee shop and buy some baked goods there).",
//Island
                "Spend a day at the beach with the family. Biuld a sand castle, swim around, and lounge in a chair or floaty.",
                "Get a tan by going sunbathing at the beach (or a sunburn, if you're not being careful)",
                "Go explore the cave on the volcanic island. If you find some kelp, eat it! I'm sure it will be fine.",
                "Woohoo or bath in the waterfall on the volcanic island",
                "Go beach combing until you have 200 simolians worth of loot",

//Movie
                "Have a movie and pizza night.", 
                "Set up a backyard projector screen and have a movie night", 
                "Pop some popcorn and watch a movie as a family",
//Spooky
                "Throw a costume party, feel free to wear something seasonally appropriate if it isn't autumn. Costume are for more than Halloween!", 
                "Buy the spooky candy bowl",
                "Carve some pumpkins",
//Kitchen
                "Have an icecream night with the icecream maker",
//Romantic
                "Make a wish in a wishing well. Feel free to add the well to a community lot if you don't have one.", 
                "Have everyone make at least one wish in a wishing well. Feel free to add the well to a community lot if you don't have one.",
                "Buy a wishing well. Do it by midnight or you have to make a wish when you place it.",
//Glamour
                "Get a butler for at least a week. Can't afford it? Time to sell off some furniture and precious heirlooms. It's worth it to live in the lap of luxury right?",
//Backyard
                "Have a backyard party this weekend complete with water slides, a lemonaid pitcher, and some grilled food.",
//Fitness
                "Scale a climbing wall, either natural or artificial.", //works with snowy escape too
//Bowling
                "Go Bowling. If you don't have a bowling alley in world build one, get one from the gallery, or just add a lane to your house!",
//Spa
                "Go to the spa.", 
                "Try yoga",
                "Have everyone in the family meditate until they gain a wellness level or levetate, whichever comes first.", 
                "Go to the sauna", 
                "Prank a sauna",
                "get a massage",
//Dine out
                "Go out for dinner",
                "Get your cooking skill to level 5, then go out to eat and order an experimental dish. Do this before the end of the week or you will need to order every single experimental dish. It's going to be a long day at the restraunt.",
                "Go on a dinner date", 
                "Try an experimental dish, don't forget to take a picture!",
                "Buy a restraunt. If you already own one sell it and upgrade to something new.",
//Seasons
                "Who says resolutions are just for New Years? Plan a holiday for the next available day and have make resolutions be one of the activities. Time to get your life on track!",
                "There is a problem with the thermostat. Set the thermostat to match the weather outside (cold in winter, hot in summer. Use your best judgement during fall and spring). Keep it that way for 48 hours while you wait for the repair man. If one of your sims is level 10 handyness you only need to wait 24 hours because you can fix it yourself!. If you do not have a thermostat buy one.",
                "Go skating at a rink with the whole family. Stay for a few hours and have some wholesome fun!",
                "Buy that bee house your sims have always dreamed of.",
                "Add a new holiday to the calender. Anything you want! Just make it some time in the next week and mka eit unique.",
//Famous
                "Buy a get-famous pond as soon as you can afford it. Fill it with sharks or piranahs. Do it within 24 hours, otherwise someone needs to take a swim when you buy it.",
                "Make a basement panic room complete with money vault.",
                "Practice acting until you gain a skill level. Never hurts to be able to put on a show!",
                "Go to a celebrity meet up or a hot spot in town and attemp to talk to at least three celebrities. Get their autographs if you can.",
                "Buy a golden toilet. Admit it, you've always wanted one. Now's your chance.",
                "Buy a media production set and film a vlog post. It's time the internet heard your opinions!",
                "Buy a drone and have it film you for a day (it might need short breaks to recharge). Post the footage online. It's like your own reality TV show!",
//Snowy
                "Go to the mountain this weekend for some snowy fun.", 
                "Visit the next cultural festival that pops up.",
                "Visit an onsen, either on a Mt. Komorebi vaccation, a community lot, or in your own backyard!",
                "You saw a documentory about the germs shoes bring into the house and now you're freaked out. Get a sign or shoe rack and set a rule to not allow shoes indoors. If you already had that rule congradulate yourself with a hot pot dinner.",
                "Head to Mt. Komorebi and go on a hike.",
                "Try a mountain excursion! Don't have the climbing skill? Gain at least one skill point through a book or climbing wall. If you do this often enough one day you will!",
//City
                "Go to karaoke night", 
                "Order the pufferfish nigeri from a japanese food stall or at a restraunt",
                "You must attend the next city festival you are invited to and participate in all the activies. If you don't get an invite within a few days go ahead and invite someone yourself.",
                "Grab an instrament and go preform on the streets of San Myshuno for tips. Stay there for at least three hours. Hope you know how to play!",
                "Bond with a talking toilet and learn all it's features! If you don't want to buy one feel free to use the one at the karyoki bar in the spice market.",
                "Head to the financial district and protest for a good (or bad) cause! Use the podium in front of the gym to get started.",

//Together
                "Form a new club", 
                "Go out dancing tonight",
                "Have a bonfire party, make sure to do the fire dance",
                "Build a game room with cards, foosball, darts, and anything else a group of sims would find entertaining",
                "Gain a skill in dancing, you neven know when it will come in handy!",
                "Try your hand at the mixing booth. Either buy one yourself or show off your skills (or lack there of) at a local venu!",
//Paranormal
                "perform a seance", 
                "Turn your home into a haunted house for at least one week", 
                "Buy a seance table. Already have one? Summon bonehilda to show off your skills.",
//Knitting
                "Knitt something new for everyone in the house", 
                "Knitt a sweater for you S.O.", 
                "Open a Plopsy store. Already have one? Recommit to it by adding 5 new items within the next three days.",
//Mosquito
                "Create (or download) a photography studio either in your own home or as a community lot. Go get some nice family photos done and hang them on the wall.",
//Lux party
                "Throw a luxury party, and don't forget the chocolate fountain!",
//Magic
                "Visit the magical relm. Maybe this is a good time to make a lifestyle change or brush up on some old skills.",
                "Buy a cauldron. Even if you can't make potions you can make a LOT of mac and cheese!",
                //Assumes you have a spellcaster
                "Get a new familure. Either buy one from a stall or inlist a pet.",
                "practice magic until you learn a new spell or potion. Know them all? Cast a spell on a sim to show your awesome power.",
                "Duel another spell caster",
//Strangerville
                "Eat a strange fruit",
                "Use a bugging device. Buy a new one if you don't have one already.",
                "Complete at least one element of the strangerville objective. Already finished it? Go pay a visit to you-know-who to reminisce.",
//Jungle
                "Go on a jungle expedition",
                "Gain a skill in archeology. Already maxed it? Identify a new artifact to show off. This may require venturing into the jungle if you don't have any at home.",
                "Eat some Selvadoradian food. Don't know any resipies? Time for a vaccation!",
//Outdoor
                "Go camping",
                "Have a weenie roast",
                "Level up in herbalism. Already mastered it? Make three new potions.",
                "Wear a bear costume for the weekend.",
                "Buy horeshoes, play a match",
                "Take a Granite Falls vaccation and visit the cabin. Wander around and see if you can find a cave to explore.",

//Parenthood
                "Volunteer as a family, or if you are sad and alone volunteer by yourself.",
                "Buy a new school project. If no one is young enough to complete it just store it in the family invantory until some children come along.",
//vampires
                "Research vampires on the computer or read a vampire skill book if you have unlocked one.",
                "Go visit Vlad's castle. Spar with him, ask for training, ask him to turn you, or just play on his pipe organ for a while.",
                "If you know a vampire invite them over and ask them to turn you. Don't want to be a vampire? Too bad! Although I think I read in one of those tombs there is a way to reverse it, maybe have your sim look into that on the computer. \nIf you are already a vampire, just spar and train instead. If you can not be turned because you are already another occult perform one of your powers on them to show off your might.",
]
        


function newEvent(){
    var event = events[Math.floor(Math.random()*(events.length))];
    document.getElementById('event-discription').innerHTML = (event);
}





//add extra bedroom as a bonus room
//make bedroom=0 output studio instead, fix "1 bedrooms"
//constrain BEDS based on difficulty
//use random sim maker to populate family[]. Have a random name generator (can do only first letter or generic code as well), a family connections maker (show how grandma or uncle can be made by deleating sims) 
//Don't forget to have roommate connections.
//If more complex relationships are desired cheats can be used (dating, best friends, disliked uncle)
//have "modern inside and out" if both are rolled
//fix overlap in landscaping rolls
//only rolls random once. Fix to use lists multiple times per generation
//input file from phone

//how do I have sim objects as outputs that can be used by other functions?
//I need a perminant storage solution so that people can keep their family while 
//generating a house. It would also help with the house generation.