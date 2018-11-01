const Discord = require('discord.js');
var bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
  bot.user.setGame("Command: :help");
  console.log("Connected");
});

bot.on('message', message => {
  if (message.content == prefix + "help"){
    message.channel.sendMessage("Liste des commandes: \n !création \n !créateur");
  }
  
  if (message.content == prefix + "création"){
    message.channel("Bot créé le __01/11/2018__ à __15h42__");
    console.log("Commande effectuée !");
  }
  
  if (message.content == prefix + "créateur"){
    message.channel("Ryo Saeba#9605");
    console.log("Commande effectuée !");
  }
});

bot.login("vRnQWwQ0u7JxeO6eGJqsf0jkLRGzmtLZ");
