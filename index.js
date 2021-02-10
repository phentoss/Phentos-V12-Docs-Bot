const Discord = require("discord.js");
const bot = new Discord.Client({
    fetchAllMembers: true,
    disableEveryone: true,
    autoReconnect: true,
    disabledEvents: ["TYPING_START"],
    partials: ['MESSAGE', 'CHANNEL', 'GUILD_MEMBER', 'REACTION']
  });

const loadCommands = require("./phentos-functions/commands.js");
const loadEvents = require("./phentos-functions/events.js");

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.event = new Discord.Collection();

bot.config = require("./phentos/config.json");
bot.color = require("./phentos/color.json");
bot.functions = require("./phentos-functions/functions.js");
bot.owners = bot.config.owners

const load = async () => {
    await loadCommands.run(bot);
    await loadEvents.run(bot);
}

load();
bot.login(bot.config.token);

