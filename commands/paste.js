exports.run = (client, message, args) => {
	const fs = require("fs");
	const log = require("../lib/plugins/logging.js");

	let pastes = JSON.parse(fs.readFileSync("./config/pastes.json", "utf8"));

	if(!pastes[args[0]]) {
		log.err(`Paste ${args[0]} not found!`);
		return;
	} else {
		message.channel.send(pastes[args[0]]);
	}
	message.delete();
}