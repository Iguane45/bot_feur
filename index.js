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
    let gifs = ['https://tenor.com/view/girls-und-panzer-bt42-tank-tank-jump-bt7artillery-gif-20965914' , 'https://tenor.com/view/erika-girls-und-panzer-itsumi-erika-gif-21051842',
                'https://tenor.com/view/girls-und-panzer-gif-18965538' , 'https://tenor.com/view/girls-und-panzer-gif-17972911',
                'https://tenor.com/view/karl-ger%c3%a4t-girls-und-panzer-panther-girls-und-panzer-der-film-crash-gif-16912794' , 'https://tenor.com/view/girls-un-panzer-gif-10583885',
                'https://tenor.com/view/tulta-girls-und-panzer-mika-anime-gif-16931590' , 'https://tenor.com/view/tank-anime-girls-und-panzer-epic-fight-gif-14056386',]


    if(message.author.tag === 'Eboo#2291') {
        message.channel.send('nigger')
    }
    if(message.author.tag === 'Iguane45#7177') {
        let res = Math.random() * gifs.length
        message.channel.send(gifs[res])
    }
})


bot.login(process.env.TOKEN)
