var Discord = require('discord.js');
var botName = require('./package.json');
var bot = new Discord.Client();



bot.on('message', message =>{

    // Variables
    var sender = message.author; //The person who sent the message
    var msg = message.content;
    var prefix = "_" //The text before commands, you can put anything that you prefer

    if(message.author.id != "381443488392413184" && message.channel.id === "381397780385628181"){
        if(msg.startsWith('_', 0)){
            if(msg === prefix + "hii" && message.channel.id === "381397780385628181"){
                message.channel.send('jii sarkar! Kese ho?') // Sends a message to the channel, with the content
            }
            else{
                message.channel.send("Hey, I only understand >bang right now. More will be added when my creator is free. :) ")
            }
        }
        else{
            message.delete();
            message.channel.send(sender + " this bot only accepts commands which starts with '_' dot.");
        }
    }
});

bot.login(process.env.BOT_TOKEN)
