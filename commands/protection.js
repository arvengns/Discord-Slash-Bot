const { Client, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "protection",
  description: "Server Protection Status",
  type: 1,
  options: [],

  run: async(client, interaction) => {

    const { user, guildId, channel } = interaction;


    interaction.reply(`# I protect the server for you! #`)}

  }

;
