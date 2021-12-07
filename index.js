const { token } = require('./config.json');

const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => onClientReady());
function onClientReady()
{
    console.log("Discord bot is ready!");
}

client.login(token);