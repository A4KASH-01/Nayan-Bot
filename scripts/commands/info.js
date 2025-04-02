module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.postimg.cc/TwknbkKB/1699521114654.jpg", 
            
            "https://i.postimg.cc/wMmnM42Q/1699321056433.jpg", 
            
            "https://i.postimg.cc/QxMTLL67/1699093263715.jpg",
            
            "https://i.postimg.cc/TwknbkKB/1699521114654.jpg"];
  
var callback = () => api.sendMessage({body:`•—»✨𝐀𝐝𝐦𝐢𝐧 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧✨🌺
•┄┅═════❁🌺❁═════┅┄•

 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : 𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐂𝐡𝐚𝐭 𝐁𝐨𝐭

𝐁𝐨𝐭 𝐀𝐝𝐦𝐢𝐧 : 𝐀𝐤𝐚𝐬𝐡 𝐌𝐚𝐡𝐦𝐮𝐝

𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫 : 𝐀𝐤𝐚𝐬𝐡 𝐌𝐚𝐡𝐦𝐮𝐝

•┄┅══❁CONCATET❁══┅┄• 
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐈𝐝: https://www.facebook.com/Its.ME.T.R.A.THE.REBEL.AKASH.VAU

𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐏𝐚𝐠𝐞 : https://www.facebook.com/Its.ME.T.R.A.THE.REBEL.AKASH.VAU

𝐖𝐏 𝐍𝐮𝐦𝐛𝐞𝐫 : 01706282378

𝐒𝐞𝐚𝐫𝐜𝐡 𝐆𝐨𝐨𝐠𝐥𝐞 : 𝐀𝐦𝐢 𝐄𝐭𝐨 𝐛𝐨𝐫𝐨 𝐦𝐚𝐧𝐮𝐬 𝐧𝐚

𝐖𝐚𝐛 𝐒𝐢𝐭𝐞 𝐋𝐢𝐧𝐤 : 𝐀𝐛𝐚𝐫 𝐰𝐞𝐛𝐬𝐢𝐭𝐞😫

•┄┅═════❁🌺❁═════┅┄•\n🌺✨𝐎𝐭𝐡𝐞𝐫𝐬 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧✨🌺\n •┄┅═════❁🌺❁═════┅┄•

TYPE /admin 

𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : ${global.config.BOTNAME}

𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱 : ${global.config.PREFIX}

𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫 : 𝐌𝐝 𝐀𝐤𝐚𝐬𝐡 𝐌𝐚𝐡𝐦𝐮𝐝

•—»✨ 𝐔𝐩𝐭𝐢𝐦𝐞

𝐓𝐨𝐝𝐚𝐲 𝐈𝐬 𝐓𝐢𝐦𝐞 : ${juswa} 

𝐁𝐨𝐭 𝐈𝐬 𝐑𝐮𝐧𝐧𝐢𝐧𝐠 ${hours}:${minutes}:${seconds}.

𝐓𝐡𝐚𝐧𝐤𝐬 𝐅𝐨𝐫 𝐔𝐬𝐢𝐧𝐠  ༄🌺\n｢🕋｣${global.config.BOTNAME}｢🕋｣`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
