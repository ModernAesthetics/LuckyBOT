/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "d2rtools",
	description: "Provides link to D2RTools",
	type: "BOTH",
	slashCommandOptions: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		const embed = new Discord.MessageEmbed();

		const user = message instanceof Discord.CommandInteraction ? message.user : message.author;

		embed
			.setTitle("D2R Tools")
			.setURL("https://github.com/VideoGameRoulette/D2RTools")
			.setDescription(
				"Get D2R Tools on [GitHub](https://github.com/VideoGameRoulette/D2RTools)\nIf you want a precompiled version get it [here](https://github.com/VideoGameRoulette/D2RTools/releases/download/1.0.0.9/D2RTools-v1.0.0.9.zip).\nYou will need TCPView as well for this to work."
			)
			.setColor("BLURPLE")
			.setTimestamp()
			.addFields(
				{
					name: "Lucky Bot Version",
					value: "1.0.0",
					inline: true
				},
			);

		message.reply({ embeds: [embed] });
	}
});
