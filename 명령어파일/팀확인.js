const Discord = require("discord.js");
var config = require("../setting.json")

module.exports.run = async (client, message, args) => {
  try{
if (config.manager.includes(message.author.id)){
  message.reply("반갑습니다 팀원님!")
}else{
  message.reply("당신은 봇의 팀이 아닙니다!")
}
  }catch(e) {
    message.channel.send(`에러발생 \n\n \`\`\`js\n${e}\n\`\`\`\n\n`);
  }
}
