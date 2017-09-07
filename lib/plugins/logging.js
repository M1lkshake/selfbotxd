const moment = require('moment');
const chalk = require('chalk');

function logging(bg, title, text) {
	console.log(`${chalk.cyan(moment().format('H:mm:ss'))} ${chalk[bg].bold(` ${title} `)} ${text}`);
}

module.exports = {
	log (text, title = 'Log', bg = 'bgCyan') { logging(bg, title, text) },
	warn (text) { logging(bg = 'bgYellow', 'Warning', text) },
	err (text) { logging(bg = 'bgRed', 'Error', text) }
}