import { MessageEmbed } from "discord.js"
import "dotenv/config"

export default client =>{
    client.on('guildMemberAdd', member =>{
        const logchannel = member.guild.channels.cache.get(`${process.env.iolog}`)
        const kayitch = member.guild.channels.cache.get("992538919084236880")
        const embed = new MessageEmbed()
            .setTitle("Hoşgeldin Yabancı!")
            .setDescription("Kayıt olmak için lütfen kayıt kanalına gir ve !kayıt komudunu yaz! Bu sayede aktif yetkililer seni kolayca fark edebilirler.")
            .setFooter({text:`${client.user.username}`, iconURL:`${client.user.displayAvatarURL()}`})
            .setTimestamp(Date.now())
        const logembed = new MessageEmbed()
            .setTitle("Aramıza Biri Daha Katıldı!")
            .addField("ID", `${member.id}`, true)
            .addField("İsim", `${member.user.tag}`, true)
            .addField("Etiket", `<@${member.id}>`)
            .setFooter({text:`${client.user.username}`, iconURL:`${client.user.displayAvatarURL()}`})
            .setTimestamp(Date.now())
        member.send({embeds:[embed]})
        logchannel.send({embeds:[logembed]})
        kayitch.send(`<@${member.id}>`).then(msg => {
            setTimeout(() => msg.delete(), 500)
          })
    })
}