const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let arg = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (message.member.hasPermission("MENTION_EVERYONE")) {
    message.delete();
    message.channel.send(arg);
  } else {
    message.delete();
    message.channel.send("Vous n'avez pas la permission.");
  }
};

module.exports.help = {
  name: "say",
  aliases: ['annonce']
};
