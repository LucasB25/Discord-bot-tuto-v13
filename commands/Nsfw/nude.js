const Discord = require('discord.js');

module.exports.run = async (bot, message, args, cmd) => {
  if (!message.channel.nsfw) return message.channel.send(`⚠️ **${message.author.username}** Veuillez basculer sur un canal **NSFW** pour utiliser cette commande.`)
    for (var i = 0; i < 1; i++) {
      let nude = new Discord.RichEmbed()
        .setDescription(`**${message.author.username}**, Voici ta demande.`)
        .setImage(nude_image[Math.floor(Math.random() * nude_image.length)])
        .setColor("ORANGE")
        .setFooter("Nude •")
        message.channel.send(nude)
      }
  }
const nude_image = [
"http://cdn.nudesexporn.com/2017-06-30/452008_14.jpg",
"http://cdn.nudesexporn.com/2018-11-14/549933_09.jpg",
"http://cdn.nudesexporn.com/2018-01-08/489995_14.jpg",
"http://cdn.nudesexporn.com/2015-12-07/323648_06.jpg",
"http://content.nudesexporn.com/2016-12-20/251325_03.jpg",
"http://cdn.hotnakedgirls.net/2017-11-11/483619_13.jpg",
"http://cdn.hotnakedgirls.net/2017-02-09/399189_11.jpg",
"http://cdn.hotnakedgirls.net/2017-02-28/390006_11.jpg",
"http://cdn.hotnakedgirls.net/2017-02-05/398764_01.jpg",
"http://cdn.hotnakedgirls.net/2018-09-27/561446_14.jpg",
"http://cdn.hotnakedgirls.net/2016-12-18/384339_12.jpg",
"http://cdn1.teennudegirls.com/92/8/9289a9362.jpg",
"http://cdn1.teennudegirls.com/b6/1/b61bc9810.jpg",
"http://cdn1.teennudegirls.com/d5/d/d5daa513d.jpg",
"http://cdn1.teennudegirls.com/e5/d/e5dae5ffe.jpg",
"http://cdn1.teennudegirls.com/60/b/60b560274.jpg",
"http://cdn1.teennudegirls.com/e7/3/e730b5876.jpg",
"http://cdn1.teennudegirls.com/4e/d/4ed7882bd.jpg",
"http://cdn1.teennudegirls.com/5d/c/5dc7ecb2d.jpg",
"http://cdn1.teennudegirls.com/f3/5/f359935a4.jpg",
"http://cdn1.teennudegirls.com/15/e/15ea72d60.jpg",
"http://cdn1.teennudegirls.com/8d/0/8d0b23a78.jpg",
"http://cdn1.teennudegirls.com/6f/9/6f989794d.jpg",
"http://cdn1.teennudegirls.com/94/e/94e3bfc3c.jpg"
]
module.exports.help = {
  name: 'nude',
  aliases: []
};