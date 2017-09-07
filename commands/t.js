exports.run = (client, message, args) => {
	const fs = require("fs");
	const log = require("../lib/plugins/logging.js");

	let tags = JSON.parse(fs.readFileSync("./lib/tags.json", "utf8"));

	if(!tags[args[0]]) {
		log.err(`Tag ${args[0]} not found!`);
		return;
	} else {
		message.channel.send(tags[args[0]]);
	}
	message.delete();
}