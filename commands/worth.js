module.exports ={
    name: 'worth',
    description : "this is a ping command!",
    execute(client, message, args, Discord){
        message.channel.send('The current worth of Dikcorps is $999,999,112,440,068')
    }
}