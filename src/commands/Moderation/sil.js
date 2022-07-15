import embed from "../../utils/bot/embed.js"
export default{
    name:"sil",
    description:"Belirtilen sayıda mesajı siler",
    usage:"!sil <sayı>",
    permissions:"MANAGE_MESSAGES",
    async execute(message, args){
        if(args.length>1) return message.reply({embeds:[embed(`Birden fazla parametre giremezsin!`, "","RED")]}).then(msg => {
            setTimeout(() => msg.delete(), 3000)
          })

        if(args[0]>30) return message.reply({embeds:[embed(`30 mesajdan fazlasını silemezsin!`, "","RED")]}).then(msg => {
            setTimeout(() => msg.delete(), 3000)
          })

        try {
            await message.channel.bulkDelete(args[0])
            message.channel.send({embeds:[embed(`${args[0]} mesaj başarıyla silindi`, "","GREEN")]}).then(msg => {
                setTimeout(() => msg.delete(), 3000)
              })
        } catch (e) {
            console.log(e)
            message.reply({embeds:[embed("Bir hata meydana geldi!", "", "RED")]})
        }
        
    }

}