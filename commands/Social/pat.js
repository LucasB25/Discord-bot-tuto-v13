const Discord = require('discord.js');

module.exports.run = async (bot, message, args, cmd) => {
if (!message.channel.nsfw) return message.channel.send(`⚠️ **${message.author.username}** Veuillez basculer sur le canal **NSFW** pour utiliser cette commande.`)
    for (var i = 0; i < 1; i++) {
        const member = message.mentions.users.first();
        const hereMember = member
        
    if(!hereMember){
        let pat = new Discord.RichEmbed()
            .setDescription(`✋ **${message.author.username}**, fait une caresse à **${bot.user.username}**`)
            .setImage(pat_image[Math.floor(Math.random() * pat_image.length)])
            .setColor("ORANGE")
            .setFooter("Pat •")
            message.channel.send(pat)
        }
    else if(hereMember){
        let pat = new Discord.RichEmbed()
            .setDescription(`✋ **${member.username}**, fait une caresse à **${message.author.username}**`)
            .setImage(pat_image[Math.floor(Math.random() * pat_image.length)])
            .setColor("ORANGE")
            .setFooter("Pat •")
            message.channel.send(pat)
        }
            }
}  
const pat_image = [
"https://media2.giphy.com/media/L2z7dnOduqEow/200w.webp?cid=790b76115cf8c6c643704558771d2230&rid=200w.webp",
"https://media.tenor.com/images/69fb17b3eafe27df334f9f873473d531/tenor.gif",
"https://media.tenor.com/images/40f454db8d7ee7ccad8998479fbabe69/tenor.gif",
"https://media.tenor.com/images/89440731dab7b31691c9e035b86c5e62/tenor.gif",
"https://media.tenor.com/images/5f22f6770c7ca1071ba790e4ecca0db0/tenor.gif",
"https://media.tenor.com/images/a671268253717ff877474fd019ef73e9/tenor.gif",
"https://media.tenor.com/images/630d0f9438e28c12f7be66f410a5c927/tenor.gif",
"https://media.tenor.com/images/37e36267891a33899bb2d88232f9f637/tenor.gif",
"https://media.tenor.com/images/eeee18868076364f0c6251b8deb36b70/tenor.gif",
"https://media.tenor.com/images/4b8690bf5bc02cfc262e0b535659561f/tenor.gif",
"https://media.tenor.com/images/fcff52c5ce953eaffb54bcbbbbcc5d61/tenor.gif",
"https://media.tenor.com/images/a83353e24f64b554b989f629a045ad7d/tenor.gif",
"https://media.tenor.com/images/2b70ef4b8a2f0ac7ce79b86a9d709e5f/tenor.gif",
"https://media.tenor.com/images/ab98beae27c6c85d0876ca8d7178258f/tenor.gif",
"https://media.tenor.com/images/d88e63f03bfcdc37439d95425e10c3fa/tenor.gif",
"https://media.tenor.com/images/0b74962dcb9cf703e85dc06820dee73c/tenor.gif",
"https://media.tenor.com/images/e3ca060de5c38ab1cd92d3fe294f4166/tenor.gif",
"https://media.tenor.com/images/3739a516b2f49bdd4b4667f0db7d3a48/tenor.gif",
"https://media.tenor.com/images/0d4f94d11b300669d1d0ace43171d23e/tenor.gif",
"https://media.tenor.com/images/7cb5e535bcade89f2979cd3dd3bfde5a/tenor.gif",
"https://media.tenor.com/images/25cb7e8f9ef9a51f5eff4c1105f47e03/tenor.gif",
"https://media.tenor.com/images/7bf82c64188c5329fcf131e4a5e820ae/tenor.gif",
"https://media.tenor.com/images/10576f0486c5c4a28a96a6020f19103b/tenor.gif",
"https://media.tenor.com/images/3138ab028581605a5cc95adfd9d1d5f3/tenor.gif",
"https://media.tenor.com/images/66e5b820d78e3159e56b53d50e257ea7/tenor.gif",
"https://media.tenor.com/images/e2d576955781b9bc15274dab4db7bb85/tenor.gif",
"https://media.tenor.com/images/dfe3267cca9596be840fbf9d5e86b747/tenor.gif"
]

module.exports.help = {
    name: 'pat',
    aliases: []
};