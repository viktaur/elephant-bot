const { SlashCommandBuilder } = require('@discordjs/builders');
// const { fs } = require('fx');

// try {  
//     var data = fs.readFileSync('wordle.txt', 'utf8');
// } catch(e) {
//     console.log('Error:', e.stack);
// }

// var wordsarray = data.split("\n");

// function getLetter(word, a) {
//     var arrayOfLetters = word.split("");
//     return arrayOfLetters[a];
// }

// function checkGuess(userguess, chosen) {
//     // We create an array of square emojis
//     var squares = [];

//     // We split the letters with a function and we compare them
//     for (var i = 0; i < 5; i++) {
//         for (var j = 0; j < 5; j++) {
//             if (getLetter(userguess, j) === getLetter(chosen, i)) {
//                 if (i == j) {
//                     squares.push(":green_square:");
//                     return 'G'; // green
//                 }
//                 squares.push(":yellow_square:");
//                 return 'Y'; // yellow
//             }
//             squares.push(":black_large_square:")
//             return 'B' // black
//         }
//     }
// }

module.exports = {
    data: new SlashCommandBuilder()
    .setName('wordle')
    .setDescription('Starts a wordle game')
    .addStringOption(option =>
        option.setName('input')
        .setDescription('Please enter a word')
        .setRequired(true)),
    async execute(interaction) {
        await interaction.reply("WIP");

        // // We choose a random word from the list. This is the one the user needs to guess
        // var chosenOne = Math.floor(Math.random() * wordsarray.length);
        
        // // The user has 6 guesses
        // for (var n = 0; n < 6; n++) {

        //     // We receive the word from the user
        //     let option = interaction.options.get("input");

        //     // We check whether the guess is right
        //     checkGuess(option.value, chosenOne);
        // }

        // await interaction.reply(`${option.value}`);
    }
}