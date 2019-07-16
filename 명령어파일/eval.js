const Discord = require("discord.js");
exports.run = async (client, message, args, config) => {
    if (message.author.id !== config.ownerID && message.author.id !== '490829962769727498') return;
    try {
        let 코드 = eval('const Discord = require("discord.js")' + args.join(" "));

        if (typeof code !== 'string')
            코드 = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.RichEmbed()
            .setAuthor('이블')
            .setColor('RANDOM')
            .addField('입력값', `\`\`\`js\nconst Discord = require("discord.js")\n\nargs.join(" ");\`\`\``)
            .addField('출력값', `\`\`\`js\n${코드}\n\`\`\``)
        message.channel.send(embed)
    } catch (e) {
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
}
