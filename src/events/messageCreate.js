import { MessageEmbed } from "discord.js"
import "dotenv/config"
import * as database from "../utils/database/mongoose_methods.js" 

const prefix = process.env.prefix
export default client =>{
    client.on("messageCreate",async message =>{
        //?db create sonradan hata vermemeli iptal edildi
        // try {
        //     await database.fetch(message.member.id)
        // } catch (error) {
        //     console.log(error)
        // }



        //Message LOG
        //! admin kanalları görmezden gelmeli 
        //? sadece özel kelime içerenleri gösterebilir(daha az yük) 
        //* embed özelleştirilebilir
        // const channel= message.guild.channels.cache.get(process.env.messlog)
        // const mesembed = new MessageEmbed()
        //     .setTitle("Yeni Mesaj")
        //     .setFooter({text:".", iconURL:message.author.displayAvatarURL()})
        //     .addField("Kullanıcı:", `<@${message.author.id}>`)
        //     .addField("Kanal:", `<#${message.channel.id}>`)
        //     .setDescription(`${message.content}`)
        // if(!message.author.bot && message.channel.id!=process.env.messlog){
        //     channel.send({embeds:[mesembed]})
        // }





        //Sosyal Medya Kontrol
        const channels = ['968246333741862982', '968246148773077002', '968246933015633920', '968252747168227409']
        if((message.content.startsWith(prefix)== false) && !message.author.bot){
            channels.forEach(channel => {
                if(channel== message.channel.id){
                    try {
                        message.react(message.client.emoji("upvote"))
                        message.react(message.client.emoji("downvote"))
                    } catch (error) {
                        console.log(error)
                    }
                    
                }
            });
        }
        //Command Check
        if (message.content.startsWith(prefix)== false) return

        const args = message.content.slice(prefix.length).trim().split(/ +/)
        const commandName = args.shift().toLowerCase()
        
        const command = client.commands.get(commandName)
        if(!command) return
        if(command.permissions && message.member.permissions.has(command.permissions)){
        }
        else{
            return message.reply({embeds:[client.embed(`Komudu çalıştırmam için ${command.permissions} yetkisine sahip olman gerekiyor!`, "Yetkin Yok!", "INFO")]})
        } 
        try {
            command.execute(message, args)
        } catch (e) {
            if(e.code == 50034) return message.reply({embeds:[client.embed(`14 günden daha eski mesajları silemem 😢`)]})
            console.log(e)
            message.reply({embeds:[client.embed(`Komut şu anda çalışmıyor!`)]})
        }
    })  
}