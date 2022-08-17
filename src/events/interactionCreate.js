import { Collection, MessageActionRow, Modal, TextInputComponent } from "discord.js"
import embed from "../utils/bot/embed.js"
import button_interactions from "../utils/bot/button_interactions.js"
import modal_interaction from "../utils/bot/modal_interaction.js"

export default client =>{
    client.on("interactionCreate", async interaction =>{
        // Oda BUTONU
        if(interaction.isButton()){
            button_interactions(interaction)
        }

        if(interaction.isModalSubmit()){
            modal_interaction(interaction)
        }
    })
}