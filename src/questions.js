export default [
    {
        id: 1,
        question: "ENTER THE WORLD",
        left: 2,
        right: 2,
        leftText: "yes",
        rightText: "wohoo",
        leftDuration: 12000,
        rightDuration: 12000,
        soundFile: "silence",
        leftSoundFile: "Enter_the_World_12s",
        rightSoundFile: "Enter_the_World_12s"
    },
    {
        id: 2,
        question: "Go look for answers",
        left: 3,
        right: 31,
        leftText: "left",
        rightText: "right",
        leftDuration: 22000,
        rightDuration: 22000,
        soundFile: "silence",
        leftSoundFile: "Left_20s",
        rightSoundFile: "Right_20s"
    },
    {
        id: 3,
        left: 4,
        right: 8,
        leftText: "check the forest",
        rightText: "look into the fountain",
        soundFile: "silence",
        leftDuration: 25000,
        rightDuration: 26000, //file length 26sec checked
        leftSoundFile: "Tell_a_Story_&_check_the_forest_25s",
        rightSoundFile: "Fountain_&_Found_treasure(after_fountain)_20s"
    },
    {
        id: 4,
        question: "THUNDER STRIKES",
        left: 40000000002,
        right: 5,
        leftText: "run to safety", // -> "moment of loading" jokaiseen loppuun lost and found osioon
        rightText: "embrace the thunder", // -> "moment of blooming" jokaiseen loppuun lost and found osioon
        leftDuration: 40000,
        rightDuration: 40000,
        soundFile: "silence",
        leftSoundFile: "Embrace_the_Thunder_Run_to_safety_40s",
        rightSoundFile: "Embrace_the_Thunder_Run_to_safety_40s"
    },
    {
        id: 40000000002,
        question: "HUNGER STRIKES",
        left: 6,
        right: 20,
        leftText: "eat the frog",
        rightText: "keep on looking",
        endingEdit: "",
        leftDuration: 41000,
        rightDuration: 60000,
        soundFile: "silence",
        leftSoundFile: "Eat_the_frog_40s",
        rightSoundFile: "Keep_On_Looking_1min"
    },
    {
        id: 5,
        question: "HUNGER STRIKES",
        left: 6,
        right: 20,
        leftText: "eat the frog",
        rightText: "keep on looking",
        endingEdit: "",
        leftDuration: 40000,
        rightDuration: 60000,
        soundFile: "silence",
        rightSoundFile: "Keep_On_Looking_1min",
        leftSoundFile: "Eat_the_frog_40s"
    },
    {
        id: 6,
        left: 7,
        right: 30,
        leftText: "help Thalamis",
        rightText: "continue with Thalatta",
        leftDuration: 51000,
        rightDuration: 33000,
        soundFile: "silence",
        rightSoundFile: "Give_a_Gift_&_Continue_with_Thalatta_30s",
        leftSoundFile: "Help_Thalamis_51s"
    },
    {
        id: 7,
        style: "game-over",
        question: "YOU FOUND AN ENDING\n" +
        "your score\n\n BLIDS:\n 6\n" +
        "LOST AND FOUND: \n  route, frog, moment of loading, poison, combo = gloves+fungi, potion",
        left: 1,
        right: 1,
        duration: 1000000
    },
    
    {
        id: 8,
        duration: 26000,
        question: "You found an ancient treasure but you need a key to open it",
        style: "danger",
        left: 9,
        soundFile: "Fountain_&_Found_treasure(after_fountain)_20s"
    },
    {
        id: 9,
        left: 10,
        right: 12,
        leftText: "jumps and turns",
        rightText: "swing and fly",
        leftDuration: 61000,
        rightDuration: 60500,
        soundFile: "silence",
        leftSoundFile: "Jump_and_Turns_1min_1s",
        rightSoundFile: "Swing_and_Fly_1min"
    },
    {
        id: 10,
        left: 11,
        right: 26,
        leftText: "venture the Sandlands",
        rightText: "stick together",
        leftDuration: 47000,
        rightDuration: 46000,
        soundFile: "silence",
        rightSoundFile: "Stick_Together_46s",
        leftSoundFile: "VTS_(after_jumps_and_turns)_47s"
    },
    {
        id: 11,
        style: "game-over",
        question: "YOU FOUND AN ENDING\n" +
        "your score\n\n BLIDS:\n 9\n" +
        "LOST AND FOUND: \n  route, hyper vision, rolling spin, body care, separation",
        left: 1,
        right: 1,
        duration: 1000000
    },
    
    {
        id: 12,
        question: "do you want to have a picnic?",
        leftText: "no, I want to go to the mountain",
        rightText: "yes please",
        left: 13,
        right: 14,
        leftDuration: 70000,
        rightDuration: 25000,
        soundFile: "silence",
        leftSoundFile: "No_Piknik_But_Mountain_1min_10s",
        rightSoundFile: "VTS_(after_stonegarden)_&_Have_a_picnic_25s"
    },
    {
        id: 13,
        style: "game-over",
        question: "GAME OVER\n" +
        "your score\n\n BLIDS:\n 16\n" +
        "LOST AND FOUND: \n  route, hyper vision, rolling spin, food, hunger, hangry friend",
        left: 1,
        right: 1,
        duration: 1000000
    },
    {
        id: 14,
        leftText: "level up",
        rightText: "search for the treasure key",
        left: 15,
        right: 16,
        leftDuration: 56000,
        rightDuration: 42000,
        soundFile: "silence",
        leftSoundFile: "Level_up_(after_piknik)_56s",
        rightSoundFile: "Search_for_treasure_Key_42s"
    },
    {
        id: 15,
        style: "game-over",
        question: "YOU FOUND AN ENDING\n" +
        "your score\n\n BLIDS:\n 0\n" +
        "LOST AND FOUND: \n  route, hyper vision, rolling spin, food, lovely afternoon, freedom",
        left: 1,
        right: 1,
        duration: 1000000
    },
    {
        id: 16,
        question: "Open the ancient treasure with...",
        leftText: "medallion",
        rightText: "rolling spin",
        left: 18,
        right: 1901,
        leftDuration: 50000,
        rightDuration: 3000,
        soundFile: "silence",
        rightSoundFile: "silence",
        leftSoundFile: "Medallion_50s"
    },
    {
        id: 17 //POISTETTU
    },
    {
        id: 18,
        style: "game-over",
        question: "GAME OVER\n" +
        "your score\n\n BLIDS:\n 10\n" +
        "LOST AND FOUND: \n  route, hyper vision, rolling spin, food, lovely afternoon, medallion, ancient treasure",
        left: 1,
        right: 1,
        duration: 1000000
    },
    {
        id: 1901,
        question: "You used a wrong key. The treasure disappeared into thin air.",
        style: "danger",
        soundFile: "Rolling_spin_1min_25s",
        duration: 85000,
        left: 19,
    },
    {
        id: 19,
        style: "game-over",
        question: "GAME OVER\n" +
        "your score\n\n BLIDS:\n 10\n" +
        "LOST AND FOUND: \n  route, hyper vision, rolling spin, food, lovely afternoon, medallion, ghost treasure, balance",
        left: 1,
        right: 1,
        duration: 1000000
    },
    {
        id: 20,
        question: "You got trapped and the spirits here are hungry",
        leftText: "fight the spirits",
        rightText: "sacrifice a soul",
        left: 21,
        right: 25,
        leftDuration: 3000,
        rightDuration: 45000,
        soundFile: "silence",
        leftSoundFile: "silence",
        rightSoundFile: "Sacrifice_a_Soul_45s"
    },
    {
        id: 21,
        question: "YOU CAN'T FIGHT THE SPIRITS",
        style: "danger",
        left: 22,
        soundFile: "Fight_the_Spirits_eka_7s",
        duration: 7000
    },
    {
        id: 22,
        question: "You got trapped and the spirits here are hungry",
        leftText: "fight the spirits",
        rightText: "sacrifice a soul",
        left: 23,
        right: 25,
        leftDuration: 3000,
        rightDuration: 45000,
        leftSoundFile: "silence",
        rightSoundFile: "Sacrifice_a_Soul_45s"
    },
    {
        id: 23,
        question: "YOU CAN'T FIGHT THE SPIRITS",
        style: "danger",
        left: 24,
        soundFile: "Fight_the_spirits_toka_13s",
        duration: 14000
    },
    {
        id: 24,
        style: "game-over",
        question: "GAME OVER\n" +
        "your score\n\n BLIDS:\n 10\n" +
        "LOST AND FOUND: \n  route, frog, moment of loading, food, spirits, dead end",
        left: 1,
        right: 1,
        duration: 1000000
    },
    {
        id: 25,
        style: "game-over",
        question: "GAME OVER\n" +
        "your score\n\n BLIDS:\n 13\n" +
        "LOST AND FOUND: \n  route, frog, moment of loading, food, spirits, sorrow",
        left: 1,
        right: 1,
        duration: 1000000
    },
    {
        id: 26,
        leftText: "gors",
        rightText: "eternal hello",
        left: 27,
        right: 28,
        leftDuration: 54000,
        rightDuration: 2000,
        soundFile: "silence",
        rightSoundFile: "Stonegarden_&_Eternal_hello_LOOP",
        leftSoundFile: "GORS_kohtaus_54s"
    },
    {
        id: 27,
        style: "game-over",
        question: "YOU FOUND AN ENDING\n" +
        "your score\n\n BLIDS:\n 3\n" +
        "LOST AND FOUND: \n  route, hyper vision, rolling spin, body care, trust, sweat and salt",
        left: 1,
        right: 1,
        duration: 1000000
    },
    {
        id: 28,
        question: "ETERNAL HELLO",
        style: "danger",
        leftText: "press any button to say good bye",
        left: 29,
        right: 29,
        leftDuration: 1,
        rightDuration: 1
    },
    {
        id: 29,
        style: "game-over",
        question: "GOOD BYE\n" +
        "your score\n\n BLIDS:\n 3\n" +
        "LOST AND FOUND: \n  route, hyper vision, rolling spin, body care, trust, skill of presence",
        left: 1,
        right: 1,
        duration: 1000000
    },
    {
        id: 30,
        style: "game-over",
        question: "GAME OVER\n" +
        "your score\n\n BLIDS:\n 16\n" +
        "LOST AND FOUND: \n  route, frog, moment of loading, poison, deadly fungus",
        left: 1,
        right: 1,
        duration: 1000000
    },
    
    {
        id: 31,
        leftText: "take a mountain walk",
        rightText: "explore the woods",
        left: 32,
        right: 48,
        leftDuration: 21000,
        rightDuration: 30500,
        soundFile: "silence",
        rightSoundFile: "Explore_the_Woods_30s",
        leftSoundFile: "Mountainwalk_21s"
    },
    {
        id: 32,
        question: "You come across the mountain mafia",
        leftText: "pay the fee",
        rightText: "tell them they can't own the mountain",
        left: 40,
        right: 33,
        leftDuration: 35000,
        rightDuration: 15500,
        soundFile: "silence",
        leftSoundFile: "Pay_The_Fee_35s",
        rightSoundFile: "Tell_them_they_cant_own_the_mountain_15s"
    },
    {
        id: 33,
        duration: 21000,
        question: "You found an ancient treasure but it's locked",
        style: "danger",
        left: 34,
        soundFile: "Aarre_(found_treasure_after_tell_them)_20s"
    },
    {
        id: 34,
        question: "Go look for the key",
        leftText: "snake hole",
        rightText: "spider nest",
        left: 35,
        right: 36,
        leftDuration: 130000,
        rightDuration: 50000,
        soundFile: "silence",
        leftSoundFile: "Snakehole_2min_10s",
        rightSoundFile: "Spidernest_45s"
    },
    {
        id: 35,
        style: "game-over",
        question: "YOU FOUND AN ENDING\n" +
        "your score\n\n BLIDS:\n 12\n" +
        "LOST AND FOUND: \n  route, question of ownership, fear, balance ",
        left: 1,
        right: 1,
        duration: 1000000
    },
    {
        id: 36,
        question: "You opened the ancient treasure and " +
        "set free the Mountain Spirit. It's very grateful " +
        "of your actions and gives you one wish.",
        leftText: "bag of salt",
        rightText: "cup of water",
        left: 37,
        right: 39,
        leftDuration: 3000,
        rightDuration: 70000,
        soundFile: "silence",
        leftSoundFile: "silence",
        rightSoundFile: "Cup_of_water_1min_10s"
    },
    {
        id: 37,
        question: "I’m sorry but you have to find it yourselves. " +
        "Here is water instead, " +
        "you will need it when you find the salt.",
        style: "speech-bubble",
        soundFile: "Bag_of_Salt_30",
        duration: 30000,
        left: 38
    },
    {
        id: 38,
        style: "game-over",
        question: "GAME OCEAN\n" +
        "your score\n\n BLIDS:\n 9\n" +
        "LOST AND FOUND: \n  route, question of ownership, mountain spirit, discontent, water",
        left: 1,
        right: 1,
        duration: 1000000
    },
    {
        id: 39,
        style: "game-over",
        question: "YOU FOUND AN ENDING\n" +
        "your score\n\n BLIDS:\n 14\n" +
        "LOST AND FOUND: \n  route, question of ownership, mountain spirit, internal connection",
        left: 1,
        right: 1,
        duration: 1000000
    },
    {
        id: 40,
        leftText: "kiss",
        rightText: "tell a story",
        left: 41,
        right: 43,
        leftDuration: 30000,
        rightDuration: 25000,
        soundFile: "silence",
        leftSoundFile: "Kiss_30s",
        rightSoundFile: "Tell_a_Story_&_check_the_forest_25s"
    },
    {
        id: 41,
        leftText: "give a gift",
        rightText: "tell a story",
        left: 42,
        right: 43,
        endingEdit: "",
        leftDuration: 30000,
        rightDuration: 25000,
        soundFile: "silence",
        leftSoundFile: "Give_a_Gift_&_Continue_with_Thalatta_30s",
        rightSoundFile: "Tell_a_Story_&_check_the_forest_25s"
    },
    {
        id: 42,
        style: "game-over",
        question: "GAME OVER\n" +
        "your score\n\n BLIDS:\n 6\n" +
        "LOST AND FOUND: \n  route, mountain ticket, relation exploration, theft, deadly fungus",
        left: 1,
        right: 1,
        duration: 1000000
    },
    {
        id: 43,
        leftText: "add salt",
        rightText: "pass the salt",
        left: 44,
        right: 47,
        leftDuration: 48000,
        rightDuration: 40000,
        soundFile: "silence",
        leftSoundFile: "Add_Salt_eka_48s",
        rightSoundFile: "Pass_the_Salt_&_End_the_day_40s"
    },
    {
        id: 44,
        leftText: "add more salt",
        rightText: "pass the salt",
        left: 46,
        right: 47,
        leftDuration: 60000,
        rightDuration: 40000,
        soundFile: "silence",
        leftSoundFile: "Add_Salt_toka_(1min)",
        rightSoundFile: "Pass_the_Salt_&_End_the_day_40s"
    },
    {
        id: 45, //POISTETTU
    },
    {
        id: 46,
        style: "game-over",
        question: "YOU FOUND AN ENDING\n" +
        "your score\n\n BLIDS:\n 9\n" +
        "LOST AND FOUND: \n  route, mountain ticket, relation exploration, memories, bruises",
        left: 1,
        right: 1,
        duration: 1000000
    },
    {
        id: 47,
        style: "game-over",
        question: "YOU FOUND AN ENDING\n" +
        "your score\n\n BLIDS:\n 14\n" +
        "LOST AND FOUND: \n  route, mountain ticket, relation exploration, memories, dreaming",
        left: 1,
        right: 1,
        duration: 1000000
    },
    {
        id: 48,
        question: "Ask the frog",
        leftText: "where do we need to go?",
        rightText: "where are we?",
        left: 49,
        right: 58,
        soundFile: "silence",
        leftDuration: 3000,
        rightDuration: 3000
    },
    {
        id: 49,
        duration: 25000,
        question: "Before I answer help me with the stone garden. " +
        "Someone has destroyed it.",
        style: "speech-bubble",
        left: 50,
        soundFile: "Help_Me_With_SG_comment_25s"
    },
    {
        id: 50,
        question: "Push any button when the stone garden is ready",
        style: "danger",
        leftText: "...",
        left: 51,
        right: 51,
        leftDuration: 18000,
        rightDuration: 18000,
        soundFile: "Stonegarden_&_Eternal_hello_LOOP",
        leftSoundFile: "SG_Ready_blank_18s",
        rightSoundFile: "SG_Ready_blank_18s"
    },
    {
        id: 51,
        duration: 10000,
        soundFile: "silence",
        question: "Ahh.. Thank you, you kind creatures. I've heard" +
        " the Sandlands are worth a visit. But be cautious!",
        style: "speech-bubble",
        left: 52
    },
    {
        id: 52,
        leftText: "venture the Sandlands",
        rightText: "level up",
        left: 53,
        right: 54,
        leftDuration: 25000,
        rightDuration: 36000,
        soundFile: "silence",
        rightSoundFile: "Level_Up_(after_visit_sandland_comment)_36s",
        leftSoundFile: "VTS_(after_stonegarden)_&_Have_a_picnic_25s"
    },
    {
        id: 53,
        style: "game-over",
        question: "GAME OVER\n" +
        "your score\n\n BLIDS:\n 9\n" +
        "LOST AND FOUND: \n  route, business, hope, recklessness",
        left: 1,
        right: 1,
        duration: 1000000
    },
    {
        id: 54,
        leftText: "venture the Sandlands",
        rightText: "bonus game",
        left: 55,
        right: 56,
        leftDuration: 90000,
        rightDuration: 31000,
        soundFile: "silence",
        rightSoundFile: "Bonus_Game31",
        leftSoundFile: "VTS_after_level_up_(1min30s)"
    },
    {
        id: 55,
        style: "game-over",
        question: "YOU FOUND AN ENDING\n" +
        "your score\n\n BLIDS:\n 9\n" +
        "LOST AND FOUND: \n  route, business, growth, unforgettable dance",
        left: 1,
        right: 1,
        duration: 1000000
    },
    {
        id: 56,
        leftText: "venture the Sandlands",
        rightText: "end the day",
        left: 57,
        right: 62,
        leftDuration: 90000,
        rightDuration: 40000,
        soundFile: "silence",
        leftSoundFile: "VTS_after_level_up_(1min30s)",
        rightSoundFile: "Pass_the_Salt_&_End_the_day_40s"
    },
    {
        id: 57,
        style: "game-over",
        question: "GAME OVER\n" +
        "your score\n\n BLIDS:\n 9\n" +
        "LOST AND FOUND:\n  route, business, growth, mutual empowerment by " +
        "lifting one another up for their growth through noticing their qualities and skills while also doing something amazing together, " +
        "unforgettable dance",
        left: 1,
        right: 1,
        duration: 1000000
    },
    {
        id: 58,
        duration: 13000,
        question: "Mmm... We are in a time tunnel. " +
        "It's quite complicated. Maybe you can understand " +
        "it if I refer it to food.",
        style: "speech-bubble",
        left: 59,
        soundFile: "Timetunnel_comment_13s"
    },
    {
        id: 59,
        leftText: "eat the frog",
        rightText: "go back in time",
        left: 60,
        right: 61,
        leftDuration: 40000,
        rightDuration: 80000,
        soundFile: "silence",
        leftSoundFile: "Eat_the_frog_40s",
        rightSoundFile: "Go_Back_In_Time_1_min_20s"
    },
    {
        id: 60,
        style: "game-over",
        question: "GAME OVER\n" +
        "your score\n\n BLIDS:\n 6\n" +
        "LOST AND FOUND: \n route, frog, knowledge, poison",
        left: 1,
        right: 1,
        duration: 1000000
    },
    {
        id: 61,
        style: "game-over",
        question: "TIMES UP\n" +
        "your score\n\n BLIDS:\n 6\n" +
        "LOST AND FOUND: \n route, frog, knowledge, shape of time",
        left: 1,
        right: 1,
        duration: 1000000
    },
    {
        id: 62,
        style: "game-over",
        question: "GAME OVER\n" +
        "your score\n\n BLIDS:\n 9\n" +
        "LOST AND FOUND: \n  route, business, growth, mutual empowerement by " +
        "lifting one another up for their growth through noticing their qualities and skills while also doing something meaningful together, dreaming",
        left: 1,
        right: 1,
        duration: 1000000
    }
]
