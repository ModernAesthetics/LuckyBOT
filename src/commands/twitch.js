/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "twitch",
	description: "Provides link to Luckys Twitch",
	type: "BOTH",
	slashCommandOptions: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		const embed = new Discord.MessageEmbed();

		const user = message instanceof Discord.CommandInteraction ? message.user : message.author;

		embed
			.setTitle("Lucky on Twitch")
			.setURL("https://www.twitch.tv/luckyluciano_6")
			.setDescription(
				"Watch Lucky on [Twitch](https://www.twitch.tv/luckyluciano_6)"
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
