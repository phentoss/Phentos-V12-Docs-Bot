const Discord = require("discord.js");
const functions = require("../../phentos-functions/functions");

exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.send(`Hata.`);
  let code = args.join(' ');
  function clean(text) {
    if (typeof text !== 'string') text = require('util').inspect(text, { depth: 0 })
    text = text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203))
    return text;
  };
  try { 
    var evaled = clean(await eval(code));
    if(evaled.match(new RegExp(`${bot.token}`, 'g'))) evaled.replace(bot.token, "Bu komutu kullanamazsın.");
    message.channel.send(`${evaled.replace(bot.token, "Yetersiz yetki.")}`, {code: "js", split: true});
  } catch(err) { message.channel.send(err, {code: "js", split: true}) };
}

exports.help = {
    name: "eval",
    aliases: ['e'],
    category: "owner"
}

exports.requirements = {
    botOwner: true,
    botPerms: ['SEND_MESSAGES'],
    userPerms: []
}
