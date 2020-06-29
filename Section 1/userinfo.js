const Discord = require('discord.js');

module.exports.run = async (bot, message, args, cmd) => {
    const status = {
        online: "<:online:718734660485644367> En ligne",
        idle: "<:idle:718734872671420416> Inactif",
        dnd: "<:dnd:718734959988441148> Ne pas déranger",
        offline: "<:offline:639214687355011075> Hors ligne / invisible",
        streaming: "<:streaming:718734053460934718> En Stream"

      }
        
const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author
var permissions = [];

if(message.member.hasPermission("KICK_MEMBERS")){
    permissions.push("Expulser des membres");
}

if(message.member.hasPermission("BAN_MEMBERS")){
    permissions.push("Bannir des membres");
}

if(message.member.hasPermission("ADMINISTRATOR")){
    permissions.push("Administrateur");
}

if(message.member.hasPermission("MANAGE_MESSAGES")){
    permissions.push("Gérer les messages");
}

if(message.member.hasPermission("MANAGE_CHANNELS")){
    permissions.push("Gérer les salons");
}

if(message.member.hasPermission("MENTION_EVERYONE")){
    permissions.push("Mention Everyone");
}

if(message.member.hasPermission("MANAGE_NICKNAMES")){
    permissions.push("Gérer les pseudos");
}

if(message.member.hasPermission("MANAGE_ROLES")){
    permissions.push("Gérer les rôles");
}

if(message.member.hasPermission("MANAGE_WEBHOOKS")){
    permissions.push("Gérer les webhooks");
}

if(message.member.hasPermission("MANAGE_EMOJIS")){
    permissions.push("Gérer les emojis");
}

if(permissions.length == 0){
    permissions.push("Aucune permissions.");
}

const getPresenceStatus = status => {
    let presence = ''
 
    switch(Object.keys(status)[0]) {
        case 'desktop': 
          presence = 'Ordinateur';
          break;
        case 'mobile':
          presence = 'Mobile';
        case 'web':
          presence = 'Internet';
          break;
    }
   return presence
 }

    let embed = new Discord.MessageEmbed()
        .setColor("#8697CB")
        .setAuthor(member.user.username, member.user.displayAvatarURL())
        .setThumbnail(member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
        .addField("Nom d'utilisateur complet", `${member.user.tag}`, true)
        .addField("Nickname", `${member.nickname !== null ? `${member.nickname}` : "Aucun"}`, true)
        .addField("ID", `${member.user.id}`, true)
        .addField('Bot', member.user.bot ? '🤖 Oui' : '👤 Non', true)
        .addField("Status", `${status[member.user.presence.status]}`, true)
        .addField("Platforme", getPresenceStatus(member.user.presence.clientStatus), true)
        .addField("Compte crée", message.guild.createdAt.toLocaleString(), true)
        .addField("A rejoint le server", message.guild.joinedAt.toLocaleString(), true)
        .addField("Permissions", `${permissions.join(', ')}`, true)
        .setFooter(`Information utilisateur `)
        .setTimestamp()
        message.channel.send(embed);

}
module.exports.help = {
    name: 'userinfo',
    aliases: ['ui', 'profil'],
};