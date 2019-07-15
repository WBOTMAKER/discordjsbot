var Discord = require('discord.js');
var client = new Discord.Client();
var config = require("./setting.json");



client.on("message", async message => {
 if(message.author.bot) return; //봇 사용자가 봇일시 무시합니다
 if(message.channel.type === "dm") return;//봇 사용채널이 개인 메세지일시 무시합니다

if(message.content.indexOf(config.prefix) !== 0) return; //만약 메세지에 prefix가 없으면 무시합니다
    var args = message.content.slice(config.prefix.length).trim().split(/ +/g); //prefix를 지우고 띄워쓰기가 되어있는부분을 전부 나눕니다.
    var command = args.shift().toLowerCase(); //prefix뒤에 있는 메세지를 소문자로 수정합니다.
try {
  let commandFile = require(`./명령어파일/${command}.js`); //명령어 호출
  commandFile.run(client, message, args); //명령어에 위에 선언한 3가지를 exports에 추가
} catch (err) {
console.log(err)
}
      });//모듈화를 위한 핸들러



client.on('ready', () => {


    client.user.setGame("실행중");//봇의 플레이중 설정 코드입니다.


console.log("STAYCUTE 팀에서 제공하는 Discord js 봇 제작 파일입니다.")
console.log(`${client.user.tag}으로 로그인 되었습니다`);
console.log(`봇 초대링크 : https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`)
console.log(`봇 주인 아이디 : ${config.ownerID}`)
  });

client.login(`${config.token}`);
