exports.run = (user, message, args) => {
	var a = args.join(' ');
	eval(a);
}