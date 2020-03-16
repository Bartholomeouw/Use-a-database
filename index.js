//Modules
const Discord = require ('discord.js');
const fs = require ("fs");
const Enmap = require("enmap")

//Client
const client = new Discord.Client();

//Settings
const config = require("./config/bot.js");

//Login bot
client.login(config.token);

client.on('ready', () => {

  console.log(`[💡] Bot ready on ${client.guilds.size.toLocaleString()} servers.`);

});

client.on("message", async message => {

//Database
const db = require('quick.db')

//Prefix bot
let prefix = db.fetch(`prefix_${message.guild.id}`)
if (prefix === null) prefix = config.prefix;

});

client.config = config;


//Event (message)
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

//Commands
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`[⌛️] ${commandName}, launched.`);
    client.commands.set(commandName, props);
  });
});