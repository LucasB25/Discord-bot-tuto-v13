const Discord = require('discord.js');

module.exports.run = async (bot, message, args, cmd) => {
  
  const member = message.mentions.users.first() || message.author;
  
  let avatar = new Discord.RichEmbed()
  .setDescription(`Voici l'avatar de **${member.username}**`)
  .setImage(member.displayAvatarURL)
  .setColor("ORANGE")
  .setFooter("Avatar")
  .setTimestamp();
  message.channel.send(avatar)
}

module.exports.help = {
    name: 'avatar',
    aliases: ['pp', 'photo', 'portrait', 'avatars'],
};
