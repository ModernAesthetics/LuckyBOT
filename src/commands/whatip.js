/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "whatip",
	description: "Shows hot ip for dclone.",
	type: "BOTH",
	slashCommandOptions: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		message.reply("**Hot IP**: *not announced yet*");
	}
});
