const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs");

module.exports.config = {
  name: "help",
  version: "1.0.2",
  permission: 0,
  credits: "NAYAN",
  description: "beginner's guide",
  prefix: true,
  category: "guide",
  usages: "[Shows Commands]",
  cooldowns: 5,
  envConfig: {
    autoUnsend: true,
    delayUnsend: 60
  }
};

module.exports.languages = {
  "en": {
    "moduleInfo": "•—»✨[ %1 ]✨«—•\n\nUsage: %3\nCategory: %4\nWaiting time: %5 seconds(s)\nPermission: %6\nDescription: %2\n\nModule coded by %7",
    "helpList": '[ There are %1 commands on this bot, Use: "%2help nameCommand" to know how to use! ]',
    "user": "User",
    "adminGroup": "Admin group",
    "adminBot": "Admin bot"
  }
};

module.exports.handleEvent = function ({ api, event, getText }) {
  const { commands } = global.client;
  const { threadID, messageID, body } = event;

  if (!body || typeof body == "undefined" || body.indexOf("help") != 0) return;
  const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
  if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  const command = commands.get(splitBody[1].toLowerCase());
  const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
  return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
};

module.exports.run = function({ api, event, args, getText }) {
  const axios = require("axios");
  const request = require('request');
  const fs = require("fs-extra");
  const { commands } = global.client;
  const { threadID, messageID } = event;
  const command = commands.get((args[0] || "").toLowerCase());
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
  const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

  if (args[0] == "all") {
    const command = commands.values();
    var group = [], msg = "";
    for (const commandConfig of command) {
      if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
      else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
    }
    group.forEach(commandGroup => msg += `💫 ${commandGroup.group.charAt(0).toUpperCase() + commandGroup.group.slice(1)} \n${commandGroup.cmds.join(' • ')}\n\n`);

    return axios.get('https://loidsenpaihelpapi.miraiandgoat.repl.co').then(res => {
      let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
      let admID = "100077679423571";

      api.getUserInfo(parseInt(admID), (err, data) => {
        if(err){ return console.log(err)}
        var obj = Object.keys(data);
        var firstname = data[obj].name.replace("@", "");
        let callback = function () {
          api.sendMessage({ body:`Commands list\n\n` + msg + `\nSpamming the bot are strictly prohibited\n\nTotal Commands: ${commands.size}\n\nDeveloper:\nAKASH MAHMUD`;, mentions: [{
            tag: firstname,
            id: admID,
            fromIndex: 0,
          }],
          attachment: fs.createReadStream(__dirname + `/cache/472.${ext}`)
          }, event.threadID, (err, info) => {
            fs.unlinkSync(__dirname + `/cache/472.${ext}`);
            if (autoUnsend == false) {
              setTimeout(() => {
                return api.unsendMessage(info.messageID);
              }, delayUnsend * 1000);
            }
            else return;
          }
          );
        }
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/472.${ext}`)).on("close", callback);
      })
    })
  };

  if (!command) {
    const arrayInfo = [];
    const page = parseInt(args[0]) || 1;
    const numberOfOnePage = 10;
    let i = 0;
    let msg = "";

    for (var [name, value] of (commands)) {
      name += ``;
      arrayInfo.push(name);
    }

    arrayInfo.sort((a, b) => a.data - b.data);

    const first = numberOfOnePage * page - numberOfOnePage;
    i = first;
    const helpView = arrayInfo.slice(first, first + numberOfOnePage);

    for (let cmds of helpView) msg += `•—»✨ ${cmds} ✨«—•\n`;
    const siu = `•—»✨𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐜𝐡𝐚𝐭 𝐛𝐨𝐭 ✨«—• ${global.config.BOTNAME}\nPage ｢${page}/${Math.ceil(arrayInfo.length/numberOfOnePage)}｣`;

    const randomText = ["Even a small amount of alcohol poured on a scorpion will drive it crazy and sting itself to death.", "The crocodile can't stick its tongue out.", "The oldest known animal in the world is a 405-year-old male, discovered in 2007.", "Sharks, like other fish, have their reproductive organs located in the ribcage.", "The eyes of the octopus have no blind spots. On average, the brain of an octopus has 300 million neurons. When under extreme stress, some octopuses even eat their trunks.", "An elephant's brain weighs about 6,000g, while a cat's brain weighs only approximately 30g.", "Cats and dogs have the ability to hear ultrasound.", "Sheep can survive up to 2 weeks in a state of being buried in snow.", "The smartest pig in the world is owned by a math teacher in Madison, Wisconsin (USA). It has the ability to memorize worksheets multiplying to 12.", "Statistics show that each rattlesnake's mating lasts up to ... more than 22 hours"];

    const text = `\n•┄┅════❁🌺❁════┅┄•\n\n •—»✨ ${global.config.BOTNAME}\n •—»✨ 𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐜𝐡𝐚𝐭 𝐛𝐨𝐭\n\n🌸:Command List: ${arrayInfo.length}\n🌺:Bot Name: ${global.config.BOTNAME}\nPrefix: ${global.config.PREFIX}\n 🌏𝐖𝐚𝐛 𝐋𝐢𝐧𝐤 : Nai`;

    var link = [
      "https://i.postimg.cc/DzXF6gkj/1686479434754.jpg",      
      "https://i.postimg.cc/DzXF6gkj/1686479434754.jpg",    
      "https://i.postimg.cc/DzXF6gkj/1686479434754.jpg",    
      "https://i.postimg.cc/DzXF6gkj/1686479434754.jpg",    
      "https://i.postimg.cc/DzXF6gkj/1686479434754.jpg",
      "https://i.postimg.cc/DzXF6gkj/1686479434754.jpg",
      "https://i.postimg.cc/DzXF6gkj/1686479434754.jpg",
    ];

    var callback = () => api.sendMessage({ body: siu + "\n\n" + msg + text, attachment: fs.createReadStream(__dirname + "/cache/loidbutter.jpg") }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/loidbutter.jpg"), event.messageID);

    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/loidbutter.jpg")).on("close", () => callback());
  }

  const leiamname = getText("moduleInfo", command.config.name, command.config.description, `${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits);

  var link = [
    "https://i.imgur.com/HO1FzcA.jpg",
  ];

  var callback = () => api.sendMessage({ body: leiamname, attachment: fs.createReadStream(__dirname + "/cache/loidbutter.jpg") }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/loidbutter.jpg"), event.messageID);

  return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/loidbutter.jpg")).on("close", () => callback());
};
