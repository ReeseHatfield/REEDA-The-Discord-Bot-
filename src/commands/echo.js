const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Bot will echo string argument')
        .addStringOption(option =>
            option.setName('echo')
                .setDescription('The input to echo back')
                .setRequired(true)),
    async execute(interaction){
        return interaction.reply(interaction.options.getString('echo'));
    },
};
