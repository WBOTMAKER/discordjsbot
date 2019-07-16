module.exports.run = async (client, message, args) => {
  try {
    message.channel.send(`퐁!\n봇의 API 핑은${client.ping}입니다!`)
  } catch (e) {
    message.channel.send(`에러발생 \n\n \`\`\`js\n${e}\n\`\`\`\n\n`)
  }
}
