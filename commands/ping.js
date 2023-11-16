
const { SlashCommandBuilder } = require('discord.js');

const pingEmbed = {
	"title": 'Ping',
	"description": 'Pong!'
}
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply({embeds: [pingEmbed]});
	},
};

