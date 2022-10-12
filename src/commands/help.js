const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const commandData = require('../../data/commands.json');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Provides a list of commands and arguments'),
    async execute(interaction){
        const embed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle("Help")
            .setDescription("Commands: ")

        for(let i = 0; i < commandData.commands.length; i ++){
            embed.addFields({
                name: JSON.stringify(commandData.commands[i][0]), 
                value: JSON.stringify(commandData.commands[i][1]), 
                inline: false
            });
        }
            
        return interaction.reply({embeds: [embed], ephemeral: false});
    },
};
