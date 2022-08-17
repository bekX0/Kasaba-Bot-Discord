import { MessageActionRow, MessageButton } from "discord.js"
export default{
    name:"oda",
    description:"",
    usage:"",
    permissions:"ADMINISTATOR",
    execute(message, args){
        const channel = message.channel
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setEmoji("🛂")
                    .setLabel("Oda Açmak İçin Tıkla")
                    .setStyle("SUCCESS")
                    .setCustomId("oda"),
                new MessageButton()
                    .setEmoji("🔢")
                    .setLabel("Oda Limiti Değiştir")
                    .setStyle("PRIMARY")
                    .setCustomId("oda_limit")
            )
            channel.send({content:"https://cdn.discordapp.com/attachments/308536090380468224/996542516428025946/Ozel_oda.png", components:[row]})
        
    }

}