const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
	.setName('sum')
	.setDescription('Adds two integers.')
	.addStringOption(option =>
		option.setName('input')
		.setDescription('Usage: firstInt secondInt')
		.setRequired(true)),
	async execute(interaction) {
		let option = interaction.options.get("input");
		var args = option.value.split(" ");

		var a = parseInt(args[0]);
		var b = parseInt(args[1]);

		var sum = a + b;

		await interaction.reply(`${sum}`);
	},
};
