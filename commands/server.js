const { SlashCommandBuilder } = require('@discordjs/builders');

var nProfDevLectures = 1;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Replies with server info!'),
	async execute(interaction) {
		await interaction.reply(
		`Server name: ${interaction.guild.name}\n
		Created at: ${interaction.guild.createdAt}\n
		Verification level: ${interaction.guild.verificationLevel}\n
		Total members: ${interaction.guild.memberCount}\n
		Total profdev lectures: ${nProfDevLectures}`
		);
        nProfDevLectures++;
	},
};
