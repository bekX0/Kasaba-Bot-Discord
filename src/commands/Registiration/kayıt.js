import { Collection, MessageEmbed } from "discord.js"
import embed from "../../utils/bot/embed.js"
export default{
    name:"kayıt",
    description:"",
    usage:"",
    permissions:"SEND_MESSAGES",
    execute(message){
        if (message.channel.id != '992538919084236880') return
        const user = message.author
        message.reply({embeds:[embed(`${message.member.nickname} lütfen kayıt kanalına bağlanıp bir yetkili etiketle!\n\nOdaya uçmak için tıkla! 🚀🚀\n\n----- <#968238101166182400> -----, `, "Hoşgeldin Ziyaretçi!", "INFO")]})
        
        
        
    }
}