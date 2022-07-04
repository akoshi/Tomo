const { MessageEmbed } = require('discord.js');

//Positive, neutral, and negative responses for the hyurball function
const ballResponse = new Array(
    "It is certain.", "It is decidedly so.", "Without a doubt.",
    "Yes – definitely.", "You may rely on it.", "As I see it, yes.",
    "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.",
    "Reply hazy, try again.", "Ask again later.", "Better not tell you now.",
    "Cannot predict now.", "Concentrate and ask again.", "Don’t count on it.",
    "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful.",
    "<a:notsofast:629956465771413514>", "<:pika:610320413435887658>",
    "<:cutiesmile:654078012438085633>",
    "<:blobok:653960932967448577>"
    );

module.exports = {
    commands: '8ball',
    expectedArgs: '<string>',
    minArgs: 1,
    callback: (message, arguments, text) => {
        let ballReply = Math.floor(Math.random()*ballResponse.length);
        
        let ballembed = new MessageEmbed()
        .setAuthor(message.member.displayName, message.author.displayAvatarURL())
        .setColor('#FF9900')
        .addField(":thinking: **Question**", arguments.join(" "))
        .addField(":8ball: **8ball**", ballResponse[ballReply]);

        message.channel.send(ballembed);
    },
    permissions: [],
    requiredRoles: [],
}