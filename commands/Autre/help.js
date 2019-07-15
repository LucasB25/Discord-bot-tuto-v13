const Discord = require('discord.js');

module.exports.run = async (bot, message, args, cmd) => {

let help = new Discord.RichEmbed()
.addField("📥 Rejoindre le serveur", "**>serv** pour rejoindre Delta - Infinity.")
.addField("🌡️ Ping ACENA", "**>ping** Vérifie la latence du BOT")
.addField("😛 Fun (1)", "**`>memes`**, ")
.addField("🔞 NSFW (5)", "**`fuck`**, **`boobs`**, **`nude`**, **`ass`**, **`4k`**, ")
.addField("😁 Social (6)", "**`>hug`**, **`>kiss`**, **`>cookie`**, **`>bang`**, **`>cry`**, ")
.setColor("ORANGE")

      message.react("🔘")
      message.author.createDM().then(channel => {
        channel.send(help)
      
    }
)}

module.exports.help = {
  name: 'help',
  aliases: []
};