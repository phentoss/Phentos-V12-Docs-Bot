const { readdirSync } = require("fs");
const { join } = require("path");
const filePath = join(__dirname, "..", "commands");
const fs = require("fs");
const functions = require("../phentos-functions/functions.js");
module.exports.run = bot => {
  functions.loadCommands(bot, `${filePath}/owner/`);

};
