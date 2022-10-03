import * as database from "../../utils/database/mongoose_methods.js"
import * as serverdata from "../../utils/database/mongoose_methods_sv.js"
import embed from "../../utils/bot/embed.js"


export default{
    name:"bakiye",
    description:"",
    usage:"",
    permissions:"SEND_MESSAGES",
    async execute(message, args){
        //durum sorgulama
        const sv_data = await serverdata.fetch(message.guild.id)
        if(!sv_data.economy) return


        const data = await database.fetch(message.member.id)
        message.reply({embeds:[embed(`Mevcut bakiyen:\n${data.balance} Kasaba Jetonu`, "Şu Cüzdana Bir Bakalım", "#0066ff")]})
    }
}