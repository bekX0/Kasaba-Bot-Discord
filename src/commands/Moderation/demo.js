import {Collection, MessageEmbed } from "discord.js"
export default{
    name:"demo",
    description:"",
    usage:"",
    permissions:"ADMINISTRATOR",
    async execute(message){
        await message.guild.members.fetch()
        const presences = new Collection(message.guild.presences.cache)
        const embed = new MessageEmbed()
            .setTitle("Sunucu Anlık İstatistik Durumu")
            .addField(`🟢| ${presences.filter(m => m.status === 'online').size}`, "Çevrimiçi", true)
            .addField(`🟠| ${presences.filter(m => m.status === 'idle').size}`, "Boşta" , false)
            .addField(`⛔| ${presences.filter(m => m.status === 'dnd').size}`, "Rahatsız Etmeyin",  false)
            .setTimestamp(Date.now())
            .setColor("WHITE")
        message.reply({embeds:[embed]})
        
    }

}