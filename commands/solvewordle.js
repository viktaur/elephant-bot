const { SlashCommandBuilder } = require('@discordjs/builders');
const { execute } = require('./echo');

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }  

module.exports = {
    data: new SlashCommandBuilder()
    .setName('solvewordle')
    .setDescription('Solves a wordle game by inputing random words'),
    async execute(interaction) {
        await interaction.reply(`!start`);
        // await sleep(1000);
        // await interaction.reply(`crane`);
    }
}