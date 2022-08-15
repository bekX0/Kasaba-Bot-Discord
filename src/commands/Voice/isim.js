import embed from "../../utils/bot/embed.js"
export default{
    name:"isim",
    description:"Odanızın adını değiştirmek için bu komudu kullanın.",
    usage:"!isim <yeni kanal adı>",
    permissions:"SEND_MESSAGES",
    execute(message, args){
        const client = message.client
        if (args.lenght>1) return message.reply({embeds:[embed("Çok fazla parametre girdin!!", "Hata!", "RED")]})
        
    }

}