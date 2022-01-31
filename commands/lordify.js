const { SlashCommandBuilder } = require('@discordjs/builders');
const { execute } = require('./echo');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('lordify')
    .setDescription('Lordifies you')
    .addStringOption(option =>
        option.setName('input')
        .setDescription('Usage: name land')
        .setRequired(true)),
    async execute(interaction) {
        let option = interaction.options.get("input");
        var args = option.value.split(" ");

        var name = args[0];
        var land = args[1];

        await interaction.reply(`Lord ${name} of ${land}`);
    }
}