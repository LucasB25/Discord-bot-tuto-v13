const Discord = require('discord.js');

module.exports.run = async (bot, message, args, cmd) => {
if (!message.channel.nsfw) return message.channel.send(`⚠️ **${message.author.username}** Veuillez basculer sur le canal **NSFW** pour utiliser cette commande.`)
    for (var i = 0; i < 1; i++) {
        let meme = new Discord.RichEmbed()
            .setDescription(`**${message.author.username}**, voici ton meme.`)
            .setImage(meme_image[Math.floor(Math.random() * meme_image.length)])
            .setColor("ORANGE")
            .setFooter("Meme •")
            message.channel.send(meme)
            }
        }
    
const meme_image = [
"https://media.giphy.com/media/koUtwnvA3TY7C/giphy.gif",
"https://media.giphy.com/media/e5EcjjJx3dCFi/giphy.gif",
"https://media.giphy.com/media/xUPGcDXpSOMH475JQI/giphy.gif",
"https://media.giphy.com/media/l4Jz3a8jO92crUlWM/giphy.gif",
"https://media.giphy.com/media/LTpmRMNSmZgIw/giphy.gif",
"https://media.giphy.com/media/xT0BKiaM2VGJ553P9K/giphy.gif",
"https://media.giphy.com/media/eoxomXXVL2S0E/giphy.gif",
"https://media.giphy.com/media/3o6EhRniUNvTTDDDMI/giphy.gif",
"https://media.giphy.com/media/VzjC1xn7ZY0Qo/giphy.gif",
"https://media.giphy.com/media/ydBBZCByqY9xu/giphy.gif",
"https://media.giphy.com/media/SwsWwnmgGVljW/giphy.gif",
"https://media.giphy.com/media/2ZLGRRdHG0k2Q/giphy.gif",
"https://media.giphy.com/media/vaL4EyvOpFnIQ/giphy.gif",
"https://media.giphy.com/media/sS3TxFC5v1jXy/giphy.gif",
"https://media.giphy.com/media/OaKdgbwQS2I00/giphy.gif",
"https://media.giphy.com/media/k6Wm3KbGfY7rk6PK4L/giphy.gif",
"https://media.giphy.com/media/ASafWlXCwa8Qo/giphy.gif",
"https://media.giphy.com/media/eePSFNBFv2W9owZ4Sh/giphy.gif",
"https://media.giphy.com/media/c8NspwwVxwAiA/giphy.gif",
"https://media.giphy.com/media/VGuAZNdkPUpEY/giphy.gif",
"https://media.giphy.com/media/f08cafueoCoRW/giphy.gif",
"https://media.giphy.com/media/Del6oPwrO52Ra/giphy.gif",
"https://media.giphy.com/media/Del6oPwrO52Ra/giphy.gif",
"https://media.giphy.com/media/wf6E1XhlMTHc4/giphy.gif",
"https://media.giphy.com/media/O9BPkYr89lK2A/giphy.gif",
"https://media.giphy.com/media/qZxwdQBgwFrj2/giphy.gif",
"https://media.giphy.com/media/RRgUtSsRvEJlC/giphy.gif",
"https://media.giphy.com/media/FFwmZf7Soj2LK/giphy.gif",
"https://media.giphy.com/media/6yxJcHDURaF3iZ5xzE/giphy.gif",
"https://media.giphy.com/media/hZCvJ06M8gAAU/giphy.gif"
]    

module.exports.help = {
    name: 'meme',
    aliases: []
};