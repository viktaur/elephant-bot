const { SlashCommandBuilder } = require('@discordjs/builders');

var firstName = args[1];
var middleName = args[2];
var lastName = args[3];
var senders = ["Karen Smith", "John Wick"];

var a = Math.random();
var randInt;

if (a < 0.5) {
    randInt = 0;
} else {
    randInt = 1;
}

var outputMessage = `
    Dear ${firstName},

    As I have mentioned before, you have been put on isolation because your middle name is ${middleName}.
    I hope this does not disturb your last name, which is ${lastName}.

    Kind regards,
    ${senders[randInt]}.
`;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('email')
        .setDescription('Usage: (firstName middleName lastname)'),
    async execute(interaction) {
        await interaction.reply(outputMessage);
    }
}