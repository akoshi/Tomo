const { MessageEmbed } = require('discord.js');

const pollEmotes = new Array(
    '🇦','🇧','🇨','🇩','🇪','🇫','🇬','🇭','🇮','🇯'
);

module.exports = {
    commands: 'poll',
    expectedArgs: '<string>',
    minArgs: 1,
    callback: (message, arguments, text) => { 
        arguments = arguments.join(' ').split(';');
        let pollEmbed = new MessageEmbed()
        .setAuthor(message.member.displayName, message.author.displayAvatarURL())
        .setColor('#134FC7')
        .setTitle('☑️ Poll: ' + arguments[0])

        if(arguments.length > 11){         
            message.channel.send('Incorrect syntax. You may only put up to 10 options. ```tomo poll <question>;<option1>;<option2>;..<option10>```');   
        } else if (arguments.length==2){
            message.channel.send('Incorrect syntax. You may either put a question with at least 2 options up to 10 options ```tomo poll <question>;<option1>;<option2>;..<option10>``` or just a question. ```tomo poll <question>```');   
        } else if(!arguments[1]){
            message.channel.send(pollEmbed).then(msgReaction => {
                msgReaction.react('681636575808847946')
                    .then(() => msgReaction.react('766774043483045898'))
                });
        } else if(arguments.length >2){
            var desc = "";
            for(var a = 1; a < arguments.length; a++){
                desc += pollEmotes[a-1] + " " + arguments[a] + "\n";
            }

            pollEmbed.setDescription(desc)
            message.channel.send(pollEmbed).then(async msgReaction => {
                for(a=0; a<arguments.length-1; a++){
                    try{
                        await msgReaction.react(pollEmotes[a]);
                    } catch (error) {
                        console.error('One of the emojis failed to react.');
                    }
                }
            });
        }
    },
    permissions: [],
    requiredRoles: [],
}