import { Collection, MessageActionRow, Modal, TextInputComponent } from "discord.js"
import embed from "../bot/embed.js"


export default async interaction =>{
    const client = interaction.client
    //oda butonu
    if (interaction.customId === 'oda'){
        const channelcheck = client.VoiceManager.get(interaction.member.id)
        if(channelcheck != null){
            //interaction.component.setStyle("DANGER");
            //await interaction.update({components:[ new MessageActionRow().addComponents(interaction.component)]})
            await interaction.reply({embeds:[embed(`Zaten bir odan bulunmakta! \n\n----- <#${channelcheck}> -----`, "Spam!", "RED")] ,ephemeral:true})
            
            
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

    if(interaction.customId === 'oda_limit'){
        let modal = new Modal()
            .setCustomId("oda-form-limit")
            .setTitle("Odayı Limitle")
            .addComponents([
                new MessageActionRow({
                    components:[
                        new TextInputComponent()
                            .setCustomId("oda-limit")
                            .setLabel("Oda Limiti")
                            .setPlaceholder("Yeni limiti girin. Odayı kilitlemek için 0 yazın.")
                            .setMinLength(1)
                            .setMaxLength(2)
                            .setStyle("SHORT")
                    ]
                }),
            ])
        interaction.showModal(modal)
    }
}