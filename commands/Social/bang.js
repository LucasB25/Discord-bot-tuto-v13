const Discord = require('discord.js');

module.exports.run = async (bot, message, args, cmd) => {
if (!message.channel.nsfw) return message.channel.send(`⚠️ **${message.author.username}** Veuillez basculer sur le canal **NSFW** pour utiliser cette commande.`)
    for (var i = 0; i < 1; i++) {
        const member = message.mentions.users.first();
        const hereMember = member
        
    if(!hereMember){
        let bang = new Discord.RichEmbed()
            .setDescription(`💀 **${message.author.username}**, tire sur **${bot.user.username}**`)
            .setImage(bang_image[Math.floor(Math.random() * bang_image.length)])
            .setColor("ORANGE")
            .setFooter("Bang •")
            message.channel.send(bang)
        }
    else if(hereMember){
        let bang = new Discord.RichEmbed()
            .setDescription(`💀 **${message.author.username}**, tire sur **${member.username}**`)
            .setImage(bang_image[Math.floor(Math.random() * bang_image.length)])
            .setColor("ORANGE")
            .setFooter("Bang •")
            message.channel.send(bang)
        }
            }
}  
const bang_image = [
"https://media.giphy.com/media/4A9obSZc89oI0/giphy.gif",
"https://giant.gfycat.com/WavyReadyAlpinegoat.webm",
"https://giant.gfycat.com/WideSlightAzurevasesponge.webm",
"https://image.myanimelist.net/ui/OK6W_koKDTOqqqLDbIoPAmlnlbly1V9bdF--IUwVxwY",
"https://i.imgur.com/JVutfd2.gif",
"https://i.imgur.com/qQrbbKb.gif",
"https://i.gifer.com/DT0O.gif",
"https://cdn.weeb.sh/images/SkFub87DW.gif",
"https://cdn.weeb.sh/images/rJmPWI7wW.gif",
"https://cdn.weeb.sh/images/BkvjZI7PW.gif",
"https://cdn.weeb.sh/images/ryqfNEtj-.gif",
"https://cdn.weeb.sh/images/HyZiWLmvb.gif",
"https://cdn.weeb.sh/images/BJADXEtoZ.gif",
"https://cdn.weeb.sh/images/Sys5bLQwW.gif",
"https://cdn.weeb.sh/images/Sk3v-LmD-.gif",
"https://cdn.weeb.sh/images/SkiIVEKsW.gif",
"https://cdn.weeb.sh/images/r1Fa7EFsW.gif",
"https://cdn.weeb.sh/images/BkWIXNFo-.gif",
"https://cdn.weeb.sh/images/BJDJ4VFoZ.gif",
"https://cdn.weeb.sh/images/BkJgooi3Z.gif",
"https://cdn.weeb.sh/images/S1-RQVFjZ.gif",
"https://cdn.weeb.sh/images/BkzSQVFoZ.gif",
"https://cdn.weeb.sh/images/SyunmEYiW.gif"
]

module.exports.help = {
    name: 'bang',
    aliases: []
};