exports.run = (client, message, args) => {
	message.delete();
	client.destroy();
}