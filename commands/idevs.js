module.exports ={
    name: 'idevs',
    description : "Developer info!",
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#42daf5')
        .setTitle('𝓓𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓻 𝓘𝓷𝓯𝓸')
        .setURL('https://discord.gg/CVpj667jUu')
        .setDescription('The founders of DikCorpsBot')
        .addFields(
            {name:"1) Raj", value:"Chief designer of the bot\nCo-founder of DikCorpsIncBot"},
            {name:"2) Zob ", value: "Founder of DikCorpsIncBot\nFirst among DikCorps' founders to make a bot"},
            
        )
        .setImage('https://media.giphy.com/media/D16XHdsB1PBxm/giphy.gif')
        .setFooter('Make sure to join our Discord server!')        
        message.channel.send(newEmbed);
    }

   
}
