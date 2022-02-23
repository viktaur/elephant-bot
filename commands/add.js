const { SlashCommandBuilder } = require('@discordjs/builders');
const Sequelize = require('sequelize');
const Web3 = require("web3")

const sequelize = new Sequelize('database', 'user', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    // SQLite only
    storage: 'database.sqlite',
});

const Tags = sequelize.define('tags', {
    userId: {
        type: Sequelize.STRING,
        // unique: true,
    },
    address: {
        type: Sequelize.STRING
    }
});

function isValid(address) {
    return Web3.utils.isAddress(address);
}

// export { Tags };

module.exports = {
    tagsSync: function () {
        Tags.sync();
    },

    data: new SlashCommandBuilder()
    .setName('add')
    .setDescription('Adds a MetaMask address to a database')
    .addStringOption(option =>
        option.setName('address')
        .setDescription('Valid MetaMask address')
        .setRequired(true)),
    async execute(interaction) {
        // Tags.sync();
        const tagAddress = interaction.options.getString("address");

        try {
            const tag = await Tags.create({
                userId: interaction.user.id,
                address: tagAddress
            })
        
            if (isValid(tag.address)) {
                await interaction.reply(`Successfully registered ${tag.address} for <@${tag.userId}>`);
            } else {
                await interaction.reply("Not a valid address") // Fix this cause the address is still being registered.
            }


        } catch (error) {
            console.log(error);
            if (error.name === 'SequelizeUniqueConstraintError') {
                await interaction.reply('That tag already exists');
            }
            await interaction.reply('Something went wrong with adding the address.');
        }
    }
}