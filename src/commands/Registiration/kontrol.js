import { Collection, MessageEmbed } from "discord.js"
import embed from "../../utils/bot/embed.js"
export default{
    name:"kontrol",
    description:"Üyelerin bilgilerini listeler",
    usage:"!kontrol @kullanıcı",
    permissions:"MANAGE_NICKNAMES",
    execute(message){
        var user = message.mentions.members 
        if(user.size==0) return message.reply({embeds:[embed("Kullanıcı girilmedi!", "Hata!", "RED")]})
        console.log(user)
        user.forEach(member => {
            var mesaj = new MessageEmbed()
                .setTitle("Gizli Dosya 🕵️")
                .setColor("#A8A4CE")
                .addField("Tag", `${member.user.tag}`, true)
                .addField("ID", `${member.id}`, true)
                .addField("NITRO Zamanı", `${member.premiumSince}`, true)
                .addField("Sunucuya katılma tarihi", `${member.joinedAt}`, false)
                .addField("Hesap Oluşturma tarihi", `${member.user.createdAt}`, false)
                .setThumbnail(member.displayAvatarURL())
            message.reply({embeds:[mesaj]})
        });
        
        
    }
}