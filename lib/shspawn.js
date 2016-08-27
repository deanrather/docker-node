// Executes a command, pipes the output, and leaves original colours.
// Thanks to [Andrey Sidorov](http://stackoverflow.com/a/13879531/14966)

const spawn = require('child_process').spawn;
module.exports = function (command) {
   spawn('sh', ['-c', command], { stdio: 'inherit' });
}
