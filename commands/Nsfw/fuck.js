const Discord = require('discord.js');

module.exports.run = async (bot, message, args, cmd) => {
  if (!message.channel.nsfw) return message.channel.send(`⚠️ **${message.author.username}** Veuillez êtres obligatoirement dans un canal **NSFW** pour utiliser cette commande.`)
    for (var i = 0; i < 1; i++) {
      const member = message.mentions.users.first();
      const hereMember = member
    
  if(!hereMember){
    let fuck = new Discord.RichEmbed()
      .setDescription(`👉👌 **${message.author.username}**, vous avez été baisée par **${bot.user.username}**`)//
      .setImage(fuck_image[Math.floor(Math.random() * fuck_image.length)])
      .setColor("ORANGE")
      .setFooter("Fuck •")
        message.channel.send(fuck)
    }
    else if(hereMember){
      let fuck = new Discord.RichEmbed()
        .setDescription(`👉👌 **${member.username}**, vous avez été baisée par **${message.author.username}**`)
        .setImage(fuck_image[Math.floor(Math.random() * fuck_image.length)])
        .setColor("ORANGE")
        .setFooter("Fuck •")
        message.channel.send(fuck)
      }
        }
      }
const fuck_image = [
"https://www.rencontresanslendemain.net/wp-content/uploads/2017/10/gifs-anim%C3%A9s-levrette.gif",
"https://www.rencontresanslendemain.net/wp-content/uploads/2017/10/gif-levrette.gif",
"https://www.rencontresanslendemain.net/wp-content/uploads/2017/10/position-du-kamasutra-levrette.gif",
"https://www.rencontresanslendemain.net/wp-content/uploads/2018/01/gif-de-levrette.gif",
"https://www.rencontresanslendemain.net/wp-content/uploads/2018/01/kamasutra-la-levrette.gif",
"https://www.rencontresanslendemain.net/wp-content/uploads/2017/10/gif-anim%C3%A9-levrette-en-couple.gif",
"https://www.rencontresanslendemain.net/wp-content/uploads/2018/01/levrette-debout.gif",
"https://www.rencontresanslendemain.net/wp-content/uploads/2018/01/gif-porno-levrettte.gif",
"https://www.rencontresanslendemain.net/wp-content/uploads/2018/01/levrette-deux-femmes.gif",
"https://www.rencontresanslendemain.net/wp-content/uploads/2018/01/levrette-plaisir.gif",
"https://www.rencontresanslendemain.net/wp-content/uploads/2018/01/gif-fellation-69.gif",
"https://www.rencontresanslendemain.net/wp-content/uploads/2018/01/animation-sodomie.gif",
"https://www.rencontresanslendemain.net/wp-content/uploads/2018/01/sodomie.gif",
"https://www.rencontresanslendemain.net/wp-content/uploads/2018/01/sexe-anal-sodomie.gif",
"https://www.rencontresanslendemain.net/wp-content/uploads/2018/01/sodomie-deux-femmes.gif",
"https://www.rencontresanslendemain.net/wp-content/uploads/2018/01/pratiquer-la-sodomie.gif",
"https://www.rencontresanslendemain.net/wp-content/uploads/2018/01/gif-sodomie-intense.gif",
"https://www.rencontresanslendemain.net/wp-content/uploads/2018/01/levrette-intense.gif",
"https://www.rencontresanslendemain.net/wp-content/uploads/2017/11/madison-ivy-scene.gif",
"https://www.rencontresanslendemain.net/wp-content/uploads/2018/01/gif-actrice-x.gif",
"https://www.rencontresanslendemain.net/wp-content/uploads/2018/01/animation-gif-actrices-x.gif",
"https://www.rencontresanslendemain.net/wp-content/uploads/2018/01/gif-anime-position.gif",
"https://www.rencontresanslendemain.net/wp-content/uploads/2018/01/positions-sexuelles.gif",
"https://www.rencontresanslendemain.net/wp-content/uploads/2018/01/scene-x-gif.gif",
"https://www.rencontresanslendemain.net/wp-content/uploads/2018/01/position-x.gif",
"https://www.rencontresanslendemain.net/wp-content/uploads/2017/10/gifs-tori-black.gif",
"https://www.rencontresanslendemain.net/wp-content/uploads/2017/10/tori-black-actrice-x.gif",
"https://www.rencontresanslendemain.net/wp-content/uploads/2017/10/scene-avec-tori-black.gif"
]
 module.exports.help = {
  name: 'fuck',
  aliases: []
};