const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready' , function(){
    bot.user.setAvatar('./feured.jpg').catch(console.error)
    bot.user.setActivity('feured Yohan').catch(console.error)

})


bot.on('message' , function(message){
    let tab = ['quoi' , 'quoI' , 'quOi' , 'quOI' , 'qUoi' , 'qUoI' , 'qUOi' , 'qUOI' , 'Quoi' , 'QuoI' , 'QuOi' , 'QuOI' , 'QUoi' , 'QUoI' , 'QUOi' , 'QUOI' ,
            'pourquoi' , 'Pourquoi' , 'pk' , 'tfk' , 'Pk' , 'pK' , 'PK' , 'tfK' , 'tFk' , 'tFK' , 'Tfk' , 'TfK' , 'TFk' , 'TFK']
    let msg = message.content.split(' ')
    let index = msg.length - 1
    for(let i = 0 ; i < tab.length ; i++) {
        if(msg[index] === tab[i] || msg[index - 1] === tab[i]) {
            message.channel.send('feur')
        }
    }

})


bot.login(process.env.TOKEN)
