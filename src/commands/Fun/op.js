import { MessageEmbed } from "discord.js"

export default{
    name:"op",
    description:"",
    usage:"",
    permissions:"SEND_MESSAGES",
    execute(message, args){
        var target = message.mentions.members.first()
        var userID = message.member.id
        
        const embed = new MessageEmbed()
            .setThumbnail("https://media.tenor.com/images/45a799f31a273318e1c3f78490f5e34d/tenor.gif")
            .setDescription(`<@${target.id}>, <@${userID}> Seni öpücüklere boğdu.`)
            .setTitle("^-^")
            //.setAuthor({name:message.member.nickname, iconURL:message.member.displayAvatarURL()})
            //?.setFooter({text:"Bunun gibi komutları listelemek için bot-komut kanalına !eglence yaz.", iconURL:message.client.user.displayAvatarURL()})
        message.channel.send({embeds: [embed]})
    }

}