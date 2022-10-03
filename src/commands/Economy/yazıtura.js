import * as database from "../../utils/database/mongoose_methods.js"
import embed from "../../utils/bot/embed.js"
import * as serverdata from "../../utils/database/mongoose_methods_sv.js"

export default{
    name:"yazıtura",
    description:"",
    usage:"",
    permissions:"SEND_MESSAGES",
    async execute(message, args){
        //durum sorgulama
        const sv_data = await serverdata.fetch(message.guild.id)
        if(!sv_data.economy) return

        const member_id = message.member.id
        const data= await database.fetch(member_id)
        const opt = args[0]
        const deal = parseInt(args[1])
        const balance =data.balance
        // geçersiz argüman
        if(!opt || !deal) return message.reply({embeds:[embed(``, "Geçersiz Kullanım", "RED")]})
        //yetersiz bakiye
        if(balance<deal) return message.reply({embeds:[embed(`Biraz çalışmayı dene...`, "Paran Yok", "RED")]})
        //şans
        const chance = Math.floor(Math.random() * 10) +1
        let winner = chance<6 ? 't' : 'y'
        if(winner === opt){
            await database.update(member_id, {balance: balance + deal})
            message.reply({embeds:[embed(`${message.member.nickname} mevcut bakiyen:\n${balance + deal}`, "Kazandın!!", "#4dff4d")]})
        }
        else{
            await database.update(member_id, {balance: balance - deal})
            message.reply({embeds:[embed(`${message.member.nickname} mevcut bakiyen:\n${balance - deal}`, "Kaybettin...", "#ffff4d")]})
        }
    }
}