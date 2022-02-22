const { SlashCommandBuilder } = require('@discordjs/builders');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'user', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    // SQLite only
    storage: 'database.sqlite',
});

const Tags = sequelize.define('tags', {
    username: {
        type: Sequelize.STRING,
        // unique: true,
    },
    address: Sequelize.STRING,
});

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
                username: interaction.user.username,
                address: tagAddress
            })

        await interaction.reply(address);

        } catch (error) {
            // if (error.name === 'SequelizeUniqueConstraintError') {
            //     await interaction.reply('That tag already exists');
            // }
            console.log(error);
            await interaction.reply('Something went wrong with adding the address.');
        }
    }
}