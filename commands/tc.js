exports.run = (client, message, args) => {
	const fs = require("fs");

	let tags = JSON.parse(fs.readFileSync("./lib/tags.json", "utf8"));

	var testing = args;
	var cmd = testing.shift();
	var joined = testing.join(' ');
	
	tags[cmd] = joined;
	console.log("[Tags] Tag " + cmd + " added to the database.");
	message.delete();

	fs.writeFile("./lib/tags.json", JSON.stringify(tags), err => {
		if (err) console.error(err)
	});
}