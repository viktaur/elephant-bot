const { SlashCommandBuilder } = require('@discordjs/builders');

// Change these two later
var a = 1; 
var b = 2;

var sum = a + b;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sum')
		.setDescription('Adds two integers.'),
	async execute(interaction) {
		await interaction.reply(`${sum}`);
	},
};
