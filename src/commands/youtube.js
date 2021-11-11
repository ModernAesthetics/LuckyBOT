/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "youtube",
	description: "Provides link to Luckys Youtube",
	type: "BOTH",
	slashCommandOptions: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		const embed = new Discord.MessageEmbed();

		const user = message instanceof Discord.CommandInteraction ? message.user : message.author;

		embed
			.setTitle("Lucky on Youtube")
			.setURL("https://www.youtube.com/channel/UCpfC05a6_OvIry-St-clmXw")
			.setDescription(
				"Check out Lucky on [YouTube](https://www.youtube.com/channel/UCpfC05a6_OvIry-St-clmXw)"
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
