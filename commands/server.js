const { SlashCommandBuilder } = require('@discordjs/builders');

var nProfDevLectures = 1;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Replies with server info!'),
	async execute(interaction) {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}\nTotal profdev lectures: ${nProfDevLectures}`);
        nProfDevLectures++;
	},
};
