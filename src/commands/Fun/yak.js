import { MessageEmbed } from "discord.js"

export default{
    name:"yak",
    description:"",
    usage:"",
    permissions:"SEND_MESSAGES",
    execute(message, args){
        var userID = message.member.id
        const embed = new MessageEmbed()
            .setThumbnail("https://cdn.discordapp.com/emojis/714255663945089054.gif?v=1")
            .setDescription(`<@${userID}> Bir sigara yaktı...\n(İki elinle siper et!!)`)
            .setTitle("Agaaa...")
            //.setAuthor({name:message.member.nickname, iconURL:message.member.displayAvatarURL()})
            //?.setFooter({text:"Bunun gibi komutları listelemek için bot-komut kanalına !eglence yaz.", iconURL:message.client.user.displayAvatarURL()})
        message.channel.send({embeds: [embed]})
    }

}