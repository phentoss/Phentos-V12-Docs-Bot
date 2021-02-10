const Discord = require("discord.js");
const functions = require("../../phentos-functions/functions");
const req = require('node-superfetch');
const moment = require('moment')

exports.run = async (bot, message, args) => {
  const pkg = args.join(' ');
  if (!pkg) return message.channel.send('Aranacak modülü belirtin.').then(x => x.delete({timeout: 5000}));
  try {
    const {
      body
    } = await req.get(`https://registry.npmjs.com/${pkg}`);
    if (body.time.unpublished) return message.channel.send('Bu modül artık kullanımda değil.').then(x => x.delete({timeout: 5000}));
    const versiyon = body.versions[body['dist-tags'].latest];
    const kategori = versiyon.dependencies ? Object.keys(versiyon.dependencies) : null;
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor('NPM', 'https://i.imgur.com/ErKf5Y0.png', 'https://www.npmjs.com/')
    .setTitle(body.name)
    .setFooter("PHENTOS MORUK")
    .setURL(`https://www.npmjs.com/package/${pkg}`)
    .setDescription(body.description || 'Açıklama Bulunamadı.')
    .addField('Versiyon', body['dist-tags'].latest, true)
    .addField('Lisans', body.license || 'Bulunamadı', true)
    .addField('Paylaşan', body.author ? body.author.name : 'Bulunamadı', true)
    .addField('Oluşturulma Tarihi', moment.utc(body.time.created).format('MM/DD/YYYY h:mm A'), true)
    .addField('Düzenlenme Tarihi', moment.utc(body.time.modified).format('MM/DD/YYYY h:mm A'), true)
    .addField('Ana Dosyası', versiyon.main || 'Bulunamadı', true)
    .addField('Kullanılan Modüller', kategori && kategori.length ? kategori.join(', ') : 'Bulunamadı')
    return message.channel.send(embed);
  } catch (err) {
    if (err.status === 404) return message.channel.send('Arama sonucu bulunamadı.').then(x => x.delete({timeout: 5000}));
    return message.channel.send(`Tekrar deneyin.`).then(x => x.delete({timeout: 5000}));
  }
}

exports.help = {
    name: "npm",
    aliases: ["npm-package", "npmpackage"],
    category: "owner"
}

exports.requirements = {
    botOwner: false,
    botPerms: ['SEND_MESSAGES'],
    userPerms: []
}
