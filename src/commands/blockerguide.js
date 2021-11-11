/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "blockerguide",
	description: "Provides link to Luckys YouTube blocker Guide",
	type: "BOTH",
	slashCommandOptions: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		const embed = new Discord.MessageEmbed();

		const user = message instanceof Discord.CommandInteraction ? message.user : message.author;

		embed
			.setTitle("Luckys YouTube blocker Guide")
			.setURL("https://youtu.be/j8JNy1iD4YU")
			.setDescription(
				"Watch Luckys blocker guide on [YouTube](https://youtu.be/j8JNy1iD4YU)"
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
