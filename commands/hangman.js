const { SlashCommandBuilder } = require('discord.js');
const hangman = require('discord-hangman');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hangman')
        .setDescription('Play Hangman!'),
    async execute(interaction){
        await hangman.create(interaction, 'random')
        return interaction.reply("Let's play!");
    },
};
