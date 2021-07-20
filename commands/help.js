module.exports ={
    name: 'help',
    description : "help info!",
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#42daf5')
        .setTitle('Available Commands')
        .setURL('https://discord.gg/CVpj667jUu')
        .setThumbnail('https://i.pinimg.com/originals/65/83/d1/6583d1e27e4cfd22a96c5f48acedadf5.jpg')
        .addFields(
            {name:"-help", value: `Hover for info: [(i)](${'https://rajdeep123von.github.io/DikCorpsWebsite/'} "Displays the Help Menu!")`,inline: true },         
            {name:"-ifounders", value: `Hover for info: [(i)](${'https://rajdeep123von.github.io/DikCorpsWebsite/'} "Shows an overview about the founders!")`, inline: true },
            {name:"-idevs", value: `Hover for info: [(i)](${'https://rajdeep123von.github.io/DikCorpsWebsite/'} "Shows an overview about the developers!")`,inline: true },
           // {name:"-rules", value: `Hover for info: [(i)](${'https://rajdeep123von.github.io/DikCorpsWebsite/'} "Shows the Members' rules embeded message!")`,inline:true},
            //{name:"-adminrules", value: `Hover for info: [(i)](${'https://rajdeep123von.github.io/DikCorpsWebsite/'} "Shows the Moderators' rules embeded message!")`,inline: true },
         //   {name:"-serverqna", value: `Hover for info: [(i)](${'https://rajdeep123von.github.io/DikCorpsWebsite/'} "Shows the server q&a embeded message!")`, inline: true },
            {name:"-worth", value: `Hover for info: [(i)](${'https://rajdeep123von.github.io/DikCorpsWebsite/'} "Shows the current net worth of DikCoprs!")`, inline: true },
            {name:"-clear {number}", value: `Hover for info: [(i)](${'https://rajdeep123von.github.io/DikCorpsWebsite/'} "Deletes the specified amount of messages!")`, inline: true },
            {name:"-image {image type}", value: `Hover for info: [(i)](${'https://rajdeep123von.github.io/DikCorpsWebsite/'} "Displays images according to your wish!")`, inline: true },
         //   {name:"-rulep", value: `Hover for info: [(i)](${'https://rajdeep123von.github.io/DikCorpsWebsite/'} "Displays Rules image!")`,inline: true },
         
         /* {name:"-girlsasia", value: `Hover for info: [(i)](${'https://rajdeep123von.github.io/DikCorpsWebsite/'} "Displays the Girls available in Asia!")`,inline: true },
            {name:"-girlseurope", value: `Hover for info: [(i)](${'https://rajdeep123von.github.io/DikCorpsWebsite/'} "Displays the Girls available in Europe!")`,inline: true },*/
            )
     
        .setFooter('If you are on mobile , then click the (i) button for more info.')        
        message.channel.send(newEmbed);
    }

   
}
