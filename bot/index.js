'use strict';

require('dotenv').config();

const { Client } = require('discord.js');

const client = new Client();
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', async (message) => {
  if(!message.author.bot) {
    const voiceChannel = client.channels.cache.find((channel) => channel.name === process.env.VOICE_CHANNEL);
    const connection = await voiceChannel.join();
    // console.log(connection);
    message.reply('hello');
  }
})

client.login(process.env.DISCORD_BOT_TOKEN);
