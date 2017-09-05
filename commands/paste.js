exports.run = (client, message, args) => {
	const fs = require("fs");

	let pastes = JSON.parse(fs.readFileSync("./config/pastes.json", "utf8"));

	if(!pastes[args[0]]) {
		console.log("[ERR] paste not found")
	}

	message.channel.send(pastes[args[0]]);
	messsage.delete();
}