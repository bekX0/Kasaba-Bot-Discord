import { Collection, MessageActionRow, Modal, TextInputComponent } from "discord.js"
import embed from "../bot/embed.js"

export default async interaction =>{
    const client = interaction.client
    // ODA FORMU
    if(interaction.customId ==="oda-form"){
        const member = interaction.member
        //TODO: silme ve fazla giriş engellenecek
        const title = interaction.fields.getTextInputValue("oda-adı")
        const guild = interaction.guild
        const parent =interaction.channel.parent
        // if(interaction.fields.getTextInputValue("lock") == "EVET"){
        //     deny = ['996532150042116148', '968229418453565511']
        // }else if(interaction.fields.getTextInputValue("lock") =="HAYIR"){
        //     deny = ['996532150042116148']
        // }else{
        //     interaction.reply({embeds:[embed("Yanlış parametre girildi!", "Hata!", "RED")] ,ephemeral:true})
        // }
        const channel = await guild.channels.create(title,{
            type:2,
            parent: parent,
            permissions:{
                deny: ['996532150042116148']
            }
        })
        try {
            await member.voice.setChannel(channel)
            
        }catch (e){
            
        }
        
        client.VoiceManager.set(member.id, channel.id)
        
        await interaction.reply({embeds:[embed(`Odaya uçmak için tıkla! 🚀🚀\n\n10 saniye içinde bağlanmazsan bu oda kendini imha edecektir! \n\n----- <#${channel.id}> -----`, "Odan açıldı!", "INFO")] ,ephemeral:true})
        try {
            setTimeout(() => {
                channel.fetch()
                if(channel.members.size==0){
                    channel.delete()
                    client.VoiceManager.set(member.id, null)
                } 

            }, 10000);
            
        } catch (error) {
            console.log(error)
        }
    }



    //Oda limit formu
    if(interaction.customId ==="oda-form-limit"){
        const limit = parseInt(interaction.fields.getTextInputValue("oda-limit"))
        const roles =['968550228967960606', '968550489723646042', '968550941685063740']//2
        const channel = interaction.guild.channels.cache.get(`${client.VoiceManager.get(`${interaction.member.id}`)}`) 
        if(!channel) return

        // if(limit == 0){
        //     try {
        //         await channel.permissionOverwrites.edit(roles, {
        //             VIEW_CHANNEL: false,
        //             JOIN_CHANNEL: false,
        //             SEND_MESSAGES: false,
        //             READ_MESSAGE_HISTORY: false,
        //         });
        //         await interaction.reply({embeds:[embed("", `Odayı Kilitledim! ${client.emoji("onaylandi")}`, "INFO")] ,ephemeral:true})
        //     } catch (error) {
        //         console.log(error)
        //     }
        // }

        try {
            
            channel.setUserLimit(limit)
            await interaction.reply({embeds:[embed("", `Limit Değiştirildi! ${client.emoji("onaylandi")}`, "INFO")] ,ephemeral:true})
        } catch (error) {
            console.log(error)
        }
    }
}
