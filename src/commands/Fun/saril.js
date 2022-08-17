import { MessageEmbed } from "discord.js"

export default{
    name:"saril",
    description:"",
    usage:"",
    permissions:"SEND_MESSAGES",
    execute(message, args){
        var target = message.mentions.members.first()
        var userID = message.member.id
        if(!target) return message.reply("Kimseye sarılmayacak mısın? :(")
        if(userID == target.id){
            const embed = new MessageEmbed()
            .setThumbnail("https://c.tenor.com/GwFP_tY-jmQAAAAC/hug-hugs-and-love.gif")
            .setDescription(`Kasaba halkı seni seviyor <3`)
            .setTitle("Birileri yalnız hissediyor :(")
            message.channel.send({content: `<@${target.id}>`, embeds: [embed]})
            return
        }
        const embed = new MessageEmbed()
            .setThumbnail("https://c.tenor.com/OXCV_qL-V60AAAAC/mochi-peachcat-mochi.gif")
            .setDescription(`<@${target.id}>, <@${userID}> Sana sımsıkı sarılıyor.`)
            .setTitle("Teselli zamanı!")
            //.setAuthor({name:message.member.nickname, iconURL:message.member.displayAvatarURL()})
            //?.setFooter({text:"Bunun gibi komutları listelemek için bot-komut kanalına !eglence yaz.", iconURL:message.client.user.displayAvatarURL()})
        message.channel.send({content: `<@${target.id}>`, embeds: [embed]})
    }

}