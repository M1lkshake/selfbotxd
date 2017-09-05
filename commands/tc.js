exports.run = (client, message, args) => {
	const fs = require("fs");

	let tags = JSON.parse(fs.readFileSync("./lib/tags.json", "utf8"));

	var tagadd = args.slice(0).join(' ');
	var cmd = args[0];
	tags[cmd] = tagadd;
	console.log("[Tags] Tag " + cmd + " added to the database.");
	message.delete();

	fs.writeFile("./lib/tags.json", JSON.stringify(tags), err => {
		if (err) console.error(err)
	});
}