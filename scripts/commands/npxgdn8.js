const fs = require("fs");
module.exports = {
  config:{
	name: "gdn8",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "gf",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf("Good night")==0 || body.indexOf("Gd n8")==0 || body.indexOf("good night")==0 || body.indexOf("gd n8")==0) {
		var msg = {
				body: "ও্ঁকে্ঁ সো্ঁনা গু্ঁড্ঁ না্ঁই্ঁট্ঁ 🌚",
				attachment: fs.createReadStream(__dirname + `/Nayan/Mayabi.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😁", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}
