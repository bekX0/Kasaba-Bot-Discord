import embed from "../../utils/bot/embed.js"

export default{
    name:"sil",
    description:"Belirtilen sayıda mesajı siler",
    usage:"!sil <sayı>",
    permissions:"MANAGE_MESSAGES",
    execute(message, args){

        // try {
        //     message.channel.bulkDelete(args[0])
        //     message.channel.send({embeds:[embed(`${args[0]} mesaj başarıyla silindi`, "","GREEN")]})
        // } catch (e) {
        //     console.log(e)
        //     message.reply({embeds:[embed("Bir hata meydana geldi!", "", "RED")]})
        // }
        
    }

}