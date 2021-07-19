module.exports ={
    name: 'rules',
    description : "rules info!",
    execute(client, message, args, Discord){

     

        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Rules for Members!')
        .setColor('#42daf5')    
        .setURL('https://discord.gg/CVpj667jUu')
        .setThumbnail('https://i.pinimg.com/originals/65/83/d1/6583d1e27e4cfd22a96c5f48acedadf5.jpg')
        .addFields(
            {name:"No Spamming",
             value:"[1] Don't spam. (Spamming includes zalgo, excessive caps/reaction spams, copy pastes, picture/link/GIF spam, reaction spam and walls of text)"},
        
             {name:"No NSFW", 
             value:"[2] ​​Don't post NSFW/Gore/18+ stuff in the channels (Not only you shouldn't do this but, you also shouldn't have any NSFW/Gore-ish Pfps/Nickname/Usernames)"},

             {name:"No Harassment", 
             value:"[3] Don't harass or insult any other members. (This includes threats, internet attacks and cyber bullying. Other people have feelings too.)"},

             {name:"No Evading Punishments", 
             value:"[4] Trying to evade the punishments by any means will lead to strict action. ( Rejoining the server won’t help you believe me)"},

             {name:"No Advertising", 
             value:"[5] Don't advertise other Discord servers or Youtube videos. (Never promote anything including servers, youtube, apps, or any links)"},

             {name:"No Impersonation", 
             value:"[6] Don't impersonate anyone, like YouTubers or Staff. (This includes copying avatars, nicknames, or just trolling to imitate an user)"},
                          
             {name:"No Abusing", 
             value:"[7] Swearing & abusing is not allowed. (If someone is going all out on personal insults, a tirade of swear words,, they will be punished.)"},

             {name:"No Insulting Parents", 
             value:"[8] Abusing parents and elders is prohibited. Anyone who does will have to face a 4 days suspension from the server."},            

             {name:"No off-topics", 
             value:"[9] Don't go off topic in any of the channels. (Please keep within the designated topic of the channel.)"},
            
           

             {name:"VC Rule", 
             value:"[10] Don't be an annoyance in voice channels. (This includes putting inappropriate songs unless the members won't disagree & earrape and shouting)"},

             {name:"DM rule", 
             value:"[11] If Someone Dm or Pm (Direct Message/ Private Message) and does promotions and harasses you, abuses you & spams and you get annoyed from it, then Discord has given a beautiful option called as BLOCK so block them rather than complaining in server beacuse it’s dm and not the server. If they break rules on server there will be an action taken within server"},
            
       /*    {name: "Image-Command", 
             value:"[12] Don't search for any Abusive or sexual content using the image command. (Please use the image command with a good intention if you are found violating this rule you will be immideately banned from the server.)"},
*/
             {name:"●▬ ◤•Some Importants:-•◢ ▬●", 
             value:"•Someone is trying to hack me, What should i do ?", value:"First of all dont give attention to these people they just fool around. Discord is the safe platform and cannot hack you. By using some loopholes or glitch, they at-most only get your profile picture."   }
         
             )

            
        message.channel.send(newEmbed);

        const newEmbed2 = new Discord.MessageEmbed()
        .setColor('#42daf5')
        .setTitle('●▬ ◤•Guidelines:-•◢ ▬●')
        .setURL('https://discord.gg/CVpj667jUu')
     
        .setThumbnail('https://i.pinimg.com/originals/65/83/d1/6583d1e27e4cfd22a96c5f48acedadf5.jpg')
        .addFields(
            {name:"Partnership rule", value:"Being a partnerd server we must follow some guidelines from Discord to keep the decorum of Discord Partners. Following are some guidelines."},

            {name:"Community Guidelines",
            value:" https://discord.com/new/guidelines"},

            {name:" Terms Of Service", 
            value:"https://discord.com/new/terms"}
            )
            message.channel.send(newEmbed2);
        }
}



