/*
Old Version 1 Codes.
The Newest Version Differs Alot as Compared to Version1.
*/

const seeIT = ('THESE ARE V1 CODES OF CATCHER, CURRENT CODES DIFFERS ALOT AND NEW SYSTEMS IN CURRENT VERSIONS!')



const Discord = require('discord.js');
const client = new Discord.Client();
const config = './config.json';
const prefix = '+';
//ai= artificial intelligence
const ai = './ai.js')
//ai.js contains how to identify the pokemon: angel,area,direction.
console.log("ready to catch pokes")
console.log(".");

client.on('message', message => {
  switch(message.author.bot) {
    case false:
      if (message.content.indexOf(prefix) !== 0) return;

      const args = message.content
        .slice(prefix.length)
        .trim()
        .split(/ +/g);
      const command = args.shift().toLowerCase();

      if (command === 'ping') {
        message.channel.send('Pong!');
      } else if (command === 'blah') {
        message.channel.send('Meh.');
      } else if (command === 'say') {
        message.channel.send('saying your command');
        let text = args.join(' ');
        message.delete();
        message.channel.send(text);
      }
      break;
    case true:
      if (message.author.id == '716390085896962058') {
      //poketwo id
        message.embeds.forEach(function(e) {
          console.log(e);
          if (e.title && e.title.startsWith('A wild')) {
            message.channel.send('p!catch ${ai.name.pokemon}');				
          }
        });
      }
      break;
  }
	
});
client.login('Your-token');
