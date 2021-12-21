const { SlashCommandBuilder } = require('@discordjs/builders');

var dignity;
var socialCreditScore;

let userVariables = {dignity, socialCreditScore};

// To access a variable (e.g. dignity)
let myValue = userVariables[dignity];

// To set the value of a variable (e.g. set dignity to 15)
uservariables[dignity] = 15;

const people = new Map();

people.set(Guild)

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Replies with user info!'),
	async execute(interaction) {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}\nYour dignity: ${dignity}\nYour social credit score: ${socialCreditScore}\nSince you ask so much your social credit will be reduced *(-20 social credit score)*.`);
        socialCreditScore -= 20;
	},
};
