const { SlashCommandBuilder } = require('@discordjs/builders');

outputMessage = function(firstName, middleName, lastName) {

    var senders = ["Karen Smith", "John Wick", "Harry Potter", "Harrison Ford", "Peter Parker", "Marcus Aurelius", "Your Mom"];

    var i = Math.floor((Math.random() * senders.length));

    return (`⠀
        Dear ${firstName},

        As I have mentioned before, you have been put on isolation because your middle name is ${middleName}.
        I hope this does not disturb your last name, which is ${lastName}.

        Kind regards,
        ${senders[i]}.
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