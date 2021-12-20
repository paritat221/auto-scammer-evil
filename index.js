const discord = require('discord.js');
const client = new discord.Client();
const config = require('./config.json'); //put your token in here

client.on('ready', async () => {
    return ':troll:';
});

client.on('message', async (message) => {
    if(message.channel.id=='809175054285013042'){
        message.react(client.emojis.get("797114315832295455"));
    }
});

client.login(config.token);
