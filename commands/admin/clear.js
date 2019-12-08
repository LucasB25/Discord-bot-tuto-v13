const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    let helpembxd = new Discord.RichEmbed()
    .setColor("#00ff00")
    .addField("Commande pour supprimer des messages", "**`>>Clear <amount>`**, **`>>purge <amount>`**")

    message.channel.send(helpembxd);
    return;
  } 

  message.delete()

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Vous n'avez pas la permission.");
  if(!args[0]) return message.channel.send("Donner un nombre de messages a supprimé.");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`**__Effacement de ${args[0]} messages.__**`).then(msg => msg.delete(2000));
});


}

module.exports.help = {
  name: "clear",
  aliases: ['purge']
};
