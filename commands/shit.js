
module.exports ={
    name: 'shit',
    description : "shit info!",
    execute(client, message, args, Discord){

        const attachment = new Discord.MessageAttachment('./assets/shit.jpg', 'shit.jpg')
        let embed = new Discord.MessageEmbed()
        .setColor('#42daf5')
        .setTitle('SHIT Info')
        .attachFiles(attachment)
        .setURL('https://discord.gg/CVpj667jUu')
        .setDescription('The Playboy of DikCorps')
        
        .setImage('attachment://shit.jpg')
        .setFooter('Make sure to join our Discord server!')  

        message.channel.send({
            embed: {
                files: [
                    attachment
                ],
                image: {
                    url: 'attachment://shit.jpg'
                }
            }
        });
    }

   
}
