'use strict';

require('dotenv').config();

const { Client } = require('discord.js');
const gtts = require('gtts');

const client = new Client();
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', async (message) => {
  if(message.author.username === 'Video Gabsi') {
    if(message.embeds.length > 0){
      const audio = new gtts(`Gabsi schaut: ${message.embeds[0].title}`, 'en');
      audio.save('./bot/sound/message.mp3', function (err, result) {
        if(err) { throw new Error(err) }
        console.log('Success! Open file message.mp3 to hear result.');
      });
      
      const voiceChannel = client.channels.cache.find((channel) => channel.name === process.env.VOICE_CHANNEL);
      const connection = await voiceChannel.join();
      const dispatcher = connection.play('./bot/sound/message.mp3');
      
      // todo: use stream instead of file
      // const dispatcher = connection.play(audio.stream().pipe());
      
      dispatcher.on('finish', () => {
        console.log('Finished playing!');
        dispatcher.destroy(); // end the stream
        voiceChannel.leave();
      });
    }
  }
})

client.login(process.env.DISCORD_BOT_TOKEN);
