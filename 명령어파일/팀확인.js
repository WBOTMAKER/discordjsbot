const Discord = require("discord.js");
var config = require("../setting.json")

module.exports.run = async (client, message, args) => {
  try{
if (config.manager.includes(message.author.id)){
  message.reply("당신은 저의 팀원입니다.")
}else{
  message.reply("당신은 저의 팀원이 아닙니다!")
}
  }catch(e) {
    message.channel.send(`에러발생 \n\n \`\`\`js\n${e}\n\`\`\`\n\n`);
  }
}
