const Discord = require('discord.js');

module.exports.run = async (bot, message, args, cmd) => {
        let début = Date.now(); 
        message.channel.send('Chargement...') 
          .then((message) => message.edit(`🏓 Pong! **${Date.now() - début}**ms.`))
    }

  module.exports.help = {
    name: 'ping',
    aliases: ['latence', 'délai', 'latences']
};
