import * as database from "../../utils/database/mongoose_methods_sv.js"
import embed from "../../utils/bot/embed.js"
import "dotenv/config";

export default{
    name:"ekonomi",
    description:"",
    usage:"",
    permissions:"ADMINISTRATOR",
    async execute(message, args){
        if(process.env.owner_id != message.member.id) return message.reply({embeds:[embed(``, "Sen Ekonomist Değilsin!", "RED")]})
        const data = await database.fetch(message.guild.id)
        if(args.length ===0){
            return data.economy ? message.reply({embeds:[embed(``, "Ekonomi Aktif Durumda", "GREEN")]}) : message.reply({embeds:[embed(``, "Ekonomi Kapalı Durumda", "RED")]})
        }
        else{
            const opt = args[0]
            return opt === "aç" ? await database.update(message.guild.id, {economy: true}) : opt==="kapat" ? await database.update(message.guild.id, {economy: false}) : message.reply({embeds:[embed(``, "Hatalı Komut Kullanımı", "RED")]})
        }


        
    }
}