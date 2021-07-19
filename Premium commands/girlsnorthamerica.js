module.exports ={
    name: 'girlsnorthamerica',
    description: 'girls in North America',

    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Girs in North America')
        .setColor('#42daf5')    
        .setURL('https://discord.gg/CVpj667jUu')
        .setThumbnail('https://i.pinimg.com/originals/65/83/d1/6583d1e27e4cfd22a96c5f48acedadf5.jpg')
        .addFields(
            {name:"Our girls in North America",
             value:"372,554,290"},
            
           

         
             )

            
        message.channel.send(newEmbed); 
     
    }

}