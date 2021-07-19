module.exports ={
    name: 'serverqna',
    description : "Recruitment info!",
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#42daf5')
        .setTitle('Staff and Recruitment')
        .setURL('https://discord.gg/CVpj667jUu')

        .setThumbnail('https://i.pinimg.com/originals/65/83/d1/6583d1e27e4cfd22a96c5f48acedadf5.jpg')
        .addFields(
            {name:"1.1: How do I apply to become a discord staff member?",
             value:"To apply to become a part of our staff team you must be at least Level 30, be in the server for 2 months with little to no logs and be helpful, kind, welcoming, and active in chat. If you meet these requirements you are welcome to apply to <@&862925655799627796> and <@&761230001277894707>, our moderators responsible for applications and patiently wait for a response. Please only chase up for a response if you haven’t heard back from your application after 7 days."},
        
        )
        
        .setFooter('Make sure to read it carefully!')        
        message.channel.send(newEmbed);
       
            const newEmbed2 = new Discord.MessageEmbed()
            .setColor('#42daf5')
            .setTitle('Server and Moderation')
            .setURL('https://discord.gg/CVpj667jUu')

            .setThumbnail('https://i.pinimg.com/originals/65/83/d1/6583d1e27e4cfd22a96c5f48acedadf5.jpg')
            .addFields(
                {name:"2.1: Can you add a promotion channel/ where can I promote my YT or discord?",
                 value:"Since any sort of self promoting is against the rules it only makes sense that the answer to this question is NO. Only partnered servers can promote in <#863279910521143296>."},
                 
                {name:"2.2: Can you make a channel for ”_____” or invite a bot(owo,nqn,e.t.c)?", 
                value:"No channels will be made if we don’t see the purpose or benefits of having them here, same with bots."},


                {name:"2.3: I got scammed in Dank Memer, can you help?",
                value:"This is not a dank server, we just have dank players here. If you got scammed we are unable to help. Do not trade here unless you don’t care about risking your items. If you want to trade with strangers only do in official DMC server or use a middleman."},

                {name:"2.4: Why can I only post 6 emotes?",
                value:"Any more than 6 emotes is spam and we discourage spam. If you want to spam, you can exclusively spam in <#862894044828663808>"},

                {name:"2.5: Can you drag me into ____ vc which is full?",
                value:"No. You can ask them to move to the VC with a higher limit instead."},
                
                {name:"2.6: Why was my message deleted?",
                value:"If your message includes  banned words, nsfw content, more than 6 emotes etc it will be automatically deleted by Mee6 as these things are not allowed on the server."},
            )
            .setImage('https://media.giphy.com/media/AbYxDs20DECQw/giphy.gif')
            .setFooter('Make sure to read it carefully!')        
            message.channel.send(newEmbed2);
        }
    

   
}