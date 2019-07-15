const Discord = require('discord.js');

module.exports.run = async (bot, message, args, cmd) => {
  if (!message.channel.nsfw) return message.channel.send(`⚠️ **${message.author.username}** Veuillez êtres obligatoirement dans un canal **NSFW** pour utiliser cette commande.`)
    for (var i = 0; i < 1; i++) {
      let ass = new Discord.RichEmbed()
        .setDescription(`**${message.author.username}**, Voici ta demande.`)
        .setImage(ass_image[Math.floor(Math.random() * ass_image.length)])
        .setColor("ORANGE")
        .setFooter("Ass •")
      message.channel.send(ass)
      }
    }
const ass_image = [
"http://cdn1.bigassphotos.com/b9/2/b92530985.jpg",
"http://cdn1.bigassphotos.com/64/d/64d460893.jpg",
"http://cdn1.bigassphotos.com/e9/b/e9bad6211.jpg",
"http://cdn1.bigassphotos.com/e1/c/e1ca427da.jpg",
"http://cdn1.bigassphotos.com/0c/7/0c77a68a3.jpg",
"http://cdn1.bigassphotos.com/17/e/17e06e0e1.jpg",
"https://cdn.niceassphotos.com/2018-04-19/465676_11.jpg",
"https://cdn.niceassphotos.com/2017-11-15/478135_07.jpg",
"https://cdn.niceassphotos.com/2019-03-01/428441_09.jpg",
"http://content.hardxxxpics.com/2016-10-12/242205_07.jpg",
"http://content.hardxxxpics.com/2017-04-25/265261_15.jpg",
"http://cdn.hardxxxpics.com/2018-03-15/463709_03.jpg",
"http://content.hardxxxpics.com/2015-06-18/184062_03.jpg",
"http://content.hardxxxpics.com/2016-11-28/248297_08.jpg",
"http://cdn.hardxxxpics.com/2018-06-22/457242_11.jpg",
"http://content.hardxxxpics.com/2016-12-08/250042_02.jpg",
"http://content.hardxxxpics.com/2014-07-04/145171_04.jpg",
"http://content.hardxxxpics.com/2012-08-12/64988_10.jpg",
"http://cdn.hardxxxpics.com/2018-02-02/494193_12.jpg",
"http://content.hardxxxpics.com/2017-01-30/255952_06.jpg",
"http://content.hardxxxpics.com/2016-11-21/247156_04.jpg"
]
module.exports.help = {
  name: 'ass',
  aliases: []
};