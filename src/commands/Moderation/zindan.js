import embed from "../../utils/bot/embed.js"
export default{
    name:"zindan",
    description:"",
    usage:"",
    permissions:"MANAGE_NICKNAMES",
    async execute(message, args){
        const user = message.mentions.members.first()
        console.log(user.roles.cache.map(role => role.id))
        if(user.roles.cache.map(role => role.id).includes('1015674944232902667')){
            try{
                await user.roles.remove('1015674944232902667')
                message.reply({embeds:[embed(`<@${user.id}> adlı kişi zindandan başarıyla çıkarıldı!\n Umarım artık iyi bir insan olur...`, "ÖZGÜRLÜÜÜK!", "GREEN")]})
            }catch(e){
                message.reply({embeds:[embed(`Özgürleştirme işlemi başarısız oldu. Yetkililer bununla ilgilenecek...`, "Üzgünüm!", "RED")]})
                console.log(e)
            }
        }else{
            
            try{
                await user.roles.add('1015674944232902667')
                message.reply({embeds:[embed(`<@${user.id}> adlı kişi zindana tekmelendi!\n Cezası bittiğinde onu zindandan çıkarmayı unutma.🥺🥺`, "ZİNDANA YOLCULUK!", "GREEN")]})
            }catch(e){
                message.reply({embeds:[embed(`Zindana atma işlemi başarısız oldu. Yetkililer bununla ilgilenecek...`, "Üzgünüm!", "RED")]})
                console.log(e)
            }
        }

        
        
    }

}