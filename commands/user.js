const { SlashCommandBuilder } = require('@discordjs/builders');

var dignity = 0;
var socialCredit = 800;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Replies with user info!'),
	async execute(interaction) {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}\nYour dignity: ${dignity}\nYour social credit score: ${socialCredit}\nSince you ask so much your social credit will be reduced *(-20 social credit score)*.`);
        socialCredit -= 20;
	},
};
