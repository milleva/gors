export default [
    {
        id: 1,
        question: "ENTER THE WORLD",
        left: 2,
        right: 2,
        leftText: "Yes",
        rightText: "Wohoo",
        leftDuration: 10000,
        rightDuration: 10000
    },
    {
        id: 2,
        question: "Go look for answers",
        left: 3,
        right: 31,
        leftText: "Left",
        rightText: "Right",
        leftDuration: 20000,
        rightDuration: 20000
    },
    {
        id: 3,
        left: 4,
        right: 8,
        leftText: "Check the forest",
        rightText: "Look into the fountain",
        leftDuration: 25000,
        rightDuration: 25000
    },
    {
        id: 4,
        question: "THUNDER STRIKES",
        left: 40000000002,
        right: 5,
        leftText: "Run to safety", // -> "moment of loading" jokaiseen loppuun lost and found osioon
        rightText: "Embrace the thunder", // -> "moment of blooming" jokaiseen loppuun lost and found osioon
        leftDuration: 40000,
        rightDuration: 37000
    },
    {
        id: 40000000002,
        question: "HUNGER STRIKES",
        left: 6,
        right: 20,
        leftText: "Eat the frog",
        rightText: "Keep on looking",
        endingEdit: "",
        leftDuration: 38000,
        rightDuration: 60000
    },
    {
        id: 5,
        question: "HUNGER STRIKES",
        left: 6,
        right: 20,
        leftText: "Eat the frog",
        rightText: "Keep on looking",
        endingEdit: "",
        leftDuration: 38000,
        rightDuration: 60000
    },
    {
        id: 6,
        left: 7,
        right: 30,
        leftText: "Help Thalamis",
        rightText: "Continue with Thalatta",
        leftDuration: 60000,
        rightDuration: 27000
    },
    {
        id: 7,
        style: "game-over",
        question: "YOU FOUND AN ENDING\n\n" +
        "BLIDS:\n 6\n" +
        "LOST AND FOUND: \n  route, frog, moment of loading, poison, combo = gloves+fungi",
        left: 1,
        right: 1,
        duration: 1000000
    },
    
    {
        id: 8,
        duration: 20000,
        question: "You found an ancient treasure but you need a key to open it",
        style: "danger",
        left: 9
    },
    {
        id: 9,
        left: 10,
        right: 12,
        leftText: "Jumps and turns",
        rightText: "Swing and fly",
        leftDuration: 60000,
        rightDuration: 60000
    },
    {
        id: 10,
        left: 11,
        right: 26,
        leftText: "VENTURE THE SANDLANDS",
        rightText: "STICK TOGETHER",
        leftDuration: 45000,
        rightDuration: 45000
    },
    {
        id: 11,
        style: "game-over",
        question: "YOU FOUND AN ENDING\n\n" +
        "BLIDS:\n 9\n" +
        "LOST AND FOUND: \n  route, hyper vision, rolling spin, body care, separation",
        left: 1,
        right: 1,
        duration: 1000000
    },
    
    {
        id: 12,
        question: "Do you want to have a picnic?",
        leftText: "NO, I WANT TO GO TO THE MOUNTAIN",
        rightText: "YES PLEASE",
        left: 13,
        right: 14,
        leftDuration: 70000,
        rightDuration: 25000
    },
    {
        id: 13,
        style: "game-over",
        question: "GAME OVER\n\n" +
        "BLIDS:\n 16\n" +
        "LOST AND FOUND: \n  route, hyper vision, rolling spin, food, hunger, hangry friend",
        left: 1,
        right: 1,
        duration: 1000000
    },
    {
        id: 14,
        leftText: "LEVEL UP",
        rightText: "SEARCH FOR THE TREASURE KEY",
        left: 15,
        right: 16,
        leftDuration: 53000,
        rightDuration: 38000
    },
    {
        id: 15,
        style: "game-over",
        question: "YOU FOUND AN ENDING\n\n" +
        "BLIDS:\n 0\n" +
        "LOST AND FOUND: \n  route, lovely afternoon, hyper vision, rolling spin, food, freedom",
        left: 1,
        right: 1,
        duration: 1000000
    },
    {
        id: 16,
        question: "Open the ancient treasure with...",
        leftText: "MEDALLION",
        rightText: "ROLLING SPIN",
        left: 17,
        right: 19,
        leftDuration: 20000,
        rightDuration: 45000
    },
    {
        id: 17,
        question: "You used the wrong key. The treasure disappeared into thin air",
        style: "danger",
        left: 18,
    },
    {
        id: 18,
        style: "game-over",
        question: "GAME OVER\n\n" +
        "BLIDS:\n 10\n" +
        "LOST AND FOUND: \n  route, lovely afternoon, hyper vision, rolling spin, food, medallion, a ghost treasure",
        left: 1,
        right: 1,
        duration: 1000000
    },
    {
        id: 19,
        style: "game-over",
        question: "GAME OVER\n\n" +
        "BLIDS:\n 10\n" +
        "LOST AND FOUND: \n  route, lovely afternoon, hyper vision, rolling spin, food, medallion, ancient necessary",
        left: 1,
        right: 1,
        duration: 1000000
    },
    {
        id: 20,
        question: "You got trapped and the spirits here are hungry",
        leftText: "FIGHT THE SPIRITS",
        rightText: "SACRIFICE A SOUL",
        left: 21,
        right: 25,
        leftDuration: 3000,
        rightDuration: 45000
    },
    {
        id: 21,
        question: "YOU CAN'T FIGHT THE SPIRITS",
        style: "danger",
        left: 22,
        duration: 7000
    },
    {
        id: 22,
        question: "You got trapped and the spirits here are hungry",
        leftText: "FIGHT THE SPIRITS",
        rightText: "SACRIFICE A SOUL",
        left: 23,
        right: 25,
        leftDuration: 3000,
        rightDuration: 45000
    },
    {
        id: 23,
        question: "YOU CAN'T FIGHT THE SPIRITS",
        style: "danger",
        left: 24,
        duration: 13000
    },
    {
        id: 24,
        style: "game-over",
        question: "GAME OVER\n\n" +
        "BLIDS:\n 10\n" +
        "LOST AND FOUND: \n  route, moment of loading, frog, food, spirits, dead end",
        left: 1,
        right: 1,
        duration: 1000000
    },
    {
        id: 25,
        style: "game-over",
        question: "GAME OVER\n\n" +
        "BLIDS:\n 13\n" +
        "LOST AND FOUND: \n  route, moment of loading, frog, food, spirits, sorrow",
        left: 1,
        right: 1,
        duration: 1000000
    },
    {
        id: 26,
        leftText: "GORS",
        rightText: "ETERNAL HELLO",
        left: 27,
        right: 28,
        leftDuration: 50000,
        rightDuration: 2000
    },
    {
        id: 27,
        style: "game-over",
        question: "YOU FOUND AN ENDING\n\n" +
        "BLIDS:\n 3\n" +
        "LOST AND FOUND: \n  route, hyper vision, rolling spin, body care, trust, salt",
        left: 1,
        right: 1,
        duration: 1000000
    },
    {
        id: 28,
        question: "ETERNAL HELLO",
        style: "danger",
        leftText: "Press any button to say good bye",
        left: 29,
        right: 29,
        leftDuration: 1,
        rightDuration: 1
    },
    {
        id: 29,
        style: "game-over",
        question: "GOOD BYE\n\n" +
        "BLIDS:\n 3\n" +
        "LOST AND FOUND: \n  route, hyper vision, rolling spin, body care, trust, skill of precence",
        left: 1,
        right: 1,
        duration: 1000000
    },
    {
        id: 30,
        style: "game-over",
        question: "GAME OVER\n\n" +
        "BLIDS:\n 16\n" +
        "LOST AND FOUND: \n  route, frog, moment of loading, potion, deadly fingers",
        left: 1,
        right: 1,
        duration: 1000000
    },
    
    {
        id: 31,
        leftText: "Take a Mountain walk",
        rightText: "Explore the woods",
        left: 32,
        right: 48,
        leftDuration: 20000,
        rightDuration: 30000
    },
    {
        id: 32,
        question: "You come across the mountain mafia",
        leftText: "Pay the fee",
        rightText: "Tell them they can't own the mountain",
        left: 40,
        right: 33,
        leftDuration: 35000,
        rightDuration: 13000
    },
    {
        id: 33,
        duration: 20000,
        question: "You found an ancient treasure but it's locked",
        style: "danger",
        left: 34,
    },
    {
        id: 34,
        question: "Go look for the key",
        leftText: "Snake hole",
        rightText: "Spider nest",
        left: 35,
        right: 36,
        leftDuration: 130000,
        rightDuration: 50000
    },
    {
        id: 35,
        style: "game-over",
        question: "YOU FOUND AN ENDING\n\n" +
        "BLIDS:\n 12\n" +
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
        leftText: "Bag of Salt",
        rightText: "Cup of Water",
        left: 37,
        right: 39,
        leftDuration: 30000,
        rightDuration: 60000
    },
    {
        id: 37,
        question: "What a nice wish but unfortunately " +
        "also the one wish I can't execute. Here's water, " +
        "you will need it when you find the salt.",
        style: "speech-bubble",
        left: 38
    },
    {
        id: 38,
        style: "game-over",
        question: "GAME OCEAN\n\n" +
        "BLIDS:\n 9\n" +
        "LOST AND FOUND: \n  route, question of ownership, mountain spirit, discontent, water",
        left: 1,
        right: 1,
        duration: 1000000
    },
    {
        id: 39,
        style: "game-over",
        question: "YOU FOUND AN ENDING\n\n" +
        "BLIDS:\n 14\n" +
        "LOST AND FOUND: \n  route, question of ownership, mountain spirit, spiritual enlightenment",
        left: 1,
        right: 1,
        duration: 1000000
    },
    {
        id: 40,
        leftText: "Kiss",
        rightText: "Tell a story",
        left: 41,
        right: 43,
        leftDuration: 35000,
        rightDuration: 25000
    },
    {
        id: 41,
        leftText: "Give a gift",
        rightText: "Tell a story",
        left: 42,
        right: 43,
        endingEdit: ", relation exploration",
        leftDuration: 30000,
        rightDuration: null
    },
    {
        id: 42,
        style: "game-over",
        question: "GAME OVER\n\n" +
        "BLIDS:\n 6\n" +
        "LOST AND FOUND: \n  route, mountain ticket, theft, deadly things",
        left: 1,
        right: 1,
        duration: 1000000
    },
    {
        id: 43,
        leftText: "Add salt",
        rightText: "Pass the salt",
        left: 44,
        right: 47,
        leftDuration: 38000,
        rightDuration: 40000
    },
    {
        id: 44,
        leftText: "Add salt",
        rightText: "Pass the salt",
        left: 46,
        right: 47,
        leftDuration: 50000,
        rightDuration: 40000
    },
    {
        id: 45, //POISTETTU
        leftText: "Add salt",
        rightText: "Pass the salt",
        left: 46,
        right: 47
    },
    {
        id: 46,
        style: "game-over",
        question: "YOU FOUND AN ENDING\n" +
        "BLIDS:\n 9\n" +
        "LOST AND FOUND: \n  route, mountain ticket, memories, bruises",
        left: 1,
        right: 1,
        duration: 1000000
    },
    {
        id: 47,
        style: "game-over",
        question: "YOU FOUND AN ENDING\n\n" +
        "BLIDS:\n 14\n" +
        "LOST AND FOUND: \n  route, mountain ticket, memories, ease",
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
        leftDuration: 3000,
        rightDuration: 3000
    },
    {
        id: 49,
        duration: 25000,
        question: "Before I answer help me with the stone garden. " +
        "someone has destroyed it.",
        style: "speech-bubble",
        left: 50
    },
    {
        id: 50,
        question: "Push any button when the stone garden is ready",
        style: "danger",
        leftText: "Push any button",
        left: 51,
        right: 51,
        leftDuration: 1,
        rightDuration: 1
    },
    {
        id: 51,
        duration: 10000,
        question: "Ahh.. Thank you, you kind creatures. I've heard" +
        " the Sandlands are worth a visit. But be cautious!",
        style: "speech-bubble",
        left: 52
    },
    {
        id: 52,
        leftText: "Venture the Sandlands",
        rightText: "Level up",
        left: 53,
        right: 54,
        leftDuration: 25000,
        rightDuration: 30000
    },
    {
        id: 53,
        style: "game-over",
        question: "GAME OVER\n\n" +
        "BLIDS:\n 9\n" +
        "LOST AND FOUND: \n  route, business, hope, recklessness",
        left: 1,
        right: 1,
        duration: 1000000
    },
    {
        id: 54,
        leftText: "Venture the Sandlands",
        rightText: "Bonus Game",
        left: 55,
        right: 56,
        leftDuration: 70000,
        rightDuration: 30000
    },
    {
        id: 55,
        style: "game-over",
        question: "YOU FOUND AN ENDING\n\n" +
        "BLIDS:\n 9\n" +
        "LOST AND FOUND: \n  route, business, growth, unforgettable dance",
        left: 1,
        right: 1,
        duration: 1000000
    },
    {
        id: 56,
        leftText: "Venture the Sandlands",
        rightText: "End the day",
        left: 57,
        right: 62,
        leftDuration: 45000,
        rightDuration: 70000
    },
    {
        id: 57,
        style: "game-over",
        question: "GAME OVER\n\n" +
        "BLIDS:\n 9\n" +
        "LOST AND FOUND: \n  route, business, growth, mutual empowerment by " +
        "lifting one another up for their growth through noticing their qualities and skills while also doing something meaningful together, " +
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
        left: 59
    },
    {
        id: 59,
        leftText: "Eat the frog",
        rightText: "Go back in time",
        left: 60,
        right: 61,
        leftDuration: 35000,
        rightDuration: 80000
    },
    {
        id: 60,
        style: "game-over",
        question: "GAME OVER\n\n" +
        "BLIDS:\n 6\n" +
        "LOST AND FOUND: \n route, frog, knowledge, poison",
        left: 1,
        right: 1,
        duration: 1000000
    },
    {
        id: 61,
        style: "game-over",
        question: "TIMES UP\n\n" +
        "BLIDS:\n 6\n" +
        "LOST AND FOUND: \n route, frog, knowledge, shape of time",
        left: 1,
        right: 1,
        duration: 1000000
    },
    {
        id: 62,
        style: "game-over",
        question: "GAME OVER\n\n" +
        "BLIDS:\n 9\n" +
        "LOST AND FOUND: \n  route, business, growth, mutual empowerement by " +
        "lifting one another up for their growth through noticing their qualities and skills while also doing something meaningful together",
        left: 1,
        right: 1,
        duration: 1000000
    }
]
