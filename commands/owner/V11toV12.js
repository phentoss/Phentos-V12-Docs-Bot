const Discord = require("discord.js");
const functions = require("../../phentos-functions/functions");
exports.run = async (bot, message, args) => {
  let girdi = args.slice(0).join(" ");
  if (!girdi) {return message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription("Lütfen kodu belirtin."))};
  if (girdi.length > 2001) {return message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription("Kodunuz 2001 karakterden çok büyük Lütfen azaltın."))};
  let çıktı = girdi   
    .replace(/presence\.status/g,"presence.activities")
    .replace(/members\.filter/g,"members.cache.filter")
    .replace(/users\.size/g,"users.cache.size")
    .replace(/members\.size/g,"members.cache.size")
    .replace(/guilds\.reduce/g,"guilds.cache.reduce")
    .replace(/channels\.size/g,"channels.cache.size")
    .replace(/roles\.size/g,"roles.cache.size")
    .replace(/client\.guilds\.size/g,"client.guilds.cache.size")
    .replace(/roles\.get/g,"roles.cache.get")
    .replace(/role\.get/g,"role.cache.get")
    .replace(/channel\.get/g,"channels.cache.get")
    .replace(/users\.get/g,"users.cache.get")
    .replace(/channels\.get/g,"channels.cache.get")
    .replace(/guilds\.get/g,"guilds.cache.get")
    .replace(/members\.get/g,"members.cache.get")
    .replace(/messages\.get/g,"messages.cache.get")
    .replace(/emojis\.get/g,"emojis.cache.get")
    .replace(/addRole/g,"roles.add")
    .replace(/removeRole/g,"roles.remove")
    .replace(/users\.exists/g,"users.cache.some")
    .replace(/channels\.exists/g,"channels.cache.some")
    .replace(/users\.find/g,"users.cache.find")
    .replace(/channels\.find/g,"channels.cache.find")
    .replace(/guilds\.find/g,"guilds.cache.find")
    .replace(/members\.find/g,"members.cache.find")
    .replace(/messages\.find/g,"messages.cache.find")
    .replace(/emojis\.find/g,"emojis.cache.find")
    .replace(/users\.some/g,"users.cache.some")
    .replace(/channels\.some/g,"channels.cache.some")
    .replace(/guilds\.some/g,"guilds.cache.some")
    .replace(/members\.some/g,"members.cache.some")
    .replace(/messages\.some/g,"messages.cache.some")
    .replace(/emojis\.some/g,"emojis.cache.some")
    .replace(/RichEmbed/g,"MessageEmbed")
    .replace(/fetchUser/g,"users.fetch")
    .replace(/fetchMember/g,"users.members")
    .replace(/fetchMessage/g,"fetchPinnedMessages")
    .replace(/fetchPinnedMessages/g,"messages.fetchPinned")
    .replace(/sendMessage/g,"send")
    .replace(/sendEmbed/g,"send")
    .replace(/sendCode/g,"send")
    .replace(/sendFile/g,"send")
    .replace(/sendFiles/g,"send")
    .replace(/setRoles/g,"roles.set")
    .replace(/colorRole/g,"roles.color")
    .replace(/highestRole/g,"roles.highest")
    .replace(/hoistRole/g,"roles.hoist")
    .replace(/ban/g,"members.ban")
    .replace(/unban/g,"members.unban")
    .replace(/avatarURL/g,"avatarURL()")
    .replace(/displayAvatarURL/g,"displayAvatarURL()")
    .replace(/iconURL/g,"iconURL()")
    .replace(/splashURL/g,"splashURL()")
    .replace(/playFile/g,"play")
    .replace(/playStream/g,"play")
    .replace(/playArbitraryInput/g,"play")
    .replace(/playBroadcast/g,"play")
    .replace(/playOpusStream/g,"play")
    .replace(/playConvertedStream/g,"play")
    .replace(/dispatcher\.end()/g,"dispatcher.destroy()")
    .replace(/createVoiceBroadcast/g,"voice.createBroadcast")
    .replace(/broadcast\.dispatchers/g,"broadcast.subscribers")
    .replace(/forEach/g,"cache.forEach")
    .replace(/client\.ping/g,"client.ws.ping")
    .replace(/setMute/g,"voice.setMute")
    .replace(/roles\.find/g,"roles.cache.find")
   // .replace(/''\,/g,"x => x.id === `ID GELECEK`)\n\nYada :\n(x => x.name === `NAME GELECEK`\nNe olarak kullanacaksanız değiştirin")
    .replace(/createEmoji/g,"emojis.create")
    .replace(/createRole/g,"roles.create")
    .replace(/fetchMembers/g,"members.fetch")
    .replace(/pruneMembers/g,"members.prune")
    .replace(/setChannelPosition/g,"setChannelPositions")
    .replace(/{}/g,"[{ }]")
    .replace(/setRolePosition/g,"setPosition")
    .replace(/calculatedPosition/g,"position")
    .replace(/position/g,"rawPosition")
    .replace(/overwritePermissions/g,"createOverwrite")
    .replace(/removeRoles/g,"roles.remove")
    .replace(/deaf/g,"voice.deaf")
    .replace(/selfDeaf/g,"voice.selDeaf")
    .replace(/serverDeaf/g,"voice.serverDeaf")
    .replace(/mute/g,"voice.mute")
    .replace(/selfMute/g,"voice.selfMute")
    .replace(/serverMute/g,"voice.serverMute")
    .replace(/setVoiceChannel/g,"voice.setChannel")
    .replace(/setVoiceChannel(null)/g,"voice.kick()")
    .replace(/speaking/g,"voice.speaking")
    .replace(/voiceChannel/g,"voice.channel")
    .replace(/voiceChannelID/g,"voice.channelID")
    .replace(/voiceSessionID/g,"voice.sessionID")
    .replace(/clearReactions/g,"reactions.removeAll()")
    .replace(/message\.delete()/,"message.delete({timeout: SÜRE})")
    .replace(/message\.editCode/g,"message.edit")
    .replace(/isMemberMentioned/g,"mentions.has")
    .replace(/isMentioned/g,"mentions.has")
    .replace(/fetchUsers/g,"users.fetch")
    .replace(/reaction\.remove/g,"reaction.users.remove")
    .replace(/application\iconURL/g,"application.iconURL()")
    .replace(/permissions\.missingPermissions/g,"permissions.missing")
    .replace(/permissions\.raw/g,"permissions.bitfield")
    .replace(/presence\.game/g,"presence.activities")
    .replace(/asset\.smallImageURL/g,"smallImageURL")
    .replace(/largeImageURL()/g,"largeImageURL({ format: 'png', size: 1024 });")
    .replace(/role\.hasPermission/g,"role.permissions.has")
    .replace(/role\.serialize/g,"role.permissions.serialize")
    .replace(/dispatcher\.pause/g,"dispatcher.pause(true)")
    .replace(/channels\.create/g,"channels.create({ name: 'Channel' })\n\nBunu Sil => ")
    .replace(/channel\.clone()/g,"channel.clone({ name: undefined });\n\nBunu Sil => ")
    .replace(/channel\.createCollector/g,"channel.createMessageCollector")
    .replace(/channel\.createWebhook/g,"channel.createWebhook('BlaBla', { avatar: 'https://i.imgur.com/mI8XcpG.jpg' }")
    .replace(/sendFile/g,"files: [{ attachment: 'entire/path/to/file.jpg', name: 'file.jpg' }]")
    .replace(/sendFiles/g,"files: [{ attachment: 'entire/path/to/file.jpg', name: 'file.jpg' }]")
    .replace(/fetchMessage/g,"messages.fetch")
    .replace(/fetchMessages/g,"messages.fetch")
    .replace(/voiceConnection/g,"voice.connection")
    .replace(/voiceConnection/g,"voice.connection")
    .replace(/createOpusStream/g,"createStream")
    .replace(/createPCMStream/g,"createStream")
    .replace(/webhook\.avatarURL/g,"webhook.avatarURL()")
    .replace(/setGame/g,"setActivity")
    .replace(/roles\.deleteAll/g,"roles.clear()")
    .replace(/roles\.has/g,"roles.cache.has")
    .replace(/guilds\.size/g,"guilds.cache.size")
    const result = collectionMatched(çıktı);
    if (girdi == çıktı) {return message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription("Bu kod zaten v12 dostum?"))};
    message.channel.send(`\n\`\`\`js\n${result}\`\`\``)
};
exports.help = {
  name: "v12",
  aliases: ['tov12'],
  category: ""
};

exports.requirements = {
  botOwner: false,
  botPerms: ["SEND_MESSAGES"],
  userPerms: []
};


function collectionMatched(code) {
  const regex = /.+?(find|exists|findAll)+\(("|'|`)[A-z0-9çÇŞşğĞüÜöÖIı]+("|'|`),([\s]+)?("|'|`)?[A-z0-9çÇŞşğĞüÜöÖIı\-\_\~\`]+("|'|`)?\)/g;
  const matched = code.match(regex);
  if (!matched) return code;
  matched.forEach((item) => {
    const itemRegex = /("|'|`)[A-z0-9çÇŞşğĞüÜöÖIı\-\~\`\_\:]+("|'|`),([\s]+)?("|'|`)?[A-z0-9çÇŞşğĞüÜöÖIı\-\~\`\_\:\[\]]+("|'|`)?/g;
    const itemMatched = item.match(itemRegex);
    if (!itemMatched) return;
    const splited = itemMatched.join(" ").replace(/[\s]{1,}/g, "").split(",");
    const result = `(x) => x.${splited[0].replace(/'|"|`/g, "")} === ${splited[1]}`;
    const resItem = item.replace(splited[0], result).split(",")[0];
    code = code.replace(item, resItem + ")");
  });
  return code;
}
