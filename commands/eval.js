exports.run = (client, message, args) {
	var a = args.join(' ');
	eval(a);
}