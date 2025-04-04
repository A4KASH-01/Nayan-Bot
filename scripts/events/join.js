module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "CatalizCS", //fixing ken gusler
	description: "Notify bot or group member with random gif/photo/video",
	dependencies: {
		"fs-extra": "",
		"path": "",
		"pidusage": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "joinGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`{ ${global.config.PREFIX} } - ${(!global.config.BOTNAME) ? "bot" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		const fs = require("fs");
		return api.sendMessage("𝙷𝙴 𝙷𝙴 𝙸 𝖺𝗆 𝙱𝙰𝙲𝙺 \n     𝙸𝚃𝚂 𝙼3 『𝘼 𝙆 𝘼 𝙎 𝙃.. 𝙆 𝙄 𝙔 𝘼 𝙈 𝘽 𝙊 𝙏", event.threadID, () => api.sendMessage({body:`⊱•────•──────────•────•⊰
  𝐓𝐇𝐈𝐒 𝐁𝐎𝐓 𝐑𝐄-𝐌𝐀𝐃𝐄
        𝐁𝐘 
  𝗔 𝗞 𝗔 𝗦 𝗛 𝗩 𝗔 𝗜 ⊱•────•──────────•────•⊰
❇️ ${global.config.BOTNAME} Bot Connected 🌐✅
        
❇️ ~ আসসালামু আলাইকুম আমার নাম
${global.config.BOTNAME}

❇️ আমার Prefix  হলো [ ${global.config.PREFIX} ]

❇️ আমার কমান্ডা লিস্ট দেখার জন্য  ${global.config.PREFIX}help ব্যবহার করুন.

❇️ আমার বস 𝗔 𝗞 𝗔 𝗦 𝗛..𝗞 𝗜 𝗬 𝗔 𝗠

❇️ যেকোনো সমস্যার জন্য ${global.config.PREFIX}called  ব্যবহার করুন; 
_______________×_______________
Thank You, Have A Nice Day 😜\n●───༆ "কারোর ༂ জন্য ༂

 𝐏𝐄𝐑𝐅𝐄𝐂𝐓 হতে ༂" চাই ༂ না

 ❥┼🥀🥰

🥀🤎ღ●───༂ যে  ༂আমার ༂ সে ༂ নিজেই ༂ আমাকে  ༂ 𝐏𝐄𝐑𝐅𝐄𝐂𝐓 ༆‌༂ বানিয়ে ༂ নিবে ༆‌༂" ❥┼
`, attachment: fs.createReadStream(__dirname + "/cache/joinmp4/joinnoti.mp4")} ,threadID));
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `${threadID}.gif`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
      
			memLength.sort((a, b) => a - b);
    (typeof threadData.customJoin == "undefined") ?  msg = "╔════•|      ✿      |•════╗\n 💐আ্ঁস্ঁসা্ঁলা্ঁমু্ঁ💚আ্ঁলা্ঁই্ঁকু্ঁম্ঁ💐\n╚════•|      ✿      |•════╝\n\n    ✨🆆🅴🅻🅻 🅲🅾🅼🅴✨\n\n                 ❥𝐍𝐄𝐖~\n\n        ~🇲‌🇪‌🇲‌🇧‌🇪‌🇷‌~\n\n             [   {name} ]\n\n༄✺আ্ঁপ্ঁনা্ঁকে্ঁ আ্ঁমা্ঁদে্ঁর্ঁ✺࿐\n\n{threadName}\n\n 🥰🖤🌸—এ্ঁর্ঁ প্ঁক্ষ্ঁ🍀থে্ঁকে্ঁ🍀—🌸🥀\n\n         🥀_ভা্ঁলো্ঁবা্ঁসা্ঁ_অ্ঁভি্ঁরা্ঁম্ঁ_🥀\n\n༄✺আঁপঁনিঁ এঁইঁ গ্রুঁপেঁর {soThanhVien} নঁং মে্ঁম্বা্ঁরঁ ࿐\n\n    ╔╦══•    •✠•❀•✠ •   •══╦╗\n        ♥  𝐁𝐎𝐓'𝐬 𝐎𝐖𝐍𝐄𝐑♥\n\n                           ☟                     \n\n♥𝑨 𝑲 𝑨 𝑺 𝑯═𝑲 𝑰 𝑨 𝑴-ＢＯＴ♥\n    ╚╩══•    •✠•❀•✠ •    •══╩╝{ 𝚃.𝚁.𝙰} 𝘼𝙆𝘼𝙎𝙃 𝙈𝘼𝙃𝙈𝙐𝘿🔥" : msg = threadData.customJoin;
      
      msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'You' : 'Friend')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);
      
			if (existsSync(path)) mkdirSync(path, { recursive: true });

			const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randommp4"));

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else if (randomPath.length != 0) {
				const pathRandom = join(__dirname, "cache", "joinGif", "randommp4", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
				formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
			}
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
      }
