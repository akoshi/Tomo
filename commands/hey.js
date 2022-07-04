module.exports = {
    commands: ['hey', 'hi', 'yo', 'sup'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        message.reply('<a:paw_hi:766096657405444147>')
    },
}