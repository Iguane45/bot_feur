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
    let res = ['quoi' , 'pourquoi','pk','pq','tfk','tfq','koi','pourkoi','coi']

    for(let i = 0 ; i < res.length ; i++) {
        if(msg[index] === res[i] || msg[index - 1] === res[i]) {
            message.channel.send('feur')
        }
    }
})

bot.on('message' , function(message) {
    if(message.author.tag === 'Eboo#2291') {
        message.channel.send('nigger')
    }
})


bot.login(process.env.TOKEN)
