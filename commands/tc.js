exports.run = (client, message, args) => {
	const fs = require("fs");
	const chalk = require("chalk");
	const log = require("../lib/plugins/logging.js");

	let tags = JSON.parse(fs.readFileSync("./lib/tags.json", "utf8"));

	var testing = args;
	var cmd = testing.shift();
	var joined = testing.join(' ');
	tags[cmd] = joined;

	log.log(`Tag ${cmd} added to the database.`, chalk.bgBlue([Tags]);
	message.delete();

	fs.writeFile("./lib/tags.json", JSON.stringify(tags), err => {
		if (err) log.err(err);
	});
}