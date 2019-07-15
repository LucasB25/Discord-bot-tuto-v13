const Discord = require('discord.js');

module.exports.run = async (bot, message, args, cmd) => {
if (!message.channel.nsfw) return message.channel.send(`⚠️ **${message.author.username}** Veuillez basculer sur le canal **NSFW** pour utiliser cette commande.`)
  for (var i = 0; i < 1; i++) {
    const member = message.mentions.users.first();
    const hereMember = member
    
  if(!hereMember){
    let handholding = new Discord.RichEmbed()
      .setDescription(`🤝 **${message.author.username}**, tient la main de **${bot.user.username}**`)
      .setImage(handholding_image[Math.floor(Math.random() * handholding_image.length)])
      .setColor("ORANGE")
      .setFooter("Handholding •")
       message.channel.send(handholding)
  }
  else if(hereMember){
    let handholding = new Discord.RichEmbed()
      .setDescription(`🤝 **${member.username}**, tient la main de **${message.author.username}**`)
      .setImage(handholding_image[Math.floor(Math.random() * handholding_image.length)])
      .setColor("ORANGE")
      .setFooter("Handholding •")
      message.channel.send(handholdings)
    }
      }
    }
const handholding_image = [
"https://media.tenor.com/images/d0a7137fd55a115aa1479ca54e038023/tenor.gif",
"https://media.tenor.com/images/92bcb7cbc496d43eb0a7735f2d112f69/tenor.gif",
"https://media.tenor.com/images/bbcd401ee8baaa7f447623577cdae329/tenor.gif",
"https://media.tenor.com/images/f5e5b309927a9f9e9f9199afb78164fe/tenor.gif",
"https://media.tenor.com/images/8d44ce17774d4d727df9c04b0b65c7cb/tenor.gif",
"https://media.tenor.com/images/42395d0194ca506beee187d52f77719d/tenor.gif",
"https://66.media.tumblr.com/8edd76058bd0fe049c11405286a4131a/tumblr_ozc5imGu1s1sy5k7wo1_500.gif",
"https://66.media.tumblr.com/69df3f23ebf231336ef66bca4b57b086/tumblr_p3y8vmIlll1vptudso2_500.gif",
"https://thumbs.gfycat.com/AggressiveSolidCobra.webp",
"https://thumbs.gfycat.com/LastingUnlawfulHawaiianmonkseal.webp",
"https://thumbs.gfycat.com/RevolvingUnnaturalBadger.webp",
"https://thumbs.gfycat.com/UnconsciousFailingCrab.webp",
"https://i.kym-cdn.com/photos/images/newsfeed/000/932/366/0a7.gif",
"https://media0.giphy.com/media/11DxcyjrKPAuVG/200w.webp?cid=790b76115cf9f03e2f43366f49aa95c9&rid=200w.webp",
"https://cdn.weeb.sh/images/HkVFea9ZM.gif"
]

module.exports.help = {
    name: 'handholding',
    aliases: []
};