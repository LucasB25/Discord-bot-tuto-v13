const Discord = require('discord.js');

module.exports.run = async (bot, message, args, cmd) => {
if (!message.channel.nsfw) return message.channel.send(`⚠️ **${message.author.username}** Veuillez basculer sur le canal **NSFW** pour utiliser cette commande.`)
  for (var i = 0; i < 1; i++) {
    const member = message.mentions.users.first();
    const hereMember = member
    
  if(!hereMember){
    let kiss = new Discord.RichEmbed()
      .setDescription(`😘 **${message.author.username}**, vous avez reçu un bisou de **${bot.user.username}**`)
      .setImage(kiss_image[Math.floor(Math.random() * kiss_image.length)])
      .setColor("ORANGE")
      .setFooter("Kiss •")
       message.channel.send(kiss)
  }
  else if(hereMember){
    let kiss = new Discord.RichEmbed()
      .setDescription(`😘 **${member.username}**, vous avez reçu un bisou de **${message.author.username}**`)
      .setImage(kiss_image[Math.floor(Math.random() * kiss_image.length)])
      .setColor("ORANGE")
      .setFooter("Kiss •")
      message.channel.send(kiss)
    }
      }
    }
const kiss_image = [
"https://media.giphy.com/media/qcV09C9DfMIiA/giphy.gif",
"https://media.giphy.com/media/KH1CTZtw1iP3W/giphy.gif",
"https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif",
"https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif",
"https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif",
"https://media.giphy.com/media/JynbO9pnGxPrO/giphy.gif",
"https://media.giphy.com/media/Z2sivLSfN8FH2/giphy.gif",
"https://media.giphy.com/media/ZRSGWtBJG4Tza/giphy.gif",
"https://media.giphy.com/media/HwHb7PhLmwTg4/giphy.gif",
"https://media.giphy.com/media/o7mFRYHK5JuUg/giphy.gif",
"https://media.giphy.com/media/75toITBY1d24o/giphy.gif",
"https://media.giphy.com/media/7z1xs4Fl9Kb8A/giphy.gif",
"https://media.giphy.com/media/zkppEMFvRX5FC/giphy.gif",
"https://media.giphy.com/media/w62BhkdkxaCwE/giphy.gif",
"https://media.giphy.com/media/QGc8RgRvMonFm/giphy.gif",
"https://media.giphy.com/media/KmeIYo9IGBoGY/giphy.gif",
"https://media.giphy.com/media/cUemi8qSpUSeQ/giphy.gif",
"https://media.giphy.com/media/FqBTvSNjNzeZG/giphy.gif",
"https://media.giphy.com/media/l3NSaLw58Bx16/giphy.gif",
"https://media.giphy.com/media/KH1CTZtw1iP3W/giphy.gif",
"https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif",
"https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif",
"https://media.giphy.com/media/7QkZap9kQ1iy4/giphy.gif",
"https://media.giphy.com/media/oWGqQWk8kOpNe/giphy.gif",
"https://media.giphy.com/media/kdLyU5mq9mGfm/giphy.gif",
"https://media.giphy.com/media/NYywCf7y29QhW/giphy.gif",
"https://media.giphy.com/media/fHtb1JPbfph72/giphy.gif",
"https://media.giphy.com/media/kU586ictpGb0Q/giphy.gif",
"https://media.giphy.com/media/Gj8bn4pgTocog/giphy.gif"
]

module.exports.help = {
    name: 'kiss',
    aliases: []
};