
module.exports ={
    name: 'rulep',
    description : "rule photo!",
    execute(client, message, args, Discord){

        const attachment = new Discord.MessageAttachment('./assets/rule.png', 'rule.png')
let embed = new Discord.MessageEmbed()
.setColor('#42daf5')
.attachFiles(attachment)
.setURL('https://discord.gg/CVpj667jUu')        
.setImage('attachment://rule.png')

message.channel.send({
    embed: {
        files: [
            attachment
        ],
        image: {
            url: 'attachment://rule.png'
        }
    }
});
    }

   
}


