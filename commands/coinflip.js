const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('coinflip')
		.setDescription('Flips a coin'),
	async execute(interaction) {
		return interaction.reply(`It's ${Math.random()>.5 ? "heads" : "tails"}!`);
	},
};