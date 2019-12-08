function m(bot, discord) {
let idcategory = '647547257725648896'
bot.on('guildMemberAdd', member => {
var guild = member.guild
if(guild.id !== "592130723809460227") return;
  var txt = guild.memberCount + " Membres 👥- PARADIS"
  guild.channels.get(idcategory).setName(txt)
});
  console.log(`Member count ready`)
  
bot.on('guildMemberRemove', member => {
var guild = member.guild
if(guild.id !== "592130723809460227") return;
  var txt = guild.memberCount + " Membres 👥- PARADIS"
  guild.channels.get(idcategory).setName(txt)
});

}

module.exports = m
