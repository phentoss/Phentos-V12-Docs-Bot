const Discord = require("discord.js");
const fs = require("fs");
const dateFormat = require("dateformat");
module.exports = async (bot, message) => {
  let prefix = "p!"; 
  const args = message.content.split(/ +/g);
  const command = args.shift().slice(prefix.length).toLowerCase();
  const cmd = bot.commands.get(command) || bot.aliases.get(command);
  if(!message.content.toLowerCase().startsWith(prefix) || !message.guild || message.author.bot || !cmd) return;
  if(cmd.requirements.botOwner && cmd.requirements.botOwner === true && !bot.owners.includes(message.author.id)) return bot.functions.error(message.channel, "Bu komutu sadece geliştiricim kullanabilir.")
  if(cmd.requirements.botPerms && cmd.requirements.botPerms.length > 0 && !message.guild.me.hasPermission(cmd.requirements.botPerms)) return bot.functions.error(message.channel, `Yetersiz Yetki. \`${message.guild.me.permissions.missing(cmd.requirements.botPerms).join(", ").replace(/_/gi, " ")}\`.`);
  if(cmd.requirements.userPerms && cmd.requirements.userPerms.length > 0 && !message.member.hasPermission(cmd.requirements.userPerms)) return bot.functions.error(message.channel, `Yetersiz Yetki. \`${message.member.permissions.missing(cmd.requirements.userPerms).join(", ").replace(/_/gi, " ")}\`.`);
  cmd.run(bot, message, args).catch(e => {return console.log(e)});
} 
