// DO NOT EDIT THE CODE HERE.
// Editing the code in this script may cause the program to break, or may cause every command to break.

const Discord = require('discord.js');
const user = new Discord.Client();
const fs = require('fs');

const config = require("./config/config.json");
user.login(config.UserToken);


fs.readdir("./lib/events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./lib/events/${file}`);
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    user.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

user.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.log("There was an error! ERR: Unknown command: " + command)
  }
});
