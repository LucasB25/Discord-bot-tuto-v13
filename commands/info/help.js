const Discord = require('discord.js');

module.exports.run = async (bot, message, args, cmd) => {

let help = new Discord.RichEmbed()
.setAuthor('🌸 Le Paradis ◄[💞]►', 'https://cdn.discordapp.com/attachments/622774073629474817/628679140777787421/Sans_titre-2.png', 'https://discord.gg/VkZ7HmV')
.setDescription("**Utilise le prefix** `>>` \n**Rappel** : Les crochets tels que [] ou <> ne sont pas à utiliser lors de l'utilisation des commandes.")
.addField("**Info (7)**", "**`>>help`**, **`>>avatar`**, **`>>ping`**, **`>>id`**, **`>>owner`**, **`>>userinfo __OFF__`**, **`>>botinfo __OFF__`**, **`>>serverinfo __OFF__`**, **`>>roleinfo __OFF__`**, **`>>serv`**,")
.addField("**Admin (2)**", "**`>>say`**, **`>>clear`**,")
.addField("**Social (5)**", "**`>>hug`**, **`>>kiss`**, **`>>love`**, **`>>bedlove`**, **`>>thinking`**, ")
.setColor("ORANGE")

let help2 = new Discord.RichEmbed()
.setDescription("**__Liens utiles__** \n**Serveur de support :** https://discord.gg/VkZ7HmV \n**Invité le bot :** \n**Faire un don :**")
.setColor("ORANGE")

      message.react("💕")
      message.author.createDM().then(channel => {
        channel.send(help)
        channel.send(help2).catch(e => message.channel.send("J'ai pas réussi à t'envoyer de messages en privé voici les commandes :", help))
      
    }
)}

module.exports.help = {
  name: 'help',
  aliases: ['aide']
};
