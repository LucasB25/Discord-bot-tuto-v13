const discord = require("discord.js");
const token = require("./config.json").token;
const config = require("./config.json");
const bot = new discord.Client({
  disableEveryone: true
});
const lib = require("./lib/functions");

bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();

lib.setup(bot);

module.exports.bot = bot;

bot.on("ready", () => {
  console.log(bot.guilds.map(m => m.id))
bot.user.setActivity("Surveillante 🌸 | >>help")
    console.log(`Je suis prêt à être utilisé.`)
require('./mbcount.js')(bot, discord)
    bot.guilds.find(fn => fn.id == "592130723809460227").channels.find(fn => fn.id == "647547918630387743").edit({name : "🔱 Vocal : " + bot.guilds.find(fn => fn.id == "592130723809460227").members.filter(fn => !fn.user.bot).filter(m => m.voiceChannel).size})
    bot.guilds.find(fn => fn.id == "592130723809460227").channels.find(fn => fn.id == "647547869229875210").edit({name : "🔱 Connectés : " + bot.guilds.find(fn => fn.id == "592130723809460227").members.filter(m => !m.user.bot).filter(({ presence }) => presence.status !== 'offline').size})
})


bot.login(token);

bot.on('presenceUpdate', (oldMember, newMember) => {
    bot.guilds.find(fn => fn.id == "592130723809460227").channels.find(fn => fn.id == "647547869229875210").edit({name : "🔱 Connectés : " + bot.guilds.find(fn => fn.id == "592130723809460227").members.filter(m => !m.user.bot).filter(({ presence }) => presence.status !== 'offline').size})
})

bot.on('voiceStateUpdate', (oldMember, newMember) => {
    bot.guilds.find(fn => fn.id == "592130723809460227").channels.find(fn => fn.id == "647547918630387743").edit({name : "🔱 Vocal : " + bot.guilds.find(fn => fn.id == "592130723809460227").members.filter(fn => !fn.user.bot).filter(m => m.voiceChannel).size})
})

bot.on('guildMemberAdd', async member => {
var idc = "615580539759362110"
const serverTag = member.guild.name
    const embed1 = new discord.RichEmbed()
        .setColor(0x76D880)
        .setTitle("**Nouveau membres**")
        .addField(`informations:`, `<a:thisr:646392674827501578> Bienvenue à ${member}, tu es le **${member.guild.memberCount}**ème membres. \n <a:thisr:646392674827501578> Tu peux aller lire le règlement dans <#647910586054606848> \n <a:thisr:646392674827501578> Tu peux aller chercher tes rôles dans <#647786718250008587>`)
        .setFooter("Bienvenue")
        .setTimestamp();
    var send = bot.guilds.get(member.guild.id).channels.get(idc);
      
  send.send(embed1);
  
  member.guild.channels.find(fn => fn.id == "647547869229875210").edit({name : "🔱 Connectés : " + member.guild.members.filter(m => !m.user.bot).filter(({ presence }) => presence.status !== 'offline').size}) //🔱 Connectés
    });
