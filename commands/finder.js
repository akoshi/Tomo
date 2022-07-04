const { MessageEmbed } = require('discord.js');

module.exports = {
    commands: 'partyfinder',
    expectedArgs: 'string',
    minArgs: 1,
    callback: (message, arguments, text) => {
        arguments = arguments.join(' ').split(';');
        return message.channel.send(arguments);
    },
    permissions: [],
    requiredRoles: [],
}