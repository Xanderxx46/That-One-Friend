const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

const helpEmbed = new EmbedBuilder()
.setColor('#1ABC9C')
.setTitle('Help Menu')
.setDescription('</ping:1174139441372217417> - Bot replies with "Pong!"');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Shows the help menu'),
	async execute(interaction) {
		await interaction.reply({embeds: [helpEmbed]});
	},
};