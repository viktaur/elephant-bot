// CAN ONLY BE EXECUTED IN ZEPLER

const { SlashCommandBuilder } = require('@discordjs/builders');

var exec = require('child_process').exec;
function execute(command, callback){
    exec(command, function(error, stdout, stderr){ callback(stdout); });
};

const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

function getZeplerStatus () {
    var rawOutput = await execute('arp -a');
    // rawOutput: rawOutput.stdout.trim() // I'll leave it commented since I don't know what this does

    var outputArray = rawOutput.split("\n");
    
    if (outputArray.length > 50) {
       return ("The number of computers that are on right now is", outputArray.length, "\nZEPLER IS CROWDED");
    } else {
       return ("The number of computers that are on right now is", outputArray.length, "\nZEPLER IS NOT CROWDED");
    }
};

module.exports = {
    data: new SlashCommandBuilder
        .setName("zepler")
        .setDescription("Returns the number of computers logged in at Zepler and whether it's crowded or not"),
    async execute(interaction) {
        await interaction.reply(getZeplerStatus());
    }
}

