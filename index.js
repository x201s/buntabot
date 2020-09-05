const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const { Client, MessageAttachment } = require('discord.js');

const prefix = ".";

client.on("message", function(message) { 
    if (message.author.bot) return; 
    if (!message.content.startsWith(prefix)) return;
    
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (command === "ping") {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.channel.send(`🏓 ${Math.round(client.ws.ping)}ms`);                  
    }    

    else if (command === "sum") {
        const numArgs = args.map(x => parseFloat(x));
        const sum = numArgs.reduce((counter, x) => counter += x);
        message.reply(`Total sum: ${sum}!`);
    }

    else if (command === "avatar") {
        message.reply(message.author.displayAvatarURL({dynamic:true,size:4096}));
    }

    else if (command === "h") {
        message.reply(`
        .ping: Check latency
        .sum: Display total sum
        .avatar: Display user pfp
        .restore: Default index.js file
        .rps: rock paper scissors / usage: .rps <r,p,s>
        .bf: betflip / usage: .bf h or .bf t
        `)
    }

    else if (command === "fetch-2k13") {
        const attachment = new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/739885794780643378/739894276393271386/NBA_2K13_ULUS105982k18PG.zip');
        message.channel.send(attachment);
    }

    else if (command === "fetch-shield") {
        const attachment = new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/739885917757636701/740611996264824913/mearly_clean-endgame.zip');
        message.channel.send(attachment);
    }

    else if (command === "hb-bro") {
        const attachment = new Discord.MessageAttachment('https://media.giphy.com/media/SUA9E0GcSyhCU/giphy.gif');
        message.channel.send(attachment);
    }

    else if (command === "restore") {
        const attachment = new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/750893611062657095/751169341885513828/index.zip');
        message.channel.send(attachment);
    }

    else if (command === "smug") {
        const attachment = new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/457008618110451722/745677591855366174/eeveewatersmug.png');
        message.channel.send(attachment);
    }

    else if (command == 'bf') {
        const acceptedReplies = ['h', 't'];
        const random = Math.floor((Math.random() * acceptedReplies.length));
        const result = acceptedReplies[random];
        const choice = args[0];
        
        const hcembed = {
          color: 7584788,
          description: 'Correct',
          image: {
            url: 'https://cdn.discordapp.com/attachments/750847967430443050/751493440193167431/heads.png',
          },
        };
        const hwembed = {
          color: 16713222,
          description: 'Wrong',
          image: {
            url: 'https://cdn.discordapp.com/attachments/750847967430443050/751493440193167431/heads.png',
          },    
        };
        const tcembed = {
          color: 7584788,
          description: 'Correct',
          image: {
            url: 'https://cdn.discordapp.com/attachments/750847967430443050/751493350548307988/tails.png',
          },
        };
        const twembed = {
          color: 16713222,
          description: 'Wrong',
          image: {
            url: 'https://cdn.discordapp.com/attachments/750847967430443050/751493350548307988/tails.png',
          },
        };
    
        if (!choice) return message.channel.send(`Usage: \`${prefix}bf h or .bf t \\ <h> Heads, <t> Tails\``);
        if (!acceptedReplies.includes(choice)) return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
        
        if (result == choice) { //correct
          if (result == 'h'){ //heads
              message.channel.send({ embed: hcembed });
          }
          else if (result == 't'){ //tails
              message.channel.send({ embed: tcembed });
          }
        }
        else if (result != choice){ //wrong
          if (result == 'h'){ //heads
              message.channel.send({ embed: hwembed });
          }
          else if (result == 't'){ //tails
              message.channel.send({ embed: twembed });
          }
        }
      }

      else if (command == 'fetch-emerald') {
        const exampleEmbed = {
          color: 0x0099ff,
          title: 'Pokemon Emerald',
          url: 'https://cdn.discordapp.com/attachments/739885704041201826/739904243644760154/pkmne.zip',
          author: {

            icon_url: 'https://cdn.discordapp.com/attachments/457008618110451722/750872636665364500/Z.png',
          },
          description: 'Pokémon Emerald Version is a role-playing video game developed by Game Freak, published by The Pokémon Company and Nintendo for the Game Boy Advance. It was first released in Japan in 2004, and was later released internationally in 2005. It is an enhanced version of Pokémon Ruby and Sapphire and is part of the third generation of the Pokémon video game series. ',
          thumbnail: {
            url: 'https://upload.wikimedia.org/wikipedia/en/f/f7/PokemonEmeraldBox.jpg',
          },
          fields: [
            {
              name: 'Details',
              value: 'Saved right after the 50th win in Doubles format. PC has a few Pokemon that are fully trained.',
            },
          ],
        };
    
        message.channel.send({ embed: exampleEmbed });
    
      }
});      

client.login(config.BOT_TOKEN);
