import * as database from "../../utils/database/mongoose_methods.js"
import embed from "../../utils/bot/embed.js"
import * as serverdata from "../../utils/database/mongoose_methods_sv.js"
import {Collection} from "discord.js"
const cooldowns = new Collection()

export default{
    name:"çek",
    description:"",
    usage:"",
    permissions:"SEND_MESSAGES",
    async execute(message, args){
        //durum sorgulama
        const sv_data = await serverdata.fetch(message.guild.id)
        if(!sv_data.economy) return
        
        const now = Date.now()
        const member_id = message.member.id
        const data = await database.fetch(member_id)
        const balance = data.balance +100
        
        if(cooldowns.has(member_id)){
            const expiration = cooldowns.get(member_id) + 86400000
            if(now<expiration){
                const timeLeftH = Math.trunc((expiration-now)/3600000)
                const timeLeftM = Math.ceil((timeLeftH-((expiration-now)/3600000))*-60)
                message.reply({embeds:[embed(`Sürekli çalışmak istiyorsun demek.\n ${timeLeftH} saat ${timeLeftM} dakika sonra yine gel`, "Ayın Çalışanı", "RED")]})
            }
            return
        }
        else{
            cooldowns.set(member_id, now)
            setTimeout(() => {
                cooldowns.delete(member_id)
            }, 86400000);
            
        }
        try {
            database.update(member_id, {balance})
            message.reply({embeds:[embed(`${message.member.nickname} mevcut bakiyen:\n${balance} Kasaba Jetonu`, "Bugünü De Çıkardık!", "GREEN")]})
        } catch (error) {
            console.log(error)
        }
    }
}