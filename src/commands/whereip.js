/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "whereip",
	description: "Where to find hot ip.",
	type: "BOTH",
	slashCommandOptions: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		message.reply("The hot ip will be posted in **#stream-announcements** discord channel, Luckys twitter, youtube, as well as on twitch **on the day of the event**.");
	}
});
