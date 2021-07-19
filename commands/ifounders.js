module.exports ={
    name: 'ifounders',
    description : "founder info!",
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#42daf5')
        .setTitle('𝔽𝕠𝕦𝕟𝕕𝕖𝕣 𝕀𝕟𝕗𝕠')
        .setURL('https://discord.gg/CVpj667jUu')
        .setDescription('The founders of DikCorps')
        .addFields(
            {name:"1) Diks (CEO)", value:"The Underworld Lord\nFootball GOAT\nHas The richest men in the world in his pockets."},
            {name:"2) Zob (COO)", value: "The Brain Behind DikCorps\nDiks's partner in crime\nOrganiser of the Warehouses"},
            {name:"3) Raj (Kingpin)", value: "Founder of Kingsman#Renaissance\nKabir Singh Lite\nAru kobo aku nai"},
            {name:"4) Avik'shit' (Business Manager)", value: "Playboy\nMost successful Playboy of DikCoprs\nPapa ki pari"},
            {name:"5) Dudh Wala (Milkman)", value: "Dudh wala of India\nSabka Bhai\nPS5 kinibo aibar"},
        )
        .setImage('https://media.giphy.com/media/AbYxDs20DECQw/giphy.gif')
        .setFooter('Make sure to join our Discord server!')        
        message.channel.send(newEmbed);
    }

   
}
