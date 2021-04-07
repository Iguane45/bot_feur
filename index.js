const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready' , function(){
    bot.user.setAvatar('./feured.jpg').catch(console.error)
    bot.user.setActivity('feured Yohan').catch(console.error)

})


bot.on('message' , function(message){
    let lower = message.content.toLowerCase()
    let msg = lower.split(' ')
    let index = msg.length - 1


    if(msg[index] === 'quoi' ||
        msg[index] === 'pourquoi' ||
        msg[index] === 'pk' ||
        msg[index] === 'tfk' ||
        msg[index - 1] === 'quoi' ||
        msg[index - 1] === 'pourquoi' ||
        msg[index - 1] === 'pk' ||
        msg[index - 1] === 'tfk'
    ) {
        message.channel.send('feur')
    }


})


bot.login(process.env.TOKEN)
