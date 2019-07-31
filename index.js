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
    console.log(`Je suis prêt à être utilisé.`)})

static void UpdatePresence()
{
    DiscordRichPresence discordPresence;
    memset(&discordPresence, 0, sizeof(discordPresence));
    discordPresence.state = "Launcher 1.7.10";
    discordPresence.startTimestamp = 1507665886;
    discordPresence.largeImageKey = "heaven_logo";
    discordPresence.smallImageKey = "unnamed";
    discordPresence.partyId = "ae488379-351d-4a4f-ad32-2b9b01c91657";
    discordPresence.partySize = 0;
    discordPresence.partyMax = 0;
    Discord_UpdatePresence(&discordPresence);
}

bot.login(token);
