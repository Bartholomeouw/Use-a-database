exports.run = (client, message, args) => {

    //Config
    const config = require("../config/bot.js");

    //Database
    const db = require('quick.db')

    //Lang
    let language = db.fetch(`lang_${message.guild.id}`)
  
    //If no language is defined, it uses the language configured in config.js
    if (language === null) language = config.lang

    //Translate the message
    const lang = require(`../lang/${language}.js`);

    //Send the message (for example the bot latency) in the configured language
    message.channel.send(`${lang.ping.message}, ${Math.round(client.ping)}ms ${config.emojis.check}`);
    
}