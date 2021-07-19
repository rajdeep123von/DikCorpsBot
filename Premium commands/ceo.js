
module.exports ={
    name: 'ceo',
    description : "ceo info!",
    execute(client, message, args, Discord){

        const attachment = new Discord.MessageAttachment('./assets/ceo.jpg', 'ceo.jpg')
        let embed = new Discord.MessageEmbed()
        .setColor('#42daf5')
        .setTitle('CEO Info')
        .attachFiles(attachment)
        .setURL('https://discord.gg/CVpj667jUu')
        .setDescription('The CEO of DikCorps')
        
        .setImage('attachment://ceo.jpg')
        .setFooter('Make sure to join our Discord server!')  

        message.channel.send({
            embed: {
                files: [
                    attachment
                ],
                image: {
                    url: 'attachment://ceo.jpg'
                }
            }
        });
    }

   
}
