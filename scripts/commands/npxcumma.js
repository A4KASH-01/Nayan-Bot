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
	if (body.indexOf("👄")==0 || body.indexOf("🫦")==0 || body.indexOf("�")==0 || body.indexOf("😘")==0) {
		var msg = {
				body: "এ্ঁ স্ঁর্ঁ চু্ঁম্মা্ঁ চা্ঁপ্ঁটি্ঁ ক্ঁরি্ঁস্ঁ না্ঁত্ঁ 🙈🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/hanhtinh/cummah.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("👅", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}
