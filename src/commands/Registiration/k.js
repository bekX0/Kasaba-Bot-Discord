import { Collection, MessageEmbed } from "discord.js"
import embed from "../../utils/bot/embed.js"
import "dotenv/config"

export default{
    name:"k",
    description:"Yeni kız üyeleri kayıt etmek için kullanılır.",
    usage:"!k <isim> <yaş>",
    permissions:"MANAGE_NICKNAMES",
    async execute(message, args){
        if (args.lenght>3) return message.reply({embeds:[embed("Çok fazla parametre girdin!!", "Hata!", "RED")]})
        var user = message.mentions.members.first()
        if(!user) return message.reply({embeds:[embed("Kullanıcı girilmedi!", "Hata!", "RED")]})
        const channel = message.guild.channels.cache.get(`${process.env.reglog}`)
        const name= args[1]
        const age =args[2]
        const g_roles =['968229418453565511', '968553308769882174']
        const r_roles= '968235875232264252'


        try {
            await user.roles.add(g_roles)
            await user.roles.remove(r_roles)
            await user.setNickname(`${name} » ${age}`)
        } catch (error) {
            console.log(error)
            message.reply({embeds:[embed("Bir hata oluştu!", "", "RED")]})
        }
        const mesaj = new MessageEmbed()
            .setThumbnail(user.displayAvatarURL())
            .setFooter({text:message.author.username, iconURL:message.author.displayAvatarURL()})
            .setTitle("Bir kullanıcı kayıt edildi!")
            .setDescription(`Kaydedilen kullanıcı <@${user.id}>`)
        
        try {
            channel.send({embeds:[mesaj]})
            user.send({embeds:[embed(`Sunucumuza kayıt oldunuz.\nAramıza hoş geldin <@${user.id}>, kuralları okumayı unutma.`, "Hoşgeldin!", "GREEN")]})
        } catch (error) {
            console.log(error)
        }
        
        
    }

}