import { MessageEmbed } from "discord.js"

export default{
    name:"oldur",
    description:"",
    usage:"",
    permissions:"SEND_MESSAGES",
    execute(message, args){
        var target = message.mentions.members.first()
        var userID = message.member.id
        const embed = new MessageEmbed()
            .setThumbnail("https://data.whicdn.com/images/328996441/original.gif")
            .setDescription(`<@${target.id}>, <@${userID}> Seni öldürdü!`)
            .setTitle("X_X")
            //.setAuthor({name:message.member.nickname, iconURL:message.member.displayAvatarURL()})
            //?.setFooter({text:"Bunun gibi komutları listelemek için bot-komut kanalına !eglence yaz.", iconURL:message.client.user.displayAvatarURL()})
        message.channel.send({embeds: [embed]})
    }

}