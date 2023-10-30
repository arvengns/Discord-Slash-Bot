const { Client, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "ping",
  description: "You will learn the ping values of the bot",
  type: 1,
  options: [],

  run: async(client, interaction) => {

    const { user, guildId, channel } = interaction;


    interaction.reply({ embeds: [ new EmbedBuilder().setDescription(`Pong! ***${client.ws.ping}ms***`) ], ephemeral: true })

  }

};
