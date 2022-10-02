import {readdirSync} from 'fs'

export default client =>{
    client.once("ready", () =>{
        console.log("Bot Aktif")
        readdirSync('./commands').forEach(category =>{
            console.log("\x1b[31m",`-${category}`, "\x1b[0m")
            readdirSync(`./commands/${category}`).forEach(command =>{
                console.log("\x1b[32m", `-${command}`, "\x1b[0m")
            })
        })
    })
}