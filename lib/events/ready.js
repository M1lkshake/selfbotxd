exports.run = (client) => {
	console.log(`Ready for ${client.guilds.size} servers, ${client.channels.size} channels, and ${client.users.size} users.`);
}