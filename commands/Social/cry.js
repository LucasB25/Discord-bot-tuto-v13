const Discord = require('discord.js');

module.exports.run = async (bot, message, args, cmd) => {
if (!message.channel.nsfw) return message.channel.send(`⚠️ **${message.author.username}** Veuillez basculer sur le canal **NSFW** pour utiliser cette commande.`)
    for (var i = 0; i < 1; i++) {
        let cry = new Discord.RichEmbed()
            .setDescription(`😭 **${message.author.username}**, Et très triste.`)
            .setImage(cry_image[Math.floor(Math.random() * cry_image.length)])
            .setColor("ORANGE")
            .setFooter("Cry •")
            message.channel.send(cry)
        }
    }
const cry_image = [
"https://media.tenor.com/images/14faea11230861e5f61bb4d90ac9e61d/tenor.gif",
"https://media.tenor.com/images/d571f86a5adcb4545444e9d1dc4638f9/tenor.gif",
"https://media.tenor.com/images/82c7523a9b203fc4e938d2d027540dea/tenor.gif",
"https://media.tenor.com/images/5051bfad4b32bf2b33b87afc7c4b95e7/tenor.gif",
"https://media.tenor.com/images/d4d7e76d41473e8152732d87883bd09f/tenor.gif",
"https://media.tenor.com/images/8570aadaa01ebb4773d28bd412185e70/tenor.gif",
"https://media.tenor.com/images/d53febdeb2485fd7d6a966f5e755f980/tenor.gif",
"https://media.tenor.com/images/56301bf106855a40c17c7882fc996387/tenor.gif",
"https://media.tenor.com/images/d80af5d567a3059704ca715c050955f8/tenor.gif",
"https://media.tenor.com/images/b49c856fb1fb0616902e72857040c9f2/tenor.gif",
"https://media.tenor.com/images/1d5ccbe6225220641021327588fc38b1/tenor.gif",
"https://media.tenor.com/images/e1b82f96de2f497da537316ed1a1943b/tenor.gif",
"https://media.tenor.com/images/17d19449fa7468adc3f22634027986dc/tenor.gif",
"https://media.tenor.com/images/71f3f9f7f1918b5da7ef77bb0b47794d/tenor.gif",
"https://media.tenor.com/images/7282d6f67e894c13514f485f258a9186/tenor.gif",
"https://media.tenor.com/images/0a3ff96d18c26d99e010960b82b4fdf7/tenor.gif",
"https://media.tenor.com/images/79373ae2d2db04d1f1e51c3cc7997210/tenor.gif",
"https://media.tenor.com/images/a6b68e6bb63f17f98f5f7065d984b832/tenor.gif",
"https://media.tenor.com/images/b6dbbc5f2fde987a8b21a57bf359ba79/tenor.gif",
"https://media.tenor.com/images/740a1651659a726aa6dcfcf855a57148/tenor.gif",
"https://media.tenor.com/images/df1bb27e70ad82b6153d5c5039337f78/tenor.gif",
"https://media.tenor.com/images/3e9b8a406cf1793d157e1b5cc4c6da7b/tenor.gif",
"https://media.tenor.com/images/f2fbd83febc384168210e1939f868657/tenor.gif"
]

module.exports.help = {
    name: 'cry',
    aliases: []
};