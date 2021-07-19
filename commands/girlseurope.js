module.exports ={
    name: 'girlseurope',
    description: 'girls in europe',

    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Girs in Europe')
        .setColor('#42daf5')    
        .setURL('https://discord.gg/CVpj667jUu')
        .setThumbnail('https://i.pinimg.com/originals/65/83/d1/6583d1e27e4cfd22a96c5f48acedadf5.jpg')
        .addFields(
            {name:"Our girls in Europe",
             value:"1,332,109,233"},
            
           

         
             )

            
        message.channel.send(newEmbed); 
     
    }

}