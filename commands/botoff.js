exports.run = (user, message, args) => {
	message.delete();
	user.destroy();
}