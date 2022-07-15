export default client =>{
    client.once("ready", () =>{
        console.log("Bot Aktif")
        console.log(client.commands.map(m => m.name))
    })
}