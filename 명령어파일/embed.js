const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  try{
    var test = new Discord.RichEmbed()
    .setTitle('제목')
    .setDescription('설명')
    .setFooter('바닥') 
    .addField('필드 제목1','필드 글1')
    .addField('필드 제목2','필드 글2')
    .setColor("#FFFFF") //이곳은 RGB 컬러를 추가하는 곳으로 RANDOM 으로 하면 랜덤으로 출력됩니다
    
    message.channel.send(test)
  }catch(e) {
    message.channel.send(`에러발생 \n\n \`\`\`js\n${e}\n\`\`\`\n\n`);
  }
}
