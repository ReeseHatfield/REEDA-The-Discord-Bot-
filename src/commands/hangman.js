const { SlashCommandBuilder } = require('discord.js');
const hangman = require('discord-hangman');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hangman')
        .setDescription('Play Hangman!')
        .addStringOption(option =>
            option.setName('word')
                .setDescription('word')
                .setRequired(false)),
    async execute(interaction){
        if(interaction.options.getString('word')){
            await hangman.create(interaction, 'random', { word: interaction.options.getString('word') });
        }
        else{
            await hangman.create(interaction, 'random');
        }
    },
};
