const Discord = require('discord.js');

module.exports.run = async (bot, message, args, cmd) => {
        let début = Date.now(); 
        message.channel.send('Ping') 
          .then((message) => message.edit(`🏓 Pong! **${Date.now() - début}**ms.`))
    }

  module.exports.help = {
    name: 'ping',
    aliases: []
};