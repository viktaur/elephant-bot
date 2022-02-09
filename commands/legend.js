const { SlashCommandBuilder } = require('@discordjs/builders');
const { Interaction } = require('discord.js');
const { execute } = require('./email');

let months = {
    1: "Amazing",
    2: "Awesome",
    3: "Incredible",
    4: "Fantastic",
    5: "Miraculous",
    6: "Stunning",
    7: "Scary",
    8: "Imposing",
    9: "Dodgy",
    10: "Fabulous",
    11: "Terrific",
    12: "Creepy"
}

let days = {
    1: "Hunter",
    2: "Psychopath",
    3: "Mercenary",
    4: "Hacker",
    5: "Cottager",
    6: "Vigilant",
    7: "Communist",
    8: "Physicist",
    9: "Chemist",
    10: "Banger",
    11: "Agent",
    12: "Soldier",
    13: "Guardian",
    14: "Warrior",
    15: "Kid",
    16: "Lecturer",
    17: "Minister",
    18: "Miner",
    19: "Computer Scientist",
    20: "Redditor",
    21: "Owner",
    22: "Farmer",
    23: "Fascist",
    24: "Guardian",
    25: "Professor",
    26: "Albanian",
    27: "Discord Mod",
    28: "Mexican",
    29: "Singer",
    30: "Actor",
    31: "Wizard"
}

function legendise(name, mm, dd) {
    // var monthword;
    // var dayword;

    // if (months[mm] == "undefined" || days[dd] == "undefined") {
    //     monthword = months[1];
    //     dayword = days[1];
    // } else {
    //     monthword = months[mm];
    //     dayword = days[dd];
    // }

    return (name + ", the " + months[mm] + " " + days[dd]);
}

module.exports = {
    data: new SlashCommandBuilder()
    .setName('legend')
    .setDescription('Give it your name and your date of birth and it will make you a legend')
    .addStringOption(option =>
        option.setName('input')
        .setDescription('Usage: name MM DD')
        .setRequired(true)),        
    async execute(interaction) {
        let option = interaction.options.get("input");
        var args = option.value.split(" ");

        var name = args[0];
        // First letter always uppercase
        name = name.split("")
        name[0] = name[0].toUpperCase();
        name = name.join("");

        var mm = parseInt(args[1]);
        var dd = parseInt(args[2]);

        await interaction.reply(legendise(name, mm, dd));
    }
}