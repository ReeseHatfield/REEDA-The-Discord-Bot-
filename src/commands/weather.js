const { SlashCommandBuilder } = require('discord.js');
const { default: axios } = require('axios');
const { API_KEY } = require('../config.json');

if(!API_KEY){
    console.log(`Missing API_KEY`);
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('weather')
        .setDescription('Daily Weather')
        .addIntegerOption(option =>
            option.setName('zip')
                .setDescription('Enter Zip Code: ')
                .setRequired(true)),
    async execute(interaction) {
        const data = await axios.get(`http://api.openweathermap.org/data/2.5/weather?`
            + `zip=${interaction.options.getInteger('zip')},us&appid=${API_KEY}&units=imperial`).then(resolve => resolve.data);
        let fString =
            ` 
\`\`\`
╔══════════════╦════════════╗
║ Weather:     ║ ${JSON.stringify(data.weather[0].main).replace("\"","").replace("\"","")}      ║
╠══════════════╬════════════╣
║ Temperature: ║ ${JSON.stringify(data.main.temp)} °F   ║
╠══════════════╬════════════╣
║ Feels like:  ║ ${JSON.stringify(data.main.feels_like)} °F   ║
╠══════════════╬════════════╣
║ Humdity:     ║ ${JSON.stringify(data.main.humidity)} g/m³    ║
╠══════════════╬════════════╣
║ Wind:        ║ ${JSON.stringify(data.wind.speed)} m/s   ║
╚══════════════╩════════════╝
\`\`\`
`;
        return interaction.reply({ content: `${fString}`, ephemeral: false });;
    },
};

/*
╔══════════════╦════════╗
║ Weather:     ║ Clear  ║
╠══════════════╬════════╣
║ Temperature: ║ 68.43a ║
╠══════════════╬════════╣
║ Feels like:  ║ 453    ║
╠══════════════╬════════╣
║ Humdity:     ║ 345435 ║
╚══════════════╩════════╝

*/