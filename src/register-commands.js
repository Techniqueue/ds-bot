require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
    {
        name: 'hey',
        description: 'Replies with hey'
    },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log("registriruyu nahui")
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        )

        console.log("zaregal, proveryai")
    } catch (error) {
        console.log(`There is an error => ${error}`)
    }
})();

