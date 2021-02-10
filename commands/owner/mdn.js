const Discord = require("discord.js");
const functions = require("../../phentos-functions/functions");
const req = require('node-superfetch');

exports.run = async (bot, message, args) => {
  try {
    const arama = args.join(" ");
    const {
      body
    } = await req.get('https://developer.mozilla.org/en-US/search.json').query({ q: arama, locale: 'en-US', highlight: false });
    if (!body.documents.length) return message.channel.send('Arama sonucu bulunamadı.').then(x => x.delete({timeout: 5000}));
    const data = body.documents[0];
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor('Mozilla Developer Network', 'https://i.imgur.com/DFGXabG.png', 'https://developer.mozilla.org/')
    .setURL(data.url)
    .setTitle(data.title)
    .setDescription(data.excerpt);
    return message.channel.send(embed);
  } catch (err) {
    if (err.status === 404) return message.channel.send('Arama sonucu bulunamadı.').then(x => x.delete({timeout: 5000}));
    return message.channel.send(`Tekrar deneyin.`).then(x => x.delete({timeout: 5000}));
  }
}

exports.help = {
    name: "mdn",
    aliases: ["mozilla","smdn"],
    category: "owner"
}

exports.requirements = {
    botOwner: false,
    botPerms: ['SEND_MESSAGES'],
    userPerms: []
}
