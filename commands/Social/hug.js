const Discord = require('discord.js');

module.exports.run = async (bot, message, args, cmd) => {
if (!message.channel.nsfw) return message.channel.send(`⚠️ **${message.author.username}** Veuillez basculer sur le canal **NSFW** pour utiliser cette commande.`)
    for (var i = 0; i < 1; i++) {
        const member = message.mentions.users.first();
        const hereMember = member
        
    if(!hereMember){
        let hug = new Discord.RichEmbed()
            .setDescription(`🤗 **${message.author.username}**, vous avez reçu un câlin de **${bot.user.username}**`)
            .setImage(hug_image[Math.floor(Math.random() * hug_image.length)])
            .setColor("ORANGE")
            .setFooter("Hug •")
            message.channel.send(hug)
        }
    else if(hereMember){
        let hug = new Discord.RichEmbed()
            .setDescription(`🤗 **${member.username}**, vous avez reçu un câlin de **${message.author.username}**`)
            .setImage(hug_image[Math.floor(Math.random() * hug_image.length)])
            .setColor("ORANGE")
            .setFooter("Hug •")
            message.channel.send(hug)
        }
            }
}  
const hug_image = [
"https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif",
"https://media.giphy.com/media/143v0Z4767T15e/giphy.gif",
"https://media.giphy.com/media/IRUb7GTCaPU8E/giphy.gif",
"https://media.giphy.com/media/DjczAlIcyK1Co/giphy.gif",
"https://media.giphy.com/media/VGACXbkf0AeGs/giphy.gif",
"https://media.giphy.com/media/14aBJO7py75MD6/giphy.gif",
"https://media.giphy.com/media/KskADWInrpVW8/giphy.gif",
"https://media.giphy.com/media/svXXBgduBsJ1u/giphy.gif",
"https://media.giphy.com/media/ZQN9jsRWp1M76/giphy.gif",
"https://media.giphy.com/media/lrr9rHuoJOE0w/giphy.gif",
"https://media.giphy.com/media/qscdhWs5o3yb6/giphy.gif",
"https://media.giphy.com/media/HaC1WdpkL3W00/giphy.gif",
"https://media.giphy.com/media/5eyhBKLvYhafu/giphy.gif",
"https://media.giphy.com/media/sUIZWMnfd4Mb6/giphy.gif",
"https://media.giphy.com/media/C4gbG94zAjyYE/giphy.gif",
"https://media.giphy.com/media/PS14vDjffoOI0/giphy.gif",
"https://media.giphy.com/media/TfhRnTpPrhzAQ/giphy.gif",
"https://media.giphy.com/media/p6ER3TdzHy7Zu/giphy.gif",
"https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif",
"https://media.giphy.com/media/9kDaIQGQ23irC/giphy.gif",
"https://media.giphy.com/media/fLv2F5rMY2YWk/giphy.gif",
"https://media.giphy.com/media/QpAkCCGu2saR2/giphy.gif",
"https://media.giphy.com/media/nUz7d1sUppGta/giphy.gif",
"https://media.giphy.com/media/3og0ILx8f9adnoQRos/giphy.gif",
"https://media.giphy.com/media/d4msnYTCHWvni/giphy.gif",
"https://media.giphy.com/media/PHZ7v9tfQu0o0/giphy.gif",
"https://media.giphy.com/media/11WhdeCxSM5lyo/giphy.gif",
"https://media.giphy.com/media/BXrwTdoho6hkQ/giphy.gif",
"https://media.giphy.com/media/QFPoctlgZ5s0E/giphy.gif",
"https://media.giphy.com/media/5eyhBKLvYhafu/giphy.gif",
"https://media.giphy.com/media/JLovyTOWK4cuc/giphy.gif"
]

module.exports.help = {
    name: 'hug',
    aliases: []
};