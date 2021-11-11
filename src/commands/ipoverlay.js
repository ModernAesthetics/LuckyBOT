/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "ipoverlay",
	description: "Provides link to an IP Overlay",
	type: "BOTH",
	slashCommandOptions: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		const embed = new Discord.MessageEmbed();

		const user = message instanceof Discord.CommandInteraction ? message.user : message.author;

		embed
			.setTitle("D2R IP Overlay")
			.setURL("https://github.com/voyzark/D2RIpOverlay")
			.setDescription(
				"Get D2R IP Overlay on [GitHub](https://github.com/voyzark/D2RIpOverlay)\nIf you want a precompiled version get it [here](https://cdn.discordapp.com/attachments/897301233184940104/905939132952502332/Release.zip)."
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
