const { SlashCommandBuilder } = require('@discordjs/builders');

const map1 = new Map();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Replies with user info!'),
	async execute(interaction) {
		if (map1.get(interaction.user.tag) == null) {
			map1.set(interaction.user.tag, 300);
		} else {
			map1.set(interaction.user.tag, map1.get(interaction.user.tag) - 20);
		}

		await interaction.reply(`hello ${interaction.user.tag}! Your current social credit score is ${map1.get(interaction.user.tag)}`);
	},
};	
