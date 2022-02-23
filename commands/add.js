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
            if (isValid(tagAddress)) {
                // sequelize.query(`UPDATE tags SET address=${tagAddress} WHERE userId=${interaction.user.id}`);
                const affectedRows = await Tags.update({ address: tagAddress}, { where: { userId: interaction.user.id }});

                if (affectedRows == 0) {
                    const tag = await Tags.create({
                        userId: interaction.user.id,
                        address: tagAddress
                    });
                    await interaction.reply(`Successfully registered the address **${tag.address}** for <@${tag.userId}>`);
                } else {
                    await interaction.reply(`Successfully updated the address **${tagAddress}** for <@${interaction.user.id}>`)
                }
            } else {
                await interaction.reply("Not a valid address, please try again") // Fix this cause the address is still being registered.
            }

        } catch (error) {
            console.log(error);
            if (error.name === 'SequelizeUniqueConstraintError') {
                await interaction.reply('That tag already exists');
            }
            await interaction.reply('Something went wrong, please report this incident');
        }
    }
}