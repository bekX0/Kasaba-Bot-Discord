import { Collection, MessageActionRow, Modal, TextInputComponent } from "discord.js"
import embed from "../utils/bot/embed.js"

export default client =>{
    client.on("interactionCreate", async interaction =>{
        // Oda BUTONU
        if(interaction.isButton()){
            if (interaction.customId === 'oda'){
                const channelcheck = client.VoiceManager.get(interaction.member.id)
                if(channelcheck != null){
                    interaction.reply({embeds:[embed(`Zaten bir odan bulunmakta! \n\n----- <#${channelcheck}> -----`, "Spam!", "RED")] ,ephemeral:true})
                    return
                }
                let modal = new Modal()
                    .setCustomId("oda-form")
                    .setTitle("Oda Oluştur")
                    .addComponents([
                        new MessageActionRow({
                            components:[
                                new TextInputComponent()
                                    .setCustomId("oda-adı")
                                    .setLabel("Oda Adı")
                                    .setPlaceholder("Oda adınızı giriniz. (Max Karakter 10)")
                                    .setMinLength(1)
                                    .setMaxLength(10)
                                    .setStyle("SHORT")
                            ]
                        }),
                    ])
                interaction.showModal(modal)
            }
        }

        if(interaction.isModalSubmit()){
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
                interaction.reply({embeds:[embed(`Odaya uçmak için tıkla! 🚀🚀\n\n----- <#${channel.id}> -----`, "Odan açıldı!", "INFO")] ,ephemeral:true})
            }
        }
    })
}