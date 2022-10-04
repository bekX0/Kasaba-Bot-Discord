import * as database from "../../utils/database/mongoose_methods.js"
import embed from "../../utils/bot/embed.js"
import * as serverdata from "../../utils/database/mongoose_methods_sv.js"

export default{
    name:"hediye",
    description:"",
    usage:"",
    permissions:"SEND_MESSAGES",
    async execute(message, args){
        
        const server_data = await serverdata.fetch(message.guild.id)
        const value = Math.floor(parseInt(args[1]))
        //ekonomi kontrol
        if(!server_data.economy) return
        // argüman kontrol
        const target = message.mentions.members.first().id
		const target_balance= await database.fetch(target)
        if(!target || value == undefined) return message.reply({embeds:[embed(``, "Hatalı Kullanım!", "RED")]}) 
        //negatif sayı önleme
        if(value<1) return message.reply({embeds:[embed(`Bir sayı gir veya 0 dan büyük bir sayı dene!`, "Hatalı Kullanım!", "RED")]}) 
        //yeterli bakiye sorgusu
        const user_data = await database.fetch(message.member.id)
        let balance = user_data.balance
        if(balance<value) return message.reply({embeds:[embed(``, "Paran Yetersiz!", "#ffff66")]}) 

        try {
            await database.update(target, {balance: target_balance.balance+value})
            await database.update(message.member.id, {balance: balance-value})
            message.reply({embeds:[embed(`<@${target}>, <@${message.member.id}> sana ${value} Kasaba Jetonu`, "Hediyelendin!", "#4da6ff")]})
        } catch (error) {
            console.log(error)
            console.log("hediye.js hata verdi")
        }

    }
}