const fs = require("fs");

module.exports = {
    config: {
        name: "👍",
        version: "1.0.1",
        prefix:false,
        hasPermssion: 0,
        credits: "VanHung - Fixed by LTD", 
        description: "hihihihi",
        category: "no prefix",
        usages: "👍",
        cooldowns: 5, 
    },

    handleEvent: function({ api, event }) {
        var { threadID, messageID, body } = event;
        if (!body) return;

        const lowerBody = body.toLowerCase();
        if (lowerBody.startsWith("👍") || lowerBody.startsWith("(y)") || lowerBody.startsWith("👍")) {
            var msg = {
                body: "লা্ঁই্ঁকা্ঁর্ 🤣😹🥀",
                attachment: fs.createReadStream(__dirname + `/noprefix/hanhtinh/likerabl.mp3`)
            };
            api.sendMessage(msg, threadID, messageID);
            api.setMessageReaction("😹", messageID, (err) => {}, true);
        }
    },

    start: function({nayan }) {
        // This can be used for further expansion if needed
    }
};
