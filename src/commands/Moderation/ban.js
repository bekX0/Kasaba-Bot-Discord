import { Collection, MessageEmbed } from "discord.js"
export default{
    name:"ban",
    description:"Kullanıcıyı sunucudan yasaklar. Çoklu kullanıma uygundur!",
    usage:"!ban <kullanıcı(lar)> <sebep>",
    permissions:"BAN_MEMBERS",
    execute(message, args, client){
        var users = new Collection()
        const channel= message.guild.channels.cache.get(process.env.modlog)
        users = message.mentions.members
        if(users.size==0) return message.reply("Kullanıcı eksik veya hatalı!")
        const reason = args.slice(users.size+1, args.size)
        users.forEach(user => {
            user.ban(reason)
            const msg = new MessageEmbed()
                .setDescription(`<@${user.id}>`)
                .setColor("RED")
                .setTitle("BAN HAMMER !")
                .setFooter({text: `${message.author.username}`, iconURL:`${message.author.displayAvatarURL()}`})
                .setThumbnail(`${user.displayAvatarURL()}`)
            channel.send({embeds:[msg]})
        });
        message.delete()
    }

}