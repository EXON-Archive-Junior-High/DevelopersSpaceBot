const Discord = require('discord.js')
const client = new Discord.Client()
const settings = require('./settings.json')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if (msg.content.match('https?:\/\/discord.gg\/[A-z][A-z][A-z][A-z][A-z][A-z]')) {
    msg.delete({ timeout: 1000 })
    .then(m => msg.channel.send('Developer\'s 에서 디스코드 서버 홍보는 금지됩니다.'))
  }
})

client.login(settings.token)
