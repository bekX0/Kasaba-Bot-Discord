import { Client, Collection } from "discord.js";
import "dotenv/config";
import { readdirSync } from "fs";
import mongoose, { mongo } from "mongoose"

const client = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_PRESENCES", "GUILD_VOICE_STATES"],
  presence: { activities: [{ name: "KASABA HALKINI", type: "WATCHING" }] },
});
//Utils
client.embed= await import("./utils/bot/embed.js").then(m=>m.default)
client.emoji = (emojiName) => {return client.guilds.cache.get(process.env.OWNER_GUILD_ID).emojis.cache.find(e => e.name == emojiName)}

//Database Initialize
await mongoose.connect("mongodb://localhost:27017/Kasaba_db?retryWrites=true&w=majority").then( () =>{
  console.log("Veritabanı bağlantısı", "\x1b[32m" ,"  BAŞARILI.", "\x1b[0m")
})


// Voice Manager
client.VoiceManager = new Collection()

//Command Handler
client.commands = new Collection();
readdirSync("./commands").forEach((category) => {
  readdirSync(`./commands/${category}`).forEach(async (command_file) => {
    const command = await import(`./commands/${category}/${command_file}`).then((c) => c.default);
    client.commands.set(command.name, command);
  });
});

//Event Loader
readdirSync("./events").forEach(async (file) => {
  const event = await import(`./events/${file}`).then((m) => m.default);
  event(client);
});

client.login(process.env.token);
