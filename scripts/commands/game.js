const fs = require("fs");

module.exports = {
  config: {
    name: "game",
    version: "1.0.0",
    prefix: false,
    permission: 0,
    credits: "nayan",
    description: "Word Guessing Game",
    category: "games",
    usages: "/game",
    cooldowns: 5,
  },

  handleEvent: function({ api, event, client, __GLOBAL }) {
    const { threadID, messageID } = event;
    const content = event.body ? event.body : '';
    const body = content.toLowerCase();

    // Start the game with '/game' command
    if (body === "/game") {
      const words = ["computer", "programming", "javascript", "node", "python"];
      const randomWord = words[Math.floor(Math.random() * words.length)];

      // Start the game
      api.sendMessage({
        body: "I'm thinking of a word! Can you guess it? (Word length: " + randomWord.length + " letters)",
      }, threadID, messageID);

      // Store game data
      __GLOBAL.gameWord = randomWord;
      __GLOBAL.gameThreadID = threadID;
      __GLOBAL.gameMessageID = messageID;
      __GLOBAL.points = 0; // Points start from 0
    }

    // When a guess is made
    if (body !== "/game" && __GLOBAL.gameWord) {
      const guessedWord = body.toLowerCase();

      // Correct guess
      if (guessedWord === __GLOBAL.gameWord) {
        __GLOBAL.points += 10; // Add 10 points for correct guess
        api.sendMessage({
          body: `🎉 Congratulations! You guessed the word correctly: ${guessedWord}. Your points: ${__GLOBAL.points}`,
        }, threadID, messageID);

        // Clear game data after game ends
        delete __GLOBAL.gameWord;
      } else {
        __GLOBAL.points -= 5; // Subtract 5 points for wrong guess
        api.sendMessage({
          body: `😞 Wrong! Try again. Your points: ${__GLOBAL.points}`,
        }, threadID, messageID);
      }
    }
  },

  start: function({ nayan }) {}
};
