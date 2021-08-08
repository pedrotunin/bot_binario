'use strict';
require('dotenv').config();

const Discord = require('discord.js');

const YesNoQuestions = require('./commands/YesNoQuestions');
const CoinFlip = require('./commands/CoinFlip');

const DISCORD_TOKEN = process.env.DISCORD_TOKEN; // get your bot specific Token - https://discordapp.com/developers/applications/me/create

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logado como ${client.user.tag}!`);
});
  
client.on('message', (message) => {

    if (message.author.bot) return;
    if (message == undefined || message == null) return;

    let result = undefined;
    
    // Yes-No questions
    if (message.content.startsWith('-yn') && message.content.length > 4) {
        result = YesNoQuestions.handle();
    }

    // Coin Flip
    if (message.content.startsWith('-coin')) {
        result = CoinFlip.handle();
    }

    try {
        
        if (result != undefined)
            message.reply(result);

    } catch (error) {
        console.log(error);
    }

});

client.on('error', (data) => {
    console.log('error', data);
});

client.login(DISCORD_TOKEN);
