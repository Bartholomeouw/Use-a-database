exports.run = (client, message, args) => {

    //Config
    const config = require("../config/bot.js");

    //Database
    const db = require('quick.db')

    //Lang
    let language = db.fetch(`lang_${message.guild.id}`)
  
    //If no language is defined, it uses the language configured in config.js
    if (language === null) language = config.lang

    //If the language is already English it sends back a message
    if(language === "en") return message.channel.send(`Language already set to English ${config.emojis.error}`)

    //If all is good, it configures the language to English
    message.channel.send(`Language defined in English ${config.emojis.check}`)

    //Registration in the database
    db.set(`lang_${message.guild.id}`, "en")
}
