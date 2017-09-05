exports.run = (client, message, args) => {
	const fs = require("fs");

	let tags = JSON.parse(fs.readFileSync("./lib/tags.json", "utf8"));

	if(!tags[args[0]]) {
		console.log("[ERR] Tag " + args[0] + " not found!");
		return;
	}

	message.channel.send(tags[args[0]]);
	message.delete();
}