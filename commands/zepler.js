// CAN ONLY BE EXECUTED IN ZEPLER

const { SlashCommandBuilder } = require('@discordjs/builders');

const execute = require('child_process').exec;

let rawOutput;

cback = (err, stdout, stderror) => {
    rawOutput = stdout;
}

execute('arp -a', cback);

function getZeplerStatus () {

    var outputArray = rawOutput.split("\n");
    
    if ((outputArray.length - 1) > 20) {
       return ("The number of computers that are on right now is " + (outputArray.length - 1) + "\nZEPLER IS CROWDED");
    } else {
       return ("The number of computers that are on right now is " + (outputArray.length - 1) + "\nZEPLER IS NOT CROWDED");
    }
};

module.exports = {
    data: new SlashCommandBuilder()
        .setName("zepler")
        .setDescription("Returns the number of computers logged in at Zepler and whether it's crowded or not"),
    async execute(interaction) {
        await interaction.reply(getZeplerStatus());
    }
}

