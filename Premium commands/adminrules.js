module.exports ={
    name: 'adminrules',
    description : "admin rules info!",
    execute(client, message, args, Discord){

     

        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Rules for Moderators and Admins!')
        .setColor('#42daf5')    
        .setURL('https://discord.gg/CVpj667jUu')
        .setThumbnail('https://i.pinimg.com/originals/65/83/d1/6583d1e27e4cfd22a96c5f48acedadf5.jpg')
        .addFields(
            {name:"Be Friendly",
             value:"[1] Be friendly with other discord members. Dont commit cyberbullying. Never be racist or sexist. (Our responsibilities might vary, but the overall role is to ensure that our Discord server is a safe, healthy environment for everyone!) "},
            
             {name:"Be Helpful",
             value:"[2] Admins and moderators are members' first go-to when they encounter an issue in a server. (Admins and moderators should be able to respond immediately and help resolve the members' concerns.)"},
        
             {name:"Adminstrative Controls Available", 
             value:"[3] You can do things like moderate or delete messages, as well as invite, ban, or suspend people who violate the server’s rules."},

            
             {name:"No NSFW", 
             value:"[4] Dont post anything NSFW in any of the server text channels. if you are found streaming anything NSFW in any of the VC or streaming channels your admin powers will be taken away!"},
             
             {name:"Informing Your Actions", 
             value:"[5] You must inform about all the moderations done in the server to the <@&809404731298283531>! "},

            
            
             {name:"Don't Misuse Your Power", 
             value:"[6] With great power comes great responsibility. You must not ban, suspend or remove permissions for anyone without valid reasons. If done so, you must face the consequences! "},

         
             )

            
        message.channel.send(newEmbed);

    }
}

// always listen to the server owner
// never be racist or sexist
// dont post anything NSFW in any of the server text channels
// if you are found streaming anything Nsfw in any of the VC or streaming channels your admin powers will be taken away
// dont commit cyberbullying

