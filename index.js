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

bot.login(token);