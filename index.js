require('dotenv').config()
const Discord = require("discord.js");
const config = require('./config')

const client = new Discord.Client();

client.on('message', (message) => {
  const emoji = message.guild.emojis.cache
  const randomIndex = Math.floor(Math.random() * emoji.size)
  let count = 0
  for (let [_, value] of emoji) {
    if (randomIndex === count) {
      return message.react(value.id)
    }
    count++
  }
})

client.login(config.BOT_TOKEN);

client.once('ready', () => {
  console.log('bot ready')
})