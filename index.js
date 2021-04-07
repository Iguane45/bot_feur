const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready' , function(){
    bot.user.setAvatar('./feured.jpg').catch(console.error)
    bot.user.setActivity('feured Yohan').catch(console.error)

})


bot.on('message' , function(message){
    message.content.toLowerCase()
    let msg = message.content.split(' ')
    let index = msg.length - 1
    if(msg[index] === 'quoi' ||
        msg[index] === 'quoi.' ||
        //msg[index] === 'QUOI' ||
        //msg[index] === 'POURQUOI'||
        msg[index] === 'pourquoi' ||
        //msg[index] === 'Quoi' ||
        //msg[index] === 'Pourquoi' ||
        msg[index - 1] === 'quoi'  ||
        msg[index - 1] === 'pourquoi'
        //msg[index - 1] === 'Pourquoi'  ||
        //msg[index - 1] === 'Quoi'  ||
        //msg[index - 1] === 'QUOI' ||
        //msg[index - 1] === 'POURQUOI'
        ) {

        message.channel.send('feur')
    }
})


bot.login(process.env.TOKEN)
