import { MessageEmbed } from "discord.js"

export default(description, title=null, color="#5f7fcf")=>{
    if (color=="RED") color="#e64c4c"
    else if (color=="GREEN") color="67eb74"
    else if(color=="INFO") color="dbd160"
    const response = new MessageEmbed()
        .setDescription(description)
        .setTitle(title)
        .setColor(color)

    return response
}