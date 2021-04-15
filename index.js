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
                'https://tenor.com/view/tulta-girls-und-panzer-mika-anime-gif-16931590' , 'https://tenor.com/view/tank-anime-girls-und-panzer-epic-fight-gif-14056386',
                'https://tenor.com/view/anime-girls-und-panzer-tank-carro-veloce-gif-15974029' , 'https://tenor.com/view/anime-girls-und-panzer-tank-carro-veloce-gif-15974029',
                'https://tenor.com/view/anime-girls-und-panzer-tank-mika-bt42-gif-15974870' , 'https://tenor.com/view/tank-anime-girls-und-panzer-epic-fight-gif-14056386',
                'https://tenor.com/view/girls_und_panzer-gif-9319383' , 'https://tenor.com/view/girls-und-panzer-bermuda-trio-bermuda-attack-m26pershing-tank-gif-15963133',
                'https://tenor.com/view/girls-und-panzer-tank-panzer-panzer-kampf-wagen-jump-gif-9404467' , 'https://tenor.com/view/gup-girls-und-panzer-maus-duck-team-explosion-gif-5807309',
                'https://tenor.com/view/girls-und-panzer-dorifto-panzer-pziv-pzvi-gif-11981925' , 'https://tenor.com/view/girls-un-panzer-gif-10583895',
                'https://tenor.com/view/girls-und-panzers-girl-und-panzers-panzers-ammo-strong-gif-18968119' , 'https://tenor.com/view/girls-und-panzer-bermuda-trio-bermuda-attack-m26pershing-tank-gif-15963130',
                'https://tenor.com/view/girls-und-panzer-looking-tank-anime-cute-gif-16657850' , 'https://tenor.com/view/anime-girls-und-panzer-tank-crusader-jump-gif-15974814',
                'https://tenor.com/view/girls-und-panzer-anime-tanks-gif-5613355' , 'https://tenor.com/view/miho-nishizumi-girls-und-panzer-panzer-anime-gif-19004847']


    if(message.author.tag === 'Eboo#2291') {
        message.channel.send('nigger')
    }
    if(message.author.tag === 'jtitan6#5240') {
        let res = Math.floor(Math.random() * gifs.length)
        message.channel.send(gifs[res])
    }
})


bot.login(process.env.TOKEN)
