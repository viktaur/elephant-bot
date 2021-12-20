const { SlashCommandBuilder } = require('@discordjs/builders');

const funny = [
    "Tell me something your mom doesn't know",
    "The circulatory system is more than 60,000 miles long",
	"When the first movie of Star Wars was firstly displayed on theatres, France still killed people by guillotine.",
	"There are parts of Africa in all four hemispheres",
	"Tom Scott learnt to fly a jetpack before learning how to ride a bike.",
	"German chocolate cake was invented in Texas",
	"Profdev is actually a good module",
	"Adolf Hitler is the most famous painter in world history",
	"Shoes that were specific to left and right were not made until the American Civil War",
	"The Turks called the turkey an American bird",
	"Amazon.com was originally called a cadabra",
]


module.exports = {
	data: new SlashCommandBuilder()
		.setName('funfact')
		.setDescription('Says very serious stuff!'),
	async execute(interaction) {
		var index = Math.floor(Math.random() * funny.length);
		var phraseToDisplay = funny[index];
		await interaction.reply(`${phraseToDisplay}`);
	},
};
