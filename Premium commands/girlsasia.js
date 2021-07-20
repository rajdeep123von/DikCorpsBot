



module.exports ={
    name: 'girlsasia',
    description: 'girls in asia',

    async execute(client, message, args, Discord){
        
        if(!premium) return message.channel.send("You don't have a premium!")
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Girs in Asia')
        .setColor('#42daf5')    
        .setURL('https://discord.gg/CVpj667jUu')
        .setThumbnail('https://i.pinimg.com/originals/65/83/d1/6583d1e27e4cfd22a96c5f48acedadf5.jpg')
        .addFields(
            {name:"Our girls in Asia",
             value:"999,192,555"},
            
           

         
             )
             message.channel.send(newEmbed);
        /*let premiumGuild = db.fetch("Premium");  

        if (!premiumGuild.includes(message.guild.id)) return;

        if (premiumGuild.includes(message.guild.id)){
            message.channel.send(newEmbed)
        }*/
   
        
       // if(!premium) return message.channel.send("You don't have a premium!")
       // message.channel.send(newEmbed); 
     
    }

}
//"756083446169731102",