const Discord = require('discord.js');

module.exports.run = async (bot, message, args, cmd) => {
if (!message.channel.nsfw) return message.channel.send(`⚠️ **${message.author.username}** Veuillez basculer sur le canal **NSFW** pour utiliser cette commande.`)
  for (var i = 0; i < 1; i++) {
    const member = message.mentions.users.first();
    const hereMember = member
    
  if(!hereMember){
    let cookie = new Discord.RichEmbed()
      .setDescription(`🍪 **${message.author.username}**, donne un cookie à **${bot.user.username}**`)
      .setImage(cookie_image[Math.floor(Math.random() * cookie_image.length)])
      .setColor("ORANGE")
      .setFooter("Cookie •")
       message.channel.send(cookie)
  }
  else if(hereMember){
    let cookie = new Discord.RichEmbed()
      .setDescription(`🍪 **${member.username}**, donne un cookie à **${message.author.username}**`)
      .setImage(cookie_image[Math.floor(Math.random() * cookie_image.length)])
      .setColor("ORANGE")
      .setFooter("Cookie •")
      message.channel.send(cookie)
    }
      }
    }
const cookie_image = [
"https://media0.giphy.com/media/1ngQorBCDcUFy/200w.webp?cid=790b76115cf92f5f4e382f6732007158&rid=200w.webp",
"https://media2.giphy.com/media/nAErqE3k2C3fy/200w.webp?cid=790b76115cf92f5f4e382f6732007158&rid=200w.webp",
"https://media3.giphy.com/media/nNrjb4sNrZzMI/200w.webp?cid=790b76115cf92f7454334c624def50bc&rid=200w.webp",
"https://media1.giphy.com/media/oh2euZp5xkglq/200w.webp?cid=790b76115cf92f7454334c624def50bc&rid=200w.webp",
"https://media1.giphy.com/media/xT0xeMA62E1XIlup68/200w.webp?cid=790b76115cf92f85347348305187e90a&rid=200w.webp",
"https://media0.giphy.com/media/3rtRFkaPThKbukxdJR/200w.webp?cid=790b76115cf92f9c715a30503647074d&rid=200w.webp",
"https://media2.giphy.com/media/xT9KVrKucCn7SlSUx2/200.webp?cid=790b76115cf92f7454334c624def50bc&rid=200.webp",
"https://media2.giphy.com/media/l0MYAuUkuPPjrbDBS/200.webp?cid=790b76115cf92f85347348305187e90a&rid=200.webp",
"https://media1.giphy.com/media/R52934IAVt4jK/200.webp?cid=790b76115cf932aa6663443745fc97f1&rid=200.webp",
"https://media1.giphy.com/media/l3vRdAaZ5LqQ3cE0g/200.webp?cid=790b76115cf932aa6663443745fc97f1&rid=200.webp",
"https://media3.giphy.com/media/IcbC9NbXRtVII/200w.webp?cid=790b76115cf932c9486f753151429135&rid=200w.webp",
"https://media3.giphy.com/media/l0K4hBbFA3XBcD1V6/200.webp?cid=790b76115cf9330f4b6e415536ab0c36&rid=200.webp",
"https://media2.giphy.com/media/1iXObbKyXYlpe/200.webp?cid=790b76115cf9331e57766f65324bf770&rid=200.webp",
"https://media3.giphy.com/media/3ov9jHWkR2rlEseMBW/200w.webp?cid=790b76115cf933316d574e456b092886&rid=200w.webp",
"https://media0.giphy.com/media/6u1AQ8W36K17W/giphy.webp?cid=790b76115cf933af6565467732a0cf1f&rid=giphy.webp",
"https://media0.giphy.com/media/zheUuPpP8M4PS/200.webp?cid=790b76115cf933de474b6356327589ba&rid=200.webp"
]

module.exports.help = {
    name: 'cookie',
    aliases: []
};