/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "faq",
	description: "FAQ/Diablo Clone guide",
	type: "BOTH",
	slashCommandOptions: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		const embed = new Discord.MessageEmbed();

		const user = message instanceof Discord.CommandInteraction ? message.user : message.author;

		embed
			.setTitle("FAQ/Diablo Clone guide")
			.setURL("https://docs.google.com/document/d/1U3hlIIKbPYeD_4ySPc1Bzw1vFLqFNJOhThHg4MLMxQc/edit")
			.setDescription(
				"Click this [link](https://docs.google.com/document/d/1U3hlIIKbPYeD_4ySPc1Bzw1vFLqFNJOhThHg4MLMxQc/edit) to the FAQ/Diablo Clone guide made by Dank(cougars002) for Lucky's Diablo Clone events!"
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
