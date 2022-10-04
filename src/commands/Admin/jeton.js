import * as database from "../../utils/database/mongoose_methods.js"
import embed from "../../utils/bot/embed.js"
import "dotenv/config";

export default{
    name:"jeton",
    description:"",
    usage:"",
    permissions:"ADMINISTRATOR",
    async execute(message, args){
        if(process.env.owner_id != message.member.id) return message.reply({embeds:[embed(``, "Sen Ekonomist Değilsin!", "RED")]})
        //jeton ver @koray 100
        const member = message.mentions.members.first()
        const opt = args[0]
        const value = parseInt(args[2])
        const data = await database.fetch(member.id)
        const balance = data.balance
        if(value<0) return message.reply({embeds:[embed(``, "Geçersiz Kullanım", "RED")]})
        if(args.length<3){
            return ({embeds:[embed(``, "Eksik Argüman", "RED")]})
        }
        else if(args[0]==='ver'){
            await database.update(member.id, {balance: balance + value})
            message.reply({embeds:[embed(`<@${member.id}> adlı kişiye ${balance} Kasaba Jetonu Verildi!\n Yeni Bakiyesi :${balance+value}`, "FIRRR! PARALAR SAÇILDI", "#80ff80")]}) 
        }
        else if(args[0]==='al'){
            await database.update(member.id, {balance: balance - value})
            message.reply({embeds:[embed(`<@${member.id}> adlı kişiden ${balance} Kasaba Jetonu Alındı!\n Yeni Bakiyesi :${balance-value}`, "VEGILENDIN!", "#cc33ff")]}) 
        }
        else if(args[0]==='belirle'){
            await database.update(member.id, {balance: value})
            message.reply({embeds:[embed(`<@${member.id}> adlı kişiye ${value} Kasaba Jetonu Belirlendi!\n Yeni Bakiyesi :${value}`, ":))", "#cc33ff")]}) 
        }
        else{
            message.reply({embeds:[embed(``, "HATALI KULLANIM", "RED")]}) 
        }

        
    }
}