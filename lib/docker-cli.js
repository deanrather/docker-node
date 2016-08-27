const shspawn = require('./shspawn');

// get service name from dirname
let cwdParts = process.cwd().split('/');
let serviceName = cwdParts[cwdParts.length-1];

// get bin args from argv
let args = process.argv;
args.shift();
args.shift();
args = args.join(' ');

module.exports = {
	exec: (command) => {
		command = command.replace('$serviceName', serviceName);
		command = command.replace('$args', args);
		console.log(command);
		shspawn(command);
	}
}
