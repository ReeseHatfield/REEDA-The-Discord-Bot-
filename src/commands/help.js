const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const commandData = require('../../data/commands.json');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Provides a list of commands and arguments'),
    async execute(interaction){
        const embed = new EmbedBuilder()
            .setColor(0xe652fa)
            .setTitle("Help")
            .setDescription("Commands are as follows. Commands prefixed by a ? are optional")

        for(let i = 0; i < commandData.commands.length; i ++){
            embed.addFields({
                name: `\`\`\` ${(JSON.stringify(commandData.commands[i][0])).replace("\"","").replace("\"","")} \`\`\` `, 
                value: "-" + JSON.stringify(commandData.commands[i][1]).replace("\"","").replace("\"","") + "\n", 
                inline: false
            });
        }
            
        return interaction.reply({embeds: [embed], ephemeral: false});
    },
};
