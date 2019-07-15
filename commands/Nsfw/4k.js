const Discord = require('discord.js');

module.exports.run = async (bot, message, args, cmd) => {
  if (!message.channel.nsfw) return message.channel.send(`⚠️ **${message.author.username}** Veuillez êtres obligatoirement dans un canal **NSFW** pour utiliser cette commande.`)
    for (var i = 0; i < 1; i++) {
      let kk = new Discord.RichEmbed()
        .setDescription(`**${message.author.username}**, Voici ta demande.`)
        .setImage(kk_image[Math.floor(Math.random() * kk_image.length)])
        .setColor("ORANGE")
        .setFooter("4K •")
        message.channel.send(kk)
      }
  }
const kk_image = [
"https://img.pornpics.com/2016-01-17/334682_09.jpg",
"https://img.pornpics.com/2014-12-03/285534_09.jpg",
"https://img.pornpics.com/2015-04-01/306543_05.jpg",
"https://img.pornpics.com/2014-12-03/285532_13.jpg",
"https://img.pornpics.com/2015-05-11/314224_05.jpg",
"https://img.pornpics.com/2015-04-01/305851_03.jpg",
"https://img.pornpics.com/2014-12-04/285542_11.jpg",
"https://img.pornpics.com/2015-04-01/305368_09.jpg",
"https://img.pornpics.com/2014-12-04/285537_01.jpg",
"https://img.pornpics.com/2015-05-11/314226_10.jpg",
"https://img.pornpics.com/2015-07-16/318112_09.jpg",
"https://img.pornpics.com/2014-12-04/285540_05.jpg",
"https://img.pornpics.com/2015-01-30/289064_06.jpg",
"https://img.pornpics.com/2015-11-20/328133_14.jpg",
"https://img.pornpics.com/2015-04-01/306428_01.jpg",
"https://img.pornpics.com/2014-12-04/285539_01.jpg",
"https://img.pornpics.com/2015-01-30/289065_01.jpg",
"https://img.pornpics.com/2015-04-03/312158_14.jpg",
"https://img.pornpics.com/2015-01-30/289064_06.jpg",
"https://img.pornpics.com/2015-09-08/321550_05.jpg",
"https://cdnwg.youx.xxx/galleries/gthumb/3/672/3672393_b3fc47a_320x_.jpg",
"http://cdn.hqsluts.com/18p416493",
"http://cdn.hqsluts.com/16p414153",
"http://cdn.hqsluts.com/8p413125",
"http://cdn.hqsluts.com/16p412186",
"http://cdn.hqsluts.com/7p404564",
"http://cdn.hqsluts.com/19p398171",
"http://cdn.hqsluts.com/24p397385",
"http://cdn.hqsluts.com/17p397307",
"http://cdn.hqsluts.com/22p397484",
"http://cdn.hqsluts.com/9p402209",
"http://cdn.hqsluts.com/13p411541"
]
module.exports.help = {
  name: '4k',
  aliases: []
};