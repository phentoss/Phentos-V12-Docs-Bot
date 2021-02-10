const Discord = require("discord.js");
const functions = require("../../phentos-functions/functions");
const axios = require("axios");
exports.run = async (bot, message, args) => {
  let arama = args.join('').trim();
  if(!arama) return message.reply("Dökümantasyonda aramamı istediğin şeyi belirtir misin?.").then(x => x.delete({timeout: 5000}));
  let sonuçlar = await axios.get(`https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(arama)}`).then(res => res.data);
  if(!sonuçlar || sonuçlar.error) { return message.reply(`${arama} hakkında bir sonuç bulamadım.`).then(x = x.delete({timeout: 5000})) };
  let embed = new Discord.MessageEmbed(sonuçlar)
  if(!message.guild) { return message.channel.send(embed)};
  let msg = await message.channel.send(embed);
  return message;
}

exports.help = {
    name: "docs",
    aliases: ['sdocs'],
    category: "owner"
}

exports.requirements = {
    botOwner: false,
    botPerms: ['SEND_MESSAGES'],
    userPerms: []
}
