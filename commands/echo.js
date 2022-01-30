const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('echo')
    .setDescription('Returns the input')
    .addStringOption(option =>
        option.setName('input')
        .setDescription('Please write an input')
        .setRequired(true)),
    async execute(interaction) {
        let option = interaction.options.get("input");
        await interaction.reply(option.value);
    }
}