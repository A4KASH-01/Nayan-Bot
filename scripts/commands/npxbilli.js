const fs = require("fs");
module.exports = {
  config:{
	name: "billi",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "billi",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf("😻")==0 || body.indexOf("😽")==0 || body.indexOf("😾")==0 || body.indexOf("😸")==0) {
		var msg = {
				body: "বি্ঁলা্ঁই্ঁ মে্ঁও্ঁ কা্ঁটা্ঁ খা্ঁও্ঁ 😽🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/hanhtinh/billitah.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🦊", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}
