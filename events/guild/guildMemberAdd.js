
module.exports = (Discord,  guildMember, member)=>{
   
    var role= member.guild.roles.cache.find(role => role.name === "Default");
    member.roles.add(role);

       


    const channel = member.guild.channels.cache.find(channel => channel.name === "welcome")
    if (!channel) return;

    const joinembed = new Discord.MessageEmbed()
    .setTitle(`Bhailog! Naya Maal Aa Gaya!`)
    .setDescription(`Welcome ${member.user.username} we hope you enjoy your stay here!`)
    .setColor("#FF0000")
    .setImage('https://media.giphy.com/media/IGyQqBNbccyHCllRlw/giphy.gif') 
    channel.send(joinembed)
    
   

}
   /*
   
     const channel = member.guild.channels.cache.find(channel => channel.name === "welcome")
     if (!channel) return;

 }





/*

module.exports = (Discord, guildMember, member)=>{

   
   /*let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Default');


    const channel = guildMember.guild.channels.cache.find(channel => channel.name === "welcome")
    if (!channel) return;

   /* const joinembed = new Discord.MessageEmbed()
    .setTitle(`Bhailog! Naya Maal Aa Gaya!`)
    .setDescription(`Welcome ${guildMember} we hope you enjoy your stay here!`)
    .setColor("#FF0000")
    .setImage('https://media.giphy.com/media/IGyQqBNbccyHCllRlw/giphy.gif') 
    channel.send(joinembed)
    
   

*/