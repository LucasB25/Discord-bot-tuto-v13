const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  
    let owner = new Discord.RichEmbed()
    .setAuthor("🌸 Le Paradis ◄[💞]►", "https://cdn.discordapp.com/attachments/622774073629474817/628679140777787421/Sans_titre-2.png", "https://discord.gg/VkZ7HmV")    
    .addField("Principals Créateurs:", "**<@633779863840489484>**")
    .addField("Second Créateur:", "**<@374527289104531469>**")
    .setColor("ORANGE")
    .setFooter("Créateurs")
    .setTimestamp();
    message.channel.send(owner)
}
module.exports.help = {
    name: 'owner',
    aliases: ['créateur', 'owners', 'fondateur', 'créateurs', 'inventeur', 'inventeur'],
};
