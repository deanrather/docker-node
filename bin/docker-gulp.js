#!/usr/bin/env node

let cwdParts = process.cwd().split('/');
let serviceName = cwdParts[cwdParts.length-1];
let args = process.argv;
args.shift();
args.shift();
args = args.join(' ');

let command = 'docker-compose exec ' + serviceName + ' node_modules/.bin/gulp ' + args;

var spawn = require('child_process').spawn;

function shspawn(command) {
   spawn('sh', ['-c', command], { stdio: 'inherit' });
}

shspawn(command);
