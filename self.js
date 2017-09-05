// DO NOT EDIT THE CODE HERE.
// Editing the code in this script may cause the program to break, or may cause every command to break.

const Discord = require('discord.js');
const user = new Discord.Client();
const fs = require('fs');

const config = require("./config/config.json");
if(config.UserToken === "Put your ID here.") {
  throw("You need to put your Token and ID into the configuration file!");
}
user.login(config.UserToken);


fs.readdir("./lib/events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./lib/events/${file}`);
    let eventName = file.split(".")[0];
    user.on(eventName, (...args) => eventFunction.run(user, ...args));
  });
});

user.on("message", message => {
  if (!message.author.id === config.ownerID) return;
  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(user, message, args);
  } catch (err) {
    console.error(err);
  }
});
