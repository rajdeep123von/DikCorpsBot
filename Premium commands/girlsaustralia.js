module.exports ={
    name: 'girlsaustralia',
    description: 'girls in australia',

    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Girs in Australia')
        .setColor('#42daf5')    
        .setURL('https://discord.gg/CVpj667jUu')
        .setThumbnail('https://i.pinimg.com/originals/65/83/d1/6583d1e27e4cfd22a96c5f48acedadf5.jpg')
        .addFields(
            {name:"Our girls in Australia",
             value:"22,440,100"},
            
           

         
             )

            
        message.channel.send(newEmbed); 
     
    }

}