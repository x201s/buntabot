const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();

const prefix = ".";

client.on("message", function(message) { 
    if (message.author.bot) return; 
    if (!message.content.startsWith(prefix)) return;
    
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (command === "ping") {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Poggerz it works! This message had a latency of ${timeTaken}ms.`);                  
    }    

    else if (command === "sum") {
        const numArgs = args.map(x => parseFloat(x));
        const sum = numArgs.reduce((counter, x) => counter += x);
        message.reply(`The sum of all the arguments you provided is ${sum}!`);
      }

    else if (command === "avatar") {
        message.reply(message.author.displayAvatarURL({dynamic:true,size:4096}));
    }

    else if (command === "smug") {
        const attachment = new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/457008618110451722/745677591855366174/eeveewatersmug.png');
        message.channel.send(attachment);
    }
    
    else if (command === "hello") {
        const attachment = new Discord.MessageAttachment('https://media2.giphy.com/media/xT5LMvTWblNaHIR3dm/giphy.gif');
        message.channel.send(attachment);
    }

    else if (command === "yawn") {
        const attachment = new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/744939839559958638/750932752110452867/raw.gif');
        message.channel.send(attachment);
    }

    else if (command === "hug") {
        const attachment = new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/744939839559958638/750935842310062175/gSGeZJF.gif');
        message.channel.send(attachment);
    }

    else if (command === "embrace") {
        const attachment = new Discord.MessageAttachment('https://i.imgur.com/snm8S1B.gif');
        message.channel.send(attachment);
    }

    else if (command === "nope") {
        const attachment = new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/744939839559958638/750945932467503134/nope.gif');
        message.channel.send(attachment);
    }
});      

client.login(config.BOT_TOKEN);
