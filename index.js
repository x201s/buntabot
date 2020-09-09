const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const { Client, MessageAttachment } = require('discord.js');

const prefix = ".";

client.once('ready', () => {
	console.log('Ready!');
});

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
        message.channel.send(`Total sum: ${sum}!`);
    }

    else if (command === "avatar") {
      message.channel.send(message.mentions.users.first().displayAvatarURL({dynamic:true,size:4096}));
  }

  else if (command === "a") {
    message.channel.send(message.author.displayAvatarURL({dynamic:true,size:4096}));
}

else if (message.content === `${prefix}server`) {
	message.channel.send(`Server name: ${message.guild.name}`);
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

      else if (command == 'games') {
        const exampleEmbed = {
          color: 0x0099ff,
          description: 'BuntaBot is an experimental discord bot. ',
          thumbnail: {
            url: 'https://cdn.discordapp.com/attachments/751691556691640400/751691738997063750/watercup.gif',
          },
          fields: [
            {
              name: '.snes',
              value: 'Super Nintendo game save commands',
            },
            {
              name: '.gba',
              value: 'Game Boy Advance game save commands',
            },
            {
              name: '.psx',
              value: 'Playstation 1 game save commands',
            },
            {
              name: '.ds',
              value: 'Nintendo DS game save commands',
            },
            {
              name: '.3ds',
              value: 'Nintendo 3DS game save commands',
            },
            {
              name: '.switch',
              value: 'Nintendo Switch game save commands',
            },
          ],
        };
    
        message.channel.send({ embed: exampleEmbed });
    
      }

      else if (command == 'base-0100959010466000') {
        const exampleEmbed = {
          color: 0x0099ff,
          title: 'Hypnospace Outlaw [0100959010466000]',
          url: 'https://drive.google.com/file/d/1_fe12OgqvZhn_sr1VkKfAB5ntSoVuWaf/view?usp=sharing',
          description: 'Greetings Enforcer, and thank you for enlisting in the Hypnospace Patrol Department! As the world falls into its slumber, Hypnospace becomes a bustling global village.',
          thumbnail: {
            url: 'https://img-eshop.cdn.nintendo.net/i/1d3821b3e9e03ee4e03eb04f966f222f40f2cfb3c626f674ea93ab9f074bfb95.jpg',
          },
          fields: [
            {
              name: 'Release Date',
              value: '8/28/20',
            },
            {
              name: 'Size',
              value: '565,49 MB',
            },
          ],
        };
    
        message.channel.send({ embed: exampleEmbed });
    
      }

      else if (command == 'gba-agb-bpee-usa') {
        const exampleEmbed = {
          color: 0x0099ff,
          title: 'Pokemon Emerald [agb-bpee-usa]',
          url: 'https://cdn.discordapp.com/attachments/739885704041201826/751823074638168134/Pokemon_Emerald_AGB-BPEE-USA.zip',
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

      else if (command == 'h') {
        const exampleEmbed = {
          color: 0x0099ff,
          description: 'BuntaBot is an experimental discord bot. ',
          thumbnail: {
            url: 'https://cdn.discordapp.com/attachments/751691556691640400/751691738997063750/watercup.gif',
          },
          fields: [
            {
              name: '.h',
              value: 'Display helpful commands',
            },
            {
              name: '.hb',
              value: 'Display homebrew commands',
            },
            {
              name: '.games',
              value: 'Display game saves commands',
            },
            {
              name: '.e',
              value: 'Display emotion commands',
            },
            {
              name: '.avatar',
              value: 'Generate a link of users avatar',
            },
            {
              name: '.ping',
              value: 'Check API latency',
            },
            {
              name: '.bf',
              value: 'Betflip - Usage ex. (.bf h) or (.bf t)',
            },
          ],
        };
    
        message.channel.send({ embed: exampleEmbed });
      }

      else if (command === `keys`) {
        message.channel.send(`https://cdn.discordapp.com/attachments/648763453195943946/671865304959287306/keys_9.1.0_v2.txt`)
      }

      else if (command === `atmos`) {
        message.channel.send(`https://github.com/Atmosphere-NX/Atmosphere/releases`)
      }

      else if (command === `sigpatches`) {
        message.channel.send(`https://github.com/eXhumer/patches/releases`)
      }

      else if (command === `nut`) {
        message.channel.send(`https://github.com/blawar/nut/releases`)
      }

      else if (command === `nsz`) {
        message.channel.send(`https://github.com/nicoboss/nsz/releases`)
      }

      else if (command === "hug") {
        const attachment = new Discord.MessageAttachment('https://i.imgur.com/TYkINci.gif');
        message.channel.send(attachment);
      }
});      

client.login(config.token);
