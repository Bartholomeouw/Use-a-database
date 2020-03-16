# Use-a-database
A little source code to teach you how to use a database.

Wondering how to store items in a database? This tutorial is for you. We will learn how to store text, numbers or units. This tutorial has 3 parts.

- Making a language system
- Making a money system
- Make a prefix system

Download the code you are interested in while filling in the `bot.js` located in the `config` folder.

```js
module.exports = {

    token: "", //Token bot
    prefix: "", //Basic prefix bot

    ownerID: "", //ID

    lang: "", //(en, fr)

    emojis: {

      check: ":white_check_mark:",
      error: ":no_entry_sign:"

    },

};
```

Reminder :

- `token`, the token of the bot available on the [Discord Developers](https://discordapp.com/developers/applications) section.
- `prefix`, the prefix of the bot.
- `ownerID`, the bot developer's ID.
- `lang`, the basic language of the bot (fr = french) and (en = english).
- `emojis`, this is a part to customize the emojis (check and error).

# 1) The system for changing the language

For this tutorial we will need the folder "Language System".
Go to the folder `config` then the file `bot.js`.
For the bot to be able to start, please complete the file, an example is displayed above.

Remember to install the modules :

```
npm init
npm i discord.js
npm i quick.db
npm i enmap
npm i fs
```

You can start the code in the following ways :

```
//On visual studio code
Click on "Run" and "Start Debugging", or you can use the keyboard shortcut "F5"

//With pm2
pm2 start index.js --name "Language System"
```

Your bot can now communicate with you.

To understand the code a little more closely :

```js
db.set(`lang_${message.guild.id}`, "fr")
```

- `lang`, the variable in which the language will be written.
- `message.guild.id` the language will be set on the server identifier (each Discord server will have its own defined league).
