const { SlashCommandBuilder, EmbedBuilder, Embed, ReactionUserManager } = require('discord.js');
//var request = require('request');
const { default: axios } = require('axios');
let API_KEY = 'd7563998f51177c3f12cb9f3a6e2bfc3';
const latitude = 39.7589;
const longitude = 84.1916;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('weather')
        .setDescription('Daily Weather'),
    async execute(interaction) {
        const data = await axios.get(`http://api.openweathermap.org/data/2.5/weather?`
            + `lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=imperial`).then(resolve => resolve.data);
        const fString =
` 
\`\`\`
Weather: ${JSON.stringify(data.weather)}
Temperature: ${JSON.stringify(data.main.temp)}
Feels like: ${JSON.stringify(data.main.feels_like)}
Humidity: ${JSON.stringify(data.main.humidity)}
Wind: ${JSON.stringify(data.wind.speed)} m/s ${JSON.stringify(data.wind.deg)}°
\`\`\`
`
        return interaction.reply({ content: `${fString}`, ephemeral: false });;
    },
};







