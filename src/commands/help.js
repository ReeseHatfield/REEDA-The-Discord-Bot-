const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');
console.log(process.cwd());
const markdown = require('markdown').markdown;


module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Provides a list of commands and arguments'),
    async execute(interaction){
        const helpFile = fs.readFileSync(('./help.md'), (error, data) => {
            if (error) {
                console.error(error);
                return;
            }
        });

        const embed = new EmbedBuilder()
            .setColor(0x0099FF)


        return interaction.reply({content: `${helpFile}`, ephemeral: false});
    },
};
