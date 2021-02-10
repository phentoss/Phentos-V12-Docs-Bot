const Discord = require("discord.js");
const functions = require("../../phentos-functions/functions");

exports.run = async (bot, message, args) => {
  return message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setAuthor(message.author.username,message.author.avatarURL({dynamic: true})).setTitle(`Phentos Docs Komutları`).setDescription(`**$v12 <kod> →** \`Kodunuzu v12'ye çevirisniz.\`\n**$docs →** \`Discord.JS Docs araması yaparsınız.\`\n**$mdn →** \`Mozilla Developer Network'te arama yaparsınız.\`\n**$npm →** \`NPM modülü aratırsınız\`\n`).setFooter("PHENTOS MORUK? 💛").setTimestamp())
}

exports.help = {
    name: "help",
    aliases: ["yardım", "Help", "Yardım"],
    category: "owner"
}

exports.requirements = {
    botOwner: false,
    botPerms: ['SEND_MESSAGES'],
    userPerms: []
}
