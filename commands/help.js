const {MessageEmbed} = require('discord.js');

module.exports = {
    commands: 'help',
    minArgs: 0,
    callback: (message, arguments, text) => {
        message.channel.send('Help here')
    },

}
