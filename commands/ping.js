
const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');


const pingEmbed = new EmbedBuilder()
.setColor('#0099ff')
.setTitle('Clearly real ping')
.setDescription('Pong!');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply({embeds: [pingEmbed]});
	},
};
