import { MessageEmbed } from "discord.js"
import "dotenv/config"
import * as database from "../utils/database/mongoose_methods.js"

export default client =>{
    client.on('guildMemberRemove', async member =>{
        const logchannel = member.guild.channels.cache.get(`${process.env.iolog}`)
        const logembed = new MessageEmbed()
            .setTitle("Biri sunucudan çıktı!")
            .addField("ID", `${member.id}`, true)
            .addField("İsim", `${member.user.tag}`, true)
            .addField("Etiket", `<@${member.id}>`)
            .setFooter({text:`${client.user.username}`, iconURL:`${client.user.displayAvatarURL()}`})
            .setTimestamp(Date.now())
            try {
                database.deleteOne(member.id)
                logchannel.send({embeds:[logembed]})
                
            } catch (error) {
                console.log(error)
            }
    })
    
}