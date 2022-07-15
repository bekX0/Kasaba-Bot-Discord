export default client =>{
    client.on("voiceStateUpdate", async (oldState, newState) =>{
        //Voice Manager Kanal Silme
        //Kullanıcı Çıkarsa
        const ownedChannel = client.VoiceManager.get(newState.id)
        if((ownedChannel && ownedChannel == oldState.channelId && (!newState || newState !== ownedChannel))){
            client.VoiceManager.set(newState.id, null)
            if(oldState.channel.members.size>0){
                await oldState.channel.fetch()
                const newOwner = oldState.channel.members.map(user => user.user).shift()
                client.VoiceManager.set(oldState.id, null)
                client.VoiceManager.set(newOwner.id, oldState.channelId)
                await oldState.channel.send(`<@${newOwner.id}> Yeni Admin Herkes Ayağını Denk Alsın`)
                
            }else{
                await oldState.channel.delete().catch( () =>{})
            }
        }
        //
    })
}