const Discord = require('discord.js');

module.exports.run = async (bot, message, args, cmd) => {
  if (!message.channel.nsfw) return message.channel.send(`⚠️ **${message.author.username}** Veuillez êtres obligatoirement dans un canal **NSFW** pour utiliser cette commande.`)
    for (var i = 0; i < 1; i++) {
      let boobs = new Discord.RichEmbed()
        .setDescription(`**${message.author.username}**, Voici ta demande.`)
        .setImage(boobs_image[Math.floor(Math.random() * boobs_image.length)])
        .setColor("ORANGE")
        .setFooter("Boobs •")
        message.channel.send(boobs)
      }
  }
const boobs_image = [
"http://content.nudesexporn.com/2016-05-29/226411_06.jpg",
"http://content.nudesexporn.com/2017-11-07/284794_04.jpg",
"http://content.nudesexporn.com/2011-07-18/19332_05.jpg",
"http://cdn.nudesexporn.com/2019-05-15/605000_09.jpg",
"https://img.pornpics.com/2018-02-23/505944_03.jpg",
"https://img.pornpics.com/2018-01-13/491104_03.jpg",
"https://s.bigboobssexy.com/22/659.jpg",
"https://s.bigboobssexy.com/22/370.jpg",
"http://elle.bz/wp-content/uploads/tumblr_lt6vejeQIa1qb8izzo1_500-210x315.jpg",
"http://elle.bz/wp-content/uploads/tumblr_moke5rWkNv1qb8izzo1_500-210x315.jpg",
"http://elle.bz/wp-content/uploads/tumblr_mmzn1kzGnr1rchrfco1_500-210x321.jpg",
"http://elle.bz/wp-content/uploads/3989-c093bb-467-7001-210x314.jpg",
"http://elle.bz/wp-content/uploads/IMG_2380-210x280.jpg",
"http://www.wallsexy.net/wp-content/uploads/2016/02/jolie-femme-et-gros-seins-17-682x1024.jpg"
]
module.exports.help = {
  name: 'boobs',
  aliases: []
};