const { SlashCommandBuilder } = require('@discordjs/builders');

outputMessage = function(firstName, middleName, lastName) {
    var senders = ["Karen Smith", "John Wick"];

    var a = Math.random();
    var randInt;

    if (a < 0.5) {
        randInt = 0;
    } else {
        randInt = 1;
    }

    return (`⠀
        Dear ${firstName},

        As I have mentioned before, you have been put on isolation because your middle name is ${middleName}.
        I hope this does not disturb your last name, which is ${lastName}.

        Kind regards,
        ${senders[randInt]}.
    `);
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('email')
        .setDescription('Usage: (firstName middleName lastName)')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The input to echo back')
                .setRequired(true)),
    async execute(interaction) {
        let option = interaction.options.get("input");
        var args = option.value.split(" ");

        var firstName = args[0];
        var middleName = args[1];
        var lastName = args[2];

        await interaction.reply(outputMessage(firstName, middleName, lastName));
    }
}