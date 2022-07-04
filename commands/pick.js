module.exports = {
    commands: 'pick',
    minArgs: 2,
    callback: (message, arguments, text) => {
        arguments = arguments.join(' ').split(',');
        message.channel.send(arguments[Math.floor(Math.random() * arguments.length)]);
    },
}