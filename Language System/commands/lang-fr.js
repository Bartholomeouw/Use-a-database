exports.run = (client, message, args) => {

    //Config
    const config = require("../config/bot.js");

    //Database
    const db = require('quick.db')

    //Lang
    let language = db.fetch(`lang_${message.guild.id}`)
  
    //If no language is defined, it uses the language configured in config.js
    if (language === null) language = config.lang

    //If the language is already French it sends back a message
    if(language === "fr") return message.channel.send(`Langue déjà définie en Français ${config.emojis.error}`)

    //If all is good, it configures the language to French
    message.channel.send(`Langue définie en Français ${config.emojis.check}`)

    //Registration in the database
    db.set(`lang_${message.guild.id}`, "fr")
}
