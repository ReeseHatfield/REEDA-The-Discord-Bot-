const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const { token, guildId, testingChannelId } = require('./config.json');

const cron = require('cron');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.login(token);

client.once("ready", () => {
	console.log(`Online as ${client.user.tag}`);
	  
	let scheduledMessage = new cron.CronJob(' 0 9 0 0 1,3,5', () => {

	  	const guild = client.guilds.cache.get(guildId);
		const channel = guild.channels.cache.get(testingChannelId);
		channel.send('PIZZA DAY!');
		
	  });
		  
	  // When you want to start it, use:
	  scheduledMessage.start()
  });