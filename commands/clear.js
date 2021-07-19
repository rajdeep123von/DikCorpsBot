module.exports = { 
 name: 'clear',
description: 'Clear messages!',
async execute(client, message, args, Discord) {
  if(!args[0]) return message.reply("Keta message delete koribi Mokkel");
if(isNaN(args[0])) return message.reply("Number likh kla");

 if(args[0] > 100) return message.reply("You cannot delete more than 100 messages!");
 if(args[0]<1) return message.reply("You must delete atleast one message!");

 await message.channel.messages.fetch({limit: args[0]}).then(messages=>{
     message.channel.bulkDelete(messages);
 });
}
} 