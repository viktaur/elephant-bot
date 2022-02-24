const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('meta')
    .setDescription('Returns the input')
    .addStringOption(option =>
        option.setName('input')
        .setDescription('Please write an input')
        .setRequired(true)),
    async execute(interaction) {
        let option = interaction.options.get("input");
        // await interaction.reply(option.value);
        var word = "";
        for (var i = 0; i<eval(option.value); i++) {
            word = word.concat("meta");
        }
        word = word.concat("model");
        await interaction.reply(`${word}`);
    }
}