/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "firewall",
	description: "FAQ about Firewall Rules",
	type: "BOTH",
	slashCommandOptions: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		message.reply("||\n**Firewall rules are not a guarantee you will find a game**, it only aids in trying to find a game with the hot ip (**does not force the game to not create games within the ip ranges**).\nThese rules will also have to be updated based on whatever the hot ip ends up being so you dont block the new hot ip.\nFor more info check the **#dclone-info-look-here-before-asking channel**.");
	}
});
