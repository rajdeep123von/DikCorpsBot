const Discord = require('discord.js');

const client = new Discord.Client({partials:["MESSAGE", "CHANNEL", "REACTION"]});

const { CanvasSenpai } = require("canvas-senpai")

const canva = new CanvasSenpai();

const canvacord = require("canvacord")

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler', 'premium_commands_handler'].forEach(handler=>{
    require(`./handlers/${handler}`)(client, Discord);
})


/*client.on('guildMemberAdd', async member =>{
    //copy your server ID
    if(member.guild.id !== "863002027981799444") return; 
    const welcomeCard = new canvacord.Welcomer()
    .setUsername(member.user.username)
    .setDiscriminator(member.user.discriminator)
    .setAvatar(member.user.displayAvatarURL({format:"png"}))
    .setColor("title","#ffffff")
    //.setColor("username-box","#00000000")
   // .setColor("discriminator-box", "#befc03")
    //.setColor("message-box", "#befc03")
      .setColor("border", "#00000000")
   // .setColor("avatar", "#befc03")
    .setBackground("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/509d2bc0-5ba0-4559-86fa-868910a260d8/d8hxlfg-f94ddf3b-4a7b-40db-8db2-070c1731d319.png/v1/fill/w_1024,h_576,q_80,strp/kingsman_logo_wallpaper_by_a1samurai_d8hxlfg-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvNTA5ZDJiYzAtNWJhMC00NTU5LTg2ZmEtODY4OTEwYTI2MGQ4XC9kOGh4bGZnLWY5NGRkZjNiLTRhN2ItNDBkYi04ZGIyLTA3MGMxNzMxZDMxOS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.kpf93L3tGBaHjy7ln2edUNUHzyOXL6iIo7Hib9dJkxs")
    .setMemberCount(member.guild.memberCount)
    let attachment = new Discord.MessageAttachment(await welcomeCard.build(), "welcome.png")
     //copy your channel id
    member.guild.channels.cache.get("865145897986031636").send(member.user.toString(), attachment)
})

client.on('guildMemberAdd', async member =>{
    //copy your server ID
    if(member.guild.id !== "863002027981799444") return; 
    const leaverCard = new canvacord.Leaver()
    .setUsername(member.user.username)
    .setDiscriminator(member.user.discriminator)
    .setAvatar(member.user.displayAvatarURL({format:"png"}))
    .setColor("title","#ffffff")
    //.setColor("username-box","#00000000")
   // .setColor("discriminator-box", "#befc03")
    //.setColor("message-box", "#befc03")
      .setColor("border", "#00000000")
   // .setColor("avatar", "#befc03")
    .setBackground("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/509d2bc0-5ba0-4559-86fa-868910a260d8/d8hxlfg-f94ddf3b-4a7b-40db-8db2-070c1731d319.png/v1/fill/w_1024,h_576,q_80,strp/kingsman_logo_wallpaper_by_a1samurai_d8hxlfg-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvNTA5ZDJiYzAtNWJhMC00NTU5LTg2ZmEtODY4OTEwYTI2MGQ4XC9kOGh4bGZnLWY5NGRkZjNiLTRhN2ItNDBkYi04ZGIyLTA3MGMxNzMxZDMxOS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.kpf93L3tGBaHjy7ln2edUNUHzyOXL6iIo7Hib9dJkxs")
    .setMemberCount(member.guild.memberCount)
    let attachment = new Discord.MessageAttachment(await leaverCard.build(), "leave.png")
    //copy your channel id
    member.guild.channels.cache.get("865145897986031636").send(member.user.toString(), attachment)
})*/


client.login('')

//05ODY0ODQ5MjU5ODMxNjIzNzAw.YO7bow.0WPVRsSW_KtpwytPj2-7rMB9ci805
