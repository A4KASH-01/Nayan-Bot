const fs = require("fs");

module.exports = {
    config: {
        name: "🤣",
        version: "1.0.1",
        permission: 0,
        credits: "nayan",
        description: "hihihihi",
        category: "no prefix",
        usages: "🤣",
        cooldowns: 5,
    },

    handleEvent: function ({ api, event }) {
        var { threadID, messageID, body } = event;
        if (!body) return;
        
        const lowerBody = body.toLowerCase();
        if (lowerBody.startsWith("😂") || lowerBody.startsWith("😆") || lowerBody.startsWith("😁") || lowerBody.startsWith("🤣")) {
            var msg = {
                body: "এ্ঁত্ঁ হা্ঁসো্ঁ কে্ঁনো্ঁ 🐸🫢",
                attachment: fs.createReadStream(__dirname + "/Nayan/Mayabi.mp3")
            };
            api.sendMessage(msg, threadID, messageID);
            api.setMessageReaction("🤣", messageID, () => {}, true);
        }
    },

    start: function ({nayan}) {
    }
};
